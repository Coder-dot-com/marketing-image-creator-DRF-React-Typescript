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
      <h1 className="mb-4">Marketing Image Creator</h1>

      <div className="row">
        {/* inputs on left */}
        <div className="col-12 col-md-4  mb-4">
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

        {/* Preview on right*/}
        <div className="col-12 col-md-6 ">
          <div className="card shadow-sm p-3" >
            <CanvasPreview
              uploadedImage={uploadedImage}
              text={text}
              font={font}
              fontSize={fontSize}
              color={color}
              borderColor={border}
            />
          </div>
        </div>

        {/* Download Share buttons on right*/}
        <div className="col-12 col-md-2 ">

          <button className='btn btn-primary m-2'>Download</button>
          <button className='btn btn-primary m-2'>Share on Pinterest</button>
          <button className='btn btn-primary m-2'>Share on Twitter</button>



        </div>
    
      </div>
    </div>
  );
};

export default Dashboard;
