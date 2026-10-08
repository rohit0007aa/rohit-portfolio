import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 relative selection:bg-indigo-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenResume={() => setShowResume(true)} />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Education Section */}
        <Education />

        {/* 4. Skills Section */}
        <Skills />

        {/* 5. Projects Section */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 6. Achievements Section */}
        <Achievements />

        {/* 7. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Resume Modal */}
      {showResume && (
        <ResumeModal
          onClose={() => setShowResume(false)}
        />
      )}
    </div>
  );
}

export default App;
