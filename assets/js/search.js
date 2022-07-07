document.writeln(` <div class="col-lg-4">
<div class="sidebar">
  <h3 class="sidebar-title">Search</h3>
  <div class="sidebar-item search-form">
    <form action="">
      <input type="text" placeholder="3.1.2">
      <button type="submit"><i class="bi bi-search"></i></button>
    </form>
  </div><!-- End sidebar search formn-->
  <h3 class="sidebar-title">Subtopics</h3>
  <div class="sidebar-item categories">
    <ul id="portfolio-flters" onclick="myFunction()">
      <li data-filter=".filter-app" id="3.1"><a class="nav-link scrollto" href="#portfolio">3.1 Newton’s
          Universal Law of Gravitation
          <span>(6)</span></a></li>
      <li data-filter=".filter-card"><a class="nav-link scrollto" href="#portfolio">3.2 Kepler’s Laws
          <span>(3)</span></a></li>
      <li data-filter=".filter-web"><a class="nav-link scrollto" href="#portfolio">3.3 Man-made Satellites
          <span>(4)</span></a></li>
    </ul>
  </div><!-- End sidebar categories-->
  <script>function myFunction() {
      document.getElementById("portfolio").style.visibility = "visible";
    }</script>
</div><!-- End sidebar recent posts-->
</div><!-- End sidebar -->
</div><!-- End blog sidebar -->`);