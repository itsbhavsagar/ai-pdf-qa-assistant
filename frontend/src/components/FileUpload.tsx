// src/components/FileUpload.tsx
import { useState } from 'react';

const FileUpload = () => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className='bg-white rounded-lg shadow p-4'>
      <label className='block text-lg font-medium mb-2'>Upload a PDF</label>
      <input
        type='file'
        accept='application/pdf'
        onChange={handleFileChange}
        className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
        file:rounded file:border-0 file:text-sm file:font-semibold
        file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100'
      />
      {fileName && (
        <p className='mt-2 text-green-700'>📄 {fileName} selected</p>
      )}
    </div>
  );
};

export default FileUpload;
