quiz331a = ["1) What is your observation?", "Satellite moves towards Earth", "Satellite moves away from Earth", "1"];
quiz331b = ["2) Why satellite moves towards Earth?", "Because Earth attracts satellite", "Because satellite propels towards Earth", "1"];
quiz331c = ["3) Why Earth attracts satellite?", "Because there exists magnetic force", "Because there exists gravitational force", "2"];
quiz331d = ["4) What is your observation?", "Satellite still moves towards Earth", "", "1"];
quiz331e = ["5) Why satellite still move towards Earth?", "Because Earth's gravitational force is getting stronger", "Because the satellite velocity is too small", "2"];
quiz331f = ["6) What is the trajectory of the satellite?", "Straight line", "A little bit curved", "2"];
quiz331g = ["7) What is your observation?", "Satellite is getting closer to Earth", "Satellite moves in circular orbit", "2"];
quiz331h = ["8) Why satellite moves in circular orbit?", "Centripetal force is the same as gravitational force to maintain satellite in circular orbit", "Because satellite likes circle", "1"];
quiz331i = ["9) Calculate the orbital velocity for this satellite", "3870 m/s", "5000 m/s", "1"];
quiz331 = [quiz331a, quiz331b, quiz331c, quiz331d, quiz331e, quiz331f, quiz331g, quiz331h, quiz331i];
html331 = [];
for (let i = 0; i < quiz331.length; i++) {
    html331[i] = quizGenerator(quiz331[i]);
    console.log(html331[i])
}
function quizGenerator(quiz) {
    return `<div class="quiz-container " id="quiz" data-aos="fade-in">
    <div>
    <div class="quiz-header">
      <h2 id="question">${quiz[0]} </h2>
      <div class="buttons" id="buttons">
      <button class="btn0" id="1">${quiz[1]}</button>
      <button class="btn0" id="2">${quiz[2]}</button>
    </div>
    </div>
    <div class="submitquiz">
    <button class="submit" id="submit" onclick="nextQuiz()" >Submit</button>
    </div>
    </div>
    </div>`
}
html331[8] = `<div class="row" id="lesson331">
<div class="col-6">
    <img src="./assets/img/satelliteimg.png" id="img331">
</div>
<div class="col-6" id="quiz321">
    <div class="simtext">
        <p class="glowtext">
            <strong style="font-size:35px">Situation 1: Zero velocity</strong><br><br>
            This satellite is <strong>2.657 x 10<sup>7</sup> m</strong> away from Earth. Initially,
            the
            satellite is
            almost stationary. What will happen to the satellite? Set the initial linear
            speed
            of satellite in between <strong>0 ms<sup>-1</sup> and 10 ms<sup>-1</sup></strong> to
            figure it out. Adjust the value using range slider and click "Run Simulation".
        </p>
        <div class="rangeslider" id="opacityslider">
            <range-slider min="0" max="10" step="1" dir="ltr"></range-slider>
            <div style="display:flex;justify-content:center">
                <button onclick="startSimulation();" id="setvalue">Run
                    Simulation</button>
            </div>
        </div>
    </div>
</div>
</div>`;

html331[9] = ` <div class="row" id="lesson331">
<div class="col-6">
    <img src="./assets/img/satelliteimg.png" id="img331">
    <div id="gserrors" style="font-family:Verdana;font-size:13px;color:#c00">
</div>
<div>
  <div id='sourcetext' class="split split-horizontal" style="display:none">
  </div>
  <div id='glows' ></div>
  <div id='printing' class="split split-horizontal" style="display:none">
  </div>
</div>
</div>
<div class="col-6" id="quiz321">
    <div class="simtext">
        <p class="glowtext">
            <strong style="font-size:35px">Situation 2: Low velocity</strong><br><br>
            This satellite is <strong>2.657 x 10<sup>7</sup> m</strong> away from Earth. Initially,
            the
            satellite is
            moving at low velocity. What will happen to the satellite? Set the initial linear
            speed
            of satellite in between <strong>1000 ms<sup>-1</sup> and 2000 ms<sup>-1</sup></strong> to
            figure it out. Adjust the value using range slider and click "Run Simulation".
        </p>
        <div class="rangeslider" id="opacityslider">
            <range-slider min="1000" max="2000" step="1" dir="ltr"></range-slider>
            <div style="display:flex;justify-content:center">
                <button onclick="startSimulation();" id="setvalue">Run
                    Simulation</button>
            </div>
        </div>
    </div>
</div>
</div>
`;



function displaySlider() {
    const elements = document.querySelectorAll(['range-slider']);

    elements.forEach(element => {
        element.insertAdjacentHTML('afterend', `
    <output>Satellite velocity = ${element.value} m/s</output>
    `);
        displaySimulation(element.value)
    });

    document.addEventListener('input', e => {
        const input = e.target;
        const output = input.nextElementSibling;
        if (output) {
            output.textContent = "Satellite velocity = " + input.value + " m/s";
            displaySimulation(input.value)
            // let opacityslider = 0.5;
            // opacityslider += input.value / 8000;
            // document.getElementById('opacityslider').setAttribute('style', "opacity:" + opacityslider);
        }
    });

}

displaySlider();


function startSimulation() {
    document.getElementById('img331').setAttribute('style', 'display:none');
    document.getElementById('skipbtn').innerHTML = `ANSWER SOME QUESTIONS<i class="fa fa-arrow-right"></i>`;
    document.getElementById('skipbtn').style.color = "white";
    document.getElementById('skipbtn').style.backgroundColor = "#051367";
    document.getElementById('skipbtn').addEventListener("mouseover", changeStyle);
    document.getElementById('skipbtn').addEventListener("mouseout", backStyle);


    runCode('2');
}


function changeStyle() {
    document.getElementById('skipbtn').style.backgroundColor = "green";

}

function backStyle() {
    document.getElementById('skipbtn').style.backgroundColor = "#051367";
}


document.getElementById('skipback').innerHTML = `<div id="back"><button type="input" class="btn"
onclick="window.location='lesson.html'"><i class="fa fa-home"></i>    BACK</button>
</div>
<div id="skip"><button type="input" class="btn" id="skipbtn"
onclick="startQuiz();">SKIP    <i class="fa fa-arrow-right"></i></button>
</div>`
let n = 0;
let correct = false;
function startQuiz() {

    document.getElementById('lesson331').innerHTML = html331[n];
    document.getElementById("buttons").addEventListener("click", checkSelection);
    window.addEventListener("click", checkActiveSelection);
}

function nextQuiz() {
    if (correct) {
        document.getElementById('correctaudio').play();
        n++;
        if (n < 3) {
            document.getElementById('lesson331').innerHTML = html331[n];
        }
        else {
            document.getElementById('lesson331').innerHTML = html331[9];
            app.nextStep();
            displaySlider();
        }
    }
    else {
        document.getElementById('wrongaudio').play();

    }
    document.getElementById("buttons").addEventListener("click", checkSelection);
    window.addEventListener("click", checkActiveSelection);
    correct = false;
}


function checkSelection() {
    if (document.activeElement.id == quiz331[n][3]) {
        correct = true;
    }
    else {
        correct = false;
    }
    console.log(correct)
}

function checkActiveSelection() {
    if (document.activeElement.id != quiz331[n][3]) {
        correct = false;
    }
}
// runCode('2')
