"use client";
import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-300"
          aria-label="Back to top"
        >
          <FiArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}