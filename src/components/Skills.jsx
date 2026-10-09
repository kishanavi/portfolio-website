import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", percentage: 90 },
        { name: "JavaScript", percentage: 85 },
        { name: "Tailwind CSS", percentage: 90 },
        { name: "HTML / CSS", percentage: 95 },
      ]
    },
    {
      title: "Backend & DB",
      skills: [
        { name: "PHP", percentage: 80 },
        { name: "Java", percentage: 75 },
        { name: "MySQL", percentage: 85 },
        { name: "Node.js", percentage: 75 },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Vercel", percentage: 90 },
        { name: "Git & GitHub", percentage: 88 },
        { name: "Vite", percentage: 85 },
        { name: "VS Code", percentage: 95 },
      ]
    }
  ];

  // Top to Bottom slide animation settings
  const boxVariants = {
    hidden: { 
      opacity: 0, 
      y: -80 // Mela irundhu start aagum
    },
    visible: (index) => ({
      opacity: 1,
      y: 0, // Keel vandhu settling aagum
      transition: {
        duration: 0.8,
        delay: index * 0.2, // Ovvoru box-ukkum varisaiyaai delay varum
        ease: [0.25, 1, 0.5, 1]
      }
    })
  };

  return (
    // Background color swapped to zinc-950 (Greyish Black)
<section id="skills" className="relative z-20 isolate min-h-screen bg-zinc-950 text-white pt-10 pb-20 px-6 sm:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Title Section */}
        <div className="relative flex flex-col items-center justify-center mb-16 text-center">
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-widest select-none opacity-25"
            style={{
              WebkitTextStroke: '1.5px #34d399',
              color: 'transparent'
            }}
          >
            SKILLS
          </h2>

          <div className="absolute flex items-center justify-center gap-2">
            <span className="w-5 sm:w-8 h-[2px] bg-emerald-400"></span>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
              My Skills
            </h3>
            <span className="w-5 sm:w-8 h-[2px] bg-emerald-400"></span>
          </div>
        </div>

        {/* 3 Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex}
              custom={catIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }} // Page view-kku varum podhum, click panni varum podhum animate aagum
              variants={boxVariants}
              // Card background color swapped to pure Black (bg-black)
              className="bg-black border border-zinc-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-colors duration-300 shadow-2xl"
            >
              {/* Category Header Badge */}
              <div className="flex justify-center mb-8">
                <span className="px-5 py-1.5 rounded-lg border border-emerald-500/50 bg-emerald-500/10 text-emerald-400 font-semibold text-sm sm:text-base tracking-wide">
                  {category.title}
                </span>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="px-3 py-1 bg-zinc-900 text-zinc-200 border border-zinc-800 rounded-md font-medium">
                        {skill.name}
                      </span>
                      <span className="text-emerald-400 font-bold font-mono">
                        {skill.percentage}%
                      </span>
                    </div>

                    <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden p-[1px] border border-zinc-800">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1, delay: catIndex * 0.2 + 0.3 }}
                        viewport={{ once: false }}
                        className="bg-gradient-to-r from-emerald-500 to-teal-300 h-full rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}