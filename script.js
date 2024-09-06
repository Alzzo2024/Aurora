function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const messages = document.getElementById('messages');
    const userMessage = messageInput.value;
    if (userMessage.trim() === '') return;
  
    // Adiciona a mensagem do usuário
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'message user';
    userMessageDiv.textContent = userMessage;
    messages.appendChild(userMessageDiv);
  
    // Resposta do "bot"
    const botReply = getBotReply(userMessage);
    const botMessageDiv = document.createElement('div');
    botMessageDiv.className = 'message bot';
    botMessageDiv.textContent = botReply;
    messages.appendChild(botMessageDiv);
  
    messageInput.value = '';
    messages.scrollTop = messages.scrollHeight; // Rolagem para baixo
  }
  
  function getBotReply(message) {
    const replies = {
      'olá': 'Oi! Como posso ajudar?',
      'tchau': 'Até logo!',
      'como você está?': 'Estou bem, obrigado!',
      'qual é o seu nome?': 'Eu sou um chatbot sem nome.',
    };
  
    return replies[message.toLowerCase()] || 'Desculpe, não entendi.';
  }
  