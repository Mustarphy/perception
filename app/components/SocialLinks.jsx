import React from 'react';
import { Twitter, Instagram, Youtube } from 'lucide-react';

const SocialLinks = ({ className = "" }) => {
  const socialLinks = [
    { 
      icon: <Twitter className="w-5 h-5" />, 
      href: "#", 
      label: "Twitter",
      hoverColor: "hover:text-blue-400"
    },
    { 
      icon: <Instagram className="w-5 h-5" />, 
      href:"https://www.instagram.com/perceptioncleaners/",
      target:"_blank",
      rel:"noopener noreferrer",
      label: "Instagram",
      hoverColor: "hover:text-pink-400"
    },
    { 
      icon: <Youtube className="w-5 h-5" />, 
      href: "#", 
      label: "YouTube",
      hoverColor: "hover:text-red-400"
    }
  ];

  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          aria-label={link.label}
          className={`text-gray-400 ${link.hoverColor} transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;