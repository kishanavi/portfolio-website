import React, { useState } from 'react';
import { X, FileText, Download } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Smooth Scroll Handler Function (Safari Mobile Fix Included)
// Smooth Scroll Handler Function (Safari Sticky Layout Fix)
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    // Mobile Menu Close aana piraku Safari-il Scroll aaga 100ms Timeout
    setTimeout(() => {
      if (href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.querySelector(href);
        if (element) {
          // Sticky Layout-il Exact Position-ukku Scroll seyya scrollIntoView
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 100);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-emerald-950/50">
        {/* Container */}
        <div className="w-full px-6 sm:px-12 lg:px-16">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, '#home')}
                className="text-2xl font-extrabold tracking-wider text-emerald-400 hover:text-emerald-300 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                KISHA<span className="text-white">.</span>
              </a>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="inline-block text-slate-300 hover:text-emerald-400 transition-all duration-300 transform hover:-translate-y-1 text-base font-medium cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Resume Button */}
              <button
                onClick={() => setShowResumeModal(true)}
                className="inline-block px-5 py-2.5 text-sm font-semibold text-black bg-emerald-400 hover:bg-emerald-300 rounded-full shadow-lg shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 cursor-pointer"
              >
                Resume
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-300 hover:text-emerald-400 focus:outline-none p-2 transition-colors cursor-pointer"
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-black/95 border-b border-emerald-900/50 px-6 pt-4 pb-6 space-y-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-slate-300 hover:text-emerald-400 py-2 text-lg font-medium border-b border-zinc-800/50 transition-all duration-200 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                setShowResumeModal(true);
              }}
              className="inline-block text-center w-full mt-2 px-5 py-3 text-base font-semibold text-black bg-emerald-400 hover:bg-emerald-300 rounded-full transition-all duration-300 transform active:scale-95 cursor-pointer"
            >
              Resume
            </button>
          </div>
        )}
      </nav>

      {/* POPUP RESUME MODAL */}
      {showResumeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-all duration-300">
          <div className="relative w-full max-w-4xl h-[85vh] bg-zinc-900 border border-emerald-500/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            
            {/* Header with Download & Close Buttons */}
            <div className="flex justify-between items-center px-5 py-3.5 border-b border-zinc-800 bg-zinc-950">
              <span className="text-sm font-semibold text-emerald-400 flex items-center gap-2">
                <FileText className="w-4 h-4" /> My Resume Preview
              </span>
              
              <div className="flex items-center gap-3">
                <a 
                  href="/resume.pdf" 
                  download="Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-400 border border-emerald-500/40 hover:bg-emerald-400 hover:text-black rounded-lg transition-all duration-200"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download
                </a>
                
                <button 
                  onClick={() => setShowResumeModal(false)}
                  className="p-1 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* PDF Viewer Frame */}
            <div className="relative flex-1 w-full bg-zinc-950">
              <iframe 
                src="/resume.pdf" 
                title="Resume Preview"
                className="w-full h-full border-0"
              />
            </div>

          </div>
        </div>
      )}
    </>
  );
}