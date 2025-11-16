import React from 'react';

interface BorderSelectorProps {
  onBorderChange: (value: string) => void;
}

const BorderSelector: React.FC<BorderSelectorProps> = ({ onBorderChange }) => {
  return (
    <div className="mb-3">
      <label className="form-label">Border Selector</label>
      <select
        className="form-select"
        onChange={(e) => onBorderChange(e.target.value)}
      >
        <option value="#000000">Black Border</option>
        <option value="#FF0000">Red Border</option>
        <option value="#00AAFF">Blue Border</option>
        <option value="#00AA00">Green Border</option>
        <option value="none">No Border</option>
      </select>
    </div>
  );
};

export default BorderSelector;
