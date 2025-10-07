
import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { CogIcon } from './icons/Icons';

interface SkillsProps {
  skills: string[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <AnimatedSection>
        <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-6">
                <CogIcon className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-blue-800 tracking-wide">Skills</h2>
            </div>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1.5 rounded-full shadow-sm transition-transform transform hover:scale-105">
                    {skill}
                </span>
                ))}
            </div>
        </div>
    </AnimatedSection>
  );
};
