'use client'

import CleaningServicesSection from "./components/CleaningServicesSection"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import OurTeam from "./components/OurTeam"
import PromotionalBanner from "./components/PromotionalBanner"
import QuoteProcessSection from "./components/QuoteProcessSection"
import TestimonialSection from "./components/TestimonialSection"
import TopBar from "./components/TopBar"
import WhyChooseUs from "./components/WhyChooseUs"
import ExperienceSection from "./components/ExperienceSection"
import Footer from "./components/Footer"
import BackToTopButton from "./components/BackToTopButton"

export default function ClientLayout() {
  return (
    <main>
    <TopBar/>
    <Navbar/>
  
    {/* Home Section */}
    <section id="home">
      <HeroSection/>
    </section>
    
    {/* About Section */}
    <section id="about">
      <ExperienceSection/>
      <WhyChooseUs/>
    </section>
    
    {/* Services Section */}
    <section id="services">
      <CleaningServicesSection/>
      <PromotionalBanner/>
    </section>
    
    {/* Careers Section */}
    <section id="careers">
      <OurTeam/>
    </section>

    <TestimonialSection/>
    
    {/* Contact Section */}
    <section id="contact">
      <QuoteProcessSection/>
    </section>
    
    <Footer/>
    <BackToTopButton/>
   </main>
  )
}
