import React from 'react';
import { Check } from 'lucide-react';

const FeatureItem = ({ 
  title, 
  description, 
  icon = <Check className="w-5 h-5" />,
  iconBgColor = "bg-cyan-500",
  className = ""
}) => {
  return (
    <div className={`flex items-start gap-4 mb-6 ${className}`}>
      {/* Icon Container */}
      <div className={`flex-shrink-0 w-6 h-6 ${iconBgColor} text-white rounded-full flex items-center justify-center mt-1 shadow-sm`}>
        {icon}
      </div>
      
      {/* Content */}
      <div className="flex-1">
        <h4 className="text-gray-800 font-semibold text-lg mb-2">
          {title}
        </h4>
        <p className="text-gray-600 leading-relaxed text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureItem;