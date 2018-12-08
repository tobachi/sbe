const electron = require("electron");
const TabGroup = require("electron-tabs");

const goBack = () => {
  const webview = tabGroup.getActiveTab().webview;
  if (webview && webview.canGoBack()) {
    webview.goBack();
  }
}

const goForward = () => {
  const webview = tabGroup.getActiveTab().webview;
  if (webview && webview.canGoForward()) {
    webview.goForward();
  }
}

const tabGroup = new TabGroup();

const addTab = (url, closable) => {
  if (!url) {
    url = "https://scrapbox.io/";
  }
  const tab = tabGroup.addTab({
      title: "new tab",
      src: url,
      visible: true,
      active: true,
      closable: closable,
      ready: tab => {
        tab.webview.addEventListener("new-window", e => {
          electron.shell.openExternal(e.url);
        });
        tab.webview.addEventListener("page-title-updated", e => {
          tab.setTitle(e.title);
        });
        tab.on("active", (tab) => {
          console.log(tab.title);
        });
      }
  });
  return tab;
}

addTab("https://scrapbox.io/", false);

onload = () => {
  document.querySelector("#btn_back").addEventListener('click', (event) => {
    goBack();
  });
  document.querySelector("#btn_forward").addEventListener('click', (event) => {
    goForward();
  });
  document.querySelector("#btn_newtab").addEventListener('click', (event) => {
    addTab();
  });
  document.querySelector("#btn_duplicate").addEventListener('click', (event) => {
    addTab(tabGroup.getActiveTab().webview.getURL(), true);
  })
  document.querySelector("#btn_reload").addEventListener('click', (event) => {
    tabGroup.getActiveTab().webview.reload();
  });
};

const { ipcRenderer } = require("electron");

const ElectronSearchText = require("electron-search-text");
const searcher = new ElectronSearchText({
  target: ".etabs-view.visible",
  input: ".search-input",
  count: ".search-count",
  box: ".search-box",
  visibleClass: ".state-visible"
});

ipcRenderer.on("toggleSearch", () => {
  searcher.emit("toggle");
});

ipcRenderer.on("goBack", () => {
  goBack();
});

ipcRenderer.on("goForward", () => {
  goForward();
});