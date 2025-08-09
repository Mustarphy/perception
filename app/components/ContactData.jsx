import React from "react";

const ContactData = ({ lineIcon, title, isLast = false }) => {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3">
      {/* Outer Circle */}
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
        {/* Inner Icon Circle */}
        <div className="w-8 h-8 text-blue-600 flex items-center justify-center">
          {lineIcon}
        </div>
      </div>
      
      {/* Title */}
      <p className="text-gray-700 text-center md:text-left whitespace-nowrap">
        {title}
      </p>
    </div>
  );
};

export default ContactData;