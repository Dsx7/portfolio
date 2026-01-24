"use client";
import { portfolioData } from '@/data/portfolioData';

export default function Qualification() {
  return (
    <section id="experience" className="py-24 bg-[#080E22] relative overflow-hidden">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/5"></div>

      <div className="max-w-[1470px] mx-auto px-6 grid md:grid-cols-2 gap-16">
        
        {/* --- Experience Column --- */}
        <div>
          {/* Header - Clean, No Icon, Left Aligned */}
          <div className="mb-10 pl-4 border-l-4 border-secondary">
             <h2 className="text-3xl font-bold text-white">Experience</h2>
          </div>
          
          {/* Minimal Timeline */}
          <div className="border-l border-white/10 ml-4 space-y-12 pb-4">
            {portfolioData.experience?.map((exp, idx) => (
              <div key={idx} className="relative pl-8 group">
                
                {/* Timeline Dot - Sleek Ring */}
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-[#080E22] rounded-full border border-secondary group-hover:bg-secondary group-hover:scale-125 transition-all duration-300"></div>
                
                {/* Content */}
                <div className="flex flex-col items-start text-left">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-secondary transition-colors">
                    {exp.role}
                  </h3>
                  
                  <div className="flex items-center gap-3 text-sm mb-4">
                    <span className="text-gray-300 font-medium">{exp.company}</span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                    <span className="text-gray-500 bg-white/5 px-2 py-0.5 rounded text-xs border border-white/5">
                      {exp.duration}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 text-base leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Education Column --- */}
        <div>
          {/* Header - Clean, No Icon, Left Aligned */}
          <div className="mb-10 pl-4 border-l-4 border-primary">
             <h2 className="text-3xl font-bold text-white">Education</h2>
          </div>
          
          {/* Minimal Timeline */}
          <div className="border-l border-white/10 ml-4 space-y-12 pb-4">
            {portfolioData.education?.map((edu, idx) => (
              <div key={idx} className="relative pl-8 group">
                
                {/* Timeline Dot - Sleek Ring (Primary Color) */}
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-[#080E22] rounded-full border border-primary group-hover:bg-primary group-hover:scale-125 transition-all duration-300"></div>
                
                {/* Content */}
                <div className="flex flex-col items-start text-left">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  
                  <div className="flex items-center gap-3 text-sm mb-4">
                    <span className="text-gray-300 font-medium">{edu.institution}</span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                    <span className="text-gray-500 bg-white/5 px-2 py-0.5 rounded text-xs border border-white/5">
                      {edu.year}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 text-base leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}