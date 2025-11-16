import React, { useState } from 'react';

interface ImageUploadProps {
  onImageChange: (image: string | null) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageChange }) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      const url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
      onImageChange(url);
    }
  };

  const uploadImage = () => {
    if (file) {
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
