import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  ArrowUpRight, 
  Layers, 
  CheckCircle2, 
  Info 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Projects = ({ onSelectProject }) => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web Development', 'Artificial Intelligence', 'Digital Productivity'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/40 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Projects & <span className="text-gradient">Innovations</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Practical projects built to explore modern frontend frameworks, generative intelligence, and personal productivity workflows.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  filter === cat
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-900/70 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl border border-slate-800/80 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden group shadow-xl"
            >
              {/* Card Header / Banner Simulation */}
              <div className="relative p-6 bg-gradient-to-b from-slate-900/90 to-transparent border-b border-slate-800/60">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Sparkles className="w-3 h-3" />
                    <span>{project.badge}</span>
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs text-cyan-400 font-medium block mt-1">
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-1.5 mb-5 text-xs text-slate-400">
                    {project.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-800/70 flex items-center gap-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all shadow-md shadow-indigo-600/30"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                      title="View GitHub Repository"
                      aria-label={`View GitHub Repository for ${project.title}`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repository Callout */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm text-slate-400 mb-3">
            Interested in exploring more code and university coursework?
          </p>
          <a
            href={portfolioData.personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs sm:text-sm font-semibold transition-all hover:scale-105"
          >
            <Github className="w-4 h-4 text-indigo-400" />
            <span>Explore all repos on GitHub (@{portfolioData.personal.githubUsername})</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
