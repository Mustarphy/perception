import React, { useState } from "react"
import TeamCard from "./components/TeamCard";
import TeamData from "./components/TeamData";

const teamMembers = [
    { id:'1', team: 'Atlas Stone', imageSrc: 'img7.jpeg', instagramSrc: "instagram.png", twitterSrc: '#' },
    { id:'2', team: 'Phoenix Sterling', imageSrc: 'team1.jpg', instagramSrc: '#', twitterSrc: 'twitter.png' },
    { id:'3', team: 'Titan Archer', imageSrc: 'img3.jpeg', instagramSrc: '#', twitterSrc: '#' },
    { id:'4', team: 'Nova Moon', imageSrc: 'team4.png', instagramSrc: '#', twitterSrc: '#' },
  ];

const OurTeam =() => {
    const [lightboxImage, setLightboxImage] = useState(null);
  return (
    <section className="mx-auto bg-white py-16  px-8 lg:px-16">
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-6 text-black">Meet the Expert Team at <span className="text-indigo-600">Perception Cleaner</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.id}
              {...member}
              onClick={() => setLightboxImage(member.imageSrc)}
            />
          ))}
        </div>
      </section>

      <section className="bg-gray-800 text-white p-10 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Perception Cleaner Team!</h2>
        {/* <p className="mb-6">
          Ac eu tortor facilisi pulvinar mattis. Nisi vel integer mauris nunc aliquam nunc ullamcorper tincidunt morbi.
        </p> */}
        <button
        onClick={() => window.location.href = '/join-team'} 
        className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition-all">Join Our Team</button>
      </section>

      {lightboxImage && (
        <TeamData imageSrc={lightboxImage} onClose={() => setLightboxImage(null)} />
      )}
    </section>
  )
}

export default OurTeam