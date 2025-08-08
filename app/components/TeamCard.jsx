import React from "react"

const TeamCard= ({ team, imageSrc, instagramSrc, twitterSrc, onClick }) => {
  return (
    <div className="rounded-2xl p-6 relative overflow-hidden min-h-[320px] flex flex-col group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${imageSrc})`,
    backgroundColor:  '#8B5CF6' }} onClick={onClick}>
        <div className="absolute top-2 right-2 grid space-y-2">
        <div className="bg-indigo-700 bg-opacity-30 hover:bg-opacity-50 transition-all duration-200 rounded-full p-2 group-hover:scale-110">
          <a href={instagramSrc} target="_blank" rel="noopener noreferrer">
            <img src="instagram.png" alt="Instagram" className="w-6 h-6" />
          </a></div>
          <div className="bg-indigo-700 bg-opacity-30 hover:bg-opacity-50 transition-all duration-200 rounded-full p-2 group-hover:scale-110">
          <a href={twitterSrc} target="_blank" rel="noopener noreferrer">
            <img src="twitter.png" alt="Twitter" className="w-6 h-6" />
          </a></div>
        </div>
      {/* <div className="mt-auto">
            <div className="bg-white rounded-xl w-44 p-2 shadow-lg">
                <h3 className="text-gray-800 font-bold text-lg mb-2">{team}</h3>
            </div>
         </div> */}
    </div>
  );
};

export default TeamCard