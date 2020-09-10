const token = JSON.parse(window.sessionStorage.ut).access_token;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "clicked_browser_action") {
    navigator.clipboard.writeText(token);
  }
});
