import React from 'react'
import TestimonialCard from './TestimonialCard';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const testimonials = [
    {
        // name: 'William Hazelip',
        title: 'Homeowner',
        reviewtext: 'Perception Clean Home',
        reviewText: 'I came home to sparkling floors, fresh-smelling rooms, and even the hard-to-reach corners were spotless. I’ll definitely be scheduling regular cleanings with them!',
        // imageScr: 'homeowner1.jpg',
        starSrc: 'expertStar.png',
    },
    {
        // name: 'Teresa Hamilton',
        title: 'Director',
        reviewtext: 'Professional & Reliable',
        reviewText: 'We’ve been using Perception Cleaners for our office for over 6 months now. Their attention to detail is unmatched. They’re discreet during working hours and always leave the workspace organized and sanitized. It’s made a huge difference in our team’s comfort and productivity.',
        // imageScr: 'homeowner3.png',
        starSrc: 'expertStar.png',
    },
    {
        // name: 'Louis Swanson',
        title: 'Homeowner',
        reviewtext: 'Flexible Scheduling',
        reviewText: 'Perception Cleaners did a phenomenal job in my apartment! The team was punctual, polite, and incredibly thorough.',
        // imageScr: 'homeowner2.jpg',
        starSrc: 'expertStar.png',
    },
    
];

const TestimonialSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });
  return (
    <section className="bg-white py-16 px-8 lg:px-16 mx-auto" ref={ref}>
      <div className="flex justify-between items-center mb-6">
        <div>
        <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
        transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mt-2 text-black pb-3">Real Testimonials from<br/></h2><span className='text-3xl font-bold mt-2 text-indigo-400 '>Satisfied Customers</span></motion.div>
        </div>
        <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
        transition={{ duration: 1 }}
        >
        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">View All
        </button></motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
        transition={{ duration: 1 }}
        >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {testimonials.map((t, idx) => (
          <TestimonialCard key={idx} {...t} />
        ))}
      </div>
      </motion.div>
    </section>
  )
}

export default TestimonialSection