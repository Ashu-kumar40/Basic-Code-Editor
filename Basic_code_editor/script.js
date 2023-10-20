const copyButton = document.getElementById('copy-button');
const saveButton = document.getElementById('save-button');
const lockButton = document.getElementById('lock-button');
const codeTextarea = document.getElementById('code');

// Copy button functionality
copyButton.addEventListener('click', () => {
    const code = codeTextarea.value;
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard');
});

// Lock button functionality
lockButton.addEventListener('click', () => {
    const isLocked = codeTextarea.disabled;
    codeTextarea.disabled = !isLocked;
});