import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    axios.get('/api/files/list')
      .then(response => {
        setFiles(response.data);
      })
      .catch(error => {
        console.error('Error fetching files: ', error);
      });
  }, []);

  return (
    <div>
      <h2>Uploaded Files</h2>
      <ul>
        {files.map((fileName, index) => (
          <li key={index}>{fileName}</li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
