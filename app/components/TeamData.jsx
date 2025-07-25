import React from 'react'

const TeamData = ({ imageSrc, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
    <div className="relative">
      <img src={imageSrc} alt="Team Member" className="max-w-[90vw] max-h-[90vh]" />
      <button onClick={onClose} className="absolute top-2 right-2 text-white text-xl">✕</button>
    </div>
  </div>
  )
}

export default TeamData