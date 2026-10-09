import React from 'react';
import aboutImg from '../assets/Tequila-Lime-Zinnias.jpeg'; // உங்களின் படம்

export default function About() {
  return (
    <section id="about" className="relative z-10 min-h-screen bg-zinc-950 text-white py-20 px-6 sm:px-12 lg:px-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Main Grid: Left Photo | Right Details */}
        {/* Section Title Block (Screenshot Model) */}
{/* Section Title Block (Compact & Small Size) */}
<div className="relative flex flex-col items-center justify-center mb-10 text-center">
  {/* Background Outline Text (Small Size) */}
  <h2 
    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-widest select-none opacity-25"
    style={{
      WebkitTextStroke: '1.5px #34d399',
      color: 'transparent'
    }}
  >
    ABOUT
  </h2>

  {/* Foreground Subtitle */}
  <div className="absolute flex items-center justify-center gap-2">
    <span className="w-5 sm:w-8 h-[2px] bg-emerald-400"></span>
    <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
      About Me
    </h3>
    <span className="w-5 sm:w-8 h-[2px] bg-emerald-400"></span>
  </div>
</div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
     
      <div className="lg:col-span-5 flex justify-center">
        {/* h-80 (320px) அல்லது h-96 (384px) என உயரம் குறிப்பிடலாம் */}
          <div className="relative w-full max-w-md h-80 sm:h-96 rounded-xl overflow-hidden border border-zinc-800 shadow-2xl group">
            <img
                src={aboutImg}
                alt="Kishaliny Karuthiruman"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
      </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7 space-y-6">
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              I'm <span className="text-emerald-400">Kishaliny Karuthiruman</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              I am a passionate Full Stack Developer focused on crafting clean, performant, and user-friendly web applications. With a solid foundation in React, Vite, Tailwind CSS, and backend technologies, I turn ideas into modern digital experiences.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              I enjoy solving complex problems, building responsive UI components, and continuously learning modern web stack standards.
            </p>

            {/* Two-Column Personal Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-4 border-t border-zinc-800 text-sm sm:text-base">
              
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-white w-24">Name</span>
                <span className="text-slate-400">: Kishaliny Karuthiruman</span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="font-semibold text-white w-24">Email</span>
                <span className="text-emerald-400 cursor-pointer hover:underline truncate">: kishak.navicode@gmail.com</span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="font-semibold text-white w-24">Role</span>
                <span className="text-slate-400">: Full Stack Developer</span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="font-semibold text-white w-24">Phone</span>
                <span className="text-slate-400">: +94 76 896 1111</span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="font-semibold text-white w-24">Location</span>
                <span className="text-slate-400">: Jaffna, Sri Lanka</span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="font-semibold text-white w-24">Freelance</span>
                <span className="text-emerald-400 font-medium">: Available</span>
              </div>

            </div>

            {/* Bottom Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
               <a
                  href="/resume.pdf"
                  download="Kishaliny_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition-all duration-300 shadow-lg shadow-emerald-500/20 transform hover:-translate-y-1 active:scale-95"
                >
                  Download CV
               </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}