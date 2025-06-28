import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BsMoon, BsSun } from 'react-icons/bs'
import { HiMenu, HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Platform e-commerce modern dengan fitur lengkap seperti payment gateway, inventory management, dan admin dashboard yang user-friendly.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Task Management App",
      description: "Aplikasi manajemen tugas dengan fitur real-time collaboration, deadline tracking, dan progress monitoring untuk tim.",
      tech: ["React", "Firebase", "Tailwind"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Portfolio Website",
      description: "Website portfolio responsive dengan animasi smooth, dark mode, dan optimasi SEO untuk menampilkan karya dan skill developer.",
      tech: ["React", "Framer Motion", "Tailwind"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Social Media Dashboard",
      description: "Dashboard analytics untuk social media dengan real-time data visualization, engagement tracking, dan automated reporting.",
      tech: ["Vue.js", "Chart.js", "Express"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Learning Management System",
      description: "Platform pembelajaran online dengan fitur video streaming, quiz interaktif, progress tracking, dan sertifikat digital.",
      tech: ["Next.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      title: "Weather Forecast App",
      description: "Aplikasi cuaca dengan prediksi 7 hari, maps interaktif, notifikasi cuaca ekstrem, dan widget customizable.",
      tech: ["React Native", "OpenWeather API", "Redux"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-cyan-500 to-blue-500"
    }
  ]

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const getVisibleProjects = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentProjectIndex + i) % projects.length
      visible.push({ ...projects[index], originalIndex: index })
    }
    return visible
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 relative overflow-x-hidden ${
      darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Enhanced Gradient Background for Light Mode */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900"></div>
        
        {/* Light Mode: Sophisticated layered backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/80 via-purple-50/60 to-pink-50/80 dark:from-transparent dark:via-transparent dark:to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-200/30 via-transparent to-violet-200/30 dark:from-transparent dark:via-transparent dark:to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-100/40 via-transparent to-blue-100/40 dark:from-transparent dark:via-transparent dark:to-transparent"></div>
         
         {/* Enhanced Light Mode Decorative Elements */}
         <motion.div 
           className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-2xl dark:opacity-0"
           animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2], rotate: [0, 180, 360] }}
           transition={{ duration: 12, repeat: Infinity }}
         />
         <motion.div 
           className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-indigo-300/15 to-pink-300/15 rounded-full blur-3xl dark:opacity-0"
           animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.35, 0.15], rotate: [360, 180, 0] }}
           transition={{ duration: 15, repeat: Infinity, delay: 3 }}
         />
         <motion.div 
           className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-r from-violet-300/25 to-cyan-300/25 rounded-full blur-xl dark:opacity-0"
           animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
           transition={{ duration: 8, repeat: Infinity, delay: 1 }}
         />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/30 dark:bg-blue-300/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100, -20],
                x: [-10, 10, -10],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        {/* Geometric Shapes */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 border border-blue-300/40 dark:border-blue-400/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-24 h-24 border border-purple-300/40 dark:border-purple-400/30 rounded-lg"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/95 dark:bg-gray-900/90 border-b border-slate-200/60 dark:border-gray-700/50 shadow-xl shadow-slate-200/20 dark:shadow-gray-900/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Iyan
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Home
                </a>
                <a href="#about" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  About
                </a>
                <a href="#skills" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Skills
                </a>
                <a href="#projects" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Projects
                </a>
                <a href="#contact" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Dark Mode Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
              </button>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {mobileMenuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
         <AnimatePresence>
           {mobileMenuOpen && (
             <motion.div 
               initial={{ height: 0, opacity: 0 }}
               animate={{ height: "auto", opacity: 1 }}
               exit={{ height: 0, opacity: 0 }}
               transition={{ duration: 0.3, ease: "easeInOut" }}
               className="md:hidden overflow-hidden"
             >
               <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <a href="#home" className="block hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="block hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors">
                About
              </a>
              <a href="#skills" className="block hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors">
                Skills
              </a>
              <a href="#projects" className="block hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors">
                Projects
              </a>
              <a href="#contact" className="block hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors">
                Contact
              </a>
            </div>
             </motion.div>
           )}
         </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
       <section id="home" className="relative z-10 pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-white/90 via-slate-50/80 to-blue-50/90 dark:from-gray-900/50 dark:via-gray-800/30 dark:to-blue-900/50">
         {/* Additional animated elements for hero */}
         <div className="absolute inset-0 overflow-hidden">
           <motion.div 
             className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
             animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           />
           <motion.div 
             className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
             animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
           />
         </div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white/80 dark:bg-gray-800/20 backdrop-blur-xl rounded-3xl p-12 shadow-2xl shadow-slate-300/20 dark:shadow-gray-900/40 border border-slate-200/50 dark:border-gray-700/30 relative">
           <div className="space-y-8">
             {/* Profile Image with enhanced animation */}
             <motion.div 
               initial={{ scale: 0, rotate: -180, opacity: 0 }}
               animate={{ scale: 1, rotate: 0, opacity: 1 }}
               transition={{ duration: 1.2, delay: 0.5, type: "spring", stiffness: 200, damping: 15 }}
               className="mx-auto w-40 h-40 relative"
             >
               <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full animate-pulse"></div>
               <div className="absolute inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white/30 backdrop-blur-sm">
                 <span className="text-5xl font-bold text-white">I</span>
               </div>
               <motion.div 
                 className="absolute -inset-4 border-2 border-blue-400/50 rounded-full"
                 animate={{ rotate: 360 }}
                 transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
               />
             </motion.div>
            
            {/* Main Heading */}
             <motion.div 
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.8 }}
               className="space-y-4"
             >
               <motion.h1 
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 1 }}
                 className="text-4xl md:text-6xl font-bold"
               >
                 Hi, I'm{' '}
                 <motion.span 
                   initial={{ opacity: 0, scale: 0.5 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
                   className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                 >
                   Iyan
                 </motion.span>
               </motion.h1>
               <motion.p 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 1.4 }}
                 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
               >
                 Full Stack Developer & UI/UX Designer
               </motion.p>
               <motion.p 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 1.6 }}
                 className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
               >
                 Passionate about creating beautiful, functional, and user-centered digital experiences.
                 I love turning complex problems into simple, beautiful designs.
               </motion.p>
             </motion.div>

            {/* CTA Buttons */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 1.8 }}
               className="flex flex-col sm:flex-row gap-4 justify-center items-center"
             >
               <motion.button 
                 whileHover={{ scale: 1.05, y: -2, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                 whileTap={{ scale: 0.95 }}
                 transition={{ type: "spring", stiffness: 400, damping: 17 }}
                 className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl backdrop-blur-sm"
               >
                 View My Work
               </motion.button>
               <motion.button 
                 whileHover={{ scale: 1.05, y: -2, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.15)" }}
                 whileTap={{ scale: 0.95 }}
                 transition={{ type: "spring", stiffness: 400, damping: 17 }}
                 className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/10 dark:bg-gray-900/10"
               >
                 Download CV
               </motion.button>
             </motion.div>

            {/* Scroll Indicator */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 2.2 }}
               className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
             >
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
               >
                 <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
                   <motion.div 
                     animate={{ y: [0, 12, 0] }}
                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                     className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
                   ></motion.div>
                 </div>
               </motion.div>
             </motion.div>
           </div>
         </div>
       </section>

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        id="about" 
        className="relative z-10 py-20 bg-white/85 dark:bg-gray-800/30 backdrop-blur-md border-y border-slate-200/60 dark:border-gray-700/30 shadow-sm shadow-slate-200/30 dark:shadow-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            About Me
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/90 dark:bg-gray-800/70 backdrop-blur-md p-6 rounded-xl shadow-lg shadow-slate-200/20 dark:shadow-gray-900/20 border border-slate-200/40 dark:border-gray-700/30">
                <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">🚀 Passion & Experience</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Saya adalah seorang Full Stack Developer dengan pengalaman 3+ tahun dalam mengembangkan 
                  aplikasi web modern. Passionate dalam menciptakan solusi digital yang user-friendly, 
                  scalable, dan memiliki performa tinggi.
                </p>
              </div>
              
              <div className="bg-white/90 dark:bg-gray-800/70 backdrop-blur-md p-6 rounded-xl shadow-lg shadow-slate-200/20 dark:shadow-gray-900/20 border border-slate-200/40 dark:border-gray-700/30">
                <h3 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400">💻 Technical Skills</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Keahlian saya meliputi frontend development dengan React.js, backend development dengan 
                  Node.js dan Python, serta database management. Saya juga memiliki pengalaman dalam 
                  UI/UX design menggunakan Figma dan Adobe Creative Suite.
                </p>
              </div>
              
              <div className="bg-white/90 dark:bg-gray-800/70 backdrop-blur-md p-6 rounded-xl shadow-lg shadow-slate-200/20 dark:shadow-gray-900/20 border border-slate-200/40 dark:border-gray-700/30">
                <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">🌱 Growth Mindset</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Selalu antusias untuk belajar teknologi baru dan menghadapi tantangan dalam 
                  mengembangkan produk digital yang dapat memberikan impact positif bagi pengguna.
                </p>
              </div>
            </motion.div>
            
            {/* Right side - Visual elements */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-100/80 to-blue-100/60 dark:from-blue-500/20 dark:to-purple-500/20 rounded-2xl p-8 backdrop-blur-md border border-slate-200/50 dark:border-gray-700/30 shadow-lg shadow-slate-200/20 dark:shadow-transparent">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="bg-white/95 dark:bg-gray-800/80 p-4 rounded-lg text-center shadow-lg shadow-slate-200/30 dark:shadow-gray-900/20 border border-slate-100/50 dark:border-transparent"
                  >
                    <div className="text-3xl mb-2">⚡</div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: -5 }}
                    className="bg-white/95 dark:bg-gray-800/80 p-4 rounded-lg text-center shadow-lg shadow-slate-200/30 dark:shadow-gray-900/20 border border-slate-100/50 dark:border-transparent"
                  >
                    <div className="text-3xl mb-2">🚀</div>
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">50+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Projects Done</div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="bg-white/95 dark:bg-gray-800/80 p-4 rounded-lg text-center shadow-lg shadow-slate-200/30 dark:shadow-gray-900/20 border border-slate-100/50 dark:border-transparent"
                  >
                    <div className="text-3xl mb-2">💻</div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">15+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Technologies</div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: -5 }}
                    className="bg-white/95 dark:bg-gray-800/80 p-4 rounded-lg text-center shadow-lg shadow-slate-200/30 dark:shadow-gray-900/20 border border-slate-100/50 dark:border-transparent"
                  >
                    <div className="text-3xl mb-2">🎯</div>
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">100%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Dedication</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
       <motion.section 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 0.8 }}
         viewport={{ once: true, amount: 0.3 }}
         id="skills" 
         className="relative z-10 py-20 bg-slate-50/90 dark:bg-gray-900/50 backdrop-blur-md border-y border-slate-200/40 dark:border-gray-700/20"
       >
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             viewport={{ once: true }}
             className="text-3xl md:text-4xl font-bold mb-16"
           >
             Skills
           </motion.h2>
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             viewport={{ once: true }}
             className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
           >
             {[
               { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
               { name: 'JavaScript', icon: '🟨', color: 'from-yellow-400 to-orange-400' },
               { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-emerald-400' },
               { name: 'Python', icon: '🐍', color: 'from-blue-500 to-yellow-400' },
               { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-400 to-blue-500' },
               { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-green-600' },
               { name: 'Git', icon: '📦', color: 'from-orange-400 to-red-500' },
               { name: 'Figma', icon: '🎯', color: 'from-purple-400 to-pink-400' }
             ].map((skill, index) => (
               <motion.div
                 key={skill.name}
                 initial={{ opacity: 0, y: 20, scale: 0.8 }}
                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
                 whileHover={{ scale: 1.08, y: -8, rotateY: 10 }}
                 transition={{ 
                   duration: 0.5, 
                   delay: 0.6 + (index * 0.1),
                   type: "spring",
                   stiffness: 300
                 }}
                 viewport={{ once: true }}
                 className="bg-white/95 dark:bg-gray-800/70 backdrop-blur-md p-6 rounded-xl shadow-lg shadow-slate-200/20 dark:shadow-gray-900/20 hover:shadow-2xl hover:shadow-slate-300/30 dark:hover:shadow-gray-900/30 transition-all duration-300 border border-slate-200/50 dark:border-gray-700/30 group relative overflow-hidden"
               >
                 {/* Background gradient on hover */}
                 <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                 
                 <div className="relative z-10">
                   <motion.div 
                     className="text-4xl mb-3"
                     whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                     transition={{ duration: 0.3 }}
                   >
                     {skill.icon}
                   </motion.div>
                   <h3 className="font-semibold text-gray-800 dark:text-white group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                     {skill.name}
                   </h3>
                 </div>
               </motion.div>
             ))}
           </motion.div>
         </div>
       </motion.section>

      {/* Projects Section */}
       <motion.section 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 0.8 }}
         viewport={{ once: true, amount: 0.3 }}
         id="projects" 
         className="relative z-10 py-20 bg-white/90 dark:bg-gray-800/30 backdrop-blur-md border-y border-slate-200/50 dark:border-gray-700/30 shadow-sm shadow-slate-200/20 dark:shadow-transparent"
       >
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             viewport={{ once: true }}
             className="text-3xl md:text-4xl font-bold text-center mb-16"
           >
             Projects
           </motion.h2>
           
           {/* Project Slider */}
           <div className="relative">
             {/* Navigation Buttons */}
             <div className="flex justify-between items-center mb-8">
               <motion.button
                 onClick={prevProject}
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9 }}
                 className="p-3 bg-white/95 dark:bg-gray-800/80 backdrop-blur-md rounded-full shadow-lg shadow-slate-200/30 dark:shadow-gray-900/20 border border-slate-200/50 dark:border-gray-700/30 hover:bg-white dark:hover:bg-gray-700/90 hover:shadow-xl hover:shadow-slate-300/40 dark:hover:shadow-gray-900/30 transition-all duration-300"
               >
                 <HiChevronLeft className="w-6 h-6 text-blue-600 dark:text-blue-400" />
               </motion.button>
               
               <div className="text-center">
                 <p className="text-sm text-gray-600 dark:text-gray-400">
                   {currentProjectIndex + 1} - {Math.min(currentProjectIndex + 3, projects.length)} of {projects.length} projects
                 </p>
               </div>
               
               <motion.button
                  onClick={nextProject}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/95 dark:bg-gray-800/80 backdrop-blur-md rounded-full shadow-lg shadow-slate-200/30 dark:shadow-gray-900/20 border border-slate-200/50 dark:border-gray-700/30 hover:bg-white dark:hover:bg-gray-700/90 hover:shadow-xl hover:shadow-slate-300/40 dark:hover:shadow-gray-900/30 transition-all duration-300"
                >
                  <HiChevronRight className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </motion.button>
             </div>
             
             {/* Projects Grid */}
             <motion.div 
               key={currentProjectIndex}
               initial={{ opacity: 0, x: 100 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -100 }}
               transition={{ duration: 0.5, ease: "easeInOut" }}
               className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
             >
               {getVisibleProjects().map((project, index) => (
                 <motion.div
                   key={`${project.originalIndex}-${currentProjectIndex}`}
                   initial={{ opacity: 0, y: 30, scale: 0.9 }}
                   animate={{ opacity: 1, y: 0, scale: 1 }}
                   whileHover={{ scale: 1.03, y: -8 }}
                   transition={{ 
                     duration: 0.6, 
                     delay: index * 0.1,
                     type: "spring",
                     stiffness: 300
                   }}
                   className="bg-white/95 dark:bg-gray-700/70 backdrop-blur-md rounded-xl shadow-lg shadow-slate-200/20 dark:shadow-gray-900/20 hover:shadow-2xl hover:shadow-slate-300/30 dark:hover:shadow-gray-900/30 transition-all duration-300 overflow-hidden border border-slate-200/50 dark:border-gray-600/20 group"
                 >
                   <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                      <div className={`absolute inset-0 bg-[url('${project.image}')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}/70`}></div>
                      
                      {/* Project number indicator */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{project.originalIndex + 1}</span>
                      </div>
                    </div>
                   <div className="p-6">
                     <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                     <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                     <div className="flex flex-wrap gap-2">
                       {project.tech.map((tech, techIndex) => (
                         <span key={techIndex} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">{tech}</span>
                       ))}
                     </div>
                   </div>
                 </motion.div>
               ))}
             </motion.div>
             
             {/* Dots Indicator */}
             <div className="flex justify-center mt-8 space-x-2">
               {projects.map((_, index) => (
                 <motion.button
                   key={index}
                   onClick={() => setCurrentProjectIndex(index)}
                   whileHover={{ scale: 1.2 }}
                   whileTap={{ scale: 0.8 }}
                   className={`w-3 h-3 rounded-full transition-all duration-300 shadow-sm ${
                     index >= currentProjectIndex && index < currentProjectIndex + 3
                       ? 'bg-blue-600 dark:bg-blue-400 scale-125 shadow-blue-200 dark:shadow-blue-900/50'
                       : 'bg-slate-300 dark:bg-gray-600 hover:bg-slate-400 dark:hover:bg-gray-500 shadow-slate-200/50 dark:shadow-gray-900/20'
                   }`}
                 />
               ))}
             </div>
           </div>
         </div>
       </motion.section>

       {/* Contact Section */}
       <motion.section 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 0.8 }}
         viewport={{ once: true, amount: 0.3 }}
         id="contact" 
         className="relative z-10 py-20 bg-slate-50/95 dark:bg-gray-900/50 backdrop-blur-md overflow-hidden border-y border-slate-200/40 dark:border-gray-700/20"
       >
         {/* Background decorative elements */}
         <div className="absolute inset-0 overflow-hidden">
           <motion.div
             animate={{
               rotate: [0, 360],
               scale: [1, 1.1, 1]
             }}
             transition={{
               duration: 20,
               repeat: Infinity,
               ease: "linear"
             }}
             className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-xl"
           />
           <motion.div
             animate={{
               rotate: [360, 0],
               scale: [1, 1.2, 1]
             }}
             transition={{
               duration: 25,
               repeat: Infinity,
               ease: "linear"
             }}
             className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-xl"
           />
         </div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             viewport={{ once: true }}
             className="text-center mb-16"
           >
             <h2 className="text-3xl md:text-4xl font-bold mb-4">
               Let's Work Together
             </h2>
             <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
               Siap untuk mewujudkan proyek impian Anda? Mari berdiskusi dan ciptakan sesuatu yang luar biasa bersama!
             </p>
           </motion.div>
           
           <div className="grid lg:grid-cols-2 gap-12 items-center">
             {/* Contact Info */}
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               viewport={{ once: true }}
               className="space-y-8"
             >
               <div className="grid gap-6">
                 {[
                   { 
                     icon: "📧", 
                     title: "Email", 
                     info: "iyan.developer@email.com",
                     description: "Kirim email untuk diskusi project",
                     gradient: "from-blue-500 to-cyan-500"
                   },
                   { 
                     icon: "📱", 
                     title: "Phone", 
                     info: "+62 812-3456-7890",
                     description: "Hubungi langsung untuk konsultasi",
                     gradient: "from-green-500 to-emerald-500"
                   },
                   { 
                     icon: "💼", 
                     title: "LinkedIn", 
                     info: "linkedin.com/in/iyan-dev",
                     description: "Connect untuk networking",
                     gradient: "from-purple-500 to-pink-500"
                   },
                   { 
                     icon: "🐙", 
                     title: "GitHub", 
                     info: "github.com/iyan-dev",
                     description: "Lihat portfolio code saya",
                     gradient: "from-gray-600 to-gray-800"
                   }
                 ].map((contact, index) => (
                   <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 30, scale: 0.9 }}
                     whileInView={{ opacity: 1, y: 0, scale: 1 }}
                     whileHover={{ scale: 1.02, x: 10 }}
                     transition={{ 
                       duration: 0.6, 
                       delay: 0.6 + (index * 0.1),
                       type: "spring",
                       stiffness: 300
                     }}
                     viewport={{ once: true }}
                     className="group bg-white/95 dark:bg-gray-700/70 backdrop-blur-md rounded-xl p-6 shadow-lg shadow-slate-200/20 dark:shadow-gray-900/20 hover:shadow-2xl hover:shadow-slate-300/30 dark:hover:shadow-gray-900/30 transition-all duration-300 border border-slate-200/50 dark:border-gray-600/20 cursor-pointer"
                   >
                     <div className="flex items-start space-x-4">
                       <div className={`w-12 h-12 bg-gradient-to-br ${contact.gradient} rounded-lg flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300`}>
                         {contact.icon}
                       </div>
                       <div className="flex-1">
                         <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{contact.title}</h3>
                         <p className="text-gray-900 dark:text-white font-medium mb-1">{contact.info}</p>
                         <p className="text-sm text-gray-600 dark:text-gray-400">{contact.description}</p>
                       </div>
                     </div>
                   </motion.div>
                 ))}
               </div>
             </motion.div>
             
             {/* Contact Form */}
             <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.6 }}
               viewport={{ once: true }}
               className="bg-white/95 dark:bg-gray-700/70 backdrop-blur-md rounded-2xl p-8 shadow-xl shadow-slate-200/20 dark:shadow-gray-900/20 border border-slate-200/50 dark:border-gray-600/20"
             >
               <h3 className="text-2xl font-bold mb-6 text-center">Send Message</h3>
               <form className="space-y-6">
                 <div className="grid md:grid-cols-2 gap-4">
                   <motion.div
                     whileFocus={{ scale: 1.02 }}
                     className="space-y-2"
                   >
                     <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                     <input 
                       type="text" 
                       className="w-full px-4 py-3 bg-white/90 dark:bg-gray-800/70 backdrop-blur-sm border border-slate-300/60 dark:border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-400 dark:focus:border-blue-400 shadow-sm shadow-slate-200/20 dark:shadow-gray-900/20 transition-all duration-300"
                       placeholder="Your name"
                     />
                   </motion.div>
                   <motion.div
                     whileFocus={{ scale: 1.02 }}
                     className="space-y-2"
                   >
                     <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                     <input 
                       type="email" 
                       className="w-full px-4 py-3 bg-white/90 dark:bg-gray-800/70 backdrop-blur-sm border border-slate-300/60 dark:border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-400 dark:focus:border-blue-400 shadow-sm shadow-slate-200/20 dark:shadow-gray-900/20 transition-all duration-300"
                       placeholder="your@email.com"
                     />
                   </motion.div>
                 </div>
                 <motion.div
                   whileFocus={{ scale: 1.02 }}
                   className="space-y-2"
                 >
                   <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                   <input 
                     type="text" 
                     className="w-full px-4 py-3 bg-white/90 dark:bg-gray-800/70 backdrop-blur-sm border border-slate-300/60 dark:border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-400 dark:focus:border-blue-400 shadow-sm shadow-slate-200/20 dark:shadow-gray-900/20 transition-all duration-300"
                     placeholder="Project discussion"
                   />
                 </motion.div>
                 <motion.div
                   whileFocus={{ scale: 1.02 }}
                   className="space-y-2"
                 >
                   <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                   <textarea 
                     rows={4}
                     className="w-full px-4 py-3 bg-white/90 dark:bg-gray-800/70 backdrop-blur-sm border border-slate-300/60 dark:border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-400 dark:focus:border-blue-400 shadow-sm shadow-slate-200/20 dark:shadow-gray-900/20 transition-all duration-300 resize-none"
                     placeholder="Tell me about your project..."
                   />
                 </motion.div>
                 <motion.button
                   type="submit"
                   whileHover={{ 
                     scale: 1.05,
                     boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                   }}
                   whileTap={{ scale: 0.95 }}
                   className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm shadow-lg shadow-blue-200/30 dark:shadow-blue-900/20 hover:shadow-xl hover:shadow-blue-300/40 dark:hover:shadow-blue-900/30"
                 >
                   Send Message 🚀
                 </motion.button>
               </form>
             </motion.div>
           </div>
         </div>
       </motion.section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 py-8 bg-white/95 dark:bg-gray-900/80 backdrop-blur-md border-t border-slate-200/50 dark:border-gray-700/30 shadow-sm shadow-slate-200/20 dark:shadow-transparent text-gray-900 dark:text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400"
          >
            © 2024 Iyan Portfolio. Built with React & Tailwind CSS.
          </motion.p>
        </div>
      </motion.footer>
    </div>
  )
}

export default App
