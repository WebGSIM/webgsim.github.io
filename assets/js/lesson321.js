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
glowtext[0] = `  <p class="glowtext">
<strong style="font-size:35px">OBSERVE THIS SIMULATION</strong><br><br>
This simulation shows that Moon is orbiting the Earth
in <strong>CIRCULAR ORBIT</strong>. Moon sweeps out
green region and red region in a time interval of 5 days. <br><br>
Please record your <strong>OBSERVATION</strong> and <strong>CONCLUSION</strong>. <br>
1) Compare arc length (blue points) swept by Moon in green & red region.<br>
2) Compare distance (white line) between Moon and Sun in green & red region.<br>
3) According to formula area of sector, is green area equals to red area?
</p>
<button onclick="changeLesson(true)" class="readybutton" id="readyobserve"> I am ready to record my
observation</button>`;

glowframe[2] = `<iframe name="iframe1" id="glowsim" src="sim2.html"></iframe>`;
glowtext[2] = `<p class="glowtext">
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
<button onclick="changeLesson(true)" class="readybutton" id="readyobserve"> I am ready to record my observation</button>`;


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
            mediaSimulation();
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
            mediaSimulation();
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

function mediaSimulation() {
    const mediaQuery = window.matchMedia('(max-width: 670px)')
    if (mediaQuery.matches) {
        var iframe = document.getElementById("glowsim");
        iframe.style.visibility = "hidden";
        setTimeout(function () {
            iframe.contentWindow.document.getElementsByTagName("BODY")[0].classList.add('glowsnone');
            iframe.style.visibility = "visible";
        }, '50')

    }
}
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



