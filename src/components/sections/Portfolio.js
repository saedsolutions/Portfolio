// src/components/sections/Portfolio.js
"use client";

import { useState } from 'react';

export function Portfolio() {
  const projects = [
    { id: 1, title: "Project 1", description: "E-commerce website built with Next.js" },
    { id: 2, title: "Project 2", description: "Mobile app UI design for a fitness startup" },
    { id: 3, title: "Project 3", description: "SEO optimization for a local business" }
  ];

  return (
    <section className="py-20 bg-gray-200 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold">My Work</h2>
        <p className="text-gray-600 mt-4">Check out some of my recent projects.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ${
        isHovered ? 'scale-105' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="font-bold text-xl">{project.title}</h3>
      <p className="text-gray-600 mt-2">{project.description}</p>
    </div>
  );
}