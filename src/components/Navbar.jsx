"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' }, // Changed from Qualification to match ID usually
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // 1. Handle Scroll (Active Link Highlighting & Navbar Background)
  useEffect(() => {
    const handleScroll = () => {
      // Add background blur when scrolled
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Active if the section is roughly in the top third of the screen
          return rect.top >= -100 && rect.top <= 300; 
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Custom Click Handler (Clean URL + Offset Scroll)
  const handleNavClick = (e, href) => {
    e.preventDefault(); // STOP the URL hash change
    setIsOpen(false);   // Close mobile menu

    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const navbarHeight = 80; // Adjust based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#020618]/90 backdrop-blur-lg border-b border-white/5 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-[1470px] mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" onClick={(e) => handleNavClick(e, '#home')} className="text-3xl font-bold text-white relative z-50">
          A. <span className="text-secondary">Bayijid.</span>
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
             const isActive = activeSection === link.href.substring(1);
             return (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative px-2 py-1 group ${
                  isActive ? 'text-secondary' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
                {/* Animated Underline */}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`}></span>
              </a>
            )
          })}
          
          {/* Resume Button (Optional in Navbar) */}
          <a href="" download className="px-5 py-2 text-sm font-bold text-black bg-primary rounded-full hover:bg-yellow-400 transition-transform hover:scale-105 shadow-lg shadow-primary/20 ml-4">
            Resume
          </a>
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
        >
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2 bg-secondary' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2 bg-secondary' : ''}`}></span>
        </button>

      </div>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#020618] z-40 flex flex-col justify-center items-center md:hidden"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>

            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-3xl font-bold tracking-tight ${activeSection === link.href.substring(1) ? 'text-secondary' : 'text-white/70 hover:text-white'}`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12"
            >
               <a href="#" download className="px-8 py-3 text-lg font-bold text-black bg-primary rounded-full shadow-xl">
                 Download Resume
               </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}