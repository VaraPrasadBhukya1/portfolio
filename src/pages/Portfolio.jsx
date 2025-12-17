import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, ExternalLink, ChevronDown, Code, Sparkles, Zap, Users, TrendingUp, Database, Brain, Cpu, Globe, Award, Briefcase, GraduationCap } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "AI-Powered Language Assistant",
      subtitle: "Telugu & Tamil Chrome Extension",
      description: "Engineered an intelligent real-time language correction system that revolutionized content creation for Telugu and Tamil languages, increasing user publishing rates by 70%.",
      impact: ["70% increase in publishing rate", "80% reduction in content errors", "3+ AI-powered suggestions per correction", "Real-time correction engine"],
      tech: ["Claude AI API", "Chrome Extension", "JavaScript", "Natural Language Processing"],
      icon: Brain,
      gradient: "from-violet-500/20 to-purple-500/20"
    },
    {
      title: "YouTube Multi-Channel Platform",
      subtitle: "Video Distribution at Scale",
      description: "Architected a comprehensive video publishing platform serving 300,000+ subscribers with automated content distribution across multiple channels.",
      impact: ["300K+ subscribers served", "30M YouTube API credits/day", "9:16 automated video generation", "Multi-template support"],
      tech: ["React.js", "Node.js", "YouTube Data API", "Automation"],
      icon: Globe,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Way2Experts Consultation Platform",
      subtitle: "Professional Services Marketplace",
      description: "Designed a real-time multi-domain consultation platform connecting 100+ experts with 10,000+ users across astrology, medical, and legal domains.",
      impact: ["10,000+ user interactions", "100+ expert onboarding", "Real-time communication", "50,000+ consultation logs"],
      tech: ["React.js", "Node.js", "PostgreSQL", "WebSocket"],
      icon: Users,
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "MyVidhi - Astrology Platform",
      subtitle: "React Native Application",
      description: "Developed a comprehensive astrology consultation app enabling users to connect with astrologers through real-time chat and call sessions for personalized predictions.",
      impact: ["Real-time chat & calls", "Secure communication", "Seamless UX", "Expert guidance platform"],
      tech: ["React Native", "Node.js", "WebRTC", "Real-time APIs"],
      icon: Sparkles,
      gradient: "from-amber-500/20 to-orange-500/20"
    },
    {
      title: "Personalized News-Feed Algorithm",
      subtitle: "AI-Driven Content Curation",
      description: "Engineered an intelligent content curation system that personalizes news feeds based on user interests and engagement patterns, significantly improving platform performance.",
      impact: ["Personalized content delivery", "Optimized data pipeline", "Faster feed generation", "Enhanced user engagement"],
      tech: ["Node.js", "Machine Learning", "PostgreSQL", "Optimization"],
      icon: TrendingUp,
      gradient: "from-pink-500/20 to-rose-500/20"
    },
    {
      title: "Social Media Automation System",
      subtitle: "One-Click Multi-Platform Publishing",
      description: "Developed an automation system that ingests news content from Way2News and distributes it across various social media platforms with a single click.",
      impact: ["Multi-platform distribution", "Automated scheduling", "API integration", "Streamlined workflow"],
      tech: ["Node.js", "Platform APIs", "Automation", "Scheduling"],
      icon: Zap,
      gradient: "from-indigo-500/20 to-blue-500/20"
    },
    {
      title: "Play Store Review Response System",
      subtitle: "AI-Powered Customer Engagement",
      description: "Engineered an automated system using ChatGPT API to handle app store reviews, processing 1,000+ reviews daily per application with intelligent responses.",
      impact: ["1,000+ daily reviews processed", "Multi-app dashboard", "Secure authentication", "5+ app registrations"],
      tech: ["ChatGPT API", "Node.js", "React.js", "Automation"],
      icon: Cpu,
      gradient: "from-fuchsia-500/20 to-purple-500/20"
    },
    {
      title: "Advertisement Management System",
      subtitle: "Revenue Optimization Platform",
      description: "Strategically designed an ad management system that automated data retrieval from Google Ad Manager, processing 500+ data points and increasing revenue by 60%.",
      impact: ["60% revenue growth", "500+ data points processed", "Automated reporting", "Python automation"],
      tech: ["React.js", "Node.js", "Python", "Google Ad Manager API"],
      icon: Database,
      gradient: "from-green-500/20 to-emerald-500/20"
    }
  ];

  const experiences = [
    {
      title: "Junior Software Engineer",
      company: "Way2News Pvt Ltd",
      period: "Jun 2023 – Present",
      type: "Full-time",
      highlights: [
        "Architected YouTube multi-channel platform serving 300,000+ subscribers",
        "Pioneered AI-powered Chrome extension increasing news publish rate by 70%",
        "Created Way2Experts platform connecting 100+ experts with 10,000+ users",
        "Implemented web automation with Selenium, processing 1,000+ YouTube shorts daily",
        "Raised Google YouTube API quota from 10K to 30M credits/day",
        "Integrated Claude API for grammar correction, hashtag & keyword generation"
      ]
    },
    {
      title: "Junior Software Engineer (Intern)",
      company: "Way2News",
      period: "Oct 2022 – Jun 2023",
      type: "Internship",
      highlights: [
        "Designed advertisement management system resulting in 60% revenue growth",
        "Automated data retrieval from Google Ad Manager using Python",
        "Processed 500+ data points ensuring reporting efficiency",
        "Collaborated with team heads to understand existing workflows"
      ]
    },
    {
      title: "Freelance Full Stack Developer",
      company: "Self-Employed",
      period: "2022 – Present",
      type: "Freelance",
      highlights: [
        "Engineered automated Play Store review response system with ChatGPT API",
        "Handled 1,000+ reviews daily per application",
        "Developed multi-application management dashboard with secure authentication",
        "Supported 5+ application registrations with robust architecture"
      ]
    }
  ];

  const skills = {
    "AI & Automation": [
      "Claude AI Integration",
      "ChatGPT API",
      "Natural Language Processing",
      "Selenium Automation",
      "Web Scraping"
    ],
    "Frontend Development": [
      "React.js",
      "React Native",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Chrome Extensions"
    ],
    "Backend Development": [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "WebSocket",
      "Python"
    ],
    "Databases": [
      "PostgreSQL",
      "MySQL",
      "MongoDB"
    ],
    "Platform APIs": [
      "YouTube Data API",
      "Google Play Store API",
      "Google Ad Manager",
      "Social Media APIs"
    ],
    "DevOps & Tools": [
      "Git & GitHub",
      "API Integration",
      "Real-time Systems",  
      "Performance Optimization"
    ]
  };

  return (
    <div className="bg-[#0a0a0a] text-gray-100 min-h-screen">
      {/* Cursor Glow Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:block hidden"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.08), transparent 80%)`
        }}
      />

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a0a0a]/98 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl shadow-black/20' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-11 h-11 bg-gradient-to-br from-violet-500 via-purple-600 to-fuchsia-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/30 group-hover:shadow-violet-500/50 transition-all duration-300 group-hover:scale-105">
                <Code className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Vara Prasad
                </span>
                <p className="text-[10px] text-gray-500 -mt-1 tracking-wide">Full Stack Developer</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded-lg relative ${
                    activeSection === item.toLowerCase()
                      ? 'text-violet-400'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute inset-0 bg-violet-500/10 rounded-lg border border-violet-500/20"></span>
                  )}
                  <span className="relative">{item}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-6 py-6 border-t border-gray-800 bg-[#0a0a0a]/95 backdrop-blur-xl rounded-2xl px-4 space-y-1">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left py-3 px-4 text-base font-semibold transition-all duration-300 rounded-lg ${
                    activeSection === item.toLowerCase()
                      ? 'text-violet-400 bg-violet-500/10 border border-violet-500/20'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/30'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-fuchsia-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 lg:space-y-10">
            <div className="inline-flex items-center space-x-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-violet-500/10 border border-violet-500/20 rounded-full backdrop-blur-sm hover:bg-violet-500/15 transition-all duration-300 shadow-lg shadow-violet-500/10">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400 animate-pulse" />
              <span className="text-xs sm:text-sm text-violet-400 font-bold tracking-wide">Full Stack Developer | AI Integration Specialist</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight px-4">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent animate-gradient">
                Vara Prasad Bhukya
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4 font-light">
              Building scalable platforms with{' '}
              <span className="text-violet-400 font-semibold">React.js</span>,{' '}
              <span className="text-violet-400 font-semibold">Node.js</span>, and{' '}
              <span className="text-violet-400 font-semibold">AI Integration</span>. 
              Specialized in automation, real-time systems, and delivering high-impact solutions 
              that drive technological innovation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-6 px-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-violet-500 via-purple-600 to-fuchsia-600 hover:from-violet-600 hover:via-purple-700 hover:to-fuchsia-700 text-white rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 transform"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-gray-800/50 hover:bg-gray-700/50 text-white rounded-xl font-bold text-sm sm:text-base transition-all duration-300 border border-gray-700 hover:border-gray-600 backdrop-blur-sm"
              >
                View Projects
              </a>
            </div>

            <div className="flex items-center justify-center space-x-4 sm:space-x-6 pt-6 sm:pt-8">
              {/* <a 
                href="https://github.com/varaprasadbhukya" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-gray-800/40 hover:bg-violet-500/20 border border-gray-700 hover:border-violet-500/50 rounded-xl text-gray-400 hover:text-violet-400 transition-all duration-300 backdrop-blur-sm group"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
              </a> */}
              <a 
                href="https://www.linkedin.com/in/vara-prasad-bhukya-727125231/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-gray-800/40 hover:bg-violet-500/20 border border-gray-700 hover:border-violet-500/50 rounded-xl text-gray-400 hover:text-violet-400 transition-all duration-300 backdrop-blur-sm group"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="mailto:vara.fullstackdev@gmail.com" 
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-gray-800/40 hover:bg-violet-500/20 border border-gray-700 hover:border-violet-500/50 rounded-xl text-gray-400 hover:text-violet-400 transition-all duration-300 backdrop-blur-sm group"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="tel:+916303609659" 
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-gray-800/40 hover:bg-violet-500/20 border border-gray-700 hover:border-violet-500/50 rounded-xl text-gray-400 hover:text-violet-400 transition-all duration-300 backdrop-blur-sm group"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full mb-6 backdrop-blur-sm">
                <Award className="w-4 h-4 text-violet-400" />
                <span className="text-xs sm:text-sm text-violet-400 font-bold tracking-wide">ABOUT ME</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Crafting Digital Excellence
                </span>
              </h2>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-6 sm:p-8 lg:p-12 space-y-6 sm:space-y-8 shadow-2xl hover:border-violet-500/30 transition-all duration-500">
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed font-light">
                I'm a Full Stack Developer with a passion for building innovative web applications and automation solutions. Currently working at <span className="text-violet-400 font-bold">Way2News</span>, I specialize in architecting scalable platforms that leverage cutting-edge technologies including AI integration, real-time systems, and cloud services.
              </p>

              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed font-light">
                My expertise spans across the entire development lifecycle—from conceptualizing solutions to deploying production-grade applications. I've successfully engineered platforms serving <span className="text-violet-400 font-bold">300,000+ users</span>, developed AI-powered tools that increased productivity by <span className="text-violet-400 font-bold">70%</span>, and implemented automation systems processing millions of data points daily.
              </p>

              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed font-light">
                I thrive on solving complex technical challenges and transforming ideas into impactful digital experiences. Whether it's integrating advanced AI APIs like Claude and ChatGPT, building real-time communication platforms, or optimizing system architectures for scale, I bring a strategic approach to every project.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative text-center p-6 sm:p-8 bg-gradient-to-br from-violet-500/10 to-purple-500/5 border border-violet-500/20 rounded-2xl backdrop-blur-sm hover:border-violet-500/40 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-purple-400 mb-3">300K+</div>
                    <div className="text-xs sm:text-sm text-gray-400 font-semibold tracking-wide">USERS SERVED</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative text-center p-6 sm:p-8 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/5 border border-purple-500/20 rounded-2xl backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-fuchsia-400 mb-3">70%</div>
                    <div className="text-xs sm:text-sm text-gray-400 font-semibold tracking-wide">PRODUCTIVITY BOOST</div>
                  </div>
                </div>
                <div className="relative group sm:col-span-2 lg:col-span-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative text-center p-6 sm:p-8 bg-gradient-to-br from-fuchsia-500/10 to-pink-500/5 border border-fuchsia-500/20 rounded-2xl backdrop-blur-sm hover:border-fuchsia-500/40 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 to-pink-400 mb-3">30M+</div>
                    <div className="text-xs sm:text-sm text-gray-400 font-semibold tracking-wide">API CREDITS/DAY</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20 lg:py-32 relative bg-gradient-to-b from-transparent via-gray-900/30 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full mb-6 backdrop-blur-sm">
              <Briefcase className="w-4 h-4 text-violet-400" />
              <span className="text-xs sm:text-sm text-violet-400 font-bold tracking-wide">EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Professional Journey
              </span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-6 sm:p-8 lg:p-10 hover:border-violet-500/30 transition-all duration-500 shadow-2xl">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 sm:mb-8 space-y-4 lg:space-y-0">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-purple-400 transition-all duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-base sm:text-lg text-violet-400 font-bold mb-3">{exp.company}</p>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-block px-3 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-full text-xs sm:text-sm text-violet-400 font-bold">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <div className="lg:text-right">
                      <p className="text-sm sm:text-base text-gray-400 font-semibold bg-gray-800/50 px-4 py-2 rounded-lg inline-block">{exp.period}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 sm:space-y-4">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start space-x-3 sm:space-x-4 text-gray-300 group/item hover:text-gray-100 transition-colors duration-200">
                        <span className="text-violet-400 mt-1.5 text-lg font-bold group-hover/item:scale-125 transition-transform duration-200">▹</span>
                        <span className="text-sm sm:text-base font-light leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full mb-6 backdrop-blur-sm">
              <Code className="w-4 h-4 text-violet-400" />
              <span className="text-xs sm:text-sm text-violet-400 font-bold tracking-wide">PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Featured Work
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                >
                  {/* Gradient Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl blur-xl group-hover:blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                  
                  <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-6 sm:p-8 hover:border-violet-500/30 transition-all duration-500 shadow-2xl h-full flex flex-col">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2} />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-purple-400 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-violet-400 font-bold mb-4 tracking-wide">{project.subtitle}</p>
                    <p className="text-sm sm:text-base text-gray-400 mb-6 leading-relaxed font-light flex-grow">{project.description}</p>

                    <div className="space-y-4 mb-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {project.impact.map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-2 group/item">
                            <span className="text-violet-400 mt-0.5 text-sm font-bold group-hover/item:scale-125 transition-transform duration-200">✓</span>
                            <span className="text-xs sm:text-sm text-gray-300 font-light">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-gray-800/60 border border-gray-700/50 rounded-lg text-[10px] sm:text-xs text-gray-300 font-semibold hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 lg:py-32 relative bg-gradient-to-b from-transparent via-gray-900/30 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full mb-6 backdrop-blur-sm">
              <Cpu className="w-4 h-4 text-violet-400" />
              <span className="text-xs sm:text-sm text-violet-400 font-bold tracking-wide">SKILLS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Technical Arsenal
              </span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-500 shadow-xl">
                  <h3 className="text-base sm:text-lg font-black text-white mb-5 flex items-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-purple-400 transition-all duration-300">
                    <span className="w-2 h-2 bg-violet-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    {category}
                  </h3>
                  <ul className="space-y-2.5">
                    {items.map((skill, idx) => (
                      <li key={idx} className="text-gray-400 text-xs sm:text-sm flex items-center group/item hover:text-gray-200 transition-colors duration-200 font-light">
                        <span className="text-violet-400 mr-3 text-base group-hover/item:scale-125 transition-transform duration-200">▹</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full mb-6 backdrop-blur-sm">
              <Mail className="w-4 h-4 text-violet-400" />
              <span className="text-xs sm:text-sm text-violet-400 font-bold tracking-wide">CONTACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-10 sm:mb-12 lg:mb-16 leading-relaxed font-light px-4">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
              <a
                href="mailto:vara.fullstackdev@gmail.com"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative flex items-center space-x-4 p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl hover:border-violet-500/30 transition-all duration-300 shadow-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-violet-400" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <div className="text-[10px] sm:text-xs text-gray-500 mb-1 font-semibold tracking-wide">EMAIL</div>
                    <div className="text-xs sm:text-sm text-gray-300 font-semibold truncate">vara.fullstackdev@gmail.com</div>
                  </div>
                </div>
              </a>

              <a
                href="tel:+916303609659"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative flex items-center space-x-4 p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl hover:border-violet-500/30 transition-all duration-300 shadow-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <div className="text-[10px] sm:text-xs text-gray-500 mb-1 font-semibold tracking-wide">PHONE</div>
                    <div className="text-xs sm:text-sm text-gray-300 font-semibold">+91 6303609659</div>
                  </div>
                </div>
              </a>
            </div>

            <div className="flex items-center justify-center space-x-4 sm:space-x-6">
              {/* <a
                href="https://github.com/varaprasadbhukya"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-gray-800/60 hover:bg-violet-500/20 border border-gray-700 hover:border-violet-500/50 rounded-2xl transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-violet-500/20"
              >
                <Github className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 group-hover:text-violet-400 group-hover:scale-110 transition-all duration-300" />
              </a> */}
              <a
                href="https://www.linkedin.com/in/vara-prasad-bhukya-727125231/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-gray-800/60 hover:bg-violet-500/20 border border-gray-700 hover:border-violet-500/50 rounded-2xl transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-violet-500/20"
              >
                <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 group-hover:text-violet-400 group-hover:scale-110 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-10 border-t border-gray-800/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500 text-xs sm:text-sm space-y-2">
            <p className="font-semibold">© 2024 Vara Prasad Bhukya. Built with React & Tailwind CSS.</p>
            <p className="font-light">Full Stack Developer | AI Integration Specialist | Hyderabad, India</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;