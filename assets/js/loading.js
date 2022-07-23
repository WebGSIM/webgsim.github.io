document.writeln(`  <div class='containerload loading'>
<div class='loader'>
  <div class='loader--dot'></div>
  <div class='loader--dot'></div>
  <div class='loader--dot'></div>
  <div class='loader--dot'></div>
  <div class='loader--dot'></div>
  <div class='loader--dot'></div>
  <div class='loader--text'></div>
</div>
</div>`);
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".loading").style.visibility = "visible";
    } else {
        document.querySelector(".loading").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
        window.scrollTo({
            top: 200,
            behavior: 'smooth'
        });
        if (checkmobile) {
            mediaSimulation();
        }

    }
};