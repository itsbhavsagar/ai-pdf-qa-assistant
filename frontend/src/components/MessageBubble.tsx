// src/components/MessageBubble.tsx
type MessageBubbleProps = {
  sender: 'user' | 'ai';
  message: string;
};

const MessageBubble = ({ sender, message }: MessageBubbleProps) => {
  const isUser = sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
      <div
        className={`px-4 py-2 rounded-lg max-w-sm text-white ${
          isUser ? 'bg-indigo-500' : 'bg-gray-700'
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default MessageBubble;
