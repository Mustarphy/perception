"use client";
import React from 'react';
import CleaningImageCollage from './CleaningImageCollage';
import ExperienceContent from './ExperienceContent';
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';


const ExperienceSection = ({ 
  mainImageSrc = "aboutimg1.png",
  smallImage1Src = "aboutimg2.png",
  smallImage2Src = "aboutimg3.png",
  title = "",
  description = "Perception Cleaners is the new company in the industry operating within the Calgary area.",
  features = [
    {
      title: "MISSION:",
      description:"Our mission is to make you smile and say  Thank You after we clean your office or home."
    },
    {
      title: "VISION:", 
      description: "Our vision is to disrupt the cleaning industry and become a household franchise in record time through higher standards in professionalism, creativity, and excellence."
    },
  ]
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });
  return (
    <section className="bg-white py-16 px-8 lg:px-16" ref={ref} >
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24 items-center">
          
          {/* Left Side - Image Collage */}
        <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
        transition={{ duration: 1 }}
        >
          <div className="order-2 lg:order-1 justify-end">
            <CleaningImageCollage 
              mainImageSrc={mainImageSrc}
              smallImage1Src={smallImage1Src}
              smallImage2Src={smallImage2Src}
            />
          </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
        transition={{ duration: 1 }}
        >
          <div className="order-1 lg:order-2">
            <ExperienceContent 
              title={title}
              description={description}
              features={features}
            />
          </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;