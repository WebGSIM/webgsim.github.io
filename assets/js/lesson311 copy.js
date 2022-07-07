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


var arr = [];
arr[0] = [slide311h, txt311h, audio311h];
arr[1] = [slide311t, txt311t, audio311t];
arr[2] = [slide311c, txt311c, audio311c];

let lessonNumber = -1;
changeLesson(true);

let quiz1 = `<div class="quiz-container" id="quiz" data-aos="fade-in">
<div class="quiz-header">
  <h2 id="question">Question 1: Who formulated the universal law of gravitation? </h2>
  <div class="buttons" id="buttons"> <!--Creating four button element for four options-->
  <button class="btn0" id="answer"><span id="answer"></span>Isaac Newton</button> <!--populating the choices through javascript-->
  <button class="btn1"><span id="choice1"></span>
  Galileo Galilei
   </button>
  <button class="btn2"><span id="choice2"></span>Quah Kah Chun</button>
  <button class="btn3"><span id="choice3"></span>Marie Curie</button>
</div>
</div>
<button class="submit" id="submitq1" >Submit</button>
</div>
<div id="skipback" class="skipbacklast">
<div id="back"><button type="input" class="btn" 
onclick="changeLesson(false)"><i class="fa fa-arrow-left"></i>    BACK</button>
</div>
<div id="skip"><button type="input" class="btn" 
onclick="window.location='lesson312.html'">END  </button>
</div>
</div>`

let quiz2 = `<div class="quiz-container" id="quiz" data-aos="fade-in">
<div class="quiz-header">
  <h2 id="question">Question 2: Which statement correctly describes Newton's universal law of gravitation? </h2>
  <div class="buttons"> <!--Creating four button element for four options-->
  <button class="btn0" id="answer"><span id="choice0"></span>When mass of bodies increases, gravitational force increases</button> <!--populating the choices through javascript-->
  <button class="btn1"><span id="choice1">When distance between two bodies increases, gravitational force increases</span>
  Galileo Galilei
   </button>
  <button class="btn2"><span id="choice2"></span>Gravitational force is directly proportional to the product of the distances</button>
  <button class="btn3"><span id="choice3"></span>Gravitational force is inversely proportional to the mass</button>
</div>
</div>
<button class="submit" id="submitq2" onclick="changeQuiz()">Submit</button>
</div>
<div id="skipback" class="skipbacklast">
<div id="back"><button type="input" class="btn" 
onclick="changeLesson(false)"><i class="fa fa-arrow-left"></i>    BACK</button>
</div>
<div id="skip"><button type="input" class="btn" 
onclick="window.location='lesson312.html'">END  </button>
</div>
</div>`

function lesson311(slide, txt, audio, n) {
  let script = txt.split('@');
  var result = `
  <a href="#myModal" class="trigger-btn" data-toggle="modal">
  <div><button id="finish" type="input" class="btn btn-success" style="visibility:hidden">I have finished
      reading</button></div>
</a><div class="swiper-container swiper" id="portfolio2" data-aos="fade-right">
  <div class="swiper-wrapper">
    `;
  for (let i = 0; i < slide.length; i++) {
    if (i != slide.length - 1) {
      result += `<div class="swiper-slide" id="swiper-lesson">
                            <div class="picture2">
                              <img src=${slide[i]} alt="">
                            </div>
                              <div class="detail">
                                <h3>${script[i]}</span>
                              </div>
                            </div>
                            <audio class='311' src=${audio[i]}></audio>`;
    }
    else {
      result += `<div class="swiper-slide" id="swiper-lesson">
      <div class="picture2">
        <img src=${slide[i]} alt="">
      </div>
        <div class="detail">
          <h3>${script[i]}</span>
          <div style="padding-top:10px">
          <button class="btn btn-success">I have finished reading</button>
          </div>
        </div>
      </div>
      <audio class='311' src=${audio[i]}></audio>`;
    }

  }
  result += ` </div>
  <div class="swiper-pagination"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
  </div>
  `;
  if (n == 0) {
    result += ` <div id="skipback">
    <div id="back"><button type="input" class="btn" 
    onclick="window.location='lesson.html'"><i class="fa fa-home"></i>    BACK</button>
    </div>
    <div id="skip"><button type="input" class="btn" 
    onclick="changeLesson(true)">SKIP    <i class="fa fa-arrow-right"></i></button>
    </div>
    </div>`;
  }
  else if (n == 1) {
    result += `<div id="skipback">
    <div id="back"><button type="input" class="btn" 
    onclick="changeLesson(false)"><i class="fa fa-arrow-left"></i>    BACK</button>
    </div>
    <div id="skip"><button type="input" class="btn" 
    onclick="changeLesson(true)">SKIP    <i class="fa fa-arrow-right"></i></button>
    </div>
    </div>`;

  }
  else if (n == 2) {
    result += ` <div id="skipback">
    <div id="back"><button type="input" class="btn" 
    onclick="changeLesson(false)"><i class="fa fa-arrow-left"></i>    BACK</button>
    </div>
    <div id="skip"><button type="input" class="btn" 
    onclick="changeLesson(true)">SKIP    <i class="fa fa-arrow-right"></i></button>
    </div>
    </div>`;
  }
  else if (n == 3) {
    result += ` <div id="skipback">
    <div id="back"><button type="input" class="btn" 
    onclick="changeLesson(false)"><i class="fa fa-arrow-left"></i>    BACK</button>
    </div>
    <div id="skip"><button type="input" class="btn" 
    onclick="changeLesson(true)">SKIP    <i class="fa fa-arrow-right"></i></button>
    </div>
    </div>`;
  }
  document.getElementById('lesson311').innerHTML = result;
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
    if (swiper.realIndex == slide.length - 1) {
      document.getElementById('finish').style.visibility = "visible";
      if (lessonNumber == 3) {
        document.getElementById('modal-footer').innerHTML = `<button class="btn btn-success btn-block" data-dismiss="modal" onclick="location.href = 'lesson312.html';">Yes. I
        am
        ready to proceed!</button>`
      }
    }
  });
}
function changeLesson(nextlesson) {
  if (nextlesson) {
    lessonNumber++;
    if (lessonNumber < arr.length) {
      lesson311(arr[lessonNumber][0], arr[lessonNumber][1], arr[lessonNumber][2], lessonNumber);
    }
    if (lessonNumber == 1) {
      app.nextStep(nextlesson);
    }
    else if (lessonNumber == 2) {
      app.nextStep(nextlesson);
    }
    else if (lessonNumber == 3) {
      app.nextStep(nextlesson);
      document.getElementById('lesson311').innerHTML = quiz1;
      document.getElementById("buttons").addEventListener("click", checkAnswer);
      document.getElementById("submitq1").addEventListener("click", changeQuiz);

    }
    else if (lessonNumber == 4) {
      app.nextStep(nextlesson);

    }
  }
  else {
    lessonNumber--;
    if (lessonNumber >= 0) {
      lesson311(arr[lessonNumber][0], arr[lessonNumber][1], arr[lessonNumber][2], lessonNumber);
    }
    if (lessonNumber == 0) {
      app.nextStep(nextlesson);
    }
    else if (lessonNumber == 1) {
      app.nextStep(nextlesson);
    }
    else if (lessonNumber == 2) {
      app.nextStep(nextlesson);
    }
    else if (lessonNumber == 3) {
      app.nextStep(nextlesson);
    }
  }
}

let correct = false;
function changeQuiz() {

  if (correct) {
    if (document.getElementById("submitq2")) {
      app.nextStep();

    }
    document.getElementById('lesson311').innerHTML = quiz2;
    document.getElementById("submitq2").addEventListener("click", changeQuiz);
  }

}

function checkAnswer() {
  if (document.activeElement.id == 'answer') {
    correct = true;
  }
  else {
    correct = false;
  }
}

