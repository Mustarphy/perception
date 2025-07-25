import React from 'react';
import ProcessStep from './ProcessStep';
import CommercialCleaningContent from './CommercialCleaningContent';
import CleaningImage from './CleaningImage';

const QuoteProcessSection = ({ 
  cleaningImageSrc = "rectangle8.png",
  phoneNumber = "(205) 484-9664",
  steps = [
    { number: "01", title: "Submit a few details." },
    { number: "02", title: "We will schedule a walk-through." },
    { number: "03", title: "Get a quote!" }
  ]
}) => {
  const handlePhoneClick = () => {
    // Custom phone click logic
    console.log(`Calling ${phoneNumber}`);
    // Default behavior will be handled by PhoneButton component
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get a Quote is Easy
          </h2>
        </div>

        {/* Process Steps */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-28 mb-20">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              stepNumber={step.number}
              title={step.title}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Commercial Cleaning Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <CommercialCleaningContent 
              phoneNumber={phoneNumber}
              onPhoneClick={handlePhoneClick}
            />
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <CleaningImage 
              imageSrc={cleaningImageSrc}
              alt="Professional commercial cleaning service"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default QuoteProcessSection;