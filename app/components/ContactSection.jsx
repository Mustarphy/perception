import React from 'react'
import ContactData from './ContactData';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const ContactSection = () => {
    const lines = [
          { icon: <FiPhone />, title: "825 935 6767" },
          { icon: <FiMapPin />, title: "Calgary" },
          { icon: <FiMail />, title: "info@perceptioncleaners.ca" },
        ];
  return (
    <>
    <section className="justify-center item-center bg-white px-4 py-12 ">
    <h1 className="text-2xl font-bold text-gray-900 mt-12 lg:mt-0 text-center"> Contact Information </h1>
    <div className=" justify-center items-center px-32">
    <div className=" mt-6 grid lg:flex ">
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