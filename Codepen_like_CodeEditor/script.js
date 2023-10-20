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