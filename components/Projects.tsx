
import React from 'react';
import type { ProjectItem } from '../types';
import { AnimatedSection } from './AnimatedSection';
import { CodeIcon } from './icons/Icons';

interface ProjectsProps {
  projects: ProjectItem[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <AnimatedSection>
        <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-6">
                <CodeIcon className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-blue-800 tracking-wide">Projects</h2>
            </div>
            <div className="space-y-8">
                {projects.map((project, index) => (
                <div key={index}>
                    <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                    <p className="mt-1 text-gray-600 italic">{project.description}</p>
                    <ul className="mt-3 list-disc list-inside space-y-1 text-gray-600">
                    {project.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>
        </div>
    </AnimatedSection>
  );
};
