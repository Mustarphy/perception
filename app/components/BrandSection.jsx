import React from 'react';
import SocialLinks from './SocialLinks';

const BrandSection = ({ 
  logoSrc = "#",
  brandName = "Supaklin",
  description = "Leo elementum iaculis quam massa vitae odio sed. Morbi tincidunt senectus.",
  className = ""
}) => {
  return (
    <div className={className}>
      {/* Logo */}
      <div className="flex items-center gap-3 mb-4">
        {logoSrc === "#" ? (
          // Fallback logo when no image is provided
          <div className="w-8 h-8 bg-cyan-400 rounded flex items-center justify-center">
            <div className="text-white font-bold text-lg">
              {brandName.charAt(0)}
            </div>
          </div>
        ) : (
          // Use provided logo image
          <img 
            src={logoSrc}
            alt={`${brandName} logo`}
            className="w-8 h-8 object-contain"
            onError={(e) => {
              // Fallback if image fails to load
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        )}
        <h2 className="text-white text-2xl font-bold">{brandName}</h2>
      </div>
      
      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
        {description}
      </p>
      
      {/* Social Links */}
      <SocialLinks />
    </div>
  );
};

export default BrandSection;