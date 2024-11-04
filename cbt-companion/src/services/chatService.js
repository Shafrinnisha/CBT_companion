import axios from 'axios';

const API_URL = 'http://localhost:5005/webhooks/rest/webhook'; // Replace with your Rasa API URL

export const sendMessage = async (message) => {
  try {
    const response = await axios.post(API_URL, { sender: 'user', message });
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    return [{ text: 'Sorry, I could not process your request.' }];
  }
};
