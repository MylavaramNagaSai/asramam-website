import React from 'react';
import { useLocation } from 'react-router-dom';

export default function GenericPage() {
  const location = useLocation();
  
  const pageTitle = location.pathname
    .replace('/', '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-[60vh]">
      <h1 className="text-3xl md:text-5xl font-extrabold text-orange-950 text-center mb-8 border-b-2 border-orange-200 pb-4 glow-text">
        <span className="text-orange-600 mr-2">ॐ</span>
        {pageTitle || 'Page'}
        <span className="text-orange-600 ml-2">ॐ</span>
      </h1>
      
      <div className="bg-white rounded-xl shadow-lg border border-orange-100 p-6 md:p-10 flex items-center justify-center min-h-[40vh]">
        <p className="text-orange-800/60 text-xl font-medium text-center">
          Divine content for {pageTitle} is currently being updated. <br/>
          Please check back soon.
        </p>
      </div>
    </div>
  );
}