quiz321a = ["Q1: Compare distance (arc) travelled by Moon", "Green region > Red region", "Red region > Green region", "Green region = Red region", "3"]
quiz321b = ["Q2: Compare distance between Earth & Moon", "Green region > Red region", "Red region > Green region", "Green region = Red region", "3"]
quiz321c = ["Q3: What is your conclusion?", "Green area is larger than red area", "Red area is larger than green area", "Green area is equal to red area", 3]
quiz321d = ["Q4: Compare distance (arc) travelled by Earth", "Green region > Red region", "Red region > Green region", "Green region = Red region", "1"]
quiz321e = ["Q5: Compare distance between Earth and Sun", "Green region > Red region", "Red region > Green region", "Green region = Red region", "2"]
quiz321f = ["Q6: What is your conclusion?", "Green area is larger than red area", "Red area is larger than green area", "Green area is equal to red area", 3]
quiz321 = [quiz321a, quiz321b, quiz321c, quiz321d, quiz321e, quiz321f]
html321 = []
let correct = false;
let n = 0;
for (let i = 0; i < quiz321.length; i++) {
    html321[i] = quizGenerator(quiz321[i]);
}
// 1   (0,1,2) 0 +n
// 3   (3,4,5) 3 +n

function quizGenerator(quiz) {
    return `<div class="quiz-container" id="quiz" data-aos="fade-in">
    <div>
    <div class="quiz-header">
      <h2 id="question">${quiz[0]} </h2>
      <div class="buttons" id="buttons">
      <button class="btn0" id="1">${quiz[1]}</button>
      <button class="btn0" id="2">${quiz[2]}</button>
      <button class="btn0" id="3">${quiz[3]}</button>
    </div>
    </div>
    <div class="submitquiz">
    <button class="submit" id="submit" onclick="nextQuiz()" >Submit</button>
    </div>
    </div>
    </div>`
}
glowframe = [], glowtext = [];
glowframe[0] = `<iframe name="iframe1" id="glowsim" src="sim1.html"></iframe>`;
glowtext[0] = `  <div class="glowtext">
<h1><strong style="font-size:35px">OBSERVE THIS SIMULATION</strong></h1>
<p>This simulation shows that Moon is orbiting the Earth
in circular orbit. Moon sweeps out
green region and red region in a time interval of 5 days. </p>
<p>Please record your observation and conclusion:</p>
<ul>
<li>Compare arc length (blue points) swept by Moon in green & red region.</li>
<li>Compare distance (white line) between Earth and Moon in green & red region.</li>
<li>According to formula area of sector, is green area equals to red area?</li>
</ul>
</div>
<button onclick="changeLesson(true)" class="readybutton" id="readyobserve"> I am ready to record my
observation</button>`;

glowframe[2] = `<iframe name="iframe1" id="glowsim" src="sim2.html"></iframe>`;
glowtext[2] = `  <div class="glowtext">
<h1><strong style="font-size:35px">OBSERVE ANOTHER SIMULATION</strong></h1>
<p>This simulation shows that Earth is orbiting Sun
in elliptical orbit. Earth sweeps out
green region and red region in a time interval of 5 days. </p>
<p>Please record your observation and conclusion:</p>
<ul>
<li>Compare arc length (blue points) swept by Earth in green & red region.</li>
<li>Compare distance (white line) between Earth and Sun in green & red region.</li>
<li>According to formula area of sector, is green area equals to red area?</li>
</ul>
</div>
<button onclick="changeLesson(true)" class="readybutton" id="readyobserve"> I am ready to record my
observation</button>`;


let lesson = 0;
function changeLesson(change) {
    app.nextStep(change);
    if (change) {
        lesson++;
        if (lesson == 0 || lesson == 2) {
            document.getElementById('glowframe').innerHTML = glowframe[lesson];
            document.getElementById('quiz321').innerHTML = glowtext[lesson];
            document.getElementById('glowsim').addEventListener('mouseover', function () {
                document.getElementById('glowsim').focus();
            });
            document.getElementById('glowsim').addEventListener('mouseleave', function () {
                document.getElementById('glowsim').blur();
            });
            if (checkmobile) {
                var iframe = document.getElementById("glowsim");
                iframe.style.visibility = "hidden";
                $('iframe').on('load', function () {
                    mediaSimulation();
                });
            }
        }
        else {
            startQuiz();
        }
    }
    else {
        lesson--;
        if (lesson == 0 || lesson == 2) {
            document.getElementById('quiz321').innerHTML = glowtext[lesson];

        }
        else {
            document.getElementById('glowframe').innerHTML = glowframe[lesson - 1];
            document.getElementById('glowsim').addEventListener('mouseover', function () {
                document.getElementById('glowsim').focus();
            });
            document.getElementById('glowsim').addEventListener('mouseleave', function () {
                document.getElementById('glowsim').blur();
            });
            if (checkmobile) {
                var iframe = document.getElementById("glowsim");
                iframe.style.visibility = "hidden";
                $('iframe').on('load', function () {
                    mediaSimulation();
                });
            }

            startQuiz();
        }
    }

    if (lesson == 0) {
        document.getElementById('skipback').innerHTML = `<div id="back"><button type="input" class="btn" onclick="window.location='lesson311.html'"><i class="fa fa-arrow-left"></i>
    PREV</button>
</div>
<div id="skip"><button type="input" class="btn" id="skipbtn" onclick="changeLesson(true)">SKIP <i
      class="fa fa-arrow-right"></i></button>
</div>`


    }
    else if (lesson == 3) {
        document.getElementById('skipback').innerHTML = `<div id="back"><button type="input" class="btn" 
        onclick="changeLesson(false)"><i class="fa fa-arrow-left"></i>    BACK</button>
        </div>
        <div id="skip"><button type="input" class="btn" 
        onclick="window.location='lesson322.html'">NEXT<i class="fa fa-arrow-right"></i> </button>
        </div>
       `;

    }
    else {
        document.getElementById('skipback').innerHTML = `<div id="back"><button type="input" class="btn" 
      onclick="changeLesson(false)"><i class="fa fa-arrow-left"></i>    BACK</button>
      </div>
      <div id="skip"><button type="input" class="btn" id="skipbtn"
      onclick="changeLesson(true)">SKIP    <i class="fa fa-arrow-right"></i></button>
      </div>`}

    n = 0;
}
function focusQuiz() {
    selectedbutton = -1;
    for (let i = 0; i < 3; i++) {
        if (i == quiz321[1.5 * lesson - 1.5 + n][4] - 1) {
            document.getElementsByClassName("btn0")[i].addEventListener("click", function () {
                correct = true;
                selectedbutton = i;
            });
        }
        else {
            document.getElementsByClassName("btn0")[i].addEventListener("click", function () {
                correct = false;
                selectedbutton = i;
            });
        }
    }
    window.addEventListener('click', maintainfocus)
}
function startQuiz() {
    document.getElementById('quiz321').innerHTML = html321[1.5 * lesson - 1.5];
    focusQuiz();
}

function nextQuiz() {
    if (correct) {
        document.getElementById('correctaudio').play();
        n++;
        if (1.5 * lesson - 1.5 + n == 3) {
            window.removeEventListener('click', maintainfocus)
            changeLesson(true);
        }
        else if (1.5 * lesson - 1.5 + n == 6) {
            app.nextStep();
            displayCongrats();
        }
        else {
            document.getElementById('quiz321').innerHTML = html321[1.5 * lesson - 1.5 + n];
            focusQuiz();


        }


    }
    else {
        document.getElementById('wrongaudio').play();
    }
    correct = false;
}

let selectedbutton = -1;


function maintainfocus() {
    console.log(selectedbutton)
    document.getElementsByClassName("btn0")[selectedbutton].focus();
}




var congrats = `<div class="js-container container-congrats"></div>
<div id="congrats">
  <div class="checkmark-circle">
    <div class="background"></div>
    <div class="checkmark draw"></div>
  </div>
  <h1>Congratulations!</h1>
  <p>You have fully mastered <strong>3.2.1 Kepler's Second Law.</strong> Well done!</p>
  <p>Now you are going to learn <strong>3.2.2 Expressing Kepler's Third Law.</strong>, are you ready?</p>
  <button class="submit-btn" type="submit" onclick="window.location='lesson322.html'">Yes! I am ready to proceed.</button>
</div>  

`
function displayCongrats() {
    document.getElementById('lesson312').innerHTML = congrats;
    document.getElementById('skipback').style.display = "none";
    document.getElementById('clappingaudio').play();
    document.getElementById('progressbar').setAttribute('class', 'topprogressbar');
    document.getElementById('sublesson').setAttribute('style', 'display:none')
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    const Confettiful = function (el) {
        this.el = el;
        this.containerEl = null;

        this.confettiFrequency = 3;
        this.confettiColors = ['#EF2964', '#00C09D', '#2D87B0', '#48485E', '#EFFF1D'];
        this.confettiAnimations = ['slow', 'medium', 'fast'];

        this._setupElements();
        this._renderConfetti();
    };

    Confettiful.prototype._setupElements = function () {
        const containerEl = document.createElement('div');
        const elPosition = this.el.style.position;

        if (elPosition !== 'relative' || elPosition !== 'absolute') {
            this.el.style.position = 'relative';
        }

        containerEl.classList.add('confetti-container');

        this.el.appendChild(containerEl);

        this.containerEl = containerEl;
    };

    Confettiful.prototype._renderConfetti = function () {

        this.confettiInterval = setInterval(() => {
            const confettiEl = document.createElement('div');
            const confettiSize = (Math.floor(Math.random() * 3) + 7) + 'px';
            const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
            const confettiLeft = (Math.floor(Math.random() * this.el.offsetWidth)) + 'px';
            const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];

            confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
            confettiEl.style.left = confettiLeft;
            confettiEl.style.width = confettiSize;
            confettiEl.style.height = confettiSize;
            confettiEl.style.backgroundColor = confettiBackground;

            confettiEl.removeTimeout = setTimeout(function () {
                confettiEl.parentNode.removeChild(confettiEl);
            }, 3000);

            this.containerEl.appendChild(confettiEl);
        }, 25);
    };

    window.confettiful = new Confettiful(document.querySelector('.js-container'));



}

function mediaSimulation() {
    var iframe = document.getElementById("glowsim");
    iframe.style.visibility = "hidden";
    iframe.contentWindow.document.getElementsByTagName("BODY")[0].classList.add('glowsnone');
    iframe.style.visibility = "visible";

}

//when device changes size
mediaQuery = window.matchMedia('(max-width: 670px)')
mediaQuery.onchange = (e) => {
    if (e.matches) {
        var iframe = document.getElementById("glowsim");
        iframe.contentWindow.document.getElementsByTagName("BODY")[0].classList.add('glowsnone');
    } else {
        var iframe = document.getElementById("glowsim");
        iframe.contentWindow.document.getElementsByTagName("BODY")[0].classList.remove('glowsnone');
    }
}


window.mobileCheck = function () {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

var checkmobile = window.mobileCheck();

