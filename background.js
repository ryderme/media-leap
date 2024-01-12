const X_ID = "X";
const FACEBOOK_ID = "facebook";
const INSTAGRAM_ID = "instagram";

chrome.runtime.onInstalled.addListener(() => {
  let contexts = ["link"];

  let mediaLeapMenu = chrome.contextMenus.create({
    title: "Media Leap",
    id: "mediaLeap",
    contexts: contexts
  });

  chrome.contextMenus.create({
    title: "X",
    parentId: mediaLeapMenu,
    id: X_ID,
    contexts: contexts
  });

  chrome.contextMenus.create({
    title: "Instagram",
    parentId: mediaLeapMenu,
    id: INSTAGRAM_ID,
    contexts: contexts
  });

  chrome.contextMenus.create({
    title: "Facebook",
    parentId: mediaLeapMenu,
    id: FACEBOOK_ID,
    contexts: contexts
  })
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  let username = extractUsername(info.linkUrl);
  if (!username) {
    return;
  }

  let jumpUrl;
  switch (info.menuItemId) {
    case X_ID:
      jumpUrl = `https://twitter.com/${username}`;
      break;
    case INSTAGRAM_ID:
      jumpUrl = `https://instagram.com/${username}`;
      break;
    case FACEBOOK_ID:
      jumpUrl = `https://facebook.com/${username}`;
      break;
    default:
      return;
  }
  chrome.tabs.create({ url: jumpUrl });
});


function extractUsername(url) {
  let username;
  // 正则表达式匹配 Instagram 用户名
  const instagramPattern = /instagram\.com\/([A-Za-z0-9._]+)/;
  // 正则表达式匹配 Facebook 用户名
  const facebookPattern = /facebook\.com\/([A-Za-z0-9._]+)/;
  // 正则表达式匹配 Twitter 用户名
  const twitterPattern = /twitter\.com\/([A-Za-z0-9_]+)/;

  if (instagramPattern.test(url)) {
    username = url.match(instagramPattern)[1];
  } else if (facebookPattern.test(url)) {
    username = url.match(facebookPattern)[1];
  } else if (twitterPattern.test(url)) {
    username = url.match(twitterPattern)[1];
  } 

  return username;
}