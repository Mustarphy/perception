import React from 'react'

export default function HeroSection() {
    // Smooth scroll function
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
    <section className="relative bg-white px-4 py-11 md:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 ">
            {/* Left Column */}
            <div>
                <div className=" flex gap-4 ">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-400">
                    Perception <br /> Clean Spaces
                </h1>
                <div>
                <img src="Component.png" alt="Tools Icon" className="w-[50] h-[50] object-cover"/></div>
                </div>

                <div className="flex items-center gap-4 mt-6">
                    <div className="text-center">
                        <div className="w-contain h-full bg-purple-200 rounded-md mb-2">
                           <img src="tools1.png" alt="Tools Icon" className="w-16 h-20 object-cover"/>
                        </div>
                        <p className="text-lg font-bold text-indigo-400">12 <span  className="text-xs text-gray-600">Professional Tools</span></p>
                    </div>

                    <div className="ml-auto">
                        <p className="text-sm text-gray-600 font-medium mb-2">
                            Exceptional Service
                        </p>
                        <p className="text-gray-500 text-sm mb-4">
                        Top-Rated Cleaning Service in Canada
                        </p>
                        <button onClick={() => scrollToSection('about')} className="inline-block bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition">Learn More</button>
                    </div>
                </div>
            </div>

             {/* Right Column – Video */}
             <div className="relative z-20">
             <div className="bg-purple-300 rounded-lg overflow-hidden aspect-video relative">
                <a href="vidio" className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                        <span className="text-purple-500 text-xl">▶</span>
                    </div>
                </a>
                <video
  className="w-full h-full object-cover rounded-lg"
  autoPlay
  muted
  loop
  playsInline
  controls 
  poster="/images/video-preview.jpg" // optional thumbnail
>
  <source src="herovideo.mp4" type="video/mp4" />
  Your browser doesn't support the video tag.
</video>
             </div>
             </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-28 bg-indigo-700 z-0" />
    </section>
  )
}
