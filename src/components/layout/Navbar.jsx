import { useState, useEffect } from 'react';

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [randomPhrase, setRandomPhrase] = useState('');

  // Array of random phrases
  const phrases = [
    "Designed in Brazil, Made in America.",
    "I love my girlfriend!!!",
    "Vai Corinthians!!",
    "Eat some cereal today",
    "This website is dedicated to my dogs",
    "Rachmaninoff Concerto no. 3 is so good.",
    "Whatever",
    "Another one!",
    "Do something fun today :)",
    "Call your parents"
  ];

  // Set random phrase on component mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setRandomPhrase(phrases[randomIndex]);
  }, []);

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const nyTime = new Date(now.toLocaleString("en-US", {timeZone: "America/New_York"}));
      const timeString = nyTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setCurrentTime(timeString);
    };

    updateTime(); // Set initial time
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full flex flex-row justify-between items-center border-b border-[#7F7F7F] bg-white/0 z-50">
      {/* Logo Section */}
      <div className="collapse lg:visible w-0 lg:w-16 lg:h-16 lg:p-2.5 border-r border-b border-[#7F7F7F] flex justify-center items-center animate-hue-shift">
        <img src="./assets/EZMlogoWhite.svg" alt="EZM Logo" className="w-13 h-13" />
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col h-20 lg:h-16 bg-white/0 backdrop-blur-md">
        {/* Top Info Bar */}
        <div className="flex-1 px-4 lg:px-12 bg-[#BBFF99]/50 border-b border-t border-[#7F7F7F] flex lg:justify-between items-center backdrop-blur-xl">
        {/* Random phrase */}
          <div className="flex flex-1 items-center gap-6 text-stone-700">
            <span className="text-xs font-['Geist_Mono']">{randomPhrase}</span>
          </div>
          <div className="collapse lg:visible flex items-center gap-6 text-stone-700">
            <span className="text-xs font-['Geist_Mono']">New York, NY</span>
            <span className="text-xs font-['Geist_Mono']">{currentTime}</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 flex">
          <button
            onClick={() => scrollToSection('projects')}
            className="flex-1 bg-stone-100/10 border-r border-[#7F7F7F] flex justify-center items-center hover:bg-[#E5E5E5]/90 transition-colors duration-200 backdrop-blur-xl cursor-pointer"
          >
            <span className="text-black text-sm font-['Geist_Mono'] uppercase">Projects</span>
          </button>
          
          <button
            onClick={() => scrollToSection('aboutSection')}
            className="flex-1 bg-stone-100/10 flex justify-center items-center hover:bg-[#E5E5E5]/90 transition-colors duration-200 backdrop-blur-xl cursor-pointer"
          >
            <span className="text-black text-sm font-['Geist_Mono'] uppercase">About</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
