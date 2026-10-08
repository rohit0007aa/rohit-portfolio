import React from 'react';
import { ArrowDown, Mail, Github, Linkedin, ExternalLink, Sparkles, MapPin, GraduationCap, Code2, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero = ({ onOpenResume }) => {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Glows & Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none -z-10 animate-blob"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none -z-10 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-blob" style={{ animationDelay: '4s' }}></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Pills */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-700/50 text-indigo-300 text-xs font-medium backdrop-blur-md shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>{personal.statusBadge}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300 text-xs font-medium backdrop-blur-md">
                <MapPin className="w-3 h-3 text-cyan-400" />
                <span>{personal.location}</span>
              </div>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <p className="text-slate-400 font-medium text-lg tracking-wide flex items-center justify-center lg:justify-start gap-2">
                <span>Hello, I am</span>
                <span className="inline-block w-8 h-[2px] bg-indigo-500"></span>
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                <span className="text-white hover:text-indigo-200 transition-colors">
                  {personal.name}
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gradient tracking-tight">
                {personal.headline}
              </h2>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {personal.shortBio}
            </p>

            {/* College & Degree Pill */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-400">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              <span>
                Undergraduate at <strong className="text-slate-200 font-semibold">{personal.college}</strong>
              </span>
            </div>

            {/* Call To Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 hover:border-slate-600 shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-transparent hover:bg-slate-800/40 text-slate-300 hover:text-white text-sm font-medium border border-transparent hover:border-slate-800 transition-all duration-200"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Resume Summary</span>
                </button>
              )}
            </div>

            {/* Social Links Row */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-slate-400">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">Connect:</span>
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/60 hover:bg-indigo-600/20 border border-slate-800 hover:border-indigo-500/50 text-slate-300 hover:text-indigo-400 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-lg bg-slate-900/60 hover:bg-cyan-600/20 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 transition-all"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Modern Tech Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse-subtle"></div>

              {/* Main Interactive Glass Card */}
              <div className="relative glass-card rounded-2xl p-6 sm:p-7 border border-slate-700/80 bg-[#0d1322]/90 shadow-2xl">
                
                {/* Window Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                    <span className="text-xs font-mono text-slate-400 ml-2">rohit_profile.config</span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-950/80 text-indigo-400 border border-indigo-800/40">
                    B.Tech @ JECRC
                  </span>
                </div>

                {/* Profile Identity Snippet */}
                <div className="space-y-4 font-mono text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1.5">
                    <p className="text-indigo-400">
                      <span className="text-slate-500">const</span> developer = &#123;
                    </p>
                    <p className="text-slate-300 pl-4">
                      name: <span className="text-emerald-400">"{personal.name}"</span>,
                    </p>
                    <p className="text-slate-300 pl-4">
                      role: <span className="text-emerald-400">"B.Tech Student"</span>,
                    </p>
                    <p className="text-slate-300 pl-4">
                      institution: <span className="text-emerald-400">"JECRC University"</span>,
                    </p>
                    <p className="text-slate-300 pl-4">
                      location: <span className="text-emerald-400">"Jaipur, India"</span>,
                    </p>
                    <p className="text-slate-300 pl-4">
                      interests: [
                      <span className="text-cyan-400">"AI"</span>, 
                      <span className="text-cyan-400">"Web Dev"</span>, 
                      <span className="text-cyan-400">"Productivity"</span>
                      ]
                    </p>
                    <p className="text-indigo-400">&#125;;</p>
                  </div>

                  {/* Focus & Highlights */}
                  <div className="space-y-2.5 pt-1">
                    <div className="flex items-center justify-between text-xs font-sans text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Core Learning Stack</span>
                      </span>
                      <span className="text-slate-500 font-mono text-[11px]">Active</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-200 text-xs border border-slate-700 font-sans">
                        Python & AI
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-200 text-xs border border-slate-700 font-sans">
                        React & Tailwind
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-200 text-xs border border-slate-700 font-sans">
                        Generative AI
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-200 text-xs border border-slate-700 font-sans">
                        Digital Tools
                      </span>
                    </div>
                  </div>

                  {/* Activity Indicator Box */}
                  <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-800/30 flex items-center justify-between font-sans">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="text-xs text-slate-300">Building projects & learning daily</span>
                    </div>
                    <Code2 className="w-4 h-4 text-indigo-400" />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
