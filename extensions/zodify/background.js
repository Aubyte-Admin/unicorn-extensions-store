// Background Service Worker for Zodify — Instant JSON to Zod & TypeScript Converter
chrome.runtime.onInstalled.addListener((details) => {
  console.log("Zodify — Instant JSON to Zod & TypeScript Converter installed successfully:", details.reason);
  chrome.storage.local.set({ installDate: Date.now(), isPro: false });
});
