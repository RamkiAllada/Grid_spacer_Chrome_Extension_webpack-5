chrome.browserAction.onClicked.addListener(function() {
  // Send a message to the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, function () {
  chrome.tabs.executeScript({ file: "../main.js" });
 });
});
