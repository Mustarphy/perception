'use client'

import { useState, useEffect } from "react";
import CleaningServicesSection from "./components/CleaningServicesSection"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import OurTeam from "./OurTeam"
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (2 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 border-opacity-60"></div>
        <p className="mt-4 text-orange-600 font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <main>
      <section className="hidden lg:block">
      <TopBar />
      </section>
      <Navbar />
      {/* Home Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about">
        <ExperienceSection />
        <WhyChooseUs />
      </section>

      {/* Services Section */}
      <section id="services">
        <CleaningServicesSection />
        <PromotionalBanner />
      </section>

      {/* Careers Section */}
      <section id="careers">
        <OurTeam />
      </section>

      <TestimonialSection />

      {/* Contact Section */}
      <section id="">
        <QuoteProcessSection />
      </section>

      <section id="get-quote">
        <GetQuote />
      </section>
      <section id="contact" className="">
        <ContactSection />
      </section>
      <Footer />
      <BackToTopButton />
    </main>
  );
}
