import React from 'react';
import { ArrowUp, Heart, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-[#080c14] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/70">
          
          {/* Brand & Summary */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-extrabold shadow-md shadow-indigo-600/30">
                RY
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {personal.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              B.Tech Student at JECRC University, Jaipur. Exploring modern web architecture, artificial intelligence, and digital productivity tools.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/50 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              <a href="#hero" className="hover:text-indigo-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-indigo-400 transition-colors">About Me</a>
              <a href="#education" className="hover:text-indigo-400 transition-colors">Education</a>
              <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
              <a href="#achievements" className="hover:text-indigo-400 transition-colors">Achievements</a>
              <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Stack & Hosting */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Tech Stack
            </h4>
            <div className="space-y-1.5 text-xs text-slate-400">
              <p className="flex items-center gap-1.5 text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>React 18 + Vite + Tailwind CSS</span>
              </p>
              <p>Optimized for Vercel deployment</p>
              <p>Zero extraneous backend dependencies</p>
              <p>100% Client-side responsiveness</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} {personal.name}. All rights reserved.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
