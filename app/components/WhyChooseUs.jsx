import React from "react"
import FeatureCard from "./FeatureCard"
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.4,
      });
  return (
    <section className="bg-[#f9f9ff] py-16 px-8 lg:px-16" ref={ref}>
        <div className="max-w-full mx-auto">

            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            <motion.div
        className='lg:w-[50%]'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
        transition={{ duration: 1 }}
        >
                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-10 leading-snug text-wrap text-gray-950">
                        Choose Excellence, Choose Perception Cleaners
                    </h2>

                    {/* Grid of FeatureCards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                        <FeatureCard 
                            imageSrc="Icon1.png"
                            title="Reliable Cleaning Crew"
                            description="Our cleaning crew is reliable, trustworthy, and dedicated to providing the best cleaning services."
                        />
                        <FeatureCard 
                            imageSrc="Icon2.png"
                            title="On-Time Services"
                            description="We understand the importance of punctuality, and our team will arrive on time to ensure there is no delay"
                        />
                        <FeatureCard 
                            imageSrc="Icon3.png"
                            title="Flexible Packages"
                            description="We offer flexible packages to suit your needs and budget, ensuring you get the best value"
                        />
                        <FeatureCard 
                            imageSrc="Icon4.png"
                            title="Transparent Pricing"
                            description="Our pricing is transparent, and we provide a detailed breakdown of our services and costs"
                        />
                    </div>
                </div>
                </motion.div>

                <div className="w-44 max-w-xs lg:max-w-sm shrink-0">
                <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
        transition={{ duration: 1 }}
        >
                    <img src="FunFact.png" alt="Project Finished" className="w-full h-auto object-contain" />
                    </motion.div>
                </div>
            </div>

            <div className="mt-12 items-start">
                <p className="text-sm text-gray-600 mb-4">
                    Trusted by over <span className="text-indigo-600 font-semibold">90K +</span> companies worldwide
                </p>

                {/* Fixed Marquee with Faster Animation */}
                <div className="marquee-container h-16 flex items-center overflow-hidden">
                    <div className="animate-marquee-fast flex items-center gap-12 whitespace-nowrap">
                        <img src="LogoClient1.png" alt="logo1" className="h-8 object-contain" />
                        <img src="LogoClient2.png" alt="logo2" className="h-8 object-contain" />
                        <img src="LogoClient3.png" alt="logo3" className="h-8 object-contain" />
                        <img src="LogoClient4.png" alt="logo4" className="h-8 object-contain" />
                        <img src="LogoClient5.png" alt="logo5" className="h-8 object-contain" />
                        
                        {/* Duplicate for seamless loop */}
                        <img src="LogoClient1.png" alt="logo1" className="h-8 object-contain" />
                        <img src="LogoClient2.png" alt="logo2" className="h-8 object-contain" />
                        <img src="LogoClient3.png" alt="logo3" className="h-8 object-contain" />
                        <img src="LogoClient4.png" alt="logo4" className="h-8 object-contain" />
                        <img src="LogoClient5.png" alt="logo5" className="h-8 object-contain" />
                    </div>
                </div>
            </div>
        </div>

        <style jsx>{`
            @keyframes marquee {
                0% {
                    transform: translateX(100%);
                }
                100% {
                    transform: translateX(-100%);
                }
            }
            
            .animate-marquee-fast {
                animation: marquee 12s linear infinite;
            }
            
            .marquee-container {
                overflow: hidden;
                white-space: nowrap;
            }
            
            /* Pause animation on hover */
            .marquee-container:hover .animate-marquee-fast {
                animation-play-state: paused;
            }
        `}</style>
    </section>
  );
}