import React, { useState, useEffect } from 'react';
import { useScrollSection, useTheme } from './hooks';
import {
  LoadingScreen,
  Navbar,
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  ContactSection,
  Footer,
} from './components';
import { CV_PATH, CV_DOWNLOAD_NAME, LOADING_DURATION_MS } from './constants/config';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { isDark, toggleTheme } = useTheme(true);
  const { activeSection, scrollToSection } = useScrollSection();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), LOADING_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = CV_PATH;
    link.download = CV_DOWNLOAD_NAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) {
    return <LoadingScreen isDark={isDark} />;
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <HeroSection isDark={isDark} scrollToSection={scrollToSection} downloadCV={downloadCV} />
      <AboutSection isDark={isDark} />
      <SkillsSection isDark={isDark} />
      <ExperienceSection isDark={isDark} />
      <ProjectsSection isDark={isDark} />
      <ContactSection isDark={isDark} />
      <Footer isDark={isDark} scrollToSection={scrollToSection} />
    </div>
  );
};

export default Portfolio;
