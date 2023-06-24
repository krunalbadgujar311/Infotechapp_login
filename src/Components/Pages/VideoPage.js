import React, { useState } from 'react';
import './Video.css'
function VideoForm() {
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setThumbnailFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with the selected files and form data
    console.log('Submitted!', videoFile, thumbnailFile, title, description);
  };

  return (
    <div className='Mainbox1'>
     <div className='registration-form'>
      <form onSubmit={handleSubmit}>
      <h1>Add Video</h1>
        <div className='form-group'>
          <label htmlFor="videoFile">Video File (MP4):</label>
          <input type="file" id="videoFile" accept=".mp4" onChange={handleVideoChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="thumbnailFile">Thumbnail File (JPG):</label>
          <input type="file" id="thumbnailFile" accept=".jpg" onChange={handleThumbnailChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='form-group'>
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default VideoForm;
