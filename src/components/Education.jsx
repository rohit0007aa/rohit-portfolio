import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle, Award, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/40 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient">Foundations</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Rigorous engineering training combined with self-directed exploration of emerging technologies.
          </p>
        </div>

        {/* Education Timeline / Card */}
        <div className="max-w-4xl mx-auto">
          {education.map((item, index) => (
            <div
              key={index}
              className="relative glass-card rounded-2xl p-6 sm:p-9 border border-slate-800 shadow-xl space-y-6"
            >
              {/* Badge & Period Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3 h-3 text-indigo-400" />
                    <span>Undergraduate Degree</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {item.degree}
                  </h3>
                  <h4 className="text-lg font-semibold text-indigo-300 mt-1">
                    {item.institution}
                  </h4>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 text-xs text-slate-400">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>

              {/* Relevant Learning Areas */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Relevant Learning Areas & Coursework</span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {item.relevantAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-slate-900/90 text-slate-200 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800/80 transition-colors"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Key Academic Highlights:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-300">
                  {item.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
