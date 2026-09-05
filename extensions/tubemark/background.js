// Background Service Worker for TubeMark — YouTube Transcript to Clean Markdown
chrome.runtime.onInstalled.addListener((details) => {
  console.log("TubeMark — YouTube Transcript to Clean Markdown installed successfully:", details.reason);
  chrome.storage.local.set({ installDate: Date.now(), isPro: false });
});
