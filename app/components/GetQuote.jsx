"use client"

import React, { useState, useEffect, useRef } from "react";
import ContactData from './ContactData';
import {
  Calendar,
  MapPin,
  Phone,
  Mail,
  Home,
  Building,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const GetQuote = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "ON",
    postalCode: "",
    serviceType: "", // Fixed: was ServiceType (capital S)
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    squareFootage: "",
    frequency: "",
    preferredDate: "",
    preferredTime: "",
    additionalServices: [],
    specialInstructions: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const mapRef = useRef(null);

  const provinces = [
    'AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'NT', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT'
  ];

  const additionalServicesList = [
    "Inside oven cleaning",
    "Inside refrigerator cleaning",
    "Window cleaning (interior)",
    "Carpet cleaning",
    "Upholstery cleaning",
    "Deep cleaning",
    "Move-in/move-out cleaning",
    "Post-construction cleanup",
  ];

  // Initialize map
  useEffect(() => {
    if (mapRef.current && !map) {
      // Initialize leaflet map
      const L = window.L;
      if (L) {
        const newMap = L.map(mapRef.current).setView([45.4215, -75.6972], 6); // Centered on Ottawa, Canada

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(newMap);

        setMap(newMap);
      }
    }
  }, [map]);

  // Geocode address and update map
  const updateMapLocation = async () => {
    if (!map) return;

    const fullAddress = `${formData.address}, ${formData.city}, ${formData.province}, Canada`;

    if (formData.address && formData.city) {
      try {
        // Using OpenStreetMap Nominatim for geocoding (free)
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(fullAddress)}&limit=1`
        );
        const data = await response.json();

        if (data && data.length > 0) { // Fixed: was data.lenght (typo)
          const { lat, lon } = data[0];
          const L = window.L;

          // Remove existing marker
          if (marker) {
            map.removeLayer(marker);
          }

          // Add new marker
          const newMarker = L.marker([lat, lon]).addTo(map);
          newMarker.bindPopup(`<b>Service Location</b><br>${fullAddress}`).openPopup();

          // Center map on location
          map.setView([lat, lon], 13);

          setMarker(newMarker);
        }
      } catch (error) {
        console.log('Geocoding error:', error);
      }
    }
  };

  // Update map when address changes
  useEffect(() => {
    const timer = setTimeout(() => {
      updateMapLocation();
    }, 1000); // Debounce for 1 second

    return () => clearTimeout(timer);
  }, [formData.address, formData.city, formData.province, map]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter((s) => s !== service)
        : [...prev.additionalServices, service],
    }));
  };

  const handleSubmit = async (e) => { // Fixed: Added async here
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using EmailJS to send email
      const emailData = {
        to_email: 'Perceptioncleaners@gmail.com',
        from_name: `${formData.firstName} ${formData.lastName}`, // Fixed: was to_name, should be from_name
        from_email: formData.email,
        phone: formData.phone,
        address: `${formData.address}, ${formData.city}, ${formData.province} ${formData.postalCode}`,
        service_type: formData.serviceType,
        property_type: formData.propertyType,
        bedrooms: formData.bedrooms,
        bathrooms: formData.bathrooms,
        square_footage: formData.squareFootage,
        frequency: formData.frequency,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        additional_services: formData.additionalServices.join(', '),
        special_instructions: formData.specialInstructions,
        subject: 'New Cleaning Quote Request'
      };

      // EmailJS send
      if (window.emailjs) {
        await window.emailjs.send(
          'service_k9izfpk',
          'template_y7di3jl',
          emailData,
          'zAowOnBUembMR5gbn'
        );
      }
      setSubmitted(true);
    } catch (error) {
      alert('There was an error sending your quote request. Please try again or call us directly.');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen py-16 px-8 lg:px-16 mx-auto bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quote Request Received!</h2>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for your interest in our cleaning services. We've received your quote request and will get back to you within 24 hours with a detailed estimate.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-600">
                <strong>What's next?</strong><br />
                Our team will review your requirements and send you a personalized quote via email. 
                If you have any urgent questions, feel free to call us at <strong>825 935 6767</strong>.
              </p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  firstName: '',
                  lastName: '',
                  email: '',
                  phone: '',
                  address: '',
                  city: '',
                  province: 'ON',
                  postalCode: '',
                  serviceType: '',
                  propertyType: '',
                  bedrooms: '',
                  bathrooms: '',
                  squareFootage: '',
                  frequency: '',
                  preferredDate: '',
                  preferredTime: '',
                  additionalServices: [],
                  specialInstructions: ''
                });
              }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
            >
              Submit Another Quote
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Load Leaflet CSS and JS */}
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
      
      {/* Load EmailJS */}
      <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

      <div className="min-h-screen py-16 px-8 lg:px-16 mx-auto bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Your Free Quote</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us about your cleaning needs and we'll provide you with a customized quote within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Request Your Quote</h3>
              <p className="text-blue-100">Fill out the form below for an accurate estimate</p>
            </div>

            <div className="p-8 space-y-8">
              {/* Personal Information */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-2" />
                  Contact Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Property Information */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  Property Information
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Address Form Fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Street Address *</label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                        <input
                          type="text"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Province *</label>
                        <select
                          name="province"
                          required
                          value={formData.province}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          {provinces.map(province => (
                            <option key={province} value={province}>{province}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code *</label>
                      <input
                        type="text"
                        name="postalCode"
                        required
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        placeholder="A1A 1A1"
                        className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Interactive Map */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h5 className="text-lg font-medium text-gray-700 mb-3 flex items-center">
                      <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                      Service Location
                    </h5>
                    <div 
                      ref={mapRef} 
                      className="w-full h-80 rounded-lg border text-gray-700 border-gray-300"
                      style={{ minHeight: '320px' }}
                    ></div>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      Map will update automatically as you enter your address
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Home className="w-5 h-5 text-blue-600 mr-2" />
                  Service Details
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Type *</label>
                    <select
                      name="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select service type</option>
                      <option value="residential">Residential Cleaning</option>
                      <option value="commercial">Commercial Cleaning</option>
                      <option value="deep">Deep Cleaning</option>
                      <option value="move">Move-in/Move-out</option>
                      <option value="post-construction">Post-Construction</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Property Type *</label>
                    <select
                      name="propertyType"
                      required
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select property type</option>
                      <option value="house">House</option>
                      <option value="apartment">Apartment</option>
                      <option value="condo">Condominium</option>
                      <option value="townhouse">Townhouse</option>
                      <option value="office">Office</option>
                      <option value="retail">Retail Space</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                    <select
                      name="bedrooms"
                      value={formData.bedrooms}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5+">5+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
                    <select
                      name="bathrooms"
                      value={formData.bathrooms}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select</option>
                      <option value="1">1</option>
                      <option value="1.5">1.5</option>
                      <option value="2">2</option>
                      <option value="2.5">2.5</option>
                      <option value="3">3</option>
                      <option value="3+">3+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Square Footage</label>
                    <input
                      type="text"
                      name="squareFootage"
                      value={formData.squareFootage}
                      onChange={handleInputChange}
                      placeholder="e.g. 1200"
                      className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cleaning Frequency *</label>
                  <select
                    name="frequency"
                    required
                    value={formData.frequency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select frequency</option>
                    <option value="one-time">One-time cleaning</option>
                    <option value="weekly">Weekly</option>
                    <option value="bi-weekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
              </div>

              {/* Scheduling */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                  Preferred Scheduling
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select time</option>
                      <option value="morning">Morning (8AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 5PM)</option>
                      <option value="evening">Evening (5PM - 8PM)</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Services */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Additional Services</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {additionalServicesList.map((service) => (
                    <label key={service} className="flex items-center space-x-3 p-3 border text-gray-700 border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.additionalServices.includes(service)}
                        onChange={() => handleCheckboxChange(service)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Special Instructions */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Instructions or Notes</label>
                <textarea
                  name="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please let us know about any specific cleaning requirements, access instructions, pets, or other important details..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending Quote Request...' : 'Get My Free Quote'}
                </button>
                <p className="text-sm text-gray-600 mt-3">
                  We'll review your request and send you a detailed quote within 24 hours
                </p>
              </div>
            </div>
          </form>

          {/* Contact Info Footer */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Need immediate assistance?</h4>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">825 935 6767</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">info@perceptioncleaners.ca</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>   
  );
};

export default GetQuote;