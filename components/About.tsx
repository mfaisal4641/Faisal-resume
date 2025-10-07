
import React from 'react';
import type { StrengthItem, AchievementItem } from '../types';
import { AnimatedSection } from './AnimatedSection';
import { CheckBadgeIcon, StarIcon, LightBulbIcon } from './icons/Icons';

interface AboutProps {
  summary: string;
  strengths: StrengthItem[];
  achievements: AchievementItem[];
}

const SectionTitle: React.FC<{ children: React.ReactNode, icon: React.ReactNode }> = ({ children, icon }) => (
    <div className="flex items-center gap-3">
        {icon}
        <h2 className="text-2xl font-bold text-blue-800 tracking-wide">{children}</h2>
    </div>
);


export const About: React.FC<AboutProps> = ({ summary, strengths, achievements }) => {
  return (
    <AnimatedSection>
      <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-600">
        <SectionTitle icon={<LightBulbIcon className="w-8 h-8 text-blue-600" />}>Summary</SectionTitle>
        <p className="mt-4 text-gray-600 leading-relaxed">{summary}</p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Strengths</h3>
                <ul className="space-y-4">
                    {strengths.map((strength, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckBadgeIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-gray-800">{strength.title}</h4>
                                <p className="text-gray-600">{strength.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                 <h3 className="text-xl font-semibold text-gray-700 mb-4">Key Achievements</h3>
                <ul className="space-y-4">
                    {achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <StarIcon className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-gray-800">{achievement.title}</h4>
                                <p className="text-gray-600">{achievement.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
