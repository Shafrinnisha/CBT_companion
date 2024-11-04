import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { sendMessage } from '../services/chatService';
import { ThemeContext } from '../context/ThemeContext';

const ChatContainer = styled.div`
  padding: 2rem;
  background-color: ${(props) => (props.isDark ? '#444' : '#f0f8ff')};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 2rem auto;
  color: ${(props) => (props.isDark ? '#e8f4f8' : '#333')};
`;

const MessageInput = styled.input`
  width: 80%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Chat = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const { isDarkTheme } = useContext(ThemeContext);

  const handleSend = async () => {
    if (input.trim() === '') return;
    const userMessage = { sender: 'user', message: input };
    setMessages([...messages, userMessage]);
    
    const response = await sendMessage(input);
    const botMessage = { sender: 'bot', message: response[0]?.text || '...' };
    setMessages((prev) => [...prev, botMessage]);
    setInput('');
  };

  return (
    <ChatContainer isDark={isDarkTheme}>
      <h2>Chat with Your CBT Companion</h2>
      <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
        {messages.map((msg, index) => (
          <p key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong> {msg.message}
          </p>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <MessageInput 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Type a message..." 
        />
        <button onClick={handleSend} style={{ marginLeft: '10px', padding: '0.5rem 1rem' }}>
          Send
        </button>
      </div>
    </ChatContainer>
  );
};

export default Chat;
