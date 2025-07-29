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
import GetQuote from './components/GetQuote';
import ContactSection from './components/ContactSection';

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
    <section id="">
      <QuoteProcessSection/>
    </section>

    <section id="get-quote">
      <GetQuote/>
    </section>
    <section id="contact" className=" hidden md:block items-center justify-center">
    <ContactSection/>
    </section>
    <Footer/>
    <BackToTopButton/>
   </main>
  )
}
