
import React from 'react';
import type { LanguageItem } from '../types';
import { AnimatedSection } from './AnimatedSection';
import { TranslateIcon } from './icons/Icons';

interface LanguagesProps {
  languages: LanguageItem[];
}

const ProficiencyBar: React.FC<{ proficiency: number }> = ({ proficiency }) => (
    <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
            <div
                key={i}
                className={`h-2.5 w-6 rounded-full ${i < proficiency ? 'bg-blue-500' : 'bg-gray-200'}`}
            ></div>
        ))}
    </div>
);

export const Languages: React.FC<LanguagesProps> = ({ languages }) => {
  return (
    <AnimatedSection>
        <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-6">
                <TranslateIcon className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-blue-800 tracking-wide">Languages</h2>
            </div>
            <div className="space-y-4">
                {languages.map((lang, index) => (
                <div key={index} className="grid grid-cols-2 gap-2 items-center">
                    <div>
                        <p className="font-semibold text-gray-800">{lang.name}</p>
                        <p className="text-sm text-gray-500">{lang.level}</p>
                    </div>
                    <div className="flex justify-end">
                        <ProficiencyBar proficiency={lang.proficiency} />
                    </div>
                </div>
                ))}
            </div>
        </div>
    </AnimatedSection>
  );
};
