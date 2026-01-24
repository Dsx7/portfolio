"use client";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Qualification from '@/components/Qualification'; 
import Footer from '@/components/Footer';     // Imported New Footer
import BackToTop from '@/components/BackToTop'; // Imported BackToTop
import { motion } from 'framer-motion';       // Import Motion

// Helper Component for Section Animation
const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // Animates when 20% visible
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className="scroll-smooth bg-[#020618] overflow-x-hidden">
      <Navbar />
      
      {/* Hero usually doesn't need scroll-reveal as it's visible on load, 
          but you can add it if you want. I left it raw for instant load. */}
      <Hero />
      
      {/* Wrap other sections in ScrollReveal */}
      <ScrollReveal>
        <About />
      </ScrollReveal>

      <ScrollReveal>
        <Skills />
      </ScrollReveal>

      <ScrollReveal>
        <Qualification />
      </ScrollReveal>

      {/* Projects handles its own internal animation, so no wrapper needed */}
      <Projects />

      <ScrollReveal>
        <Contact />
      </ScrollReveal>
      
      <Footer />
      <BackToTop />
    </main>
  );
}