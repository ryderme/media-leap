
/**
 * 废弃功能：选中文字，提取username，弹出快捷icon
 */
// document.addEventListener('mouseup', function (e) {
//     // 检查是否点击的是图标本身
//     if (e.target && e.target.id === 'myExtensionIcon') {
//         return; // 如果是点击图标，则不执行后续逻辑
//     }
//     const selectedText = window.getSelection().toString().trim();
//     if (selectedText) {
//         showIconAtCursor(e.clientX, e.clientY);
//     }
// });

// function showIconAtCursor(x, y) {
//     const icon = document.createElement('img');
//     icon.src = chrome.runtime.getURL('images/icon-32.png');
//     icon.style.position = 'fixed';
//     icon.style.left = `${x}px`;
//     icon.style.top = `${y}px`;
//     icon.style.cursor = 'pointer';
//     icon.style.zIndex = '1000'; // 确保图标位于最上层
//     icon.id = 'myExtensionIcon';

//     // 删除之前可能存在的图标
//     const existingIcon = document.getElementById('myExtensionIcon');
//     if (existingIcon) {
//         document.body.removeChild(existingIcon);
//     }
//     document.body.appendChild(icon);

//     icon.addEventListener('click', function () {
//         icon.remove()
//         // 获取选中文本所在的 DOM
//         const range = window.getSelection().getRangeAt(0);
//         const containerElement = range.commonAncestorContainer;

//         // TODO：提取用户名
//         chrome.runtime.sendMessage({
//             message: "openTab"
//         })

//         // 取消选择的文字
//         if (window.getSelection) {
//             if (window.getSelection().empty) {  // Chrome
//                 window.getSelection().empty();
//             } else if (window.getSelection().removeAllRanges) {  // Firefox
//                 window.getSelection().removeAllRanges();
//             }
//         }

//     });
// }
