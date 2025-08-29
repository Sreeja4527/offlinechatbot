document.addEventListener('DOMContentLoaded', () => {
    const welcomePage = document.getElementById('welcome-page');
    const chatPage = document.getElementById('chat-page');
    const startButton = document.getElementById('start-button');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.querySelector('.chat-messages');
    const sendButton = document.getElementById('send-button');
    const micButton = document.getElementById('mic-button');

    // Function to switch to the chat page
    const showChatPage = () => {
        welcomePage.classList.remove('active');
        chatPage.classList.add('active');
    };

    // Event listener for the "Start Chatting" button
    startButton.addEventListener('click', showChatPage);

    // Function to handle sending a message
    const sendMessage = () => {
        const messageText = chatInput.value.trim();
        if (messageText !== '') {
            // Remove the initial prompt
            const initialPrompt = chatMessages.querySelector('.initial-prompt');
            if (initialPrompt) {
                initialPrompt.remove();
            }

            // Create a new message element (for demonstration purposes)
            const newMessage = document.createElement('div');
            newMessage.classList.add('user-message');
            newMessage.textContent = messageText;
            chatMessages.appendChild(newMessage);

            // Clear the input field
            chatInput.value = '';
            
            // Scroll to the bottom of the chat messages
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    };

    // Event listener for the send button
    sendButton.addEventListener('click', sendMessage);

    // Event listener for the Enter key on the input field
    chatInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    // Mic button functionality (placeholder)
    micButton.addEventListener('click', () => {
        alert('Voice input is not yet implemented. This is a placeholder.');
    });
});