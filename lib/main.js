let _ = require("l10n").get;
let winUtils = require("window-utils");
let { isBrowser } = require("api-utils/window/utils");
var delegate = {
	onTrack: function (window) {
		if (isBrowser(window) ){
		let menu = window.document.getElementById("tabContextMenu");
		let newtab = window.document.createElementNS("http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul","menuitem");
		newtab.setAttribute("id", "contexttab-newtab");
		newtab.setAttribute("label", _("newtab_string"));
		newtab.setAttribute("accesskey", _("newtabaccesskey_string"));
		newtab.setAttribute("oncommand", "BrowserOpenTab();");
		menu.insertBefore(newtab, menu.firstChild);
} // End isBrowser
}  // End ontrack
} // End delegate function

let tracker = new winUtils.WindowTracker(delegate);


// code to remove the menuitem when extension is disabled for satisfy requirement on AMO for pass a full review
// On uninstall the menuitem is not removed, see: https://bugzilla.mozilla.org/show_bug.cgi?id=627432

exports.onUnload = function(reason) {
	var unloader = {
		onTrack: function (window) {
			if (isBrowser(window) ){
				let menu = window.document.getElementById("tabContextMenu");
				let newtab = window.document.getElementById("contexttab-newtab");
				menu.removeChild(newtab);
			}
	}
}; // End unloader function
let remover = new winUtils.WindowTracker(unloader);
}