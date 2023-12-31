const copyButton = document.getElementById('copy-button');
const saveButton = document.getElementById('save-button');
const lockButton = document.getElementById('lock-button');
let codeTextarea = document.getElementById('code');

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

// Saving the code in local device
saveButton.addEventListener('click', () => {
    const textToSave = codeTextarea.value; // Get the text from the textarea
    const blob = new Blob([textToSave], { type: 'text/plain' }); // Create a blob
    // blob is an object that represents a chuck of data in a specific format
    const url = URL.createObjectURL(blob); // Create a URL where our blob is hosted

    const a = document.createElement('a'); // Create a link element
    a.href = url; // Set the href of our link
    a.download = 'code.txt'; // Set the download attribute of our link
    a.click(); // Click on the link
    URL.revokeObjectURL(url); // Free up the memory
});

// Indentation with tab key 
codeTextarea.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        e.preventDefault();
        e.stopPropagation();
        let start = codeTextarea.selectionStart;
        let end = codeTextarea.selectionEnd;

        // Adding four space character at the cursor position
        codeTextarea.value = codeTextarea.value.substring(0, start) + '    ' + codeTextarea.value.substring(end);

        // Move the cursor position after the tab
        codeTextarea.selectionStart = codeTextarea.selectionEnd = start + 4;
    }
});