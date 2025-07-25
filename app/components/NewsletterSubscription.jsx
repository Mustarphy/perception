import React, { useState } from 'react';

const NewsletterSubscription = ({ className = "" }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (email.trim() && !isLoading) {
      setIsLoading(true);
      
      try {
        // Handle newsletter subscription logic here
        console.log('Subscribing email:', email);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setIsSubscribed(true);
        setEmail('');
        
        // Reset success message after 3 seconds
        setTimeout(() => setIsSubscribed(false), 3000);
      } catch (error) {
        console.error('Subscription failed:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className={className}>
      <h3 className="text-white text-lg font-semibold mb-4">
        Subscribe to Newsletter
      </h3>
      
      {isSubscribed ? (
        <div className="text-green-400 font-medium flex items-center gap-2">
          <span>✓</span>
          <span>Successfully subscribed!</span>
        </div>
      ) : (
        <div className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter your email..."
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-full border border-gray-700 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-30 transition-all duration-200 placeholder-gray-500"
            disabled={isLoading}
          />
          <button
            onClick={handleSubmit}
            disabled={isLoading || !email.trim()}
            className="bg-orange-400 hover:bg-orange-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-200 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none w-full sm:w-auto"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsletterSubscription;