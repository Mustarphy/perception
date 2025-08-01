import React from 'react';
import PhoneButton from './PhoneButton';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const CommercialCleaningContent = ({ 
  title = "Impressive & Clean Businesses with Perception Commercial Cleaning",
  description = "Your office should reflect the professionalism and esteem of your company. Perception can deliver the impressive results your customers, clients, and employees expect when they walk into your establishment. Based in Brossard, we really raise the bar when it comes to commercial janitorial services that are ideal for office buildings, warehouses, plants, and factories. Simply put: nothing is left out, and no dirt is kept in!",
  phoneNumber = "416-555-1212",
  onPhoneClick
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });
  return (
    <div ref={ref}>
      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
        transition={{ duration: 1 }}
        >
      <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
        Impressive & Clean<br />
        Businesses with Perception <br />
        <span className="text-blue-600">Commercial Cleaning</span>
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-8 text-lg">
        {description}
      </p></motion.div>
      
      {/* Call to Action */}
      {/* <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <span className="text-gray-700 font-semibold whitespace-nowrap">
          Call us today at:
        </span>
        <PhoneButton 
          phoneNumber={phoneNumber}
          onClick={onPhoneClick}
        />
      </div> */}
    </div>
  );
};

export default CommercialCleaningContent;