import React from 'react';

const PhoneButton = ({ 
  phoneNumber = "(205) 484-9664", 
  onClick,
  className = "",
  variant = "primary" // primary, secondary
}) => {
  const baseClasses = "transition-all duration-200 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105";
  
  const variants = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white",
    secondary: "bg-white hover:bg-gray-50 text-orange-500 border-2 border-orange-500"
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default behavior - initiate phone call
      window.location.href = `tel:${phoneNumber.replace(/[^\d]/g, '')}`;
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      aria-label={`Call ${phoneNumber}`}
    >
      {phoneNumber}
    </button>
  );
};

export default PhoneButton;