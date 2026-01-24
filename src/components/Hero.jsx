"use client";
import { portfolioData } from '@/data/portfolioData';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 px-4 md:px-8 min-h-screen flex items-center bg-background overflow-x-hidden">
      
      {/* UPDATED WIDTH HERE: max-w-[1470px] */}
      <div className="max-w-[1470px] mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        
        {/* Left: Text Content */}
        <div className="order-2 md:order-1 flex flex-col items-start text-left">
          <h3 className="text-secondary font-medium text-sm md:text-base tracking-widest mb-2">
            HELLO, I'M
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight">
            {personal.name}
          </h1>
          <h2 className="text-lg md:text-2xl text-gray-300 mb-5 flex gap-2 font-bold h-8">
            <span className="text-secondary">
              <Typewriter
                options={{
                  strings: ['React Developer', 'Next.js Developer', 'Full Stack Developer', 'MERN Stack Expert'],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </span>
          </h2>
          <p className="text-white text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            {personal.about.intro}
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 w-full">
            <a href={personal.resumeUrl} download className="px-6 py-2.5 bg-primary text-black text-sm md:text-base font-bold rounded-md hover:bg-yellow-400 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-yellow-500/20">
              Download Resume
            </a>
            <div className="flex gap-3">
              <a href={personal.social.github} target="_blank" className="p-2.5 bg-surface border border-white/10 rounded-lg text-gray-400 hover:text-white hover:border-white/30 transition-all"><FaGithub size={18}/></a>
              <a href={personal.social.linkedin} target="_blank" className="p-2.5 bg-surface border border-white/10 rounded-lg text-gray-400 hover:text-blue-500 hover:border-blue-500/30 transition-all"><FaLinkedin size={18}/></a>
              <a href={personal.social.facebook} target="_blank" className="p-2.5 bg-surface border border-white/10 rounded-lg text-gray-400 hover:text-blue-600 hover:border-blue-600/30 transition-all"><FaFacebook size={18}/></a>
            </div>
          </div>
        </div>

        {/* Right: Image with Solid Offset Style */}
        <div className="order-1 md:order-2 relative flex justify-center items-center pl-6 pt-6">
          <div className="relative w-64 h-64 md:w-80 md:h-80 group cursor-pointer">
             
             {/* 1. Solid Offset Shadow (Back Layer) */}
             <div className="absolute inset-0 bg-secondary rounded-[2rem] transform translate-x-4 translate-y-4 transition-transform duration-300 ease-out group-hover:translate-x-2 group-hover:translate-y-2"></div>
             
             {/* 2. Main Image Card (Front Layer) */}
             <div className="relative w-full h-full bg-surface border-2 border-secondary rounded-[2rem] overflow-hidden shadow-2xl transform transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:translate-y-1">
                <img 
                  src={personal.photo} 
                  alt={personal.name} 
                  className="w-full h-full object-cover" 
                />
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}