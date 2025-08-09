import React from "react"

const ContactButton = ({ onClick, className = "", children = "Contact Us" }) => {
  return (
    <button onClick={onClick}  className={`bg-orange-400 hover:bg-orange-500 transition-all duration-200 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 ${className}`}>
        {children}
    </button>
  )
}

export default ContactButton