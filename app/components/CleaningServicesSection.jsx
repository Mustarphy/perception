import React from "react"
import servicesData from "./servicesData";
import ServiceCard from "./ServiceCard";
import ViewAllButton from "./ViewAllButton";

const CleaningServicesSection =() => {
    const handleViewAll = () => {
        console.log('Navigate to all services page');
    };
  return (
    <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
                <div className="flex-1">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Elevate Your Cleanliness<br />
              <span className="text-indigo-500">with Perception</span>
                    </h2>
                </div>
                <div className="flex-shrink-0">
                    <ViewAllButton onClick={handleViewAll}/>
                </div>
            </div>

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
        </div>
    </section>
  )
}

export default CleaningServicesSection