//<!-- LESSON 311h HISTORY -->
var slide311h = ["./assets/Lesson/311h/slide0.png", "./assets/Lesson/311h/slide1.gif", "./assets/Lesson/311h/slide2.gif", "./assets/Lesson/311h/slide3.gif",
  "./assets/Lesson/311h/slide4.png", "./assets/Lesson/311h/slide5.gif", "./assets/Lesson/311h/slide6.gif", "./assets/Lesson/311h/slide7.png", "./assets/Lesson/311h/slide8.png",
  "./assets/Lesson/311h/slide9.png", "./assets/Lesson/311h/slide10.gif", "./assets/Lesson/311h/slide11.png"];
var txt311h = "This section will share the brief history on gravitational theory.@If apples fall.@Does the moon also fall?@Isaac Newton is best known for discovering gravity. @In fact, Isaac Newton is not the first person who discovered gravity.@Things will fall to the ground had been known for thousands upon thousands of years before Isaac Newton.@Also, various attempts had been made to describe the gravity before Isaac Newton. @However, the key achievements of Isaac Newton is he sucessfully quantified and generalised the gravity. @First, Isaac Newton quantified the gravity which allow us to have a formula to calculate the magnitude of gravitational force or even predict how fast an object falls. @Second, Isaac Newton generalised the gravity which allow us to realise that phenomena of gravity on Earth and behaviour of celestial bodies in space are caused by the same type of force, which is gravity. @In short, apples falling from the tree and moon orbiting the Earth are the same thing. @Formulation of Newton’s Universal Law of Gravitation changed the way we understand the universe. "
var audio311h = ["", "./assets/Lesson/311h/audio1.mp3", "./assets/Lesson/311h/audio2.mp3", "./assets/Lesson/311h/audio3.mp3", "./assets/Lesson/311h/audio4.mp3",
  "./assets/Lesson/311h/audio5.mp3", "./assets/Lesson/311h/audio6.mp3", "./assets/Lesson/311h/audio7.mp3", "./assets/Lesson/311h/audio8.mp3", "./assets/Lesson/311h/audio9.mp3",
  "./assets/Lesson/311h/audio10.mp3", "./assets/Lesson/311h/audio11.mp3"];
//<!-- LESSON 311t THEORY -->
var slide311t = ["./assets/Lesson/311t/slide1.png", "./assets/Lesson/311t/slide2.png", "./assets/Lesson/311t/slide3.png",
  "./assets/Lesson/311t/slide4.png", "./assets/Lesson/311t/slide5.png", "./assets/Lesson/311t/slide6.png", "./assets/Lesson/311t/slide7.png", "./assets/Lesson/311t/slide8.png",
  "./assets/Lesson/311t/slide9.png", "./assets/Lesson/311t/slide10.png"];
var txt311t = "This section will talk about Newton’s Universal Law of Gravitation.@Newton’s Universal Law of Gravitation states that gravitational force between two bodies is directly proportional to the product of the masses of both bodies and inversely proportional to the square of the distance between the centres of the two bodies.@In layman’s terms, when the masses of objects increase, the gravitational force increases. @When the distance between two objects increase, the gravitational force decreases. @Newton’s Universal Law of Gravitation can be expressed by using this formula. @Where F is the gravitational force between two bodies. @M1 is the mass of first body. @M2 is the mass of second body. @r is the distance between the centre of the first body and the centre of the second body.@G is gravitational constant. "
var audio311t = ["", "./assets/Lesson/311t/audio1.mp3", "./assets/Lesson/311t/audio2.mp3", "./assets/Lesson/311t/audio3.mp3", "./assets/Lesson/311t/audio4.mp3",
  "./assets/Lesson/311t/audio5.mp3", "./assets/Lesson/311t/audio6.mp3", "./assets/Lesson/311t/audio7.mp3", "./assets/Lesson/311t/audio8.mp3", "./assets/Lesson/311t/audio9.mp3"
];
//<!-- LESSON 311c CALCULATION -->
var slide311c = ["./assets/Lesson/311c/slide1.png", "./assets/Lesson/311c/slide2.png", "./assets/Lesson/311c/slide3.png",
  "./assets/Lesson/311c/slide4.png", "./assets/Lesson/311c/slide5.png", "./assets/Lesson/311c/slide6.png", "./assets/Lesson/311c/slide7.png",
];
var txt311c = "This section will discuss how to calculate gravitational force between two bodies by using formula.@This question asks us to calculate the gravitational force between a durian and the Earth.@ Where mass of durian, mass of Earth and distance between durian and Earth are given. @Step one. List all the given information in symbols.@Step two. Identify and write down the formula used.@Step three. Substitute numerical values into the formula and perform the calculations.@Therefore, based on the answer, we know that the gravitational force between durian and Earth is 19.63 newton. "
var audio311c = ["", "./assets/Lesson/311c/audio0.mp3", "./assets/Lesson/311c/audio1.mp3", "./assets/Lesson/311c/audio2.mp3", "./assets/Lesson/311c/audio3.mp3", "./assets/Lesson/311c/audio4.mp3",
  "./assets/Lesson/311c/audio5.mp3"
];
//<!-- LESSON 311q QUIZ -->
var quiz311a = ["Question 1: Who formulated the universal law of gravitation?", "Isaac Newton", "Galileo Galilei", "Quah Kah Chun", "Marie Curie", "1"];
var quiz311b = ["Question 2: Choose the correct statement of Newton's universal law of gravitation?", "When mass of bodies increases, gravitational force increases.", "When distance between two bodies increases, gravitational force increases", "Gravitational force is directly proportional to the product of the distances", "Gravitational force is inversely proportional to the mass", "1"];
var quiz311c = ["Question 3: Calculate the gravitational force between 3 kg of box and Earth", "10N", "20N", "30N", "SAYA TAK TAHU", "3"];

var lesson311 = [];
let html311 = [];
lesson311[0] = [slide311h, txt311h, audio311h];
lesson311[1] = [slide311t, txt311t, audio311t];
lesson311[2] = [slide311c, txt311c, audio311c];
lesson311[3] = [quiz311a, quiz311b, quiz311c];
let lessonNumber = 0;


for (let i = 0; i < lesson311.length; i++) {
  if (i <= 2) {
    html311[i] = `<div class="swiper-container swiper" id="portfolio2" data-aos="fade-right">
    <div class="swiper-wrapper">`;
    for (let n = 0; n < lesson311[i][0].length; n++) {
      html311[i] += `<div class="swiper-slide" id="swiper-lesson">
                              <div class="picture2">
                                <img src=${lesson311[i][0][n]} alt="">
                              </div>
                                <div class="detail">
                                  <h3>${lesson311[i][1].split('@')[n]}</span>
                                </div>
                              </div>
                              <audio class='311' src=${lesson311[i][2][n]}></audio>`;
    }
    html311[i] += ` </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    </div>`;
  }

  else {
    for (let n = 0; n < lesson311[i].length; n++) {
      html311[3 + n] = `<div class="quiz-container" id="quiz" data-aos="fade-in">
      <div class="quiz-header">
        <h2 id="question">${lesson311[i][n][0]} </h2>
        <div class="buttons" id="buttons">
        <button class="btn0" id="1">${lesson311[i][n][1]}</button>
        <button class="btn0" id="2">${lesson311[i][n][2]}</button>
        <button class="btn0" id="3">${lesson311[i][n][3]}</button>
        <button class="btn0" id="4">${lesson311[i][n][4]}</button>
      </div>
      </div>
      <button class="submit" id="submit" onclick="checkAnswer()" >Submit</button>
      </div>`;
    }
  }
}




function displayLesson311() {
  document.getElementById('lesson311').innerHTML = html311[lessonNumber];
  if (lessonNumber == 0) {
    document.getElementById('skipback').innerHTML = `<div id="back"><button type="input" class="btn" 
      onclick="window.location='lesson.html'"><i class="fa fa-home"></i>    BACK</button>
      </div>
      <div id="skip"><button type="input" class="btn" id="skipbtn"
      onclick="changeLesson(true)">SKIP    <i class="fa fa-arrow-right"></i></button>
      </div>`

  }

  else if (lessonNumber == 5) {
    document.getElementById('skipback').innerHTML = `<div id="back"><button type="input" class="btn" 
    onclick="changeLesson(false)"><i class="fa fa-arrow-left"></i>    BACK</button>
    </div>
    <a href='skip.php?<?php echo $lesson='311'; ?>'><div id="skip"><button type="input" class="btn">SKIP LESSON <i class="fa fa-arrow-right"></i> </button>
    </div></a>
    
   `
  }
  else {
    document.getElementById('skipback').innerHTML = `<div id="back"><button type="input" class="btn" 
  onclick="changeLesson(false)"><i class="fa fa-arrow-left"></i>    BACK</button>
  </div>
  <div id="skip"><button type="input" class="btn" id="skipbtn"
  onclick="changeLesson(true)">SKIP    <i class="fa fa-arrow-right"></i></button>
  </div>`}


  swiper311();
}

function changeLesson(next) {
  if (next) {
    lessonNumber++;
    if (lessonNumber <= 3) {
      app.nextStep(next);
    }
  }
  else {
    lessonNumber--;
    if (lessonNumber < 3) {
      app.nextStep(next);
    }
  }
  displayLesson311();

  if (lessonNumber >= 3) {
    document.getElementById("buttons").addEventListener("click", checkSelection);
    window.addEventListener("click", checkActiveSelection);
  }
}

let correct = false;
function checkSelection() {
  if (document.activeElement.id == lesson311[3][lessonNumber - 3][5]) {
    correct = true;
  }
}

function checkActiveSelection() {
  if (document.activeElement.id != lesson311[3][lessonNumber - 3][5]) {
    correct = false;
  }
}

function checkAnswer() {
  const audio = document.getElementsByTagName('audio');
  for (let i = 0; i < audio.length; i++) {
    audio[i].pause();
  }
  if (correct) {
    correct = false;
    if (lessonNumber != 5) {
      document.getElementById('correctaudio').play();
      changeLesson(true);
    }
    else {
      document.getElementById('clappingaudio').play();
      app.nextStep();
      displayCongrats();
    }
  }
  else {
    document.getElementById('wrongaudio').play();
  }
}


function swiper311() {
  var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 350,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: ".swiper-pagination"
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  swiper.on('transitionEnd', function () {
    const audio = document.getElementsByTagName('audio');
    const elements = document.getElementsByClassName('311');
    for (let i = 0; i < audio.length; i++) {
      audio[i].pause();
    }
    elements[swiper.realIndex].load();
    elements[swiper.realIndex].play();
    if (swiper.realIndex == lesson311[lessonNumber][0].length - 1) {
      document.getElementById('skipbtn').innerHTML = `I HAVE FINISHED READING<i class="fa fa-arrow-right"></i>`;
      document.getElementById('skipbtn').style.color = "white";
      document.getElementById('skipbtn').style.backgroundColor = "#051367";
      document.getElementById('skipbtn').addEventListener("mouseover", changeStyle);
      document.getElementById('skipbtn').addEventListener("mouseout", backStyle);
    }
  });
}

function changeStyle() {
  document.getElementById('skipbtn').style.backgroundColor = "green";

}

function backStyle() {
  document.getElementById('skipbtn').style.backgroundColor = "#051367";
}


var congrats = `<div class="js-container container-congrats"></div>
<div id="congrats">
  <div class="checkmark-circle">
    <div class="background"></div>
    <div class="checkmark draw"></div>
  </div>
  <h1>Congratulations!</h1>
  <p>You have fully mastered <strong>3.1.1 Newton's Universal Law of Gravitation.</strong> Well done!</p>
  <p>Now you are going to learn <strong>3.1.2 Problem Solving by using Universal Law of Gravitation</strong>, are you ready?</p>
  <button class="submit-btn" type="submit" onclick="window.location='lesson312.html'">Yes! I am ready to proceed.</button>
</div>  

`
function displayCongrats() {
  document.getElementById('lesson311').innerHTML = congrats;
  document.getElementById('skipback').style.display = "none";
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