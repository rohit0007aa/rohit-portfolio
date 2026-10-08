import React from 'react';
import { X, Printer, Download, Mail, Linkedin, Github, MapPin, GraduationCap, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ResumeModal = ({ onClose }) => {
  const { personal, education, skills, projects, achievements } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-3xl bg-[#0f172a] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-900/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="text-sm font-bold text-white tracking-wide">
              Resume Preview: {personal.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 border border-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Document Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto font-sans bg-[#0c111e] text-slate-200 text-sm">
          {/* Header info */}
          <div className="border-b border-slate-800 pb-5 text-center sm:text-left sm:flex sm:items-start sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {personal.name}
              </h2>
              <p className="text-indigo-400 font-semibold text-sm mt-0.5">
                {personal.headline}
              </p>
              <p className="text-xs text-slate-400 mt-1 flex items-center justify-center sm:justify-start gap-1">
                <MapPin className="w-3 h-3 text-slate-500" />
                <span>{personal.location}</span>
                <span className="mx-1">•</span>
                <span>{personal.college}</span>
              </p>
            </div>

            <div className="mt-3 sm:mt-0 text-xs text-slate-300 space-y-1 sm:text-right">
              <div>
                <a href={`mailto:${personal.email}`} className="text-indigo-300 hover:underline">
                  {personal.email}
                </a>
              </div>
              <div>
                <a href={personal.linkedinUrl} target="_blank" rel="noreferrer" className="text-indigo-300 hover:underline">
                  LinkedIn Profile
                </a>
              </div>
              <div>
                <a href={personal.githubUrl} target="_blank" rel="noreferrer" className="text-indigo-300 hover:underline">
                  github.com/{personal.githubUsername}
                </a>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-slate-800 pb-1">
              Education
            </h3>
            {education.map((edu, i) => (
              <div key={i} className="flex justify-between items-start text-xs sm:text-sm">
                <div>
                  <h4 className="font-bold text-white">{edu.degree}</h4>
                  <p className="text-slate-400 text-xs">{edu.institution}, {edu.location}</p>
                </div>
                <span className="text-xs font-mono text-slate-400">{edu.period}</span>
              </div>
            ))}
          </div>

          {/* Core Technical Skills */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-slate-800 pb-1">
              Technical Competencies
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {skills.map((s) => (
                <span key={s.name} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  <strong className="text-white">{s.name}</strong> ({s.level}%)
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-slate-800 pb-1">
              Key Projects
            </h3>
            {projects.map((proj) => (
              <div key={proj.id} className="space-y-1 text-xs sm:text-sm">
                <div className="flex justify-between items-baseline">
                  <h4 className="font-bold text-white">{proj.title}</h4>
                  <span className="text-xs text-indigo-400 font-mono">
                    {proj.technologies.slice(0, 3).join(', ')}
                  </span>
                </div>
                <p className="text-slate-400 text-xs">{proj.shortDescription}</p>
              </div>
            ))}
          </div>

          {/* Honors & Activities */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-slate-800 pb-1">
              Recognitions & Activities
            </h3>
            <ul className="list-disc list-inside text-xs text-slate-400 space-y-1">
              {achievements.slice(0, 3).map((ach) => (
                <li key={ach.id}>
                  <strong className="text-slate-300">{ach.title}</strong> — {ach.issuer} ({ach.date})
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/60 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
