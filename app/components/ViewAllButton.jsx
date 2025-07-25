import React from "react"

const ViewAllButton = ({ onClick, className = ""}) => {
  return (
    <button onClick={onClick} className={`bg-orange-400 hover:bg-orange-500 transition-all duration-200 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 ${className} `}>
        View All
    </button>
  )
}

export default ViewAllButton