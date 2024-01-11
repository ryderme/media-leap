chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "getTwitterUsername") {
    let link = "https://instagram.com/" + request.username
    console.log(link)
  }
})