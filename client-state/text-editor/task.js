const editor = document.getElementById('editor');

window.onload = function() {
    localStorage.getItem('editorText');
    // editor.value = localStorage.editorText;
}

window.onbeforeunload = function() {
    localStorage.setItem('editorText', editor.value);
}
