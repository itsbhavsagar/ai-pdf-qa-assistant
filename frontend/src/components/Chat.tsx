// src/components/Chat.tsx
import { useState } from 'react';
import MessageBubble from './MessageBubble';

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: 'user', message: 'What is this PDF about?' },
    { sender: 'ai', message: 'This PDF is about AI and its applications.' },
  ]);

  return (
    <div className='bg-white rounded-lg shadow p-4 h-[400px] overflow-y-auto'>
      <h2 className='text-lg font-semibold mb-3'>Chat</h2>
      {messages.map((msg, index) => (
        <MessageBubble
          key={index}
          sender={msg.sender as 'user' | 'ai'}
          message={msg.message}
        />
      ))}
    </div>
  );
};

export default Chat;
