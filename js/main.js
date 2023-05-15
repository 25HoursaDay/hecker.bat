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

/*Security Measures*/
document.oncontextmenu = rightClick;
function rightClick(clickEvent) {clickEvent.preventDefault();}  
