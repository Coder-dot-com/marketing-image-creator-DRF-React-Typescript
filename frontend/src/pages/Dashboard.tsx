import React, { useState } from 'react';
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
  const [border, setBorder] = useState('border');

  return (
    <div className="container mt-5">
      <h1>Marketing Image Creator</h1>
      <ImageUpload
        onImageChange={(image) => setUploadedImage(image)}
      />
      <BorderSelector
        onBorderChange={(value) => setBorder(value)}
      />
      <TextAdder
        onTextChange={(text) => setText(text)}
        onFontChange={(font) => setFont(font)}
        onFontSizeChange={(size) => setFontSize(size)}
        onColorChange={(color) => setColor(color)}
      />
      <CanvasPreview
        uploadedImage={uploadedImage}
        text={text}
        font={font}
        fontSize={fontSize}
        color={color}
        borderColor={border}
      />
    </div>
  );
};

export default Dashboard;
