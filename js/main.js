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

/*Security Measures*/
document.oncontextmenu = rightClick;
function rightClick(clickEvent) {clickEvent.preventDefault();}  
