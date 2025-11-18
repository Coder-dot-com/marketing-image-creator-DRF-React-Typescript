import React, { useState, useRef } from 'react';
import axios from 'axios';
import ImageUpload from '../components/ImageUpload';
import BorderSelector from '../components/BorderSelector';
import TextAdder from '../components/TextAdder';
import CanvasPreview from '../components/CanvasPreview';

const Dashboard: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [text, setText] = useState('');
  const [font, setFont] = useState('Arial');
  const [fontSize, setFontSize] = useState(16);
  const [color, setColor] = useState('#000000');
  const [border, setBorder] = useState('#000000');

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isLoggedIn = !!localStorage.getItem("access");

  const handleSave = async () => {
    if (!isLoggedIn) {
      alert("Please log in to save images");
      return;
    }

    if (!canvasRef.current) {
      alert("No image to save");
      return;
    }

    const base64Image = canvasRef.current.toDataURL("image/png");

    try {
      const token = localStorage.getItem("access");

      await axios.post(
        "/api/images/",
        {
          border_color: border,
          text,
          font,
          font_size: fontSize,
          text_color: color,
          uploaded_image_base64: base64Image,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Image saved!");
    } catch (error) {
      console.error(error);
      alert("Failed to save");
    }
  };

  return (
    <div className="container mt-5">
      {!isLoggedIn && (
        <div className="w-100 text-center py-2 bg-warning fw-semibold">
          Log in to save images
        </div>
      )}

      <h1 className="mb-4">Marketing Image Creator</h1>

      <div className="row">
        <div className="col-12 col-md-4 mb-4">
          <div className="d-flex flex-column gap-3 sticky-top" style={{ top: "80px" }}>
            <ImageUpload onImageChange={setUploadedImage} />
            <BorderSelector onBorderChange={setBorder} />
            <TextAdder
              onTextChange={setText}
              onFontChange={setFont}
              onFontSizeChange={setFontSize}
              onColorChange={setColor}
            />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card shadow-sm p-3">
            <CanvasPreview
              ref={canvasRef}
              uploadedImage={uploadedImage}
              text={text}
              font={font}
              fontSize={fontSize}
              color={color}
              borderColor={border}
            />
          </div>
        </div>

        <div className="col-12 col-md-2">
          <button className="btn btn-primary m-2" onClick={handleSave}>
            Save
          </button>

          <button className="btn btn-primary m-2">Download</button>
          <button className="btn btn-primary m-2">Share on Pinterest</button>
          <button className="btn btn-primary m-2">Share on Twitter</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
