import React from "react"
import BannerContent from "./BannerContent";
import ExperienceCard from "./ExperienceCard";

const PromotionalBanner = ({
    backgroundImageSrc = "#",
    experienceCardImageSrc = "tools1.png",
    yearsOfExperience = "22",
    discountText = "Discount up to 50%",
    description = "Get the best deals on our products.",
}) => {
    const handlecontactClick = () => {
        console.log("Contact button clicked");
    };
  return (
    <section className="relative py-20 px-4 bg-cover bg-center bg-no-repeat min-h-[500px] flex items-center"
    style={{ backgroundImage: `url(${backgroundImageSrc})`,
    backgroundColor: '#8B5CF6'
 }}
    >
        <div className="absolute inset-0 bg-indigo-700 bg-opacity-20"></div>

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto w-full z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Experience Card */}
                <ExperienceCard imageSrc={experienceCardImageSrc} yearsOfExperience={yearsOfExperience}/>

                {/* Right Side - Content */}
                <BannerContent discountText={discountText} description={description} onContactClick={handlecontactClick}/>
            </div>
        </div>
    </section>
  )
}

export default PromotionalBanner