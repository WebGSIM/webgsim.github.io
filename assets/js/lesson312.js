slide312m = ["./assets/Lesson/312/slide1.svg", "./assets/Lesson/312/slide2.jpg", "./assets/Lesson/312/slide3.jpg", "./assets/Lesson/312/slide4.jpg", "./assets/Lesson/312/slide5.jpg", "./assets/Lesson/312/slide6.jpg", "./assets/Lesson/312/slide7.jpg"];
text312m = ["Assuming you are a physicist. (Click to continue...)", 'Based on the information given, you know that our Earth is lossing 50,000 tones of mass per year. (Click to continue...)'
  , "Therefore, you are requested to investigate the effect of mass on gravitational force. (Click to continue...)", "First, calculate gravitational force between apple and banana. (Click to continue...)", "Second, calculate gravitational force between apple and banana a year later. (Click to continue...)", "Repeat the calculation for banana and Earth surface. (Click to continue...)", "Repeat the calculation for Earth and Sun. (Click to continue...)"
  , "Fill in your calculation in this table."];
quiz312a = `
<div>
<div class="text-box texttable" id="text-box">
<h1 id="${slide312m.length}" class="text-problem">
</h1>
</div>
<div data-aos="fade-in">
<table class="table table-bordered table-dark input-table">
<tr class="table-title">
<td rowspan="2">&nbsp; Mass of Earth (kg)</td>
<td colspan="3">&nbsp;Gravitational Force (N)      </td>
</tr>
<tr class="table-title">
<td>&nbsp;Apple & Banana</td>
<td>&nbsp;Banana & Earth</td>
<td>&nbsp;Earth & Sun</td>
</tr>
<tr>
<td>&nbsp;5.97 &times; 10<sup>27</sup></td>
<td>&nbsp; <input type="text" class="newton" placeholder="6.67" id="0">
  &times; 10<sup>
      <input type="text" class="exponent" placeholder="-11" id="0"></sup>
</td>
<td>&nbsp; <input type="text" class="newton" id="1"> &times; 10<sup> <input type="text" class="exponent" id="1"></sup>
</td>
<td>&nbsp; <input type="text" class="newton" id="2"> &times; 10<sup> <input type="text" class="exponent" id="2"></sup>
</td>
</tr>
<tr>
<td>&nbsp;5.97 &times; 10<sup>27</sup> &minus; 5.00&times; 10<sup>7</sup> (Mass loss)</td>
<td>&nbsp; <input type="text" class="newton" id="3"> &times; 10<sup> <input type="text" class="exponent" id="3"></sup>
</td>
<td>&nbsp; <input type="text" class="newton" id="4"> &times; 10<sup> <input type="text" class="exponent" id="4"></sup>
</td>
<td>&nbsp; <input type="text" class="newton" id="5"> &times; 10<sup> <input type="text" class="exponent" id="5"></sup>
</td>
</tr>
</table>
<table class="table table-bordered table-dark input-table infotable" >
<tr>
<td ><strong>Physical constant and variable</strong></td>
<td ><div class="infoconstant">
<p>G = gravitational constant (6.67 × 10<sup>-11</sup> N m<sup>2</sup>
kg<sup>-2</sup>)</p>
<p>m = mass of apple or banana (1 kg)</p>
<p>M = mass of Sun (1.99 × 10<sup>30</sup> kg)</p>
<p>r = distance between apple and banana, banana and Earth surface (1 m)</p>
<p>R = distance between Earth and Sun (1.50 × 10<sup>11</sup> m)</p>
</div></td>
<td ><button class="submit submit312" id="submit" onclick="checkAnswer();">Submit</button>   <button class="hint" onclick="giveHint();">Answer</button></td></tr>
</table>
</div>
</div> `
quiz312b = ["Based on your findings, when mass decreases, gravitational force will ___________", "Decreases", "Increases", "1"];
quiz312c = ["Based on your findings, Earth is lossing mass, but it has no significant impact to us. ", "True", "False", "1"];
quiz312m = [quiz312a, quiz312b, quiz312c];

slide312r = ["./assets/Lesson/312/effectdistance/slide1.jpg", "./assets/Lesson/312/effectdistance/slide2.jpg", "./assets/Lesson/312/effectdistance/slide3.jpg", "./assets/Lesson/312/effectdistance/slide4.jpg", "./assets/Lesson/312/effectdistance/slide5.jpg", "./assets/Lesson/312/effectdistance/slide6.jpg"];
text312r = ["Assuming you are a scientist.", "You are interested in tidal formation.", "Based on the information just now, you know that distance between Earth and Moon is changing. ", "Therefore, you are requested to investigate the effect of distance on gravitational force. ", "First, calculate the gravitational force between Moon and 1 kg of seawater on Earth when Moon is farthest away from Earth. ", "Second, calculate the gravitational force between Moon and 1 kg of seawater on Earth when Moon is closest to Earth. ", "Fill in your calculation in this table. "];
quiz312d = ` <div>
<div class="text-box texttable" id="text-box">
<h1 id="${slide312r.length}" class="text-problem"></h1> </div><div data-aos="fade-in"> <table class="table table-bordered table-dark input-table">
<tr class="table-title">
    <td>&nbsp; Distance between Moon and Earth (m)</td>
    <td>&nbsp;Gravitational Force (N)
    </td>
</tr>

<tr>
    <td>&nbsp;4.06 &times; 10<sup>8</sup></td>
    <td>&nbsp; <input type="text" class="newton" id="0">
        &times; 10<sup>
            <input type="text" class="exponent" id="0"></sup>
    </td>

</tr>
<tr>
    <td>&nbsp;3.57 &times; 10<sup>8</sup></td>
    <td>&nbsp; <input type="text" class="newton" id="3"> &times; 10<sup> <input type="text" class="exponent"
                id="3"></sup>
    </td>
</tr>
</table>
<table class="table table-bordered table-dark input-table infotable" >
<tr>
<td ><strong>Physical constant and variable</strong></td>
<td ><div class="infoconstant">
<p>G = gravitational constant (6.67 × 10<sup>-11</sup> N m<sup>2</sup>
    kg<sup>-2</sup>)</p>
<p>m = mass of seawater (1 kg)</p>
<p>M = mass of Moon (7.35 × 10<sup>22</sup> kg)</p>
</div></td>
<td ><button class="submit submit312" id="submit" onclick="checkAnswer();">Submit</button>   <button class="hint" onclick="giveHint();">Answer</button></td></tr>
</table>
</div></div>`
quiz312e = ["Based on your findings, when distance decreases, gravitational force will ___________", "Decreases", "Increases", "2"];
quiz312f = ["Based on your findings, when Moon is closer to Earth, the tides is higher. ", "True", "False", "1"];
quiz312r = [quiz312d, quiz312e, quiz312f];

lesson312 = [];
html312 = [``, [], ``, []];

lesson312[0] = ["./assets/Lesson/312/earthlight.jpg", "./assets/Lesson/312/earthlighter.mp4", "Mass of Earth is decreasing!", `Scientists estimate that the Earth gains about 40,000 tonnes of material each year from the accretion of
meteoric dust and debris
from space. They also estimate that about 95,000 tonnes of hydrogen gas are lost from the Earth’s
atmosphere
to outer space each year. Although there are other processes involved, such as the loss of mass due to
radioactive decay within the
Earth’s core (about 160 tonnes a year), and helium loss from the atmosphere (about 1,600 tonnes a year),
these are small effects. Annually, the amount of mass launched into Earth orbit is negligible by
comparison, of the order of a few hundred tonnes.`];
lesson312[1] = [slide312m, text312m, quiz312m];
lesson312[2] = ["./assets/Lesson/312/apogee.jpg", "./assets/Lesson/312/moonapogee.mp4", "Distance between Earth and Moon is changing!", `The Moon's orbit periodically grows rounder and then more oval; it is never a perfect circle.
The point at which it is nearest Earth each month is called its perigee (this varies throughout the year).
The point at which the Moon is farthest from Earth each month is called its apogee (this varies throughout the year as well).
In recent times, the news media has taken to calling a full Moon near perigee a “Supermoon” because its nearness to Earth causes the Moon to appear bigger and brighter. This effect can be enhanced by what we call the “Moon Illusion.”`];
lesson312[3] = [slide312r, text312r, quiz312r];



for (let i = 0; i <= 2; i += 2) {
  html312[i] = `<div class="row videoandtext">
    <div class="col-sm-6 videodiv">
      <div class="videobox text-center" dir="ltr">
        <div class="neo-video-player" id="popout-video-player">
          <div class="video-control-part">
            <div class="video-control-general-part">
              <div class="play-btn video-neu-btn"></div>
              <div class="video-neu-btn drop-btn">
                <div class="box-sound">
                  <div class="volume">
                    <div class="bar-volume"></div>
                  </div>
                </div>
                <div class="sound-btn video-neu-btn"></div>
              </div>
            </div>
            <div class="video-control-bar-part">
              <div class="bar-bg">
                <div class="bar-progress">
                  <div class="bar-time">
                    <div class="bar-time-box"><span class="current">00:00</span><span> / </span><span
                        class="duration">00:00</span></div>
                    <div class="bar-pin"></div>
                  </div>
                </div>
                <div class="bar-buffer"></div>
              </div>
            </div>
            <div class="video-control-nav-part">
              <div class="fullscreen-btn video-neu-btn"></div>
            </div>
          </div>
          <video class="video-element" id="video-element" preload="auto"
            poster=${lesson312[i][0]}>
            <source src=${lesson312[i][1]}>
          </video>
        </div>
      </div>
    </div>
    <div class="col-sm-6 infovideo">
     
      <h2>${lesson312[i][2]}</h2>
      <p>${lesson312[i][3]}
      </p>
    </div>
    </div>`
}
extraslide312 = [];
extraslide312[1] = ["./assets/Lesson/312s/slide1.jpg", "./assets/Lesson/312s/slide2.jpg", "./assets/Lesson/312s/slide3.jpg", "./assets/Lesson/312s/slide4.jpg", "./assets/Lesson/312s/slide5.jpg", "./assets/Lesson/312s/slide6.jpg", "./assets/Lesson/312s/slide7.jpg"];
extraslide312[3] = ["./assets/Lesson/312/effectdistances/slide1.jpg", "./assets/Lesson/312/effectdistances/slide2.jpg", "./assets/Lesson/312/effectdistances/slide3.jpg", "./assets/Lesson/312/effectdistances/slide4.jpg", "./assets/Lesson/312/effectdistances/slide5.jpg", "./assets/Lesson/312/effectdistances/slide6.jpg"];
for (let i = 1; i <= 3; i += 2) {
  for (let n = 0; n < lesson312[i][0].length + lesson312[i][2].length; n++) {
    if (n < lesson312[i][0].length) {
      html312[i][n] = `<div data-aos="fade-in" class="centerstory">
      <picture>
      <source media="(max-width:670px)" srcset=${extraslide312[i][n]}>
      <img src="${lesson312[i][0][n]}">
      </picture>
      <div class="text-box">
          <h1 id="${n}" class="text-problem">
          </h1>
      </div>
      </div>`
    }
    else if (n == lesson312[i][0].length) {
      html312[i][n] = lesson312[i][2][0]
    }
    else {
      html312[i][n] = `<div class="quiz-container" id="quiz" data-aos="fade-in">
      <div>
      <div class="quiz-header">
        <h2 id="question">${lesson312[i][2][n - lesson312[i][0].length][0]} </h2>
        <div class="buttons" id="buttons">
        <button class="btn0" id="1">${lesson312[i][2][n - lesson312[i][0].length][1]}</button>
        <button class="btn0" id="2">${lesson312[i][2][n - lesson312[i][0].length][2]}</button>
      </div>
      </div>
      <div class="submitquiz">
      <button class="submit" id="submit" onclick="changeQuiz()" >Submit</button>
      </div>
      </div>
      </div>`
    }
  }
}

let lessonNumber = -1;
let slideNumber = -1;
let stop = true;
let speed = 50;
let i = 0;
let ansnewton = [6.67, 9.81, 3.52, 6.67, 9.81, 3.52];
let ansexponent = [-11, 0, 22, -11, 0, 22];
let correctTable = 0;
let correct = true;

function changeLesson(next) {
  app.nextStep(next);
  slideNumber = -1;
  stop = true;
  if (next) {
    lessonNumber++;
  }
  else {
    lessonNumber--;
  }
  displayButton();

  if (lessonNumber == 0 || lessonNumber == 2) {
    document.getElementById('lesson312').innerHTML = html312[lessonNumber];
    document.getElementById('video-element').addEventListener('timeupdate', checkTime);
    $(".neo-video-player").each(function () {
      // Video
      var $video_container = $(this);
      var $video = $(this).find("#video-element");

      // set download link
      $('#download-video').attr('href', $('#video-element source').attr('src'));

      // Video Controls
      var $video_controls = $(this).find(".video-control-part");
      var $progress_bar = $(this).find(".bar-progress");
      var $progress = $(this).find(".bar-time");

      var $buffer_bar = $(this).find(".bar-buffer");
      var $play_button = $(this).find(".play-btn");
      var $sound_button = $(this).find(".sound-btn");

      var $volume_wrapper = $(this).find(".volume");
      var $volume_bar = $(this).find(".bar-volume");

      var $full_screen_btn = $(this).find(".fullscreen-btn");
      var $current = $(this).find(".current");
      var $duration = $(this).find(".duration");
      var $fast_fwd = $(this).find(".fastFwd");

      // Toggles play/pause for the video
      function playVideo() {
        if ($video[0].paused) {
          $video[0].play();
          $video_controls.addClass("playing");
          $play_button.addClass("pause");

          if ($video_container.parents(".video-header").length) {
            $video_container.parents(".video-header").addClass("playing");
          }
        } else {
          $video[0].pause();
          $video_controls.removeClass("playing");
          $play_button.removeClass("pause");
          $video_container.parents(".video-header").removeClass("playing");
        }
      }

      function updateVolume(x, vol) {
        if (vol) {
          $percentage = vol * 100;
        } else {
          $position = x - $volume_wrapper.offset().left;
          $percentage = 100 * $position / $volume_wrapper.width();
        }

        if ($percentage > 100) {
          $percentage = 100;
        }
        if ($percentage < 0) {
          $percentage = 0;
        }

        //update volume bar and video volume
        $volume_bar.css("width", $percentage + "%");
        $video[0].volume = $percentage / 100;

        if ($video[0].volume == 0) {
          $sound_button.addClass("mute");
        } else if ($video[0].volume > 0.5) {
          $sound_button.removeClass("mute").removeClass("low");
        } else {
          $sound_button.removeClass("mute").addClass("low");
        }
      }

      function changeSpeed() {
        if ($video[0].playbackRate === 1) {
          $video[0].playbackRate = 1.25;
          $fast_fwd.val("Speed : 1.25x");
        } else if ($video[0].playbackRate === 1.25) {
          $video[0].playbackRate = 1.5;
          $fast_fwd.val("Speed : 1.5x");
        } else if ($video[0].playbackRate === 1.5) {
          $video[0].playbackRate = 1.75;
          $fast_fwd.val("Speed : 1.75x");
        } else if ($video[0].playbackRate === 1.75) {
          $video[0].playbackRate = 2;
          $fast_fwd.val("Speed : 2x");
        } else if ($video[0].playbackRate === 2) {
          $video[0].playbackRate = 1;
          $fast_fwd.val("Speed : 1x");
        }
      }

      function launchFullscreen() {
        if ($video[0].requestFullscreen) {
          $video[0].requestFullscreen();
        } else if ($video[0].mozRequestFullScreen) {
          $video[0].mozRequestFullScreen();
        } else if ($video[0].webkitRequestFullscreen) {
          $video[0].webkitRequestFullscreen();
        } else if ($video[0].msRequestFullscreen) {
          $video[0].msRequestFullscreen();
        }
      }

      function time_format(seconds) {
        var m = Math.floor(seconds / 60) < 10
          ? "0" + Math.floor(seconds / 60)
          : Math.floor(seconds / 60);
        var s = Math.floor(seconds - m * 60) < 10
          ? "0" + Math.floor(seconds - m * 60)
          : Math.floor(seconds - m * 60);
        return m + ":" + s;
      }

      function startBuffer() {
        $current_buffer = $video[0].buffered.end(0);
        $max_duration = $video[0].duration;
        $perc = 100 * $current_buffer / $max_duration;
        $buffer_bar.css("width", $perc + "%");

        if ($current_buffer < $max_duration) {
          setTimeout(startBuffer, 500);
        }
      }

      function updatebar(x) {
        $position = x - $progress.offset().left;
        $percentage = 100 * $position / $progress_bar.width();
        if ($percentage > 100) {
          $percentage = 100;
        }
        if ($percentage < 0) {
          $percentage = 0;
        }
        $progress.css("width", $percentage + "%");
        $video[0].currentTime = $video[0].duration * $percentage / 100;
      }

      $video.on("loadedmetadata", function () {
        $current.text(time_format(0));
        $duration.text(time_format($video[0].duration));
        updateVolume(0, 0.7);
        setTimeout(startBuffer, 150);
      });

      // Play/pause on video click
      $video.click(function () {
        playVideo();
      });

      // Video duration timer
      $video.on("timeupdate", function () {
        $current.text(time_format($video[0].currentTime));
        $duration.text(time_format($video[0].duration));
        var currentPos = $video[0].currentTime;
        var maxduration = $video[0].duration;
        var perc = 100 * $video[0].currentTime / $video[0].duration;
        $progress.css("width", perc + "%");
      });

      /* VIDEO CONTROLS
        ------------------------------------------------------- */

      // Hide button controls when video is playing
      $video_container.on("mouseleave", function () {
        if ($video[0].paused === false) {
          $video_container.addClass("playing");
        }
      });

      // Show button controls on hover
      $video_container.on("mouseover", function () { });

      // Play/pause on button click
      $play_button.click(function () {
        playVideo();
      });

      // Fast Forward Button
      $fast_fwd.click(function () {
        changeSpeed();
      });

      // Volume Drag
      var volumeDrag = false;
      $volume_wrapper.on("mousedown", function (e) {
        volumeDrag = true;
        $video[0].muted = false;
        $sound_button.removeClass("mute");
        updateVolume(e.pageX);
      });

      $(document).on("mouseup", function (e) {
        if (volumeDrag) {
          volumeDrag = false;
          updateVolume(e.pageX);
        }
      });

      $(document).on("mousemove", function (e) {
        if (volumeDrag) {
          updateVolume(e.pageX);
        }
      });

      // Mute video on button click
      $sound_button.click(function () {
        $video[0].muted = !$video[0].muted;
        $(this).toggleClass("mute");
        if ($video[0].muted) {
          $volume_bar.css("width", 0);
        } else {
          $volume_bar.css("width", $video[0].volume * 100 + "%");
        }
      });

      // Full Screen Button
      $full_screen_btn.click(function () {
        launchFullscreen();
      });

      // VIDEO PROGRESS BAR
      //when video timebar clicked
      var timeDrag = false; /* check for drag event */
      $progress_bar.on("mousedown", function (e) {
        timeDrag = true;
        updatebar(e.pageX);
      });
      $(document).on("mouseup", function (e) {
        if (timeDrag) {
          timeDrag = false;
          updatebar(e.pageX);
        }
      });
      $(document).on("mousemove", function (e) {
        if (timeDrag) {
          updatebar(e.pageX);
        }
      });
    });
    // window.removeEventListener("keydown", fastSlide);
  }
  else if (lessonNumber == 1 || lessonNumber == 3) {
    document.getElementById('lesson312').innerHTML = `<div class="slideshow-container" id="lesson312slide" onclick="changeSlide()"></div>`;
    changeSlide();
    // window.addEventListener("keydown", fastSlide);
  }

  else {
    displayCongrats();
  }
  if (lessonNumber == 3) {
    ansnewton = [2.97, 3.85];
    ansexponent = [-5, -5];
    window.removeEventListener("click", checkActiveSelection);
  }
  else {
    ansnewton = [6.67, 9.81, 3.52, 6.67, 9.81, 3.52];
    ansexponent = [-11, 0, 22, -11, 0, 22];
  }
}


function typeWriter() {
  if (lessonNumber == 1 || lessonNumber == 3) {
    if (i < lesson312[lessonNumber][1][slideNumber].length) {
      stop = false;
      document.getElementById(`${slideNumber}`).innerHTML += lesson312[lessonNumber][1][slideNumber].charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    else {
      stop = true;
    }
  }

}

function changeSlide() {
  if (slideNumber < lesson312[lessonNumber][0].length) {
    if (stop) {
      i = 0;
      slideNumber++;
      if (slideNumber == lesson312[lessonNumber][0].length) {
        document.getElementById('lesson312').innerHTML = html312[lessonNumber][slideNumber];
        // window.removeEventListener("keydown", fastSlide);
      }

      else {
        document.getElementById('lesson312slide').innerHTML = html312[lessonNumber][slideNumber];
        document.getElementById('gameaudio').play();
      }
      typeWriter();
    }
    else {
      document.getElementById(`${slideNumber}`).innerHTML = lesson312[lessonNumber][1][slideNumber];
      i = lesson312[lessonNumber][1][slideNumber].length;
    }
  }
}

// function fastSlide() {
//   stop = true;
//   changeSlide();
// }

function checkAnswer() {
  correct = true;
  let newton = document.getElementsByClassName('newton');
  let exponent = document.getElementsByClassName('exponent');
  for (let i = 0; i < newton.length; i++) {
    if (newton[i].value == ansnewton[i] && exponent[i].value == ansexponent[i]) {
      correctTable++;
    }
  }
  if (correctTable == newton.length) {
    changeQuiz();
    correct = true;
  }

  else {
    document.getElementById('wrongaudio').play();
  }
  correctTable = 0;
}

function giveHint() {
  let newton = document.getElementsByClassName('newton');
  let exponent = document.getElementsByClassName('exponent');
  for (let i = 0; i < newton.length; i++) {
    newton[i].value = ansnewton[i];
    exponent[i].value = ansexponent[i];
  }
}

function changeQuiz() {
  if (correct) {
    document.getElementById('correctaudio').play();
    slideNumber++;
    if (slideNumber < html312[lessonNumber].length) {
      document.getElementById('lesson312').innerHTML = html312[lessonNumber][slideNumber];
      document.getElementById("buttons").addEventListener("click", checkSelection);
      window.addEventListener("click", checkActiveSelection);
    }
    else {
      document.getElementById("buttons").removeEventListener("click", checkSelection);
      changeLesson(true);

    }

  }
  else { document.getElementById('wrongaudio').play(); }
  correct = false;
}

function checkSelection() {
  if (document.activeElement.id ==
    lesson312[lessonNumber][2][slideNumber - lesson312[lessonNumber][1].length + 1][3]) {
    correct = true;
  }
  else {
    correct = false;
  }
}

function checkActiveSelection() {
  if (document.activeElement.id !=
    lesson312[lessonNumber][2][slideNumber - lesson312[lessonNumber][1].length + 1][3]) {
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
  <p>You have fully mastered <strong>3.1.1 Newton's Universal Law of Gravitation.</strong> Well done!</p>
  <p>Now you are going to learn <strong>3.1.2 Problem Solving by using Universal Law of Gravitation</strong>, are you ready?</p>
  <button class="submit-btn" type="submit" onclick="window.location='lesson321.html'">Yes! I am ready to proceed.</button>
</div>  

`
function displayCongrats() {
  document.getElementById('lesson312').innerHTML = congrats;
  document.getElementById('skipback').style.display = "none";
  document.getElementById('clappingaudio').play();
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


function checkTime() {
  if (document.getElementById('video-element').currentTime >= document.getElementById('video-element').duration * 0.8) {
    document.getElementById('skipbtn').innerHTML = `I HAVE FINISHED WATCHING<i class="fa fa-arrow-right"></i>`;
    document.getElementById('skipbtn').setAttribute('class', 'btn answerquestion');
  }
}



function displayButton() {
  if (lessonNumber == 0) {
    document.getElementById('skipback').innerHTML = `<div id="back"><button type="input" class="btn" onclick="window.location='lesson311.html'"><i class="fa fa-arrow-left"></i>
    PREV</button>
</div>
<div id="skip"><button type="input" class="btn" id="skipbtn" onclick="changeLesson(true)">SKIP <i
      class="fa fa-arrow-right"></i></button>
</div>`
  }

  else if (lessonNumber == 3) {
    document.getElementById('skipback').innerHTML = `<div id="back"><button type="input" class="btn" 
    onclick="changeLesson(false)"><i class="fa fa-arrow-left"></i>    BACK</button>
    </div>
    <div id="skip"><button type="input" class="btn" 
    onclick="window.location='lesson321.html'">NEXT<i class="fa fa-arrow-right"></i> </button>
    </div>
   `
  }

  else {
    document.getElementById('skipback').innerHTML = `<div id="back"><button type="input" class="btn" 
  onclick="changeLesson(false)"><i class="fa fa-arrow-left"></i>    BACK</button>
  </div>
  <div id="skip"><button type="input" class="btn" id="skipbtn"
  onclick="changeLesson(true)">SKIP    <i class="fa fa-arrow-right"></i></button>
  </div>`
  }

}