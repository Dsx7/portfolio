"use client";
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaCheck, FaInfoCircle } from 'react-icons/fa';
import { portfolioData } from '@/data/portfolioData';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#020618] relative overflow-hidden">
      
      <div className="max-w-[1470px] mx-auto px-6">
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured <span className="text-secondary">Projects</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl">
                Selected projects highlighting real-world frontend and full-stack experience.
            </p>
        </motion.div>

        <div className="space-y-20">
          {portfolioData.projects.map((project, index) => (
            <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                // CHANGED: Removed 'items-stretch' and added 'items-center' to prevent image stretching
                className={`flex flex-col md:flex-row items-center bg-[#080E22] border border-white/5 rounded-[2rem] overflow-hidden shadow-xl hover:shadow-secondary/5 transition-shadow duration-500 group ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              
              {/* Image Container */}
              <div className="w-full md:w-[55%] relative overflow-hidden h-[250px] md:h-[400px]"> 
                 <div className="absolute inset-0 bg-[#020618]/10 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                 <img 
                    src={project.image} 
                    alt={project.name} 
                    // CHANGED: 'object-cover' to 'object-contain' to show full image
                    // CHANGED: 'object-top' to 'object-center' for better focus
                    className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105" 
                 />
              </div>

              <div className="w-full md:w-[45%] p-6 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {project.name}
                </h3>
                <p className="text-gray-400 leading-relaxed text-base mb-6">
                    {project.shortDesc}
                </p>

                <ul className="mb-8 space-y-2">
                  {project.features && project.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                      <span className="mt-1 text-secondary"><FaCheck size={14} /></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-gray-300 text-xs md:text-sm font-medium bg-[#112240] border border-white/10 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* --- BUTTONS --- */}
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href={`/projects/${project.id}`}
                    className="flex items-center gap-2 bg-secondary text-black px-6 py-2.5 rounded-xl font-bold text-sm md:text-base hover:bg-cyan-300 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-secondary/20"
                  >
                    <FaInfoCircle size={14}/> Details
                  </Link>

                  <div className="flex gap-4">
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-primary text-black px-6 py-2.5 rounded-xl font-bold text-sm md:text-base hover:bg-yellow-400 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-primary/20"
                      >
                        <FaExternalLinkAlt size={14}/> Live
                      </a>
                    )}

                    {project.liveLink1 && (
                      <a 
                        href={project.liveLink1} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-primary text-black px-6 py-2.5 rounded-xl font-bold text-sm md:text-base hover:bg-yellow-400 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-primary/20"
                      >
                        <FaExternalLinkAlt size={14}/> Live 2
                      </a>
                    )}
                  </div>

                  <a href={project.repoLink} target="_blank" className="flex items-center gap-2 bg-transparent border border-white/20 text-white px-6 py-2.5 rounded-xl font-bold text-sm md:text-base hover:border-primary hover:text-primary transition-all transform hover:-translate-y-1">
                    <FaGithub size={18}/> Code
                  </a>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}