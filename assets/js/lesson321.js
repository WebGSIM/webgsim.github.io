quiz321a = ["Compare distance (arc) travelled by Moon", "Green region > Red region", "Red region > Green region", "Green region = Red region", "3"]
quiz321b = ["Compare distance between Earth & Moon", "Green region > Red region", "Red region > Green region", "Green region = Red region", "3"]
quiz321c = ["What is your conclusion?", "Green area is larger than red area", "Red area is larger than green area", "Green area is equal to red area", 3]
quiz321d = ["Compare distance (arc) travelled by Earth", "Green region > Red region", "Red region > Green region", "Green region = Red region", "1"]
quiz321e = ["Compare distance between Earth and Sun", "Green region > Red region", "Red region > Green region", "Green region = Red region", "2"]
quiz321f = ["What is your conclusion?", "Green area is larger than red area", "Red area is larger than green area", "Green area is equal to red area", 3]
quiz321 = [quiz321a, quiz321b, quiz321c, quiz321d, quiz321e, quiz321f]
html321 = []
let correct = false;
let n = 0;
for (let i = 0; i < quiz321.length; i++) {
    html321[i] = quizGenerator(quiz321[i]);
}


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
html321[5] = `  <p class="glowtext">
<strong style="font-size:35px">OBSERVE THIS SIMULATION</strong><br><br>
This simulation shows that Moon is orbiting the Earth
in <strong>CIRCULAR ORBIT</strong>. Moon sweeps out
green region and red region in a time interval of 5 days. <br><br>
Please record your <strong>OBSERVATION</strong> and <strong>CONCLUSION</strong>. <br>
1) Compare arc length (blue points) swept by Moon in green & red region.<br>
2) Compare distance (white line) between Moon and Sun in green & red region.<br>
3) According to formula area of sector, is green area equals to red area?
</p>
<button onclick="startQuiz()" class="readybutton" id="readyobserve"> I am ready to record my
observation</button>`;

html321[6] = `<p class="glowtext">
<strong style="font-size:35px">OBSERVE ANOTHER SIMULATION</strong><br><br>
This simulation shows that Earth is orbiting the sun
in <strong>ELLIPTICAL ORBIT</strong>. <br>
Earth sweeps out
green region and red region in a time interval of 5 days. <br><br>
Please record your <strong>OBSERVATION</strong> and <strong>CONCLUSION</strong>. <br>
1) Compare arc length (blue points) swept by Earth in green & red region.<br>
2) Compare distance (white line) between Earth and Sun in green & red region.<br>
3) According to formula area of sector, is green area equals to red area?
</p>
<button onclick="startQuiz()" class="readybutton"> I am ready to record my observation</button>`;

let lesson = 0;
function changeLesson(change) {
    app.nextStep(change);
    if (change) {
        lesson++;
    }
    else {
        lesson--;
    }
    if (lesson == 0 || lesson == 2) {
        document.getElementById('quiz321').innerHTML = html321[5 + lesson / 2];
        if (lesson == 0) {
            document.getElementById('glowframe').innerHTML = `<iframe name="iframe1" id="glowsim" src="sim1.html"></iframe>`
        }
        else {
            document.getElementById('glowframe').innerHTML = `<iframe name="iframe1" id="glowsim" src="sim2.html"></iframe>`
        }
    }
    else {
        startQuiz();
    }
    if (lesson == 0) {
        document.getElementById('skipback').innerHTML = `<div id="back"><button type="input" class="btn" 
          onclick="window.location='lesson.html'"><i class="fa fa-home"></i>    BACK</button>
          </div>
          <div id="skip"><button type="input" class="btn" id="skipbtn"
          onclick="changeLesson(true)">SKIP    <i class="fa fa-arrow-right"></i></button>
          </div>`

    }
    else if (lesson == 3) {
        document.getElementById('skipback').innerHTML = `<div id="back"><button type="input" class="btn" 
        onclick="changeLesson(false)"><i class="fa fa-arrow-left"></i>    BACK</button>
        </div>
        <div id="skip"><button type="input" class="btn" 
        onclick="window.location='lesson322.html'">SKIP LESSON <i class="fa fa-arrow-right"></i> </button>
        </div>
       `
    }
    else {
        document.getElementById('skipback').innerHTML = `<div id="back"><button type="input" class="btn" 
      onclick="changeLesson(false)"><i class="fa fa-arrow-left"></i>    BACK</button>
      </div>
      <div id="skip"><button type="input" class="btn" id="skipbtn"
      onclick="changeLesson(true)">SKIP    <i class="fa fa-arrow-right"></i></button>
      </div>`}


}

function startQuiz() {
    document.getElementById('quiz321').innerHTML = html321[n];
    document.getElementById("buttons").addEventListener("click", checkSelection);
    window.addEventListener("click", checkActiveSelection);
}

function nextQuiz() {
    if (correct) {
        document.getElementById('correctaudio').play();
        n++;
        if (n == 3) {
            app.nextStep();
            runCode('1');
            document.getElementById('quiz321').innerHTML = `<p class="glowtext">
            <strong style="font-size:35px">OBSERVE ANOTHER SIMULATION</strong><br><br>
            This simulation shows that Earth is orbiting the sun
            in <strong>ELLIPTICAL ORBIT</strong>. <br>
            Earth sweeps out
            green region and red region in a time interval of 5 days. <br><br>
            Please record your <strong>OBSERVATION</strong> and <strong>CONCLUSION</strong>. <br>
            1) Compare arc length (blue points) swept by Earth in green & red region.<br>
            2) Compare distance (white line) between Earth and Sun in green & red region.<br>
            3) According to formula area of sector, is green area equals to red area?
        </p>
        <button onclick="startQuiz()" class="readybutton"> I am ready to record my observation</button>`;
        }
        else if (n == 6) {
            app.nextStep();
            displayCongrats();
        }
        else {
            document.getElementById('quiz321').innerHTML = html321[n];
            document.getElementById("buttons").addEventListener("click", checkSelection);
            window.addEventListener("click", checkActiveSelection);
        }


    }
    else {
        document.getElementById('wrongaudio').play();
    }
    correct = false;
}

function checkSelection() {
    if (document.activeElement.id == quiz321[n][4]) {
        correct = true;
    }
    else {
        correct = false;
    }
}

function checkActiveSelection() {
    if (document.activeElement.id != quiz321[n][4]) {
        correct = false;
    }
}
var congrats = `<div class="js-container container-congrats"></div>
<div id="congrats">
  <div class="checkmark-circle">
    <div class="background"></div>
    <div class="checkmark draw"></div>
  </div>
  <h1>Congratulations!</h1>
  <p>You have fully mastered <strong>3.2.1 b Kepler's Second Law.</strong> Well done!</p>
  <p>Now you are going to learn <strong>3.2.1 c Kepler's Third Law.</strong>, are you ready?</p>
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