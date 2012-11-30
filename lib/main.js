
let _ = require("l10n").get;
let winUtils = require("window-utils");
const { isBrowser } = require("api-utils/window/utils");
var delegate = {
	onTrack: function (window) {
		if (isBrowser ){
		let menu = window.document.getElementById("tabContextMenu");
		let newtab = window.document.createElementNS("http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul","menuitem");
		newtab.setAttribute("id", "contexttab-newtab");
		newtab.setAttribute("label", _("newtab_string"));
		newtab.setAttribute("accesskey", _("newtabaccesskey_string"));
		newtab.setAttribute("oncommand", "BrowserOpenTab();");
		menu.insertBefore(newtab, menu.firstChild);
} // End isBrowser
}  // End ontrack

/*
	onUntrack: function (window) {
		let menu = window.document.getElementById("tabContextMenu");
		let newtab = document.getElementById("contexttab-newtab");
menu.removeChild(newtab);
	} 
*/
}; // End delegate function

let tracker = new winUtils.WindowTracker(delegate);