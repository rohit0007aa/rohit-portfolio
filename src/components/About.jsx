import React from 'react';
import { User, Brain, Code, Zap, Rocket, CheckCircle2, MapPin, GraduationCap, School } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { personal } = portfolioData;

  const pillars = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Fascinated by Generative AI, intelligent automation, and how emerging models are transforming development workflows.",
      color: "from-purple-500 to-indigo-500",
      iconColor: "text-purple-400"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive, modern, and accessible user interfaces using clean JavaScript, React, and modern CSS frameworks.",
      color: "from-indigo-500 to-cyan-500",
      iconColor: "text-cyan-400"
    },
    {
      icon: Zap,
      title: "Digital Productivity",
      description: "Passionate about streamlining study systems, digital workflows, task management, and leveraging tools to work smarter.",
      color: "from-amber-500 to-rose-500",
      iconColor: "text-amber-400"
    },
    {
      icon: Rocket,
      title: "Hands-on Building",
      description: "Dedicated to turning conceptual classroom theory into functional, deployed applications that solve real-life student problems.",
      color: "from-emerald-500 to-teal-500",
      iconColor: "text-emerald-400"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/40 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Curious Student. Driven Learner. <br className="hidden sm:inline" />
            <span className="text-gradient">Aspiring Technologist.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A professional yet student-friendly glimpse into my engineering journey, passions, and technical aspirations.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Who I Am</span>
              </h3>
              
              <div className="space-y-3.5 text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>
                  I am a passionate <strong className="text-white font-semibold">B.Tech student at JECRC University</strong> in Jaipur, India. My passion lies at the intersection of technology, modern web engineering, and artificial intelligence.
                </p>
                <p>
                  Rather than just observing technological shifts, I actively immerse myself in learning how modern tools function. From understanding algorithms in Python to designing interactive React user interfaces, I love translating complex problems into elegant, reliable software.
                </p>
                <p>
                  I have a strong interest in <strong className="text-white font-semibold">Generative AI and Digital Productivity</strong>—exploring how developers and students can leverage machine intelligence and structured workflows to build better solutions in less time.
                </p>
              </div>

              {/* Core Attributes checklist */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Continuous learner & fast adopter</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strong academic foundation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Passionate about modern UI/UX</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Productivity-oriented mindset</span>
                </div>
              </div>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-1 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <IconComponent className={`w-5 h-5 ${pillar.iconColor}`} />
                    </div>
                    <h4 className="text-base font-bold text-white mb-1.5">{pillar.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Quick Profile Card & Stats */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Student Info Card */}
            <div className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h4 className="text-lg font-bold text-white">Student Profile</h4>
                  <p className="text-xs text-slate-400">Academic & Technical Summary</p>
                </div>
                <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Active
                </span>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block">Degree / Program</span>
                    <span className="font-semibold text-slate-200">Bachelor of Technology (B.Tech)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <School className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block">Institution</span>
                    <span className="font-semibold text-slate-200">JECRC University</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block">Location</span>
                    <span className="font-semibold text-slate-200">Jaipur, Rajasthan, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block">Interests</span>
                    <span className="font-semibold text-slate-200">
                      Artificial Intelligence, Generative AI, Web Tech, Digital Productivity
                    </span>
                  </div>
                </div>
              </div>

              {/* Current Goal Box */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-900/50">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block mb-1">
                  Current Mission:
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Building impactful real-world software, expanding AI capabilities, and preparing for engineering internships & roles.
                </p>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {personal.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-center"
                >
                  <p className="text-2xl font-extrabold text-gradient">{stat.value}</p>
                  <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
