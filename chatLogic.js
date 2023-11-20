function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var chatMessage = document.getElementById('chat-message');

    if (messageInput.value.trim() !== "") {
        var userMessage = document.createElement('div');
        userMessage.className = 'message user';
        userMessage.textContent = messageInput.value;
        chatMessage.appendChild(userMessage);

        var replyMessage = document.createElement('div');
        replyMessage.className = 'message reply';
        replyMessage.textContent = 'ok';
        chatMessage.appendChild(replyMessage); 

        messageInput.value = '';

    }
}
