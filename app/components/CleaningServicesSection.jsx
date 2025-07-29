import React from "react"
import servicesData from "./servicesData";
import ServiceCard from "./ServiceCard";
import ViewAllButton from "./ViewAllButton";
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';


const CleaningServicesSection =() => {
    const handleViewAll = () => {
        console.log('Navigate to all services page');
    };
    const { ref, inView, fadeUp, stagger } = useInView({
        triggerOnce: false,
        threshold: 0.4,
      });
  return (
    <section className="bg-gray-50 py-16 px-8 lg:px-16" ref={ref}>
        <div className="max-w-full mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
                <div className="flex-1">
                <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
        transition={{ duration: 1 }}
        >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Elevate Your Cleanliness<br />
              <span className="text-indigo-500">with Perception Cleaners</span>
                    </h2>
                    </motion.div>
                </div>
                <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
        transition={{ duration: 1 }}
        >
                <div className="flex-shrink-0">
                    <ViewAllButton onClick={handleViewAll}/>
                </div>
                </motion.div>
            </div>
            <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          variants={stagger}
        >
            <motion.div
        variants={fadeUp}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesData.map((service) => (
                    <ServiceCard
                    key={service.id}
                    title={service.title}
                    description={service.description}
                    discount={service.discount}
                    imageSrc={service.imageSrc}
                    />
                ))}
            </div>
            </motion.div>
            </motion.div>
        </div>
    </section>
  )
}

export default CleaningServicesSection