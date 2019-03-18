'use strict';

let switchButton = document.getElementById('switch-button');

chrome.storage.sync.get('checked', (data) => {
  if (data.checked) {
    switchButton.checked = data.checked;
  }
  //  chrome.extension.getBackgroundPage().console.log(data);
});

document.addEventListener('DOMContentLoaded', () => {
  switchButton.addEventListener('change', changeHandler);
});

function changeHandler() {

  if (switchButton.checked) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.executeScript(
        tabs[0].id,
        { code: 'document.getElementById("tv-toasts").style.display = "none";' });
    });
    chrome.storage.sync.set({ checked: true }, () => {
      // chrome.extension.getBackgroundPage().console.log('set checked at true');
    });
  }
  else {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.executeScript(
        tabs[0].id,
        { code: 'document.getElementById("tv-toasts").style.display = "block";' });
    });
    chrome.storage.sync.set({ checked: false }, () => {
      // chrome.extension.getBackgroundPage().console.log('set checked at false');
    });
  }
}
