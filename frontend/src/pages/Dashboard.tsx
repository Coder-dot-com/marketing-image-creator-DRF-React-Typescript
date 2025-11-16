// src/pages/Dashboard.tsx
import React from 'react';
import ImageUpload from '../components/ImageUpload';
import BorderSelector from '../components/BorderSelector';
import TextAdder from '../components/TextAdder';


const Dashboard: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1>Marketing Image Creator</h1>
      <ImageUpload />
      <BorderSelector />

      <TextAdder />
    </div>
  );
};

export default Dashboard;
