
import React from 'react';
import type { EducationItem } from '../types';
import { AnimatedSection } from './AnimatedSection';
import { AcademicCapIcon, CalendarIcon, LocationMarkerIcon } from './icons/Icons';

interface EducationProps {
  educationHistory: EducationItem[];
}

export const Education: React.FC<EducationProps> = ({ educationHistory }) => {
  return (
    <AnimatedSection>
        <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-6">
                <AcademicCapIcon className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-blue-800 tracking-wide">Education</h2>
            </div>
            <div className="space-y-6">
                {educationHistory.map((edu, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                    <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-md font-medium text-blue-700">{edu.institution}</p>
                    <div className="text-sm text-gray-500 mt-1 flex flex-wrap gap-x-4 gap-y-1">
                    <span className="flex items-center gap-1.5"><CalendarIcon className="w-4 h-4" /> {edu.period}</span>
                    <span className="flex items-center gap-1.5"><LocationMarkerIcon className="w-4 h-4" /> {edu.location}</span>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-gray-600">{edu.grade}</p>
                </div>
                ))}
            </div>
        </div>
    </AnimatedSection>
  );
};
