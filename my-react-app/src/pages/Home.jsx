import { useState, useRef, useCallback } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import HorizontalGallery from '../components/HorizontalGallery';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import ProjectDetail from '../components/ProjectDetail';
import arduinoimage from '../assets/arduino.png';
import bookinv from '../assets/bookinventory.png';
import mobileapp from '../assets/mobileapp.png';
import qapic from '../assets/qa.png';
import heropic from '../assets/hero.png';

const PROJECTS = [
  {
    id: 1,
    title: 'Eggstract',
    year: '2022–2023',
    role: 'Back-End Lead & QA',
    tech: ['Kotlin', 'SQL', 'Arduino', 'Firebase'],
    duration: '1 year',
    description: 'Led back-end and database development for an automated egg incubator system for fighting cocks. Integrated Arduino-based sensors for real-time temperature and humidity control, connected to a Firebase cloud database for remote tracking. Developed automated alert systems to maintain optimal incubator conditions. Won 3rd Place at the DOST–NCR R&D Conference and Best Thesis at ITechtivity Conference.',
    image: arduinoimage,
  },
  {
    id: 2,
    title: 'TakeCare App',
    year: '2022–2023',
    role: 'Architecture & QA Lead',
    tech: ['Mobile', 'Agile', 'QA Testing'],
    duration: '1 year',
    description: 'Developed application architecture and led back-end integration for a healthcare mobile application. Selected and implemented optimal technology stacks, conducted thorough QA testing and analysis, and facilitated communication and feedback among the development team throughout the project lifecycle.',
    image: mobileapp,
  },
  {
    id: 3,
    title: 'Book Inventory',
    year: '2023–Present',
    role: 'Full-Stack Developer',
    tech: ['C#', 'WinForms', 'MongoDB', 'GitHub'],
    duration: 'Ongoing',
    description: 'Built a Book Inventory Tracking System using C# WinForms and MongoDB, supporting stock monitoring, item scanning, and real-time updates. Implemented authentication features, integrated APIs for real-time data synchronization, and used GitHub for version control alongside AI-assisted development tools.',
    image: bookinv,
  },
  {
    id: 4,
    title: 'HRM QA Testing',
    year: '2022–2023',
    role: 'QA Intern',
    tech: ['Manual Testing', 'Agile', 'Selenium', 'Postman'],
    duration: '6 months',
    description: 'Performed manual testing and created detailed bug reports for mobile HRM applications at Mustard Seed Systems Corporation. Collaborated on UI/UX improvements, assisted in Crystal Report generation and validation for client demos, and helped configure and test ZK Access biometric devices for access control.',
    image: qapic,
  },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSection, setCurrentSection] = useState('hero');

  const heroRef = useRef(null);
  const workRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const handleNavigate = useCallback((section) => {
    setCurrentSection(section);
    const refs = { hero: heroRef, work: workRef, about: aboutRef, contact: contactRef };
    refs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <Navigation onNavigate={handleNavigate} currentSection={currentSection} />

      <div ref={heroRef}>
        <HeroSection
          heroImage={heropic}
          onExplore={() => handleNavigate('work')}
        />
      </div>

      <div ref={workRef} id="work">
        <HorizontalGallery
          projects={PROJECTS}
          onProjectClick={setSelectedProject}
        />
      </div>

      <div ref={aboutRef} id="about">
        <AboutSection />
      </div>

      <div ref={contactRef} id="contact">
        <ContactSection />
      </div>

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}