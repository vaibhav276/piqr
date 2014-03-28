'use strict';

var piQRMenuItem = chrome.contextMenus.create({
    'title': 'PiQR \'%s\'',
    'contexts': ['selection'],
    'onclick': function (info, tab) {
        piQRMenuItemOnClick(info, tab);
    }
});

var piQRMenuItemOnClick = function (info, tab) {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            text: info.selectionText
        }, function (response) {
        });
    });
}
