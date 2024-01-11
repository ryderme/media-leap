document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let url = tabs[0].url;
    let twitterUsername = extractTwitterUsername(url);
    let instagramUrl = `https://instagram.com/${twitterUsername}`;

    document.getElementById('instagram-url').textContent = instagramUrl;
    document.getElementById('open-instagram').onclick = function () {
      chrome.tabs.create({ url: instagramUrl });
    };
  });
});

function extractTwitterUsername(url) {
  let match = url.match(/twitter\.com\/([a-zA-Z0-9_]+)/);
  return match ? match[1] : '';
}