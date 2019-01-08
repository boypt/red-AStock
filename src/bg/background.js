chrome.browserAction.onClicked.addListener(function() {
    var index = chrome.extension.getURL('index.html');
    chrome.tabs.getAllInWindow(undefined, function(tabs) {
      for (var i = 0, tab; tab = tabs[i]; i++) {
          if (tab.url && tab.url == index) {
              chrome.tabs.update(tab.id, { selected: true });
              return;
          }
      }
      chrome.tabs.create({ url: index });
    });
});

