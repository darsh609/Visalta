import React, { useState, useEffect } from 'react';
import { BookOpen, Calendar, Trophy, Users, Code, Star } from 'lucide-react';

const featuresList = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Expert-Led Learning",
    description: "Learn from industry professionals with years of experience"
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Flexible Schedule",
    description: "Study at your own pace with 24/7 access to resources"
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Practical Projects",
    description: "Build real-world applications with hands-on experience"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community Support",
    description: "Join a thriving community of developers"
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Live Coding",
    description: "Interactive coding sessions with real-time feedback"
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Career Growth",
    description: "Get guidance for your professional development"
  }
];

const SlidingFeatures = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const itemHeight = 90; // Height of each feature item

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(prev => {
        const nextPosition = prev + itemHeight;
        return nextPosition >= itemHeight * featuresList.length ? 0 : nextPosition;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full text-white p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left section */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-[#1db954]">Who are We</h2>
          <h1 className="text-5xl font-bold leading-tight">
            Empowering Coders,<br />
            Enabling Dreams
          </h1>
          <p className="text-gray-300 text-lg">
            Unlock your potential with our community-driven platform dedicated to empowering coders of all levels. 
            Discover how we're shaping the future of coding education.
          </p>
          <button className="bg-[#1db954] hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Let's Connect
          </button>
        </div>

        {/* Right section - Scrolling features */}
        <div className="relative h-[300px] overflow-hidden">
          <div 
            className="absolute w-full transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateY(-${scrollPosition}px)`
            }}
          >
            {/* Double the list to create seamless loop */}
            {[...featuresList, ...featuresList].map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 h-[120px]"
              >
                <div className="p-3 text-[#1db954] rounded-full">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidingFeatures;