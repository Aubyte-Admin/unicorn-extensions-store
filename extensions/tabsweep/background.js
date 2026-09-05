// Background Service Worker for TabSweep — Smart Domain Consolidator & Snoozer
chrome.runtime.onInstalled.addListener((details) => {
  console.log("TabSweep — Smart Domain Consolidator & Snoozer installed successfully:", details.reason);
  chrome.storage.local.set({ installDate: Date.now(), isPro: false });
});
