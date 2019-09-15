var navigationHTML = `
  <nav>
    <img id="logo" src="images/logo.png" onclick="window.location.href='index.html'" />
    <a onclick="toggleDropdown()">Products &#9662;</span>
    <a href="contact.html">Contact</a>
    <a href="videos.html">Videos</a>
    <a href="locations.html">Locations</a>
    <span id="hamburger" onclick="toggleOverlay()">&#9776;</span>
  </nav>
  <div id="dropdown">
    <a href="chemicals.html">Chemicals</a>
    <a href="equipment.html">Equipment</a>
    <a href="lubricants.html">Lubricants</a>
    <a href="shop-supplies.html">Shop Supplies</a>
  </div>
  <div id="overlay">
    <img class="overlay-logo" src="images/logo.png" onclick="window.location.href='index.html'" />
    <a href="chemicals.html">Chemicals</a>
    <a href="equipment.html">Equipment</a>
    <a href="lubricants.html">Lubricants</a>
    <a href="shop-supplies.html">Shop Supplies</a>
    <a href="contact.html">Contact</a>
    <a href="videos.html">Videos</a>
    <a href="locations.html">Locations</a>
    <button onclick="toggleOverlay()">Exit menu</button>
  </div>
`;

var footerHTML = `
  <footer>
    &#169; 2019-2020 Auto Co.
  </footer>
`

function toggleDropdown () {
    var dropdown = document.getElementById("dropdown");
    if (dropdown.style.display === "none") {
        dropdown.style.display = "flex";
      } else {
        dropdown.style.display = "none";
      }
}

function toggleOverlay () {
    var overlay = document.getElementById("overlay");
    if (overlay.style.display === "none") {
        overlay.style.display = "flex";
      } else {
        overlay.style.display = "none";
      }
}

function onLoad () {
  document.getElementById("nav").innerHTML = navigationHTML;
  document.getElementById("footer").innerHTML = footerHTML;
}