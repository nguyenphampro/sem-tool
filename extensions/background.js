// Check whether new version is installed
chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        //alert("This is a first install!");
        chrome.tabs.create({'url': chrome.extension.getURL('app/welcome.html')}, function(tab) {
  			// Tab opened.
		});
    }else if(details.reason == "update"){
        //var thisVersion = chrome.runtime.getManifest().version;
        //alert("Updated from " + details.previousVersion + " to " + thisVersion + "!");

        chrome.tabs.create({'url': chrome.extension.getURL('app/welcome.html')}, function(tab) {
  			// Tab opened.
		});
    }
});
chrome.browserAction.onClicked.addListener(function (request) {
})
chrome.extension.onConnect.addListener(function (request) {
});
chrome.runtime.onMessage.addListener(function (request) {
    if (request.msg == "__build_Grid") {
        LIFT_APP.grid()
    }
    if (request.msg == "__build_Ruler") {
        LIFT_APP.ruler()
    }
});