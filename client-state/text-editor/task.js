const editor = document.getElementById('editor');

window.onload = function() {
    editor.value = localStorage.editorText;
}

window.onbeforeunload = function() {
    localStorage.setItem('editorText', editor.value);
}
