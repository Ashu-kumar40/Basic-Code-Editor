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