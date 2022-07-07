// document.writeln(`<a class="scrollto" href="lesson311.html#progressbar"><button>Test</button></a>`);
document.writeln(` <section id="lesson">
<h1 id="chapter3">
  <u>Chapter 3: Gravitation</u>
</h1>
<h1>
  3.1 Newton’s Universal Law of Gravitation
</h1><br>`);

document.writeln(`<div class="lesson-container">`);
for (i = 0; i < 6; i++) {
  document.writeln(`<div class="lesson-item" onClick="window.location='lesson311.html'">
          <img src="assets/img/solarsystem.jpg" class="img-fluid" alt="">
          <div class="lesson-info">
            <h4>3.1.1</h4>
            <p>Newton's Universal Law of Gravitation</p>
          </div>
        </div>
        `);
}
document.writeln(`</div>
<h1>
        3.2 Kepler's Law
      </h1><br>`);

document.writeln(`<div class="lesson-container1">`);
for (i = 0; i < 3; i++) {
  document.writeln(`<div class="lesson-item" onClick="window.location='lesson311.html'">
      <img src="assets/img/solarsystem.jpg" class="img-fluid" alt="">
      <div class="lesson-info">
        <h4>3.1.1</h4>
        <p>Newton's Universal Law of Gravitation</p>
      </div>
    </div>`);
}

document.writeln(`</div>
<h1>
        3.3 Man-made Satellites
      </h1><br>`);
document.writeln(`<div class="lesson-container2">`);
for (i = 0; i < 4; i++) {
  document.writeln(`<div class="lesson-item" onClick="window.location='lesson311.html'">
      <img src="assets/img/solarsystem.jpg" class="img-fluid" alt="">
        <div class="lesson-info">
          <h4>3.1.1</h4>
          <p>Newton's Universal Law of Gravitation</p>
        </div>
        </div>`);
}
document.writeln(`</div>
</section>`);