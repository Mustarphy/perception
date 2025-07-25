import React from 'react';

const ProcessStep = ({ stepNumber, title, isLast = false, className = "" }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Step Circle with Connector */}
      <div className="relative flex items-center">
        <div className="bg-orange-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold shadow-lg hover:shadow-xl transition-shadow duration-200 relative z-10">
          {stepNumber}
        </div>
        
        {/* Connector Line - only show on desktop and not for last step */}
        {!isLast && (
          <>
            {/* Main connector line */}
            <div className="hidden md:block absolute left-full top-1/2 transform -translate-y-1/2 w-24 h-0.5 bg-gray-300 z-0">
              {/* Arrow at the end */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
          </>
        )}
      </div>
      
      {/* Step Title */}
      <h3 className="text-gray-800 font-semibold text-center mt-4 max-w-32 text-sm">
        {title}
      </h3>
    </div>
  );
};

export default ProcessStep;