import React, { useState } from 'react';
import { 
  Code, 
  Palette, 
  Terminal, 
  FileCode2, 
  Brain, 
  Sparkles, 
  Globe, 
  Zap, 
  Wrench,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconMap = {
  Code: Code,
  Palette: Palette,
  Terminal: Terminal,
  FileCode2: FileCode2,
  Brain: Brain,
  Sparkles: Sparkles,
  Globe: Globe,
  Zap: Zap
};

// Skill-specific accent colors
const skillColors = {
  HTML: 'from-orange-500/20 to-amber-500/10 text-orange-400 border-orange-500/30',
  CSS: 'from-blue-500/20 to-cyan-500/10 text-blue-400 border-blue-500/30',
  JavaScript: 'from-yellow-500/20 to-amber-500/10 text-yellow-400 border-yellow-500/30',
  Python: 'from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/30',
  'Artificial Intelligence': 'from-purple-500/20 to-pink-500/10 text-purple-400 border-purple-500/30',
  'Generative AI': 'from-indigo-500/20 to-purple-500/10 text-indigo-400 border-indigo-500/30',
  'Web Development': 'from-cyan-500/20 to-blue-500/10 text-cyan-400 border-cyan-500/30',
  'Digital Productivity': 'from-rose-500/20 to-amber-500/10 text-rose-400 border-rose-500/30',
};

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { skills } = portfolioData;

  const categories = ['All', 'Frontend', 'AI & Future Tech', 'Programming', 'Tools & Workflow'];

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/40 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient">Core Competencies</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A balanced toolkit combining foundational computer science, modern frontend development, and forward-looking AI workflows.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-900/70 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code;
            const accentStyle = skillColors[skill.name] || 'from-indigo-500/20 to-purple-500/10 text-indigo-400 border-indigo-500/30';

            return (
              <div
                key={skill.name}
                className="group relative glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Top Row: Icon & Category Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accentStyle} flex items-center justify-center border shadow-inner group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                      {skill.badge}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-indigo-400/90 font-medium mb-2.5">
                    {skill.category}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {skill.description}
                  </p>
                </div>

                {/* Progress Bar & Proficiency */}
                <div className="pt-5 mt-5 border-t border-slate-800/70 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono">Proficiency</span>
                    <span className="text-slate-200 font-mono font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-1000 group-hover:brightness-125"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Additional Student Tech Strengths Note */}
        <div className="mt-12 p-6 rounded-2xl glass-card border border-slate-800/80 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Learning Philosophy: Build, Iterate & Adapt</span>
            </h4>
            <p className="text-xs text-slate-400">
              Continuously adopting next-generation AI tools, clean coding conventions, and modern software design patterns.
            </p>
          </div>
          <a
            href="#projects"
            className="shrink-0 px-4 py-2 rounded-lg bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600 hover:text-white border border-indigo-500/30 text-xs font-semibold transition-all"
          >
            See Skills in Action →
          </a>
        </div>

      </div>
    </section>
  );
};
