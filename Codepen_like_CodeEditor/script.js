let htmlCode = document.getElementById("html-code");
let cssCode = document.getElementById("css-code");
let jsCode = document.getElementById("js-code");
let output = document.getElementById("output");
let copyHtml = document.getElementById("copy-html");
let copyCss = document.getElementById("copy-css");
let copyJs = document.getElementById("copy-js");
const htmlLock = document.getElementById("html-lock");
const cssLock = document.getElementById("css-lock");
const jsLock = document.getElementById("js-lock");

// Run the code
function run() {
  output.contentDocument.body.innerHTML =
    htmlCode.value + "<style>" + cssCode.value + "</style>";
  output.contentWindow.eval(jsCode.value);
}

// Copy the HTML code to clipboard
copyHtml.addEventListener("click", () => {
  const code = htmlCode.value;
  if (code == "") {
    alert("HTML Code is empty");
    return;
  } else {
    navigator.clipboard.writeText(code);
    alert("HTML Code copied to clipboard");
  }
});

// Copy the CSS code to clipboard
copyCss.addEventListener("click", () => {
  const code = cssCode.value;
  if (code == "") {
    alert("CSS Code is empty");
    return;
  } else {
    navigator.clipboard.writeText(code);
    alert("CSS Code copied to clipboard");
  }
});

// Copy the JS code to clipboard
copyJs.addEventListener("click", () => {
  const code = jsCode.value;
  if (code == "") {
    alert("JS Code is empty");
    return;
  } else {
    navigator.clipboard.writeText(code);
    alert("JS Code copied to clipboard");
  }
});

// Lock the editor
htmlLock.addEventListener("click", () => {
  const isLocked = htmlCode.disabled;
  htmlCode.disabled = !isLocked;
  htmlCode.style.backgroundColor = isLocked ? "#202020" : "#303030"; 
});
cssLock.addEventListener("click", () => {
  const isLocked = cssCode.disabled;
  cssCode.disabled = !isLocked;
  cssCode.style.backgroundColor = isLocked ? "#202020" : "#303030"; 
});
jsLock.addEventListener("click", () => {
  const isLocked = jsCode.disabled;
  jsCode.disabled = !isLocked;
  jsCode.style.backgroundColor = isLocked ? "#202020" : "#303030"; 
});

// Indentation with tab key 
htmlCode.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    e.stopPropagation();
    let start = htmlCode.selectionStart;
    let end = htmlCode.selectionEnd;

    // Adding four space character at the cursor position
    htmlCode.value = htmlCode.value.substring(0, start) + '    ' + htmlCode.value.substring(end);
    
    // Move the cursor position after the tab
    htmlCode.selectionStart = htmlCode.selectionEnd = start + 4;
}
});

cssCode.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    e.stopPropagation();
    let start = cssCode.selectionStart;
    let end = cssCode.selectionEnd;

    // Adding four space character at the cursor position
    cssCode.value = cssCode.value.substring(0, start) + '    ' + cssCode.value.substring(end);
    
    // Move the cursor position after the tab
    cssCode.selectionStart = cssCode.selectionEnd = start + 4;
}
});

jsCode.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    e.stopPropagation();
    let start = jsCode.selectionStart;
    let end = jsCode.selectionEnd;

    // Adding four space character at the cursor position
    jsCode.value = jsCode.value.substring(0, start) + '    ' + jsCode.value.substring(end);
    
    // Move the cursor position after the tab
    jsCode.selectionStart = jsCode.selectionEnd = start + 4;
}
});
