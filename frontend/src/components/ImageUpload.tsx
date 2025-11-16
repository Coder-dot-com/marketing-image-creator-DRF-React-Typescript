import React, { useState } from 'react';

const ImageUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const uploadImage = () => {
    if (file) {
      // Simulate upload (replace with actual API call later)
      console.log('Uploading:', file.name);
    }
  };

  return (
    <div className="mb-3">
      <label className="form-label">Upload Image</label>
      <input type="file" className="form-control" onChange={handleFileChange} />
      {preview && <img src={preview} alt="Preview" className="mt-2" style={{ maxWidth: '200px' }} />}
      <button className="btn btn-primary mt-2" onClick={uploadImage}>Upload</button>
    </div>
  );
};

export default ImageUpload;
