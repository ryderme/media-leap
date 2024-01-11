chrome.runtime.sendMessage({
    message: "getTwitterUsername",
    username: window.location.pathname.slice(1)
})