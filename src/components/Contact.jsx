import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Errors & Success State
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Input Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for that field as user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  // Form Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Basic Validation Checks
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    }

    // If there are errors, set them and stop execution
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitted(false);
      return;
    }

    // If validation passes: Clear form, clear errors, show success message
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setIsSubmitted(true);

    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
<section 
  id="contact" 
  className="relative z-30 isolate transform-gpu w-full bg-[#050c08] text-white pt-32 pb-24 px-6 sm:px-12 lg:px-16 overflow-hidden min-h-screen"
>
      {/* Background Emerald Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none"></div>

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
            CONTACT
            </h2>

            {/* Foreground Subtitle */}
            <div className="absolute flex items-center justify-center gap-2">
                <span className="w-5 sm:w-8 h-[2px] bg-emerald-400"></span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                Get In Touch
                </h3>
                <span className="w-5 sm:w-8 h-[2px] bg-emerald-400"></span>
            </div>
            </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Success Message Notification */}
          {isSubmitted && (
            <div className="flex items-center gap-2 p-4 bg-emerald-950/80 border border-emerald-500/50 rounded text-emerald-400 text-sm font-medium">
              <CheckCircle className="w-5 h-5 shrink-0" />
              <span>Thank you! Your message has been sent successfully.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className={`w-full bg-[#0a1811] border ${errors.name ? 'border-rose-500' : 'border-emerald-900/50'} rounded px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400 transition-colors`}
                />
                {errors.name && (
                  <p className="text-rose-400 text-xs mt-1 pl-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={`w-full bg-[#0a1811] border ${errors.email ? 'border-rose-500' : 'border-emerald-900/50'} rounded px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400 transition-colors`}
                />
                {errors.email && (
                  <p className="text-rose-400 text-xs mt-1 pl-1">{errors.email}</p>
                )}
              </div>

            </div>

            {/* Subject Field */}
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className={`w-full bg-[#0a1811] border ${errors.subject ? 'border-rose-500' : 'border-emerald-900/50'} rounded px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400 transition-colors`}
              />
              {errors.subject && (
                <p className="text-rose-400 text-xs mt-1 pl-1">{errors.subject}</p>
              )}
            </div>

            {/* Message Textarea */}
            <div>
              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className={`w-full bg-[#0a1811] border ${errors.message ? 'border-rose-500' : 'border-emerald-900/50'} rounded px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400 transition-colors resize-none`}
              ></textarea>
              {errors.message && (
                <p className="text-rose-400 text-xs mt-1 pl-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 border border-emerald-400 px-6 py-3 text-sm font-semibold text-emerald-400 bg-emerald-950/30 hover:bg-emerald-400 hover:text-black transition-all duration-300 transform active:scale-95 rounded shadow-lg shadow-emerald-500/10 cursor-pointer"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </div>

          </form>
        </div>

        {/* Right Column: Contact Details */}
        <div className="lg:col-span-5 space-y-8 lg:pl-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Start a Conversation</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
             I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <div className="space-y-6">
            
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="p-3 border border-emerald-900/50 rounded bg-[#0a1811] text-emerald-400 shadow-sm shadow-emerald-500/10">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">Address</h4>
                <p className="text-zinc-400 text-sm">Jaffna, Sri Lanka</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="p-3 border border-emerald-900/50 rounded bg-[#0a1811] text-emerald-400 shadow-sm shadow-emerald-500/10">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">Phone Number</h4>
                <p className="text-zinc-400 text-sm">+94 76 896 1111</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 border border-emerald-900/50 rounded bg-[#0a1811] text-emerald-400 shadow-sm shadow-emerald-500/10">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">Email Us</h4>
                <p className="text-zinc-400 text-sm">kishak.navicode@gmail.com</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}