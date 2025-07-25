import React from "react"
import ContactButton from "./ContactButton"

const BannerContent = ({
    description = "Get the best cleaning services at affordable prices.",
    onContactClick
}) => {
  return (
    <div className="text-center lg:text-left">
        {/* Discount Badge */}
    {/* Main Heading */}
    <h1 className="text-white text-3xl md:text-5xl lg:text-6xl leading-tight mb-6">
    Limited Time Offer - <br/> Enjoy Exclusive <br/> Cleaning Discounts!
    </h1>

    {/* Description */}
    <p className="text-white text-lg leading-relaxed mb-8 opacity-90 max-w-lg mx-auto lg:mx-0">
        {description}
      </p>

      {/* Contact Button */}
      <ContactButton onClick={onContactClick}/>
    </div>
  )
}

export default BannerContent