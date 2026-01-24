"use client";
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolioData';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheckCircle, FaLightbulb, FaTools, FaLayerGroup } from 'react-icons/fa';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#020618] flex items-center justify-center text-white">
        <div className="text-center">
             <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
             <Link href="/" className="text-primary hover:underline">Go Back Home</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#020618] text-gray-300 py-12 md:py-24 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Back Button */}
        <Link href="/#projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-10 group">
           <FaArrowLeft className="group-hover:-translate-x-1 transition-transform"/> Back to Projects
        </Link>

        {/* --- Hero Section --- */}
        <div className="relative w-full h-[300px] md:h-[500px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl mb-12 group">
           {/* Image */}
           <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
           
           {/* Gradient Overlay */}
           <div className="absolute inset-0 bg-gradient-to-t from-[#020618] via-[#020618]/60 to-transparent"></div>
           
           {/* Title & Stack Overlay */}
           <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
               <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{project.name}</h1>
               <div className="flex flex-wrap gap-3">
                   {project.stack.map(tech => (
                       <span key={tech} className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-sm font-medium border border-white/20 shadow-lg">
                           {tech}
                       </span>
                   ))}
               </div>
           </div>
        </div>

        {/* --- Main Content Grid --- */}
        <div className="grid lg:grid-cols-3 gap-10">
            
            {/* Left Column (Details) */}
            <div className="lg:col-span-2 space-y-10">
                
                {/* 1. Project Overview Card */}
                <div className="bg-[#080E22] p-8 md:p-10 rounded-[2rem] border border-white/5 shadow-xl">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="text-secondary"><FaLayerGroup /></span> Project Overview
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-400">
                        {project.fullDesc || project.shortDesc}
                    </p>
                    
                    {/* Action Buttons Row */}
                    <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-white/5">
                        <a href={project.liveLink} target="_blank" className="flex items-center gap-2 bg-primary text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-400 transition transform hover:-translate-y-1 shadow-lg hover:shadow-primary/20">
                            <FaExternalLinkAlt size={16}/> Live Demo
                        </a>
                        <a href={project.repoLink} target="_blank" className="flex items-center gap-2 bg-[#112240] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#1a335d] border border-white/10 transition transform hover:-translate-y-1">
                            <FaGithub size={18}/> Source Code
                        </a>
                    </div>
                </div>

                {/* 2. Challenges Card */}
                <div className="bg-[#080E22] p-8 md:p-10 rounded-[2rem] border border-white/5 shadow-xl">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="text-red-400"><FaTools /></span> Challenges Faced
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-400">
                        {project.challenges || "The main challenge was ensuring high performance while handling complex data relations..."}
                    </p>
                </div>

                {/* 3. Future Plans Card */}
                <div className="bg-[#080E22] p-8 md:p-10 rounded-[2rem] border border-white/5 shadow-xl">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="text-primary"><FaLightbulb /></span> Improvements & Future Plans
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-400">
                        {project.futurePlans || "Future updates will focus on mobile app integration and advanced analytics..."}
                    </p>
                </div>

            </div>

            {/* Right Column (Sticky Features Sidebar) */}
            <div className="lg:col-span-1">
                <div className="bg-[#080E22] p-8 rounded-[2rem] border border-white/5 shadow-xl sticky top-24">
                    <h3 className="text-xl font-bold text-white mb-8 border-l-4 border-secondary pl-4">
                        Key Features
                    </h3>
                    <ul className="space-y-6">
                        {project.features && project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-4 group">
                                <div className="mt-1 w-6 h-6 rounded-full bg-[#112240] flex items-center justify-center border border-white/10 group-hover:border-secondary transition-colors">
                                    <FaCheckCircle className="text-secondary text-xs" />
                                </div>
                                <span className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {feature}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>

      </div>
    </main>
  );
}