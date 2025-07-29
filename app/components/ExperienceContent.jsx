import React from 'react';
import FeatureItem from './FeatureItem';

const ExperienceContent = ({ 
  title = "We Are Very Experienced In Cleaning Services",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod tempor incididunt ut labore",
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
  ],
  className = ""
}) => {
  return (
    <div className={className}>
      {/* Main Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
      About Perception Cleaners
      </h2>
      
      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-10 text-lg">
        {description}
      </p>
      
      {/* Features List */}
      <div className="space-y-2">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceContent;