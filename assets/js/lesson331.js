quiz331a = ["1) What is your observation?", "Satellite moves towards Earth", "Satellite moves away from Earth", "1"];
quiz331b = ["2) Why satellite moves towards Earth?", "Because Earth attracts satellite", "Because satellite propels towards Earth", "1"];
quiz331c = ["3) Why Earth attracts satellite?", "Because there exists magnetic force", "Because there exists gravitational force", "2"];
quiz331d = ["4) What is your observation?", "Satellite still moves towards Earth", "Satellite moves away from Earth", "1"];
quiz331e = ["5) Why satellite still move towards Earth?", "Because Earth's gravitational force is getting stronger", "Because the satellite velocity is too small", "2"];
quiz331f = ["6) What is the trajectory of the satellite?", "Straight line", "A little bit curved", "2"];
quiz331g = ["7) What is your observation?", "Satellite is getting closer to Earth", "Satellite moves in circular orbit", "2"];
quiz331h = ["8) Why satellite moves in circular orbit?", "Centripetal force is same as gravitational force", "Because satellite likes circle", "1"];
quiz331i = ["9) What is the orbital velocity for this satellite", "3870 m/s", "1870 m/s", "1"];
quiz331j = ["10) What is your observation?", "Satellite orbits Earth", "Satellite escape from Earth", "2"];
quiz331k = ["11) Why satellite escapes from Earth?", "Earth gravitational force become weaker", "Satellite velocity exceeds orbital velocity", "2"];
quiz331l = ["12 What is your conclusion?", "Satellite moving with orbital velocity will maintain in circular orbit", "Earth's gravity is getting weaker", "1"]

quiz331 = [quiz331a, quiz331b, quiz331c, quiz331d, quiz331e, quiz331f, quiz331g, quiz331h, quiz331i, quiz331j, quiz331k, quiz331l];
html331 = [];
for (let i = 0; i < quiz331.length; i++) {
    html331[i] = quizGenerator(quiz331[i]);
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


html331[12] = `<div class="row">
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
            <div class="startsim">
                <button onclick="startSimulation();" id="setvalue">Run
                    Simulation</button>
            </div>
        </div>
    </div>
</div>
</div>`;

html331[13] = ` <div class="row">
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
            <div class="startsim">
                <button onclick="startSimulation();" id="setvalue">Run
                    Simulation</button>
            </div>
        </div>
    </div>
</div>
</div>
`;

html331[14] = ` <div class="row">
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
            <strong style="font-size:35px">Situation 3: Orbital velocity</strong><br><br>
            This satellite is <strong>2.657 x 10<sup>7</sup> m</strong> away from Earth. Initially,
            the
            satellite is
            moving at high velocity. What will happen to the satellite? Set the initial linear
            speed
            of satellite in between <strong>3800ms<sup>-1</sup> and 3900 ms<sup>-1</sup></strong> to
            figure it out. Adjust the value using range slider and click "Run Simulation".
        </p>
        <div class="rangeslider" id="opacityslider">
            <range-slider min="3800" max="3900" step="1" dir="ltr"></range-slider>
            <div class="startsim">
                <button onclick="startSimulation();" id="setvalue">Run
                    Simulation</button>
            </div>
        </div>
    </div>
</div>
</div>
`;

html331[15] = ` <div class="row">
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
            <strong style="font-size:35px">Situation 4: High velocity</strong><br><br>
            This satellite is <strong>2.657 x 10<sup>7</sup> m</strong> away from Earth. Initially,
            the
            satellite is
            moving at low velocity. What will happen to the satellite? Set the initial linear
            speed
            of satellite in between <strong>5500 ms<sup>-1</sup> and 10000 ms<sup>-1</sup></strong> to
            figure it out. Adjust the value using range slider and click "Run Simulation".
        </p>
        <div class="rangeslider" id="opacityslider">
            <range-slider min="5500" max="10000" step="1" dir="ltr"></range-slider>
            <div class="startsim">
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
            displaySimulation(input.value);
        }
    });

}

displaySlider();


function startSimulation() {
    document.getElementById('img331').setAttribute('style', 'display:none');
    document.getElementById('skip').innerHTML = `<button type="input" class="btn" id="skipbtn"
    onclick="startQuiz()">ANSWER SOME QUESTIONS<i class="fa fa-arrow-right"></i></button>
    </div>
    `;
    document.getElementById('skipbtn').setAttribute('class', 'btn answerquestion');
    runCode('2');
}



let n = 0;
let lesson = 0;
let correct = false;
function nextLesson(change) {
    if (change) {
        lesson++;
    }
    else {
        lesson--;
    }
    n = 0;
    document.getElementById('lesson331').innerHTML = html331[12 + lesson];
    app.nextStep(change);
    displaySlider();
    if (lesson == 0) {
        document.getElementById('skipback').innerHTML = `<div id="back"><button type="input" class="btn" 
          onclick="window.location='lesson.html'"><i class="fa fa-home"></i>    BACK</button>
          </div>
          <div id="skip"><button type="input" class="btn" id="skipbtn"
          onclick="nextLesson(true)">SKIP    <i class="fa fa-arrow-right"></i></button>
          </div>`

    }
    else if (lesson == 3) {
        document.getElementById('skipback').innerHTML = `<div id="back"><button type="input" class="btn" 
        onclick="nextLesson(false)"><i class="fa fa-arrow-left"></i>    BACK</button>
        </div>
        <div id="skip"><button type="input" class="btn" 
        onclick="window.location='lesson311.html'">SKIP LESSON <i class="fa fa-arrow-right"></i> </button>
        </div>
       `
    }
    else {
        document.getElementById('skipback').innerHTML = `<div id="back"><button type="input" class="btn" 
      onclick="nextLesson(false)"><i class="fa fa-arrow-left"></i>    BACK</button>
      </div>
      <div id="skip"><button type="input" class="btn" id="skipbtn"
      onclick="nextLesson(true)">SKIP    <i class="fa fa-arrow-right"></i></button>
      </div>`}
}

function startQuiz() {
    document.getElementById('skipbtn').setAttribute('class', 'btn');
    document.getElementById('skip').innerHTML = `<button type="input" class="btn" id="skipbtn"
    onclick="nextLesson(true)">SKIP<i class="fa fa-arrow-right"></i></button>
    </div>
    `;
    document.getElementById('quiz321').innerHTML = html331[3 * lesson + n];
    document.getElementById("buttons").addEventListener("click", checkSelection);
    window.addEventListener("click", checkActiveSelection);
}

function nextQuiz() {
    if (correct) {
        document.getElementById('correctaudio').play();
        n++;
        if (n < 3) {
            document.getElementById('quiz321').innerHTML = html331[3 * lesson + n];
        }
        else {
            nextLesson(true);
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
    if (document.activeElement.id == quiz331[3 * lesson + n][3]) {
        correct = true;
    }
    else {
        correct = false;
    }
    console.log(correct)
}

function checkActiveSelection() {
    if (document.activeElement.id != quiz331[3 * lesson + n][3]) {
        correct = false;
    }
}
document.getElementById('skipback').innerHTML = `<div id="back"><button type="input" class="btn"
onclick="window.location='lesson.html'"><i class="fa fa-home"></i>    BACK</button>
</div>
<div id="skip"><button type="input" class="btn" id="skipbtn"
onclick="nextLesson(true);">SKIP    <i class="fa fa-arrow-right"></i></button>
</div>`;
// runCode('2')
