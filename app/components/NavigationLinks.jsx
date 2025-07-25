import React from 'react';

const NavigationLinks = ({ title, links, className = "" }) => {
  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
    setMenuOpen(false); // Close mobile menu after clicking
};
  return (
    <div className={className}>
      <h3 className="text-white text-lg font-semibold mb-4">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <button  onClick={() => scrollToSection(link.href)}
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block py-1"
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationLinks;