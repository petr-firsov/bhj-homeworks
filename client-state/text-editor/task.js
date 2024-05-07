const editor = document.getElementById('editor');

window.onload = function() {
    localStorage.getItem('editorText');
}

window.onbeforeunload = function() {
    localStorage.setItem('editorText', editor.value);
}
