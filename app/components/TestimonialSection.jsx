import React from 'react'
import TestimonialCard from './TestimonialCard';

const testimonials = [
    {
        name: 'William Hazelip',
        title: 'Homeowner',
        reviewtext: 'Perception Clean Home',
        reviewText: 'Tellus aliquam faucibus imperdiet eget interdum risus diam.',
        imageScr: 'homeowner1.jpg',
        starSrc: 'expertStar.png',
    },
    {
        name: 'Teresa Hamilton',
        title: 'Homeowner',
        reviewtext: 'Professional & Reliable',
        reviewText: 'Tellus aliquam faucibus imperdiet eget interdum risus diam.',
        imageScr: 'homeowner3.png',
        starSrc: 'expertStar.png',
    },
    {
        name: 'Louis Swanson',
        title: 'Homeowner',
        reviewtext: 'Flexible Scheduling',
        reviewText: 'Tellus aliquam faucibus imperdiet eget interdum risus diam.',
        imageScr: 'homeowner2.jpg',
        starSrc: 'expertStar.png',
    },
    
];

const TestimonialSection = () => {
  return (
    <section className="bg-white py-16 px-4 mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold mt-2 text-black pb-3">Real Testimonials from<br/></h2><span className='text-3xl font-bold mt-2 text-indigo-400 '>Satisfied Customers</span>
        </div>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">View All</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {testimonials.map((t, idx) => (
          <TestimonialCard key={idx} {...t} />
        ))}
      </div>
    </section>
  )
}

export default TestimonialSection