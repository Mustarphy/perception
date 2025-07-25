import React from 'react';

const CleaningImageCollage = ({ 
  mainImageSrc = "#",
  smallImage1Src = "#",
  smallImage2Src = "#",
  className = ""
}) => {
  const handleImageError = (e, placeholder) => {
    // Fallback when image fails to load
    e.target.style.backgroundColor = '#E5E7EB';
    e.target.style.display = 'flex';
    e.target.style.alignItems = 'center';
    e.target.style.justifyContent = 'center';
    e.target.style.color = '#6B7280';
    e.target.style.fontSize = '12px';
    e.target.style.fontWeight = '500';
    e.target.innerHTML = `<div class="text-center p-2">${placeholder}</div>`;
  };

  return (
    <div className={`relative ${className}`}>
      {/* Main Background Image */}
      <div className="relative bg-gray-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <img 
          src={mainImageSrc}
          alt="Professional cleaning service"
          className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => handleImageError(e, 'Main Cleaning Image')}
        />
        
        {/* Optional overlay for better visual hierarchy */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
      </div>

      {/* Small Image 1 - Top Left */}
      <div className="absolute -top-4 -left-4 w-32 h-24 bg-white p-2 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 z-10">
        <img 
          src={smallImage1Src}
          alt="Cleaning team member"
          className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-200"
          onError={(e) => handleImageError(e, 'Team Image')}
        />
      </div>

      {/* Small Image 2 - Bottom Right */}
      <div className="absolute -bottom-4 -right-4 w-32 h-24 bg-white p-2 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 z-10">
        <img 
          src={smallImage2Src}
          alt="Cleaning equipment"
          className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-200"
          onError={(e) => handleImageError(e, 'Equipment Image')}
        />
      </div>
    </div>
  );
};

export default CleaningImageCollage;