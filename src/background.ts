// Creates a tab when clicked
// chrome.action.onClicked.addListener(async () => {
//  const indexUrl = chrome.runtime.getURL("index.html");
//  await chrome.tabs.create({ url: indexUrl });;
// });

// Open side panel when clicked
chrome.action.onClicked.addListener(async (tab) => {
 await chrome.sidePanel.open({ tabId: tab.id, windowId: tab.windowId });
});

let userExtensions: ChromeExtensionInfo[] = [];

export const getChromeExtensions = async () => {
 const allData = await chrome.management.getAll();
 userExtensions = allData.filter(
  item => item.type === "extension" && item.id !== chrome.runtime.id
 );
};
getChromeExtensions();

// Listening for extension state changes to keep data fresh
chrome.management.onEnabled.addListener(() => {
 getChromeExtensions();
});
chrome.management.onDisabled.addListener(() => {
 getChromeExtensions();
});

// Listening for messages to provide data
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
 if (message === "getExtensions") {
  sendResponse({ extensions: userExtensions });
  return true;
 }

 if (message.type === "toggleExtension") {
  const { id, enable } = message.payload;
  chrome.management.setEnabled(id, enable, () => {
   if (chrome.runtime.lastError) {
    console.error("Toggle Error: ", chrome.runtime.lastError.message)
   } else {
    sendResponse({ success: true });
   }
  })
  return true;
 }

 if (message.type === "removeExtension") {
  const { id } = message.payload;
  chrome.management.uninstall(id, { showConfirmDialog: false }, () => {
   if (chrome.runtime.lastError) {
    console.error("Uninstall error:", chrome.runtime.lastError.message);
   } else {
    getChromeExtensions();
    sendResponse({ success: true });
   }
  })
  return true;
 }

 return false; // Needed for async sendResponse in some cases
});