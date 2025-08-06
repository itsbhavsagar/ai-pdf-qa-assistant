// src/pages/Home.tsx
import FileUpload from '../components/FileUpload';
import Chat from '../components/Chat';

const Home = () => {
  return (
    <div className='min-h-screen bg-gray-100 p-4'>
      <h1 className='text-3xl font-bold text-center mb-6'>
        📄 AI PDF Q&A Assistant
      </h1>
      <div className='max-w-4xl mx-auto space-y-6'>
        <FileUpload />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
