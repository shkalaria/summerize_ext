// listening for an event / one-time requests
// coming from the popup
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "color-divs":
            colorDivs();
            //alert("why");
        break;
    }
    return true;
});

chrome.browserAction.onClicked.addListener(function(tab) {
    colorDivs();
});

// send a message to the content script
var colorDivs = function() {
    chrome.tabs.getSelected(null, function(tab){
        //chrome.tabs.sendMessage(tab.id, {type: "colors-div", color: "#F00"});
        chrome.tabs.sendMessage(tab.id, {message: "Example", type: "colors-div", color: "#F00"});
        // setting a badge
        chrome.browserAction.setBadgeText({text: "red!"});
    });
}