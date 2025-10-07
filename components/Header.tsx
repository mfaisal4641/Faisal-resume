import React, { useState, useEffect } from 'react';
import type { PersonalInfo } from '../types';
import { MailIcon, PhoneIcon, LocationMarkerIcon, MenuIcon, XIcon } from './icons/Icons';

interface HeaderProps {
  personalInfo: PersonalInfo;
}

export const Header: React.FC<HeaderProps> = ({ personalInfo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const sections = navLinks.map(link => document.querySelector(link.href));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveSection(`#${entry.target.id}`);
            }
        });
    }, {
        rootMargin: '-50% 0px -50% 0px', // Trigger when the section is in the middle of the viewport
        threshold: 0
    });

    sections.forEach(section => {
        if (section) {
            observer.observe(section);
        }
    });

    return () => {
        sections.forEach(section => {
            if (section) {
                observer.unobserve(section);
            }
        });
    };
  }, []);

  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white relative overflow-hidden rounded-b-[30px]">
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Sticky Navigation Bar */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-blue-800 to-blue-600/95 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex justify-between items-center py-4">
            <a href="#" className="text-2xl font-bold">
              {personalInfo.name.split(' ').map(n => n[0]).join('')}
            </a>
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map(link => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className={`text-sm font-medium transition-all duration-200 ease-in-out pb-1 ${
                    activeSection === link.href 
                    ? 'text-white border-b-2 border-blue-300' 
                    : 'text-blue-200 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="focus:outline-none">
                {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden bg-blue-700/80 backdrop-blur-sm rounded-lg p-4 my-2 absolute top-full left-4 right-4 z-10">
              <ul className="flex flex-col items-center gap-2">
                {navLinks.map(link => (
                  <li key={link.href} className="w-full">
                    <a 
                      href={link.href} 
                      onClick={() => setIsMenuOpen(false)} 
                      className={`block w-full text-center py-2 text-lg font-semibold transition-colors rounded-lg ${
                        activeSection === link.href 
                        ? 'bg-blue-800 text-white' 
                        : 'text-blue-200 hover:bg-blue-800/50 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>

      {/* Non-sticky profile info */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{personalInfo.name}</h1>
            <p className="mt-2 text-xl md:text-2xl text-blue-200">{personalInfo.title}</p>
            <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-blue-100">
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <PhoneIcon className="w-5 h-5" />
                <span>{personalInfo.phone}</span>
              </a>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <MailIcon className="w-5 h-5" />
                <span>{personalInfo.email}</span>
              </a>
              <div className="flex items-center gap-2">
                <LocationMarkerIcon className="w-5 h-5" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img 
              className="h-40 w-40 md:h-48 md:w-48 rounded-full object-cover border-4 border-blue-400 shadow-lg" 
              src={personalInfo.profileImage}
              alt="Profile" 
            />
          </div>
        </div>
      </div>
    </header>
  );
};