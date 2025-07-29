import React from "react";

const ContactData = ({ lineIcon, title, isLast = false }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-center gap-4 w-full max-w-xs text-center md:text-left">
    {/* Outer Circle */}
    <div className=" justify-center items-center ">
      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-orange-100 shadow-inner">
        {/* Inner Icon Circle */}
        <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
          {lineIcon}
        </div>
      </div>
    </div>

    {/* Title */}
    <div className="text-gray-800 text-base font-medium">{title}</div>
  </div>
  );
};

export default ContactData;
