import React from "react"
import { FiArrowRight } from "react-icons/fi"

const ServiceCard= ({title, description, discount = "50%", imageSrc = "#"}) => {
  return (
    <div className="rounded-2xl p-6 relative overflow-hidden min-h-[320px] flex flex-col group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${imageSrc})`,
    backgroundColor:  '#8B5CF6' }}
    >

        {/* Discount Badge */}
        <div className="flex justify-between items-start mb-8">
            <div className="bg-green-400 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <span>💰</span>
            <span>Discount {discount}</span>
            </div>
            <button className="bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-200 rounded-full p-2 group-hover:scale-110">
                <FiArrowRight className="w-5 h-5 text-white"/>
            </button>
        </div>

         {/* Content Area - positioned at bottom */}
         <div className="mt-auto">
            <div className="bg-white rounded-xl p-4 shadow-lg">
                <h3 className="text-gray-800 font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
         </div>
    </div>
  );
};

export default ServiceCard