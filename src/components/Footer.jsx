import { portfolioData } from '@/data/portfolioData';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-8 bg-[#020618] border-t border-white/10 text-gray-400">
      <div className="max-w-[1470px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left: Copyright */}
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </p>

        {/* Right: Social Icons */}
        <div className="flex gap-6">
            <a 
              href={portfolioData.personal.social.github} 
              target="_blank" 
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href={portfolioData.personal.social.linkedin} 
              target="_blank" 
              className="text-gray-400 hover:text-blue-500 transition-colors hover:scale-110 transform"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href={portfolioData.personal.social.facebook} 
              target="_blank" 
              className="text-gray-400 hover:text-blue-600 transition-colors hover:scale-110 transform"
            >
              <FaFacebook size={20} />
            </a>
        </div>

      </div>
    </footer>
  );
}