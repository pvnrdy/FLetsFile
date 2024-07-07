import React from 'react';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';

const App = () => {
  return (
    <div>
      <h1>File Upload to S3</h1>
      <FileUpload />
      <FileList />
    </div>
  );
};

export default App;
