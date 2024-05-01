const editor = document.getElementById('editor');

window.onbeforeunload = function() {
    if (localStorage.getItem('editorText') !== null) {
        editor.value = localStorage.editorText;
    } else {
        localStorage.setItem('editorText', editor.value);
    }
}