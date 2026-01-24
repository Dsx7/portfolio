"use client";
import { portfolioData } from '@/data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#080E22] relative overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-px bg-white/5"></div>

      <div className="max-w-[1470px] mx-auto px-6">

        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-secondary">Me</span>
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl">
            A short introduction about who I am and what I do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 text-lg leading-relaxed text-gray-400">

          <div className="space-y-8">
            <p>
              I’m a passionate frontend developer who enjoys building clean, responsive, and user-friendly web interfaces. I primarily work with <strong className="text-white">React</strong> and <strong className="text-white">Tailwind CSS</strong> to turn ideas and designs into functional web experiences.
            </p>
            <p>
              Alongside frontend development, I’m currently exploring the <strong className="text-white">MERN stack</strong> to understand how modern full-stack applications are built, focusing on scalability and performance.
            </p>
          </div>

          <div className="space-y-8">
            <p>
              I enjoy working on real-world projects, continuously learning new technologies, and improving my problem-solving skills. My goal is to grow as a developer and contribute to meaningful products that provide real value to users.
            </p>
            <p>
              When I’m not coding, I like exploring new tools, improving my UI skills, and staying updated with modern web development trends.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}