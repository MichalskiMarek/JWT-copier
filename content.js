chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "clicked_browser_action") {
    try {
      const token = JSON.parse(sessionStorage.getItem("ut")).access_token;
      navigator.clipboard.writeText(token);
    } catch (error) {}
  }
});
