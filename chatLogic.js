function sendMessage() {
    var mesageInput = document.getElementById('messageinput');
    var chatMessage = document.getElementById('chatMessage');

    if (mesageInput.value.trim() !== "") {
        var mesage = document.createElement('div');
        mesage.className = 'Message';
        mesage.textContent = 'You:' + mesageInput.value;

        mesageInput.value = '';

    }
}