import React from 'react';
import ParticleBackground from './ParticleBackground';
import profilePic from "../assets/Tequila-Lime-Zinnias.jpeg";

export default function Hero() {
  return (
  <section 
      id="home" 
      className="sticky top-0 z-0 min-h-screen w-full bg-black text-white flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Particle Animation Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleBackground />
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 z-10 relative">
        
        {/* Profile Photo Area (Mobile-ல் மேலே தெரிய lg:order-2 வழங்கப்பட்டுள்ளது) */}
        <div className="flex-1 flex justify-center relative w-full lg:order-2">
          {/* Glowing Background */}
          <div className="absolute w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-emerald-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>

          {/* Image Border Frame */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full p-1.5 sm:p-2 bg-gradient-to-b from-emerald-400 to-transparent">
            <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 flex items-center justify-center border-2 sm:border-4 border-black">
              <img
                src={profilePic}
                alt="Kishaliny Karuthiruman"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Text Content Area */}
        <div className="flex-1 text-center lg:text-left space-y-4 sm:space-y-6 lg:order-1">
          <p className="text-lg sm:text-2xl font-medium text-slate-300 tracking-wide">
            Hello,
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight relative z-10">
            I'm{" "}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200 transition-all duration-300 ease-out hover:scale-105 cursor-pointer origin-left transform-gpu">
              Kishaliny Karuthiruman
            </span>
          </h1>

          <p className="text-lg sm:text-2xl font-semibold text-slate-300">
            Full Stack Developer
          </p>

          <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            I build responsive, high-performance web applications with clean user interfaces and efficient backend integration.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 sm:pt-4">
            <a
              href="#contact"
              className="relative group px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full font-bold text-black bg-emerald-400 overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(52,211,153,0.6)] active:scale-95"
            >
              <span className="relative z-10">Hire Me</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}