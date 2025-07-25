"use client";
import React from 'react';
import CleaningImageCollage from './CleaningImageCollage';
import ExperienceContent from './ExperienceContent';

const ExperienceSection = ({ 
  mainImageSrc = "aboutimg1.png",
  smallImage1Src = "aboutimg2.png",
  smallImage2Src = "aboutimg3.png",
  title = "We Are Very Experienced In Cleaning Services",
  description = "Perception Cleaner: See the world with clarity ",
  features = [
    {
      title: "We are Committed",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod tempor incididunt"
    },
    {
      title: "Trusted Professionals", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod tempor incididunt"
    },
    {
      title: "Highly Rated Cleaning",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod tempor incididunt"
    }
  ]
}) => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          
          {/* Left Side - Image Collage */}
          <div className="order-2 lg:order-1">
            <CleaningImageCollage 
              mainImageSrc={mainImageSrc}
              smallImage1Src={smallImage1Src}
              smallImage2Src={smallImage2Src}
            />
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <ExperienceContent 
              title={title}
              description={description}
              features={features}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;