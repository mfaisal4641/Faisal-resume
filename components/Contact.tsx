
import React from 'react';
import type { PersonalInfo } from '../types';
import { MailIcon, PhoneIcon, LocationMarkerIcon, HeartIcon } from './icons/Icons';

interface ContactProps {
  personalInfo: PersonalInfo;
  interests: string[];
}

export const Contact: React.FC<ContactProps> = ({ personalInfo, interests }) => {
  return (
    <footer id="contact" className="bg-blue-900 text-blue-100 mt-12 rounded-t-[30px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
                    <div className="space-y-2">
                        <a href={`mailto:${personalInfo.email}`} className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors">
                            <MailIcon className="w-5 h-5" />
                            <span>{personalInfo.email}</span>
                        </a>
                        <a href={`tel:${personalInfo.phone}`} className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors">
                            <PhoneIcon className="w-5 h-5" />
                            <span>{personalInfo.phone}</span>
                        </a>
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <LocationMarkerIcon className="w-5 h-5" />
                            <span>{personalInfo.location}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Interests</h3>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <HeartIcon className="w-5 h-5 text-pink-400" />
                        <span>{interests.join(' / ')}</span>
                    </div>
                </div>
                <div className="md:text-right">
                    <h3 className="text-2xl font-bold text-white">{personalInfo.name}</h3>
                    <p className="text-blue-200">{personalInfo.title}</p>
                </div>
            </div>
            <div className="mt-12 border-t border-blue-700 pt-6 text-center text-sm text-blue-300">
                <p>&copy; {new Date().getFullYear()} Muhammad Faisal. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  );
};