import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiFirebase, SiExpress, SiPostman, SiRedux, SiFramer, SiMongoose, SiVercel, SiGooglechrome } from 'react-icons/si';
import { portfolioData } from '@/data/portfolioData';

// Icon Map
const iconMap = {
  "HTML": <FaHtml5 className="text-orange-500" size={40} />,
  "CSS": <FaCss3Alt className="text-blue-500" size={40} />,
  "JavaScript": <FaJs className="text-yellow-400" size={40} />,
  "React": <FaReact className="text-cyan-400" size={40} />,
  "Next.js": <SiNextdotjs className="text-white" size={40} />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-300" size={40} />,
  "Redux": <SiRedux className="text-purple-500" size={40} />,
  "Framer Motion": <SiFramer className="text-pink-500" size={40} />,
  "Node.js": <FaNodeJs className="text-green-500" size={40} />,
  "MongoDB": <SiMongodb className="text-green-400" size={40} />,
  "Firebase": <SiFirebase className="text-yellow-500" size={40} />,
  "Express": <SiExpress className="text-white" size={40} />,
  "Mongoose": <SiMongoose className="text-red-500" size={40} />,
  "REST API": <span className="text-green-400 font-bold text-xl">API</span>,
  "Git": <FaGitAlt className="text-red-500" size={40} />,
  "GitHub": <FaGithub className="text-white" size={40} />,
  "VS Code": <span className="text-blue-400 font-bold text-xl">VS</span>,
  "Postman": <SiPostman className="text-orange-400" size={40} />,
  "Figma": <span className="text-purple-400 font-bold text-xl">Fg</span>,
  "Vercel": <SiVercel className="text-white" size={40} />,
  "Chrome DevTools": <SiGooglechrome className="text-gray-400" size={40} />,
};

const SkillRow = ({ title, skills, speed }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <div className="mb-16">
      {/* Title & Separator Line */}
      <div className="flex items-center gap-4 mb-8">
        <h3 className="text-xl font-bold text-gray-300 whitespace-nowrap pl-4 border-l-4 border-secondary">
          {title}
        </h3>
        {/* The Separator Line */}
        <div className="h-px bg-gray-800 w-full rounded-full"></div>
      </div>

      {/* Scrolling Area - Now Contained */}
      <div className="w-full overflow-hidden relative group bg-surface/30 rounded-xl border border-white/5 py-4">
        
        {/* Smoother Gradient Masks */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background via-background/80 to-transparent z-10"></div>
        
        <div className={`flex w-max ${speed} group-hover:pause items-center`}>
          {/* Quadrupled array for seamless scrolling on wide screens */}
          {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
            <div key={index} className="mx-8 flex flex-col items-center justify-center gap-3 min-w-[100px] cursor-pointer hover:scale-110 transition-transform duration-300">
              <div className="bg-surface p-4 rounded-xl border border-white/5 shadow-md">
                {iconMap[skill] || <div className="w-10 h-10 bg-gray-700 rounded-full" />}
              </div>
              <span className="text-gray-400 text-sm font-medium tracking-wide">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Skills() {
  const frontend = portfolioData.skills?.frontend || [];
  const backend = portfolioData.skills?.backend || [];
  const tools = portfolioData.skills?.tools || [];

  return (
    <section id="skills" className="py-24 bg-background">
        {/* Main Container - Keeps everything aligned in the middle */}
        <div className="max-w-[1470px] mx-auto px-6"> 
            
            {/* Header */}
            <div className="mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                    Skills & <span className="text-secondary">Tools</span>
                </h2>
                <p className="text-textSecondary text-lg max-w-2xl">
                  A quick overview of the technologies and tools I work with.
                </p>
            </div>
            
            {/* Skill Rows */}
            <div className="space-y-2">
               <SkillRow title="Frontend" skills={frontend} speed="animate-scroll-slow" />
               <SkillRow title="Backend" skills={backend} speed="animate-scroll" />
               <SkillRow title="Tools & Workflow" skills={tools} speed="animate-scroll-fast" />
            </div>
        </div>
    </section>
  );
}