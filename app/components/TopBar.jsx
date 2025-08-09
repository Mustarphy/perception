import React, { useState } from 'react'

export default function TopBar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
};
  return (
    <div className="bg-[#f9f9ff] w-full text-sm text-gray-600 px-4 py-4 flex fixed justify-between items-center z-50">
        <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
        <img src="clock.png" alt="clock Icon" className="w-[15] h-[15] md:w-[20] md:h-[20] object-cover"/> 
            <span> Mon-Fri 09:00 - 17:00 </span>
            </div>
            <div className="flex items-center gap-2">
            <img src="phone.png" alt="contact Icon" className="w-[15] h-[15] md:w-[20] md:h-[20] object-cover"/>
                <span> 825 935 6767 <span className="text-blue-700">||</span> (403) 555-0198</span>
                </div>
        </div>
        <button onClick={() => scrollToSection('get-quote')} className="text-orange-500 font-medium hover:underline transition"> Request a Quote &rarr;
                        </button>
    </div>
  )
}
