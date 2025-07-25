import React from "react"

const ExperienceCard = ({
    imageSrc = "FunFact2.png",
    yearsOfExperience ="22",
    className = "",
}) => {
  return (
    <div className={`flex justify-center lg:justify-start ${className}`}>
        <div className="relative w-72 h-80 rounded-2xl bg-cover bg-center bg-no-repeat shadow-2xl hover:shadow-3xl transition-shadow duration-300" style={{ backgroundImage: `url(${imageSrc})`, backgroundColor: '#C4B5FD' }}>
            {/* Years of Experience Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 lg:translate-x-1/2 -translate-y-1/2">
            <div className="bg-black bg-opacity-90 backdrop-blur-sm rounded-xl p-6 text-center shadow-xl hover:bg-opacity-95 transition-all duration-200">
            <div className="text-yellow-400 text-2xl mb-2">✨</div>
            <div className="text-white text-4xl font-bold mb-1">{yearsOfExperience}</div>
            <div className="text-gray-300 text-sm font-medium">Years of</div>
            <div className="text-gray-300 text-sm font-medium">Experience</div>
          </div>
            </div>
        </div>
    </div>
  )
}

export default ExperienceCard