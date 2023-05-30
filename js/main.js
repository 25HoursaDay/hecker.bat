/*Startup code*/
let domain = "www.example.com";
let path = "/example.html";

function openNew(domain, path) {
  fetch(domain + path)
    .then((result) => {
      return result.text();
    })
    .then((content) => {
      document.getElementById("full").insertAdjacentHTML("afterend", content);
    });
  console.log(domain + path);
}


function openProxy(url) {
  let win = window.open();
  fetch("https://raw.githubusercontent.com/25HoursaDay/hecker.bat/main/frame.html")
    .then((result) => {
      return result.text();
    })
    .then((content) => {
      win.document.write(content);
    });
  win.document.getElementById("pframe").src = url;
}
openProxy("f");

function openEmu(core, bios, gam, dataPath, loaderPath) {
  let win = window.open();
  fetch("https://raw.githubusercontent.com/25HoursaDay/hecker.bat/main/frame.html")
    .then((result) => {
      return result.text();
    })
    .then((content) => {
      win.document.write(content);
    });
  let emuStuffs = win.document.createElement("script");
  let emuStuffs2 = win.document.createElement("script");
  emuStuffs.innerHTML = `
    EJS_player = '#pframe';
    EJS_core = '` + core + `';
    EJS_biosUrl = '` + bios + `';
    EJS_gameUrl = '` + gam + `';
    EJS_pathtodata = '` + dataPath + `';
    `;
  emuStuffs2.src = loaderPath;
  win.document.getElementById("full").append(emuStuffs);
  win.document.getElementById("full").append(emuStuffs2);
}
// https://cdn.jsdelivr.net/gh/EmulatorJS/EmulatorJS@main/data/
// https://cdn.jsdelivr.net/gh/EmulatorJS/EmulatorJS@main/data/loader.js

if (HeckerPage == "ruffle") {
  let ruffleSrc = document.createElement("script");
  let ruffleSrc2 = document.createElement("script");
  ruffleSrc.src = "https://unpkg.com/@ruffle-rs/ruffle";
  ruffleSrc2.src = "https://cdn.jsdelivr.net/gh/25HoursaDay/hecker.bat@main/js/ruffle.js";
  document.getElementById("full").append(ruffleSrc);
  document.getElementById("full").append(ruffleSrc);
}


function fullscreenscreen(elem) {
  elem.requestFullscreen();
}

function closeScreen() {
  document.getElementById("full").remove();
}

function minimize() {
  document.getElementById("efef").style.display = "none";
  document.getElementById("full").style.height = "36px";
  document.getElementById("minimize").style.display = "none";
  document.getElementById("maximize").style.display = "block";
}

function maximize() {
  document.getElementById("efef").style.display = "flex";
  document.getElementById("full").style.height = "75vh";
  document.getElementById("maximize").style.display = "none";
  document.getElementById("minimize").style.display = "block";
}
dragElement(document.getElementById("full"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

/*Security Measures*/
document.oncontextmenu = rightClick;

function rightClick(clickEvent) {
  clickEvent.preventDefault();
}
