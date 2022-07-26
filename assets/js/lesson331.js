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
img331 = ["./assets/img/capture1.jpg", "./assets/img/capture2.jpg", "./assets/img/capture3.jpg", "./assets/img/capture4.jpg"];
quiz331 = [quiz331a, quiz331b, quiz331c, quiz331d, quiz331e, quiz331f, quiz331g, quiz331h, quiz331i, quiz331j, quiz331k, quiz331l];
situation = ["Situation 1: Zero Velocity", "Situation 2: Low Velocity", "Situation 3: Orbital Velocity", "Situation 4: High Velocity"];
min = [0, 1000, 3800, 5500];
max = [10, 2000, 3900, 10000];
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

for (let i = 12; i < 16; i++) {
    html331[i] = `<div class="row" data-aos='fade-in'>
<div class="col-6">
    <img src=${img331[i - 12]}  id="img331">
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
        <div class="glowtext">
            <h1><strong id="situation">${situation[i - 12]}</strong></h1>
            <p>This satellite is <strong>2.657 x 10<sup>7</sup> m</strong> away from Earth. Initially,
            the
            satellite is
            almost stationary. What will happen to the satellite? Set the initial linear
            speed
            of satellite in between <strong>${min[i - 12]} ms<sup>-1</sup> and ${max[i - 12]} ms<sup>-1</sup></strong> to
            figure it out. Adjust the value using range slider and click "Run Simulation".</p>
        </div>
        <div class="rangeslider" id="opacityslider">
            <range-slider min="${min[i - 12]} " max=${max[i - 12]} step="1" dir="ltr"></range-slider>
            <div class="startsim">
                <button onclick="startSimulation();" id="setvalue">Run
                    Simulation</button>
            </div>
        </div>
    </div>
</div>
</div>`;
}

let lesson = 0;

function displaySlider() {
    const elements = document.querySelectorAll(['range-slider']);

    elements.forEach(element => {
        element.insertAdjacentHTML('afterend', `
    <output>Satellite velocity = ${element.value} m/s</output>
    `);
        displaySimulation(element.value, lesson)
    });

    document.addEventListener('input', e => {
        const input = e.target;
        const output = input.nextElementSibling;
        if (output) {
            output.textContent = "Satellite velocity = " + input.value + " m/s";
            displaySimulation(input.value, lesson);
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
          onclick="window.location='lesson322.html'"><i class="fa fa-arrow-left"></i>
          PREV</button>
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
        onclick="window.location='index.html'">HOME<i class="fa fa-home"></i> </button>
        </div>
       `
    }

    else if (lesson == 4) {
        displayCongrats();
    }
    else {
        document.getElementById('skipback').innerHTML = `<div id="back"><button type="input" class="btn" 
      onclick="nextLesson(false)"><i class="fa fa-arrow-left"></i>    BACK</button>
      </div>
      <div id="skip"><button type="input" class="btn" id="skipbtn"
      onclick="nextLesson(true)">SKIP    <i class="fa fa-arrow-right"></i></button>
      </div>`}
    if (lesson == 0) {
        document.getElementsByTagName('range-slider')[0].setAttribute('class', 'special0');
    }
    else if (lesson == 1) {
        document.getElementsByTagName('range-slider')[0].setAttribute('class', 'special1');
    }
    else if (lesson == 2) {
        document.getElementsByTagName('range-slider')[0].setAttribute('class', 'special2');
    }
    else if (lesson == 3) {
        document.getElementsByTagName('range-slider')[0].setAttribute('class', 'special3');
    }


}

let selectedbutton = -1;
function startQuiz() {
    document.getElementById('skipbtn').setAttribute('class', 'btn');
    document.getElementById('skip').innerHTML = `<button type="input" class="btn" id="skipbtn"
    onclick="nextLesson(true)">SKIP<i class="fa fa-arrow-right"></i></button>
    </div>
    `;
    if (lesson == 3) {
        document.getElementById('skipback').innerHTML = `<div id="back"><button type="input" class="btn" 
        onclick="nextLesson(false)"><i class="fa fa-arrow-left"></i>    BACK</button>
        </div>
        <div id="skip"><button type="input" class="btn" 
        onclick="window.location='index.html'">HOME<i class="fa fa-home"></i> </button>
        </div>
       `
    }
    document.getElementById('quiz321').innerHTML = html331[3 * lesson + n];
    selectedbutton = -1;
    for (let i = 0; i < 2; i++) {
        if (i == quiz331[3 * lesson + n][3] - 1) {
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

function nextQuiz() {
    console.log(correct)
    if (correct) {
        document.getElementById('correctaudio').play();
        n++;
        if (n < 3) {
            document.getElementById('quiz321').innerHTML = html331[3 * lesson + n];
            selectedbutton = -1;
            for (let i = 0; i < 2; i++) {
                if (i == quiz331[3 * lesson + n][3] - 1) {
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
        else {
            nextLesson(true);
        }
    }
    else {
        document.getElementById('wrongaudio').play();

    }
    correct = false;
}

function maintainfocus() {
    console.log(selectedbutton)
    document.getElementsByClassName("btn0")[selectedbutton].focus();
}

document.getElementById('skipback').innerHTML = `<div id="back"><button type="input" class="btn" 
          onclick="window.location='lesson322.html'"><i class="fa fa-arrow-left"></i>
          PREV</button>
          </div>
          <div id="skip"><button type="input" class="btn" id="skipbtn"
          onclick="nextLesson(true)">SKIP    <i class="fa fa-arrow-right"></i></button>
          </div>`


var congrats = `<div class="js-container container-congrats"></div>
          <div id="congrats">
            <div class="checkmark-circle">
              <div class="background"></div>
              <div class="checkmark draw"></div>
            </div>
            <h1>Congratulations!</h1>
            <p>You have fully mastered <strong>3.1.1 Newton's Universal Law of Gravitation.</strong> Well done!</p>
            <p>Now you are going to learn <strong>3.1.2 Newton's Universal Law of Gravitation (Problem Solving)</strong>, are you ready?</p>
            <button class="submit-btn" type="submit" onclick="window.location='lesson312.html'">Yes! I am ready to proceed.</button>
          </div>  
          
          `
function displayCongrats() {
    document.getElementById('lesson331').innerHTML = congrats;
    document.getElementById('skipback').style.display = "none";
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    document.getElementById('progressbar').setAttribute('class', 'topprogressbar');
    document.getElementById('sublesson').setAttribute('style', 'display:none')


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