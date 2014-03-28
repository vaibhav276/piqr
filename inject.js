'use strict';

$(function () {
	var dialog = null;

	var init = function () {
		var dialogHtml = '<div id="piQRCodeDlg">  <h3>PiQR</h3>  <p><div id="piQRCode"></div></p> <p> Scan QR code to get the selected text on your phone/tablet</p>  <button id="piQRCodeExit">Exit</button> </div>';
        $('body').append(dialogHtml);
		dialog = $('#piQRCodeDlg');
		dialog.hide();
	}();

    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
		$('#piQRCode').html('');
        new QRCode(document.getElementById('piQRCode'), {
			text: request.text,
			width: 250,
			height: 250,
			colorDark: '#000',
			colorLight: '#edf4fc'
		});
		dialog.show();
        sendResponse('PiQR Code draw complete');
    });

	$('#piQRCodeExit').on('click', function () {
		dialog.hide();
	});
});
