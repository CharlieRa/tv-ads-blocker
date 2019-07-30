'use strict';

document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.executeScript(
      tabs[0].id,
      { code: 'document.getElementById("tv-toasts").style.display = "none";' });
  });
  chrome.storage.sync.set({ checked: true }, () => {
  });
});