document.writeln(` <div id="gserrors" style="font-family:Verdana;font-size:13px;color:#c00">
</div>
<div>
  <div id='sourcetext' class="split split-horizontal" style="display:none">
  </div>
  <div id='glows'></div>
  <div id='printing' class="split split-horizontal" style="display:none">
  </div>
</div>`);

var gsversion = '3.2'
var printpane = false
var exporting = false // not currently in export mode
var lastprintwidth = null

window.Jupyter_VPython = undefined
if (!navigator.onLine) window.Jupyter_VPython = 'glowscript_data/' // get textures when offline

// TAB at end of line should lengthen the line; implement Ctrl-1 and Ctrl-2

// localCompile is a modification of https://github.com/vpython/glowscript/blob/master/ide/ide.js
function localCompile(header, compReady, errordiv) {
    header.source = 'GlowScript ' + gsversion + ' VPython\n' + header.source
    errordiv.innerHTML = ""
    var compiler_url
    if (header.lang == 'vpython') {
        compiler_url = "glowscript_libraries/RScompiler." + header.version + ".min.js"
    } else compiler_url = "glowscript_libraries/compiler." + header.version + ".min.js"
    window.glowscript_compile = undefined
    $.ajax({
        url: compiler_url,
        dataType: "script",
        cache: true,
        crossDomain: true  // use script tag rather than xhr
    }).fail(function (xhr, err, exc) {
        (xhr)
        alert(err + " getting " + xhr.url + ": " + exc)
    }).done(function () {
        if (!window.glowscript_compile) {
            alert("Failed to load compiler from " + compiler_url)
            return
        }

        var embedScript
        try {
            embedScript = window.glowscript_compile(header.source, {
                lang: header.lang,
                version: header.version.substr(0, 3)
            })
        } catch (err) { // need to decrement 3 -> 2 in Error: Missing right parenthesis, see line 3: b = box(pos=37
            err = err.toString() // gets the error message
            var patt = new RegExp('line(\\s*)([0-9]*):')
            var m = err.match(patt)
            if (m !== null) {
                var colonindex = m.index + 4 + m[1].length + m[2].length
                var n = parseFloat(m[2]) - 1
                err = err.slice(0, m.index) + 'line ' + n + err.slice(colonindex)
            }
            errordiv.innerHTML = "<p>" + err + "</p>"
            return
        }
        compReady(embedScript)
        console.log(buttonNumber)
        buttons = document.getElementsByTagName('button')
        console.log(buttons)
        for (let i = 0; i < buttons.length - buttonNumber; i++) {
            buttons[i].setAttribute('id', 'skip1')
        }
    })
}



function parseVersionHeader(source) {
    var sourceLines = source.split("\n")
    var header = sourceLines[0]
    // Remove a newline or similar character at the end of header:
    if (header.charCodeAt(header.length - 1) < 32)
        header = header.substring(0, header.length - 1)
    var rest = source.substring(header.length + 1)
    var ret = {
        version: null,
        lang: '', // 'vpython' (default) or 'rapydscript' or 'javascript' or a string that is neither (e.g. when editing header)
        source: rest,
        ok: false,
        unpackaged: false,
        isCurrent: false
    }
    header = header.split(" ")
    if (header.length === undefined) return ret
    if (header[0] == ' ') return ret
    var elements = []
    for (var i = 0; i < header.length; i++) { // remove empty strings corresponding to spaces
        if (header[i] != '') elements.push(header[i])
    }
    if (elements.length < 2 || elements.length > 3) return ret
    if (elements[0] != 'GlowScript') return ret
    ret.lang = 'javascript' // the default if no language is specified
    if (elements.length == 3) {
        ret.lang = elements[2].toLowerCase()
        if (!(ret.lang == 'javascript' || ret.lang == 'vpython')) return ret
    }
    var ver = elements[1]
    if (ver != gsversion) alert('The version number, ' + ver + ', should be ' + gsversion)
    var okv = true
    return {
        version: ver,
        lang: ret.lang,
        source: rest,
    }
}


function getHeader(exporting, fileExp) {
    // var text = GSedit.getValue()
    // $.get("./Demos/" + fileExp, function (r) {
    //     text = r;
    // })
    // for (let i = 0; i < text.length; i++) {
    //     if(i==parseInt(fileExp)){ }
    //     var text = text[i];
    // }
    var text = simulation[fileExp]
    // if (fileExp === "1") {
    //     var text = text1
    // }
    // if (fileExp === "2") {
    //     const newline = "\n"
    //     const mass = prompt("Please enter the mass", "m=1").concat(newline);
    //     const spring = prompt("Please enter the spring constant", "k=3").concat(newline);
    //     var text = mass.concat(spring.concat(text2))
    //     console.log(text)

    // }
    // if (fileExp === "3") {
    //     var text = text3



    // }
    // // if (fileExp === "4") {
    // //   var text = text4
    // // }
    // if (fileExp === "4") {
    //     // let radius_text = '2.02e7';
    //     radius_text = prompt('enter radius')
    //     var text = displayText(radius_text);
    // }
    // if (fileExp === "6") {
    //     var text = text6
    // }


    var end = text.indexOf('\n')
    var i = text.slice(0, end).indexOf("GlowScript") // Look for "GlowScipt" in first line
    var j = text.slice(0, end).indexOf("vpython")    // Look for "vpython" in first line
    if (i < 0 && j) text = "GlowScript " + gsversion + " VPython" + "\n" + text
    var header = parseVersionHeader(text)
    printpane = false
    if (header.source.search(/print\s*\(/) >= 0) { // if the program uses print() or GSprint(), expand 3rd pane
        printpane = true
        if (!exporting) {
            var end = header.source.indexOf('\n')
            var insert
            var w = (lastprintwidth === null) ? 300 : 0.01 * lastprintwidth * window.innerWidth
            if (header.lang == 'vpython')
                insert = "print_options(place=$('#printing'),  width=" + w + ", height=window.innerHeight, clear=True)\n"
            else insert = "print_options({place:$('#printing'), width:" + w + ", height:window.innerHeight, clear:true})\n"
            header.source = insert + header.source
        }
    }
    // Look for mention of MathJax in program and attempt to get it (need internet access; files too big to include in package)
    if (header.source.indexOf('MathJax') >= 0) {
        alert('Cannot currently use MathJax in GlowScript Offline.')
    }
    return header


}


var gsErrordiv
var savecode = null

function runCode(fileExp) {
    var header = getHeader(false, fileExp)
    // splitAdjust()
    gsErrordiv = $("#gserrors")[0]
    localCompile(header, ready, gsErrordiv, false)

}


async function runprog(prog) {
    try {
        eval(prog)
        await __main__()
    } catch (err) {
        reportScriptError(prog, err)
    }

}


function ready(program) {
    var w = $("#glows")
    w[0].innerHTML = "" // Comment this and the next if get a solution for too many WebGL contexts
    w[0].innerHTML = '<div id="glowscript" class="glowscript"></div>'
    window.__context = { glowscript_container: $("#glowscript") }
    runprog(program);
}

function exportCode() {
    if (savecode !== null) { // Restore operation
        exporting = false
        GSedit.setValue(savecode)
        savecode = null
        $("#export").html('Export')

    } else { // Export operation
        exporting = true
        var header = getHeader(true, 'python')
        gsErrordiv = $("#gserrors")[0]
        localCompile(header, showcode, gsErrordiv)
    }
}

function showcode(sc) {
    // In creating the string embedHTML it was necessary to break 'script' into 'scr'+'ipt' to avoid problems parsing GlowScript.html
    var exporturl = "https://s3.amazonaws.com/glowscript/"
    var verdir = '2.1'
    var divid = "glowscript"
    var embedHTML = (
        '<div id="' + divid + '" class="glowscript">\n' +
        '<meta http-equiv="Content-Type" content="text/html; charset=utf-8">' +
        '<link type="text/css" href="' + exporturl + 'css/redmond/' + verdir + '/jquery-ui.custom.css" rel="stylesheet" />\n' +
        '<link type="text/css" href="' + exporturl + 'css/ide.css" rel="stylesheet" />\n' +
        '<scr' + 'ipt type="text/javascript" src="' + exporturl + 'lib/jquery/' + verdir + '/jquery.min.js"></scr' + 'ipt>\n' +
        '<scr' + 'ipt type="text/javascript" src="' + exporturl + 'lib/jquery/' + verdir + '/jquery-ui.custom.min.js"></scr' + 'ipt>\n' +
        '<scr' + 'ipt type="text/javascript" src="' + exporturl + 'package/glow.' + gsversion + '.min.js"></scr' + 'ipt >\n' +
        '<scr' + 'ipt type="text/javascript" src="' + exporturl + 'package/RSrun.' + gsversion + '.min.js"></scr' + 'ipt>\n' +
        '<scr' + 'ipt type="text/javascript"><!--//--><![CDATA[//><!--\n' +
        ';(function() {' +
        sc +
        '\n;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()\n' +
        '\n//--><!]]></scr' + 'ipt>' +
        '\n</div>')
    savecode = GSedit.getValue()
    GSedit.setValue(embedHTML)
    startcursor = 0
    endcursor = embedHTML.length
    setTimeout(resetCursor, 30) // experimentally, can't correctly update cursor position here
    $("#export").html('Restore')
}

var startcursor
var endcursor
var resetCursor = function () {
    GSedit.editarea[0].focus()
    GSedit.editarea[0].setSelectionRange(startcursor, endcursor)
}

function gsErrorHandler(err) {
    gsErrordiv.innerHTML = "<p>" + err + "</p>"
}

function readSingleFile(evt) {
    exporting = false
    var ok = true
    if (GSedit.changed()) {
        var s = "To continue without saving, click OK.\nTo save, click Cancel, then click Save."
        if (confirm(s)) ok = true
        else ok = false
    }
    if (ok) {
        savecode = null
        $("#export").html('Export')
        var f, reader
        f = evt.target.files[0]
        if (f) {
            reader = new FileReader()
            reader.onload = function (e) {
                var content = e.target.result
                GSedit.setValue(content)
            }
            reader.readAsText(f)
        }
    }
}
document.getElementById('read_local_file').addEventListener('change', readSingleFile, false)


// Splits library: https://github.com/nathancahill/Split.js
var lastwindowwidth = window.innerWidth
var splits = Split(['#sourcetext', '#glows', "#printing"], { sizes: [50, 50, 0], onDrag: splitdrag })
// splits.getSizes() returns current percentage widths; splits.setSizes([w1,w2]) resets them
var source = ''
GSedit.init("#sourcetext", source, 0.5 * lastwindowwidth, false) // not readonly

function splitdrag() {
    var s = splits.getSizes() // returns [width1, width2, width3]
    lastprintwidth = splits.getSizes()[2]
    GSedit.setwidth(0.01 * s[0] * window.innerWidth)
}

function splitAdjust() {  // p is true if print pane should be open
    var current = splits.getSizes()
    var w1 = current[0] * lastwindowwidth / window.innerWidth
    var w2 = current[1]
    var w3 = current[2]
    var rest = 100 - w1
    lastwindowwidth = window.innerWidth
    if (printpane) {
        if (lastprintwidth === null) splits.setSizes([w1, 0.7 * rest, 0.3 * rest])
        else splits.setSizes([w1, rest - lastprintwidth, lastprintwidth])
        lastprintwidth = splits.getSizes()[2]
    } else splits.setSizes([w1, rest, 0])
    GSresize(0.01 * w1 * window.innerWidth)
    print_options({ height: window.innerHeight })
}

$(window).resize(function () {
    splitAdjust()
})

window.onbeforeunload = undefined // execute window.onbeforeunload = Quit if GSedit.changed() is true

function Quit(e) { // Some browsers just say "Do you want to leave this site? Changes you made may not have been saved."
    var s = "To continue without saving, click OK.\nTo save, click Cancel, then click save."
    e.returnValue = s
    return s
}

// https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

var lastname = '' // the file name chosen the last time the user saved code

function saveCode() {
    var name = prompt("Enter the file name (without extension)", lastname)
    if (name === null) return
    lastname = name
    var extension = '.py'
    if (!GSedit.isPython()) extension = '.js'
    if (exporting) extension = '.html'
    download(name + extension, GSedit.getValue())
}

function reportScriptError(program, err) { // This machinery only gives trace information on Chrome
    // The trace information provided by browsers other than Chrome does not include the line number
    // of the user's program, only the line numbers of the GlowScript libraries. For that reason
    // none of the following cross browser stack trace reporters are useful for GlowScript:
    // Single-page multibrowser stack trace: https://gist.github.com/samshull/1088402
    // stacktrase.js https://github.com/stacktracejs/stacktrace.js    https://www.stacktracejs.com/#!/docs/stacktrace-js
    // tracekit.js; https://github.com/csnover/TraceKit
    var feedback = err.toString() + '<br>'
    var prog = program.split('\n')
    //for(var i=0; i<prog.length; i++) console.log(i, prog[i])
    var unpack = /[ ]*at[ ]([^ ]*)[^>]*>:(\d*):(\d*)/
    var traceback = []
    if (err.cursor) {
        //console.log('err.cursor',err.cursor)
        // This is a syntax error from narcissus; extract the source
        var c = err.cursor
        while (c > 0 && err.source[c - 1] != '\n') c--;
        traceback.push(err.source.substr(c).split("\n")[0])
        //traceback.push(new Array((err.cursor - c) + 1).join(" ") + "^") // not working properly
    } else {
        // This is a runtime exception; extract the call stack if possible
        try {
            // Strange behavior: sometimes err.stack is an array of end-of-line-terminated strings,
            // and at other times it is one long string; in the latter case we have to create rawStack
            // as an array of strings.
            var rawStack
            if (typeof err.stack == 'string') rawStack = err.stack.split('\n')
            else rawStack = err.stack
            //for (var i=0; i<rawStack.length; i++) console.log(i, rawStack[i])

            // TODO: Selection and highlighting in the dialog
            var first = true
            var i, m, caller, jsline, jschar
            for (i = 1; i < rawStack.length; i++) {
                m = rawStack[i].match(unpack)
                if (m === null) continue
                caller = m[1]
                jsline = m[2]
                jschar = m[3]
                if (caller.slice(0, 3) == 'RS_') continue
                if (caller == 'compileAndRun') break
                if (caller == 'main') break

                var line = prog[jsline - 1]
                if (window.__GSlang == 'javascript') { // Currently unable to embed line numbers in JavaScript programs
                    traceback.push(line)
                    traceback.push("")
                    break
                }
                var L = undefined
                var end = undefined
                for (var c = jschar; c >= 0; c--) {  // look for preceding "linenumber";
                    if (line[c] == ';') {
                        if (c > 0 && line[c - 1] == '"') {
                            var end = c - 1 // rightmost digit in "23";
                            c--
                        }
                    } else if (line[c] == '"' && end !== undefined) {
                        L = line.slice(c + 1, end)
                        break
                    } else if (c === 0) {
                        jsline--
                        line = prog[jsline - 1]
                        c = line.length
                    }
                }
                if (L === undefined) continue
                var N = Number(L) - 1
                if (first) traceback.push('At or near line ' + N + ': ' + window.__original.text[N - 1])
                else traceback.push('Called from line ' + N + ': ' + window.__original.text[N - 1])
                first = false
                traceback.push("")
                if (caller == '__$main') break
            }
        } catch (ignore) {
        }
    }
    for (var i = 0; i < traceback.length; i++) feedback += '<br>' + traceback[i]
    gsErrordiv = $("#gserrors")[0]
    gsErrorHandler(feedback)
}

