import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ServiceCard from "@/components/ServiceCard";
import TestimonialSection from "@/components/TestimonialSection";
import PortfolioSection from "@/components/PortfolioSection";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Globe, Code, Smartphone, PenTool, Share, Search, FileText, Menu, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const glowPulse = {
  initial: { opacity: 0.5, scale: 1 },
  animate: {
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.1, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    {
      title: "Web Design & Development",
      description: "Custom websites that are responsive, fast, and optimized for user experience.",
      icon: <Code className="h-10 w-10" />,
      gradient: "from-purple-500 to-indigo-500",
      iconColor: "text-purple-400"
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: <Smartphone className="h-10 w-10" />,
      gradient: "from-green-500 to-teal-500",
      iconColor: "text-green-400"
    },
    {
      title: "Graphic Design",
      description: "Creative designs for branding, marketing materials, and digital assets.",
      icon: <PenTool className="h-10 w-10" />,
      gradient: "from-pink-500 to-rose-500",
      iconColor: "text-pink-400"
    },
    {
      title: "System Design & Deployment",
      description: "End-to-end system architecture, design, and deployment solutions for scalable infrastructure.",
      icon: <Globe className="h-10 w-10" />,
      gradient: "from-yellow-500 to-orange-500",
      iconColor: "text-yellow-400"
    },
    {
      title: "Digital Marketing & Social Media Management",
      description: "SEO, content marketing, and strategic social media management to grow your online presence.",
      icon: <Share className="h-10 w-10" />,
      gradient: "from-red-500 to-purple-500",
      iconColor: "text-red-400"
    },
    {
      title: "IT Consulting & Tech Support",
      description: "Expert IT consulting, technical support, and technology solutions for your business needs.",
      icon: <Search className="h-10 w-10" />,
      gradient: "from-cyan-500 to-blue-500",
      iconColor: "text-cyan-400"
    }
  ];

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="border-b border-purple-500/20 bg-slate-950/80 backdrop-blur-xl fixed w-full z-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Logo />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-3">
              <a href="#services" onClick={(e) => smoothScroll(e, '#services')} className="text-white hover:text-purple-300 transition duration-300">
                <Button variant="ghost" size="sm" className="text-sm px-4 py-2 rounded-full hover:bg-purple-500/10">Services</Button>
              </a>
              <a href="#portfolio" onClick={(e) => smoothScroll(e, '#portfolio')} className="text-white hover:text-purple-300 transition duration-300">
                <Button variant="ghost" size="sm" className="text-sm px-4 py-2 rounded-full hover:bg-purple-500/10">Portfolio</Button>
              </a>
              <a href="/about" className="text-white hover:text-purple-300 transition duration-300">
                <Button variant="ghost" size="sm" className="text-sm px-4 py-2 rounded-full hover:bg-purple-500/10">About Us</Button>
              </a>
              <a href="/team" className="text-white hover:text-purple-300 transition duration-300">
                <Button variant="ghost" size="sm" className="text-sm px-4 py-2 rounded-full hover:bg-purple-500/10">Our Team</Button>
              </a>
              <a href="#footer" onClick={(e) => smoothScroll(e, '#footer')} className="text-white hover:text-purple-300 transition duration-300">
                <Button variant="ghost" size="sm" className="text-sm px-4 py-2 rounded-full hover:bg-purple-500/10">Contact</Button>
              </a>
              <a href="#contact" onClick={(e) => smoothScroll(e, '#contact')} className="text-white hover:text-purple-300 transition duration-300">
                <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-sm px-6 py-2 rounded-full shadow-lg shadow-purple-500/25 transition-all hover:shadow-purple-500/40 hover:scale-105">Get a Quote</Button>
              </a>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-white">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-slate-950 border-purple-500/20">
                  <nav className="flex flex-col space-y-4 mt-8">
                    <a 
                      href="#services" 
                      onClick={(e) => smoothScroll(e, '#services')}
                      className="text-lg font-medium text-white hover:text-purple-400 transition-colors py-3 px-4 rounded-md hover:bg-purple-500/10"
                    >
                      Services
                    </a>
                    <a 
                      href="#portfolio" 
                      onClick={(e) => smoothScroll(e, '#portfolio')}
                      className="text-lg font-medium text-white hover:text-purple-400 transition-colors py-3 px-4 rounded-md hover:bg-purple-500/10"
                    >
                      Portfolio
                    </a>
                    <a 
                      href="/about"
                      className="text-lg font-medium text-white hover:text-purple-400 transition-colors py-3 px-4 rounded-md hover:bg-purple-500/10"
                    >
                      About Us
                    </a>
                    <a 
                      href="/team"
                      className="text-lg font-medium text-white hover:text-purple-400 transition-colors py-3 px-4 rounded-md hover:bg-purple-500/10"
                    >
                      Our Team
                    </a>
                    <a 
                      href="#footer" 
                      onClick={(e) => smoothScroll(e, '#footer')}
                      className="text-lg font-medium text-white hover:text-purple-400 transition-colors py-3 px-4 rounded-md hover:bg-purple-500/10"
                    >
                      Contact
                    </a>
                    <a 
                      href="#contact" 
                      onClick={(e) => smoothScroll(e, '#contact')}
                      className="text-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-md transition-colors"
                    >
                      Get a Quote
                    </a>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.nav>
  
      {/* Hero Section */}
      <div className="relative pt-24 pb-20 px-6 min-h-[90vh] flex items-center justify-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Glowing orbs */}
          <motion.div 
            variants={glowPulse}
            initial="initial"
            animate="animate"
            className="absolute top-20 left-10 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl"
          />
          <motion.div 
            variants={glowPulse}
            initial="initial"
            animate="animate"
            style={{ animationDelay: "1s" }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"
          />
          <motion.div 
            variants={glowPulse}
            initial="initial"
            animate="animate"
            style={{ animationDelay: "2s" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl"
          />
          
          {/* Floating decorative elements */}
          <motion.div
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            className="absolute top-32 right-20 hidden lg:block"
          >
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center">
              <Code className="w-8 h-8 text-purple-400" />
            </div>
          </motion.div>
          
          <motion.div
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            style={{ animationDelay: "0.5s" }}
            className="absolute top-48 left-16 hidden lg:block"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-sm border border-green-500/30 flex items-center justify-center">
              <Smartphone className="w-7 h-7 text-green-400" />
            </div>
          </motion.div>
          
          <motion.div
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            style={{ animationDelay: "1s" }}
            className="absolute bottom-32 left-24 hidden lg:block"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 flex items-center justify-center">
              <Globe className="w-6 h-6 text-yellow-400" />
            </div>
          </motion.div>
          
          <motion.div
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            style={{ animationDelay: "1.5s" }}
            className="absolute bottom-48 right-32 hidden lg:block"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500/20 to-red-500/20 backdrop-blur-sm border border-pink-500/30 flex items-center justify-center">
              <PenTool className="w-7 h-7 text-pink-400" />
            </div>
          </motion.div>
          
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        
        {/* Main Content */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-8"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Transforming Ideas into Digital Excellence</span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              M'Global
            </span>
            <br />
            <span className="text-white">Business</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Consultancy
            </span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-300 bg-clip-text text-transparent mb-6"
          >
            Guaranteeing Excellence
          </motion.p>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-purple-200/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Transforming <span className="text-pink-400 font-medium">ideas</span> into successful{" "}
            <span className="text-purple-400 font-medium">digital solutions</span> for businesses worldwide
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#services" onClick={(e) => smoothScroll(e, '#services')}>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-6 rounded-full text-lg shadow-xl shadow-purple-500/30 transition-all hover:shadow-purple-500/50 hover:scale-105 group">
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#contact" onClick={(e) => smoothScroll(e, '#contact')}>
              <Button variant="outline" size="lg" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:text-white px-8 py-6 rounded-full text-lg backdrop-blur-sm transition-all hover:scale-105">
                Get a Free Quote
              </Button>
            </a>
          </motion.div>
        </motion.div>
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>
  
      {/* Services Section with Animations */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-24 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950 text-white relative overflow-hidden" id="services">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            variants={glowPulse}
            initial="initial"
            animate="animate"
            className="absolute top-20 right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"
          />
          <motion.div 
            variants={glowPulse}
            initial="initial"
            animate="animate"
            style={{ animationDelay: "1.5s" }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">What We Offer</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-purple-200/70 max-w-3xl mx-auto">
              We provide comprehensive solutions to help your business grow and succeed in the digital landscape
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group"
              >
                <div className="relative h-full p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon container */}
                  <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 mb-5`}>
                    <div className="w-full h-full rounded-xl bg-slate-950/80 flex items-center justify-center">
                      <div className={service.iconColor}>{service.icon}</div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-purple-200/60 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Bottom glow effect */}
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Testimonial Section */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} id="testimonials"
      className="py-20 bg-gradient-to-r from-gray-900 to-indigo-900 text-white"
      >
        <TestimonialSection />
      </motion.div>

      {/* Contact Form Section */}
      <motion.div 
        variants={fadeInUp} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        id="contact"
        className="py-20 bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-md md:text-lg text-center mb-12 text-purple-100 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          <ContactForm />
        </div>
      </motion.div>
  
      {/* Footer */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} id="footer">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-10 bg-blue-950 text-white text-center md:text-left">
          <Footer />
        </div>
      </motion.div>
    </div>
  );
};

export default Index;