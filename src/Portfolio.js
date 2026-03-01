import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Linkedin, Github, Menu, X, Award, GraduationCap, Download, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // CV Download function
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Lekha_Reddy_Surakanti__.pdf';
    link.download = 'Lekha_Reddy_Surakanti_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = {
    "Programming Languages": ["Python", "Java", "JavaScript", "TypeScript", "C++", "C", "SQL"],
    "Web Technologies": ["React.js", "Next.js", "Node.js", "Express.js", "Spring Boot", "REST APIs", "TailwindCSS", "GraphQL"],
    "AI/ML": ["PyTorch", "NLP", "Machine Learning", "Deep Learning", "Gen AI"],
    "Databases": ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    "Cloud & DevOps": ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Git", "Microservices", "Figma", "Visual Studio Code", "Notion"]
  };

  const experience = [
    {
      title: "Software Engineer - Backend, Cloud & AI",
      company: "Gilman Construction Media",
      location: "Temecula, CA (Remote)",
      period: "Nov 2025 - Present",
      points: [
        "Designed and built scalable backend services and media-processing systems using AWS Kinesis, S3, IAM, and CloudWatch, ensuring high availability and low latency for real-time video streaming workflows",
        "Integrated ML pipelines and automation workflows for video analysis and data processing, increasing deployment efficiency by 30% and reducing manual data handling by 50%",
        "Collaborated in Agile sprints, performing code reviews and debugging complex production issues to maintain enterprise-grade engineering quality"
      ]
    },
    {
      title: "Software Engineer",
      company: "Elevance Systems",
      location: "Cupertino, CA (Remote)",
      period: "Jan 2025 - Oct 2025",
      points: [
        "Engineered an AI-powered enterprise search platform using React, Python/Node.js, improving internal data accessibility by 35% and reducing retrieval time by 40%",
        "Integrated intelligent AI-generated summaries and semantic retrieval features, reducing documentation workload by 30%",
        "Worked cross-functionally in an Agile environment, contributing to architecture discussions and continuous delivery of production features"
      ]
    },
    {
      title: "Software Engineer",
      company: "Brane Enterprises Private Ltd",
      location: "Hyderabad, India",
      period: "Jun 2023 - Jun 2024",
      points: [
        "Designed and implemented optimized UI components and backend SQL logic, improving system throughput by 25%",
        "Built and deployed a Python-based NLP chatbot, improving customer response speed by 30%",
        "Collaborated with engineering teams to build scalable features, decreasing user-reported issues by 70%"
      ]
    }
  ];

  const projects = [
    {
      title: "Customer Sentiment Analysis Platform",
      image: "/project1.jpg",
      tech: "Python, ML, SQL, Data Pipelines, Data Visualization, Streamlit, ETL",
      period: "Sep 2024 - Dec 2024",
      description: "Developed a data-driven analytics tool enabling informed product strategy decisions.",
      gradient: "from-blue-500 to-purple-600",
      points: [
        "Built a Python-based analytics platform using Streamlit, Pandas, and automated ETL pipelines to analyze product feature sentiment across Firefox, Zoom, and Webex, enabling real-time filtering and statistical insights.",
        "Designed interactive dashboards and modular architecture to extract actionable insights from large datasets, supporting data-driven product strategy decisions."
      ]
    },
    {
      title: "Retail Analytics Platform",
      image: "/project2.jpg",
      tech: "Azure, Python, ML, SQL, Data Pipelines",
      period: "Sep 2024 - Dec 2024",
      description: "Architected an end-to-end retail analytics platform on Azure to analyze customer engagement and purchasing behavior. Developed machine learning models to predict Customer Lifetime Value (CLV) and customer churn with improved accuracy.",
      gradient: "from-blue-500 to-purple-600",
      points: [
        "Built scalable Azure-based data pipelines to ingest, clean, and process 10,000+ transaction records",
        "Implemented ML models for CLV prediction and churn analysis with actionable insights"
      ]
    },
    {
      title: "Blockchain ATM",
      image: "/project3.jpg",
      tech: "Node.js, React.js, MongoDB, Flutter, Solidity",
      period: "Feb 2023 - May 2023",
      description: "Developed a mobile application enabling secure cryptocurrency exchange and real-time display of prices. Implemented transaction processing through secure digital wallets via QR code scanning.",
      gradient: "from-green-500 to-teal-600",
      points: [
        "Deployed Solidity smart contracts to verify transactions on-chain for security",
        "Optimized end-to-end transaction flow, improving processing speed and user experience"
      ]
    },
    {
      title: "Microservices Banking System",
      tech: "MongoDB, Next.js, Node.js, Kubernetes",
      period: "Jun 2022 - Sep 2022",
      description: "Engineered a microservices-based banking system capable of securely handling over 2,000 daily transactions. Built core RESTful API services for Credit, Debit, and Transfer operations.",
      gradient: "from-orange-500 to-red-600",
      points: [
        "Containerized services with Docker and orchestrated with Kubernetes for scalability",
        "Implemented centralized logging and monitoring to improve system visibility"
      ]
    }

  ];

  // Loading Screen
  if (isLoading) {
    return (
      <div className={`fixed inset-0 flex items-center justify-center ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full border-4 border-blue-500/30"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>
            <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-purple-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
            Loading Portfolio...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isDark ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'} backdrop-blur-sm border-b shadow-lg`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Lekha Reddy
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section.toLowerCase())}
                  className={`transition-all duration-300 transform hover:scale-110 ${activeSection === section.toLowerCase()
                      ? 'text-blue-500 font-semibold'
                      : isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  aria-label={`Navigate to ${section}`}
                >
                  {section}
                </button>
              ))}
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 hover:rotate-12 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg transition-all duration-300 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="transition-transform duration-300 hover:scale-110"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <div className="pb-4 space-y-3">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section.toLowerCase())}
                  className={`block w-full text-left py-2 px-4 rounded-lg transition-all duration-300 ${activeSection === section.toLowerCase()
                      ? 'bg-blue-500/20 text-blue-500 font-semibold'
                      : isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-64 h-64 rounded-full overflow-hidden">
                <img
                  src="https://i.ibb.co/BHxmM26P/pic.jpg"
                  alt="Lekha Reddy"
                  className="w-full h-full object-cover"
                />
              </div>



              {/*<div className={`w-64 h-64 md:w-80 md:h-80 rounded-full ${isDark ? 'bg-gradient-to-br from-blue-600 to-purple-700' : 'bg-gradient-to-br from-blue-400 to-purple-500'} flex items-center justify-center border-4 ${isDark ? 'border-gray-700' : 'border-gray-300'} shadow-2xl transition-all duration-500 hover:scale-105`}>
                <span className="text-8xl font-bold text-white"><a href="https://ibb.co/TDSZ3M0T"><img src="https://i.ibb.co/BHxmM26P/pic.jpg" alt="pic" border="0"></img></a></span>
              </div>*/}
            </div>

            {/* Hero Content */}
            <div className="flex-1 text-center md:text-left">
              <p className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'} animate-fadeIn`}>
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-slideUp">
                Lekha Reddy
              </h1>
              <p className={`text-xl sm:text-2xl md:text-3xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'} animate-slideUp`} style={{ animationDelay: '0.1s' }}>
                Software Engineer | Backend & Cloud Specialist
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 animate-slideUp" style={{ animationDelay: '0.2s' }}>
                <button
                  onClick={downloadCV}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 ${isDark ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                    } text-white`}
                  aria-label="Download CV"
                >
                  <Download size={20} />
                  Download CV
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${isDark ? 'bg-gray-800 hover:bg-gray-700 border-2 border-gray-700' : 'bg-white hover:bg-gray-50 border-2 border-gray-300'
                    }`}
                  aria-label="Contact Info"
                >
                  Contact Info
                </button>
              </div>
              <div className="flex justify-center md:justify-start gap-4 animate-slideUp" style={{ animationDelay: '0.3s' }}>
                <a
                  href="https://linkedin.com/in/lekhareddy16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full ${isDark ? 'bg-gray-800 hover:bg-blue-600' : 'bg-gray-200 hover:bg-blue-500 hover:text-white'} transition-all duration-300 transform hover:scale-110 hover:rotate-12`}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/lekhareddy15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full ${isDark ? 'bg-gray-800 hover:bg-purple-600' : 'bg-gray-200 hover:bg-purple-500 hover:text-white'} transition-all duration-300 transform hover:scale-110 hover:rotate-12`}
                  aria-label="GitHub Profile"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 max-w-3xl mx-auto">
            <div className={`p-6 sm:p-8 rounded-3xl text-center border ${isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-300 bg-white'} transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}>
              <Award size={32} className="mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-bold mb-2">Experience</h3>
              <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>3+ Years</p>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Full Stack Development</p>
            </div>
            <div className={`p-6 sm:p-8 rounded-3xl text-center border ${isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-300 bg-white'} transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}>
              <GraduationCap size={32} className="mx-auto mb-4 text-purple-500" />
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Master's from UC</p>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Computer Science</p>
            </div>
          </div>

          {/* Description */}
          <div className={`max-w-4xl mx-auto text-justify ${isDark ? 'text-gray-300' : 'text-gray-700'} space-y-4 text-base sm:text-lg leading-relaxed`}>
            <p>
              Highly accomplished Master's student in Computer Science holding a 3.9/4.0 GPA with a strong foundation in software systems, backend development, cloud technologies, and AI/ML workflows.
            </p>
            <p>
              Adept at designing scalable systems, building reliable applications, and solving complex engineering challenges using Python, Java, React, Node.js, Spring Boot, AWS, and Azure. Recognized for strong analytical thinking, attention to detail, and the ability to rapidly learn and innovate in fast-paced environments.
            </p>
            <p>
              Currently working at Gilman Construction Media, where I design scalable backend services and media-processing systems using AWS, while integrating ML pipelines for video analysis. Previously, I engineered AI-powered enterprise search platforms at Elevance Systems and developed NLP chatbots at Brane Enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-4 sm:px-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div
                key={category}
                className={`p-6 rounded-xl ${isDark ? 'bg-gray-900' : 'bg-gray-50'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-fadeIn`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm transition-all duration-300 hover:scale-110 ${isDark ? 'bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
                        }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className={`p-6 sm:p-8 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg border-l-4 border-blue-500 transition-all duration-300 transform hover:scale-102 hover:shadow-2xl animate-slideUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-1">{exp.title}</h3>
                    <p className={`text-base sm:text-lg ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                      {exp.company}
                    </p>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {exp.location}
                    </p>
                  </div>
                  <span className={`text-sm font-medium mt-2 md:mt-0 ${isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                    {exp.period}
                  </span>
                </div>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-blue-500 flex-shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Horizontal Layout */}
      <section id="projects" className={`py-20 px-4 sm:px-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h2>

          {/* Desktop: All 3 projects visible */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gray-50'} border ${isDark ? 'border-gray-700' : 'border-gray-200'
                  } transition-all duration-500 transform hover:scale-105 hover:shadow-2xl flex flex-col animate-slideUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                  ) : (
                    <span className="text-6xl font-bold text-white opacity-50">{index + 1}</span>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className={`text-sm mb-3 font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    {project.tech}
                  </p>
                  <p className={`mb-4 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed flex-grow`}>
                    {project.description}
                  </p>
                  <button
                    onClick={() => window.open('https://github.com/lekhareddy15', '_blank')}
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
                      } text-white mt-auto`}
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={18} />
                    View on GitHub
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet: Horizontal scroll carousel */}
          <div className="lg:hidden">
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}
                >
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-4"
                    >
                      <div className={`rounded-xl overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gray-50'} border ${isDark ? 'border-gray-700' : 'border-gray-200'
                        } shadow-xl`}>
                        <div className={`relative h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                          {project.image ? (
                            <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                          ) : (
                            <span className="text-8xl font-bold text-white opacity-50">{index + 1}</span>
                          )}
                        </div>

                        <div className="p-6">
                          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                          <p className={`text-sm mb-3 font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            {project.tech}
                          </p>
                          <p className={`mb-4 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                            {project.description}
                          </p>
                          <button
                            onClick={() => window.open('https://github.com/lekhareddy15', '_blank')}
                            className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
                              } text-white`}
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <Github size={18} />
                            View on GitHub
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <button
                onClick={() => setCurrentProjectIndex(Math.max(0, currentProjectIndex - 1))}
                disabled={currentProjectIndex === 0}
                className={`absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300 ${currentProjectIndex === 0
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:scale-110'
                  } ${isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-gray-100'} shadow-lg`}
                aria-label="Previous project"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => setCurrentProjectIndex(Math.min(projects.length - 1, currentProjectIndex + 1))}
                disabled={currentProjectIndex === projects.length - 1}
                className={`absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300 ${currentProjectIndex === projects.length - 1
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:scale-110'
                  } ${isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-gray-100'} shadow-lg`}
                aria-label="Next project"
              >
                <ChevronRight size={24} />
              </button>

              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProjectIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentProjectIndex === index
                        ? 'bg-blue-500 w-8'
                        : isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Contact Me
          </h2>

          <div className={`inline-flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 p-6 sm:p-8 rounded-3xl border ${isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-300 bg-white'} shadow-2xl transition-all duration-300 hover:scale-105`}>
            <a
              href="mailto:lekhareddy16@outlook.com"
              className={`flex items-center gap-3 ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-all duration-300 transform hover:scale-110`}
              aria-label="Email Lekha Reddy"
            >
              <Mail size={24} />
              <span className="text-sm sm:text-base">lekhareddy16@outlook.com</span>
            </a>
            <a
              href="https://linkedin.com/in/lekhareddy16"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-all duration-300 transform hover:scale-110`}
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
              <span className="text-sm sm:text-base">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 sm:px-6 border-t ${isDark ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {['About', 'Experience', 'Projects', 'Contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section.toLowerCase())}
                  className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-all duration-300 hover:scale-110`}
                  aria-label={`Navigate to ${section}`}
                >
                  {section}
                </button>
              ))}
            </div>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm text-center`}>
              Copyright © 2026 Lekha Reddy Surakanti
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
