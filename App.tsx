import React from 'react';
import { Header } from './components/Header';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Languages } from './components/Languages';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import type { ResumeData } from './types';

const resumeData: ResumeData = {
  personalInfo: {
    name: "Muhammad Faisal",
    title: "Aspiring IT Professional",
    email: "mfaisal.ue@gmail.com",
    phone: "0308-6785487",
    location: "Muzaffargarh, Punjab, Pakistan",
    profileImage: "Faisal.jpg"
  },
  summary: "I am a hardworking and quick learner with a passion for computers and problem-solving. I thrive in collaborative environments and am eager to contribute my skills in information technology while growing alongside a professional organization. My academic achievements, supplemented by practical projects, exemplify my commitment to leveraging technology for effective solutions.",
  strengths: [
    {
      title: "Teamwork & Communication",
      description: "Possesses good communication skills and the ability to work well with others in a team environment."
    },
    {
      title: "Fast Learner",
      description: "Demonstrates a strong ability to learn quickly and adapt to new challenges."
    }
  ],
  keyAchievements: [
    {
      title: "Consistent High Grades",
      description: "Consistently achieved high grades throughout education, demonstrating dedication and commitment to academic excellence."
    }
  ],
  experience: [
    {
      role: "Data Analysis Intern",
      company: "Excelerate Learning Platform",
      period: "08/2025 - 09/2025",
      location: "Online",
      description: "Personalized digital learning platform",
      points: ["Created interactive dashboards and analyzed marketing data to extract actionable insights, improving reporting efficiency."]
    },
    {
      role: "Data Entry Assistant",
      company: "Punjab Socio-Economy Registration (PSER)",
      period: "01/2025 - 03/2025",
      location: "Muzaffargarh, Pakistan",
      description: "National Socio-Economic Data & Registration Program",
      points: ["Accurately entered and managed online application data, ensuring efficiency and error-free record keeping."]
    },
    {
      role: "Web Development Trainee",
      company: "NFTP (National Freelance Training Program)",
      period: "10/2022 - 01/2023",
      location: "Multan, Pakistan",
      description: "Govt. program for digital skills & freelancing training",
      points: ["Trained in responsive web development with database integration."]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Information Technology (BS-IT)",
      institution: "University of Education, Lahore (Multan Campus)",
      period: "12/2021 - 05/2025",
      location: "Multan, Pakistan",
      grade: "CGPA: 3.60 / 4.0"
    },
    {
      degree: "FSC (Pre-Engineering)",
      institution: "Govt Post Graduate College, Muzaffargarh",
      period: "08/2019 - 08/2021",
      location: "Muzaffargarh",
      grade: "Marks: 888 / 1100"
    },
    {
      degree: "Matriculation (Science)",
      institution: "Govt Boys High School, Khan Pur Shumali",
      period: "08/2017 - 08/2019",
      location: "Khan Pur Shumali",
      grade: "Marks: 1008 / 1100"
    }
  ],
  projects: [
    {
      name: "Cybersecurity Threat Detection System",
      description: "University Project focused on Cybersecurity",
      points: ["Created a system to find security risks, showing problem-solving skills."]
    },
    {
      name: "Excelerate Internship Project",
      description: "Data Analysis Intern Project",
      points: ["Applied Excel and data visualization to marketing campaign data, extracting actionable insights."]
    }
  ],
  languages: [
    { name: "Urdu", proficiency: 5, level: "Native" },
    { name: "Punjabi", proficiency: 4, level: "Proficient" },
    { name: "Saraiki", proficiency: 4, level: "Advanced" },
    { name: "English", proficiency: 4, level: "Proficient" }
  ],
  skills: [
    "Full Stack Web Developer",
    "Responsive Web Design",
    "HTML5 & CSS3",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "React",
    "Node.js",
    "Python",
    "Data Analysis",
    "MS Office(MS Word/Excel/PowerPoint)",
    "SQL",
    "Git & GitHub"
  ],
  interests: ["Web Developer", "Data Analyst"]
};


const App: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header personalInfo={resumeData.personalInfo} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <section id="about">
            <About summary={resumeData.summary} strengths={resumeData.strengths} achievements={resumeData.keyAchievements} />
          </section>
          <section id="education">
            <Education educationHistory={resumeData.education} />
          </section>
          <section id="experience">
            <Experience experiences={resumeData.experience} />
          </section>
          <section id="projects">
            <Projects projects={resumeData.projects} />
          </section>
          <section id="languages">
            <Languages languages={resumeData.languages} />
          </section>
          <section id="skills">
            <Skills skills={resumeData.skills} />
          </section>
        </div>
      </main>
      <Contact personalInfo={resumeData.personalInfo} interests={resumeData.interests} />
    </div>
  );
};

export default App;
