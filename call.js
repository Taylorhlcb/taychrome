chrome.webNavigation.onCommitted.addListener(function(details) {
  if (details.url.startsWith('https://www.twitch.tv')) {
    chrome.tabs.executeScript(null, {file: 'funclist.js'});
  }
});
