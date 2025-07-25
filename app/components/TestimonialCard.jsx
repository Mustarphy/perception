import React from "react"

const TestimonialCard = ({ name, title, reviewtext, reviewText, imageScr, starSrc }) => {
  return (
    <div className="bg-indigo-100 p-6 rounded-xl shadow-lg">
        <div className=" items-start justify-start p-4">
            <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12">
        <img src={imageScr} className="w-16 h-16 rounded-full mx-auto mb-4" />
        </div>
        <div>
        <h3 className="font-semibold text-lg mt-1 text-black">{name}</h3>
        <p className="text-sm text-gray-500 leading-snug mb-2">{title}</p>
        </div>
        </div>
        <div>
        <img src={starSrc} alt="star" className="mt-6 mb-2 w-28 h-auto"/>
        <h4 className="font-semibold text-xl text-indigo-500">{reviewtext}</h4>
        <p className="text-sm text-gray-600">{reviewText}</p>
        </div>
    </div>
    </div>
  );
};

export default TestimonialCard