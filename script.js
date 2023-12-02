document.getElementById('redo-icon').addEventListener('click', function () {
    document.execCommand('redo', false, null);
    saveContent();
});

document.getElementById('undo-icon').addEventListener('click', function () {
    document.execCommand('undo', false, null);
    saveContent();
});

document.getElementById('align-justify-icon').addEventListener('click', function () {
    document.execCommand('justifyfull', false, null);
    saveContent();
});

document.getElementById('align-right-icon').addEventListener('click', function () {
    document.execCommand('justifyright', false, null);
    saveContent();
});

document.getElementById('align-center-icon').addEventListener('click', function () {
    document.execCommand('justifycenter', false, null);
    saveContent();
});

document.getElementById('align-left-icon').addEventListener('click', function () {
    document.execCommand('justifyLeft', false, null);
    saveContent();
});

function toggleColorPalette() {
    let colorPalette = document.getElementById('colorPalette');
    colorPalette.style.display = (colorPalette.style.display === 'block') ? 'none' : 'block';
}

function applyColor() {
    let selectedColor = document.getElementById('colorPicker').value;
    let selection = window.getSelection();
    let range = selection.getRangeAt(0);
    let span = document.createElement('span');
    span.style.color = selectedColor;
    range.surroundContents(span);
    toggleColorPalette();
    document.getElementById('colorBtn').style.color = selectedColor;
}

document.getElementById('italic-icon').addEventListener('click', function () {
    document.execCommand('italic', false, null);
});

document.getElementById('underline-icon').addEventListener('click', function () {
    document.execCommand('underline', false, null);
});
  
document.getElementById('bold-icon').addEventListener('click', function () {
    document.execCommand('bold', false, null);
    saveContent();
});

function saveContent() {
    const editor = document.getElementById('editor');
    localStorage.setItem('editorContent', editor.innerHTML);
}

window.onload = function () {
    const editor = document.getElementById('editor');
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
        editor.innerHTML = savedContent;
    }
};