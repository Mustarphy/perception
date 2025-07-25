import React from 'react';
import BrandSection from './BrandSection';
import NavigationLinks from './NavigationLinks';
import NewsletterSubscription from './NewsletterSubscription';

const Footer = ({ 
  logoSrc = "#",
  brandName = "Perception",
  description = "Leo elementum iaculis quam massa vitae odio sed. Morbi tincidunt senectus."
}) => {
  const navigationLinks = [
    { name: "Home", href: "home" },
    { name: "About Us", href: "about" },
    { name: "Our Services", href: "services" },
    { name: "Our Team", href: "careers" }
  ];

  const serviceLinks = [
    { name: "Home Cleaning", href: "about" },
    { name: "Office Cleaning", href: "about" },
    { name: "Kitchen Cleaning", href: "about" },
    { name: "Vehicle Cleaning", href: "about" }
  ];

  const legalLinks = [
    { name: "Terms of Use", href: "#" },
    { name: "Privacy Policy", href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <BrandSection 
              logoSrc={logoSrc}
              brandName={brandName}
              description={description}
            />
          </div>

          {/* Navigation Links */}
          <NavigationLinks 
            title="Navigation"
            links={navigationLinks}
          />

          {/* Services Links */}
          <NavigationLinks 
            title="Services"
            links={serviceLinks}
          />

          {/* Newsletter Subscription */}
          <NewsletterSubscription />

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              Copyright © 2025 | Develope by 
              <a 
                href="#" 
                className="text-cyan-400 hover:text-cyan-300 ml-1 transition-colors duration-200"
              >
                Mustytech
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;