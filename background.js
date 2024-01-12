/**
 * 废弃功能
 */
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.message === "getTwitterUsername") {
//     let link = "https://instagram.com/" + request.username
//     console.log(link)
//   }else if(request.message === "openTab"){
//     chrome.tabs.create({ url: "https://www.google.com" });
//   }
// })


chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "mediaLeap",
    title: "Media Leap",
    contexts: ["link"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "mediaLeap") {
    let twitterUsername = extractTwitterUsername(info.linkUrl)
    let instagramUrl = `https://instagram.com/${twitterUsername}`;
    chrome.tabs.create({ url: instagramUrl });
  }
});

function extractTwitterUsername(url) {
  let match = url.match(/twitter\.com\/([a-zA-Z0-9_]+)/);
  return match ? match[1] : '';
}