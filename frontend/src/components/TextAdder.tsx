import React, { useState } from 'react';

const TextAdder: React.FC = () => {
  const [text, setText] = useState('');
  const [font, setFont] = useState('Arial');
  const [fontSize, setFontSize] = useState(16);
  const [color, setColor] = useState('#000000');

  const fonts = [
    'Arial',
    'Georgia',
    'Verdana',
    'Tahoma',
    'Courier New',
  ];

  const colors = [
    '#000000', // Black
    '#FFFFFF', // White
    '#FF0000', // Red
    '#00FF00', // Green
    '#0000FF', // Blue
    '#FFFF00', // Yellow
    '#FF00FF', // Pink
  ];

  return (
    <div className="mb-3">
      <label className="form-label">Add Text</label>
      <input
        type="text"
        className="form-control mb-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <div className="mb-2">
        <label className="form-label">Font</label>
        <select
          className="form-select"
          value={font}
          onChange={(e) => setFont(e.target.value)}
        >
          {fonts.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <label className="form-label">Font Size (10–100)</label>
        <input
          type="number"
          className="form-control"
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
          min={10}
          max={100}
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Color</label>
        <div className="d-flex">
          {colors.map((c) => (
            <div
              key={c}
              style={{
                width: '30px',
                height: '30px',
                backgroundColor: c,
                margin: '0 5px',
                border: c === color ? '2px solid #000' : '1px solid #ccc',
                cursor: 'pointer',
              }}
              onClick={() => setColor(c)}
            />
          ))}
        </div>
      </div>
      <div
        className="mt-3 p-2 border"
        style={{
          fontFamily: font,
          fontSize: `${fontSize}px`,
          color: color,
        }}
      >
        {text || 'Preview text'}
      </div>
    </div>
  );
};

export default TextAdder;
