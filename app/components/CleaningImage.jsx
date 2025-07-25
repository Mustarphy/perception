import React from 'react';

const CleaningImage = ({ 
  imageSrc = "rectangle8.png",
  alt = "Commercial cleaning service",
  className = ""
}) => {
  const handleImageError = (e) => {
    // Fallback when image fails to load
    e.target.style.backgroundColor = '#E5E7EB';
    e.target.style.display = 'flex';
    e.target.style.alignItems = 'center';
    e.target.style.justifyContent = 'center';
    e.target.innerHTML = '<div class="text-gray-500 text-center p-4">Commercial Cleaning Image<br/><small>Replace with your image</small></div>';
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <img 
          src={imageSrc}
          alt={alt}
          className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
          onError={handleImageError}
        />
        
        {/* Optional overlay for better image presentation */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default CleaningImage;