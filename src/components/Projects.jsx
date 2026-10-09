import React, { useState } from 'react';
import { Video, X } from 'lucide-react';

export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const projectsList = [
    {
      id: 1,
      title: "Integrated Pharmacy & Laboratory Management System",
      role: "Individual Project | 2026 – Present",
      description: "A multi-user healthcare platform featuring role-based access control (Admin, Pharmacist, Lab Tester) using Middleware, automated patient ID generation with Twilio SMS notifications, medicine billing logic, and live stock tracking.",
      techStack: ["Laravel (PHP)", "Laravel Breeze", "MySQL", "JavaScript", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
      // Public folder-la potta video path
      videoUrl: "/two.mp4", 
    },
    {
      id: 2,
      title: "Sunrise Travel & Tourism Website",
      role: "Individual Project | 2024 – 1st Semester",
      description: "A fully mobile-responsive web application designed for travel booking. Features secure user authentication, real-time trip booking workflows, interactive UI components, and a user review system.",
      techStack: ["PHP", "JavaScript", "Bootstrap", "HTML5", "CSS3"],
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800",
      // Public folder-la potta video path
      videoUrl: "/one.mp4", 
    },
  ];

  return (
    <section 
      id="projects" 
      className="relative bg-zinc-950 text-white pt-16 pb-12 px-6 sm:px-12 lg:px-16 scroll-mt-20 border-t border-emerald-950/40"
    >
      {/* Top Header: my projects */}
        {/* Top Header with Watermark Text */}
   <div className="relative flex flex-col items-center justify-center mb-10 text-center">
  {/* Background Outline Text (Small Size) */}
  <h2 
    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-widest select-none opacity-25"
    style={{
      WebkitTextStroke: '1.5px #34d399',
      color: 'transparent'
    }}
  >
   PROJECTS
  </h2>

  {/* Foreground Subtitle */}
  <div className="absolute flex items-center justify-center gap-2">
    <span className="w-5 sm:w-8 h-[2px] bg-emerald-400"></span>
    <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
      My Projects
    </h3>
    <span className="w-5 sm:w-8 h-[2px] bg-emerald-400"></span>
  </div>
</div>

      {/* 2-Column Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        {projectsList.map((project) => (
          <div 
            key={project.id}
            className="group bg-[#0a1811] border border-emerald-900/40 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
          >
            <div>
              {/* Project Image Container */}
              <div className="relative overflow-hidden rounded-xl h-52 bg-emerald-950/40 border border-emerald-900/30 mb-5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title & Role */}
              <h4 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h4>
              <p className="text-xs text-emerald-400 font-medium mb-3">
                {project.role}
              </p>

              {/* Tech Badges Row */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="text-xs px-2.5 py-1 bg-emerald-950/80 text-emerald-400 border border-emerald-800/50 rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            {/* Watch Demo Video Button */}
            <div className="pt-2 flex justify-center">
              <button 
                onClick={() => setSelectedVideo(project.videoUrl)}
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 border border-emerald-400/80 px-8 py-2.5 text-sm font-semibold text-emerald-400 bg-emerald-950/30 hover:bg-emerald-400 hover:text-black transition-all duration-300 rounded-lg active:scale-95 shadow-md shadow-emerald-500/10 cursor-pointer"
              >
                <Video className="w-4 h-4" />
                Watch Demo
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* POPUP VIDEO MODAL */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-all duration-300">
          <div className="relative w-full max-w-4xl bg-zinc-900 border border-emerald-500/40 rounded-2xl overflow-hidden shadow-2xl">
            
            {/* Header / Close Button */}
            <div className="flex justify-between items-center px-5 py-3 border-b border-zinc-800 bg-zinc-950">
              <span className="text-sm font-semibold text-emerald-400 flex items-center gap-2">
                <Video className="w-4 h-4" /> Project Demo Video
              </span>
              <button 
                onClick={() => setSelectedVideo(null)}
                className="p-1 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Video Player Frame */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <video 
                src={selectedVideo} 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}