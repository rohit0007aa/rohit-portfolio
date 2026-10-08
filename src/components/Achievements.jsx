import React, { useState } from 'react';
import { 
  Trophy, 
  Award, 
  BookOpen, 
  Sparkles, 
  Medal, 
  CheckCircle, 
  PlusCircle, 
  Calendar,
  ExternalLink,
  Code
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Award: Award,
  BookOpen: BookOpen,
  Trophy: Trophy,
  Sparkles: Sparkles,
  Medal: Medal,
  CheckCircle: CheckCircle
};

const categoryBadgeColors = {
  Certifications: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Courses: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Hackathons: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  Awards: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'Other achievements': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
};

export const Achievements = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { achievements } = portfolioData;

  const categories = [
    'All',
    'Certifications',
    'Hackathons',
    'Courses',
    'Awards',
    'Other achievements'
  ];

  const filteredAchievements = selectedCategory === 'All'
    ? achievements
    : achievements.filter(a => a.category === selectedCategory);

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/40 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones & Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Achievements & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Academic recognitions, specialized courses, hackathons, and certifications completed throughout my engineering path.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-900/70 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item) => {
            const IconComp = iconMap[item.icon] || Trophy;
            const badgeClass = categoryBadgeColors[item.category] || 'bg-slate-800 text-slate-300 border-slate-700';

            return (
              <div
                key={item.id}
                className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  {/* Category & Date Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${badgeClass}`}>
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1 text-slate-500 text-xs font-mono">
                      <Calendar className="w-3 h-3" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Title & Issuer */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-indigo-400">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-indigo-400/90 font-medium mt-0.5">
                        {item.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>

                {/* Footer status */}
                <div className="pt-4 mt-4 border-t border-slate-800/70 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">Status</span>
                  <span className="font-semibold text-slate-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    {item.status}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Add Future Milestone Card */}
          <div className="rounded-2xl border-2 border-dashed border-slate-800/90 p-6 flex flex-col items-center justify-center text-center space-y-3 bg-slate-950/30 hover:border-indigo-500/40 hover:bg-slate-900/20 transition-all">
            <div className="w-12 h-12 rounded-full bg-indigo-950/60 border border-indigo-800/40 flex items-center justify-center text-indigo-400">
              <PlusCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Your Next Milestone</h4>
              <p className="text-xs text-slate-400 max-w-xs mt-1">
                Easily append new Certifications, Hackathons, Courses, or Awards in <code className="text-indigo-300 bg-slate-900 px-1 py-0.5 rounded">portfolioData.js</code> anytime.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
