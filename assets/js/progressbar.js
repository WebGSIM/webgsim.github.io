document.writeln(`<div id="progressbar">
<div id="app" :class="progressClasses">
  <div class="progress__bg"></div>
  <template v-for="(step, index) in steps">
  <div class="progresssteps">
    <div :class="stepClasses(index)">
      <div class="progress__indicator">
        <i class="fa fa-check"></i>
      </div>
      <div class="progress__label" id="progress__label">
        {{step.label}}
      </div>
    </div>
    </div>
  </template>
</div>
<audio src="./assets/Lesson/correctaudio.mp3" id="correctaudio"></audio>
<audio src="./assets/Lesson/wrongaudio.mp3" id="wrongaudio"></audio>
<audio src="./assets/Lesson/clappingaudio.mp3" id="clappingaudio"></audio>
<audio src="./assets/Lesson/gameaudio.mp3" id="gameaudio"></audio>
</div>
`)