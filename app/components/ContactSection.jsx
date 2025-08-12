import React from 'react'
import ContactData from './ContactData';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const ContactSection = () => {
    const lines = [
          { icon: <FiPhone />, title: "+1 (825) 994-9885" },
          { icon: <FiMapPin />, title: "Calgary" },
          { icon: <FiMail />, title: "Perceptioncleaners@gmail.com" },
        ];
  return (
    <>
    <section className="bg-white py-12">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-900 mt-12 lg:mt-0 text-center mb-6">
          Contact Information
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 px-4">
          {lines.map((line, index) => (
            <ContactData
              key={index}
              lineIcon={line.icon}
              title={line.title}
              isLast={index === lines.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default ContactSection