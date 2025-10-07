
import React from 'react';
import type { ExperienceItem } from '../types';
import { AnimatedSection } from './AnimatedSection';
import { BriefcaseIcon, CalendarIcon, LocationMarkerIcon } from './icons/Icons';

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <AnimatedSection>
        <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-6">
                <BriefcaseIcon className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-blue-800 tracking-wide">Experience</h2>
            </div>
            <div className="relative border-l-2 border-blue-200 pl-8 space-y-12">
            {experiences.map((exp, index) => (
                <div key={index} className="relative">
                <div className="absolute -left-10 h-4 w-4 bg-blue-600 rounded-full border-2 border-white top-1"></div>
                <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                <p className="text-md font-medium text-blue-700">{exp.company}</p>
                <div className="text-sm text-gray-500 mt-1 flex flex-wrap gap-x-4 gap-y-1">
                    <span className="flex items-center gap-1.5"><CalendarIcon className="w-4 h-4" /> {exp.period}</span>
                    <span className="flex items-center gap-1.5"><LocationMarkerIcon className="w-4 h-4" /> {exp.location}</span>
                </div>
                <p className="mt-2 text-gray-600 italic">{exp.description}</p>
                <ul className="mt-3 list-disc list-inside space-y-1 text-gray-600">
                    {exp.points.map((point, i) => (
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
