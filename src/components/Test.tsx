// src/components/CoffeePromo.tsx
import React from 'react';

type Test = object

const CoffeePromo: React.FC<Test> = () => {
  return (
    <div className="relative bg-orange-600 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements - coffee beans and white wave */}
      <div className="absolute inset-0 z-0">
        {/* You'd replace these with actual image paths or SVGs for the beans and the wave */}
        <img src="/path-to-your-coffee-beans.png" alt="Coffee Beans" className="absolute top-10 left-0 opacity-20 w-48 -rotate-12" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-white rounded-t-full origin-bottom-left scale-x-[1.5]"></div>
      </div>

      {/* Content area */}
      <div className="relative z-10 text-white text-center p-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Enjoy Delicious
          <br />
          Coffee Today
        </h1>
        <button className="bg-white text-orange-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
          Order Now
        </button>
      </div>

      {/* Coffee cup graphic */}
      <div className="absolute bottom-20 right-10 md:right-40 z-20">
        {/* Replace with your actual coffee cup image/SVG with splash */}
        <img src="/path-to-your-coffee-cup-graphic.png" alt="Coffee Cup" className="w-64 md:w-96 animate-float" />
      </div>

      {/* Optional: Add a subtle floating animation for the coffee cup */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CoffeePromo;
