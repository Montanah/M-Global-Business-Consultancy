import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Team = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center hover:opacity-80 transition-opacity cursor-pointer">
              <img src="/Logo.png" alt="M'Global Logo" className="h-10 w-auto mr-3" />
              <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-yellow-500 bg-clip-text text-transparent">
                M'Global Business Consultancy
              </span>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Home
                </a>
                <a href="/#services" className="text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Services
                </a>
                <a href="/#portfolio" className="text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Portfolio
                </a>
                <a href="/about" className="text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  About Us
                </a>
                <a href="/team" className="text-pink-600 px-3 py-2 rounded-md text-sm font-medium">
                  Our Team
                </a>
                <a href="/#contact" className="text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-10 w-10">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4 mt-8">
                    <a 
                      href="/" 
                      className="text-lg font-medium text-gray-700 hover:text-pink-600 transition-colors py-2 px-4 rounded-md hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      Home
                    </a>
                    <a 
                      href="/#services" 
                      className="text-lg font-medium text-gray-700 hover:text-pink-600 transition-colors py-2 px-4 rounded-md hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      Services
                    </a>
                    <a 
                      href="/#portfolio" 
                      className="text-lg font-medium text-gray-700 hover:text-pink-600 transition-colors py-2 px-4 rounded-md hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      Portfolio
                    </a>
                    <a 
                      href="/about" 
                      className="text-lg font-medium text-gray-700 hover:text-pink-600 transition-colors py-2 px-4 rounded-md hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      About Us
                    </a>
                    <a 
                      href="/team" 
                      className="text-lg font-medium text-pink-600 py-2 px-4 rounded-md bg-pink-50"
                      onClick={() => setIsOpen(false)}
                    >
                      Our Team
                    </a>
                    <a 
                      href="/#contact" 
                      className="text-lg font-medium text-gray-700 hover:text-pink-600 transition-colors py-2 px-4 rounded-md hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </a>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-yellow-500 bg-clip-text text-transparent">
                Our Team
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated professionals who drive innovation and excellence at M'Global Business Consultancy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-yellow-500 bg-clip-text text-transparent">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionary leaders driving innovation and excellence at M'Global Business Consultancy
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            {...fadeInUp}
          >
            <div className="bg-gradient-to-r from-pink-50 to-yellow-50 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-200 to-yellow-200 flex items-center justify-center p-2">
                    <Avatar className="w-44 h-44">
                      <AvatarImage 
                        src="/Official Photo.jpg" 
                        alt="Mititi Isaac" 
                        className="object-cover"
                      />
                      <AvatarFallback className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-yellow-500 bg-clip-text text-transparent">
                        MI
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-600 to-yellow-500 bg-clip-text text-transparent">
                    Mititi Isaac
                  </h3>
                  <p className="text-xl text-pink-600 font-semibold mb-2">
                    Director & Founder
                  </p>
                  <p className="text-gray-600 mb-4">
                    <a href="mailto:mititi.isaac@mglobalbusinessconsultancy.com" className="hover:underline hover:text-pink-600 transition-colors">
                      mititi.isaac@mglobalbusinessconsultancy.com
                    </a>
                  </p>
                  
                  <div className="space-y-4 text-gray-700">
                    <p className="text-lg font-medium text-gray-800 mb-3">
                      Full-stack Software Engineer and UX designer with 5+ years of experience
                    </p>
                    <p className="leading-relaxed">
                      With over a decade of experience in business consultancy and digital transformation, 
                      Mititi Isaac brings a wealth of knowledge in strategic planning, operations management, 
                      and technology integration. His vision for M'Global stems from a passion for helping 
                      businesses unlock their full potential through innovative solutions.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Education</h4>
                        <p className="text-sm text-gray-600">Software Engineering</p>
                        <p className="text-sm text-gray-600">Business Administration</p>
                        <p className="text-sm text-gray-600">Entrepreneurship</p>
                        <p className="text-sm text-gray-600">Leadership</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Expertise</h4>
                        <p className="text-sm text-gray-600">Business Strategy</p>
                        <p className="text-sm text-gray-600">Digital Transformation</p>
                        <p className="text-sm text-gray-600">Operations Management</p>
                        <p className="text-sm text-gray-600">Graphic Design & Digital Marketing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              
            <div className="bg-gradient-to-r from-pink-50 to-yellow-50 rounded-2xl p-8 md:p-12 mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-200 to-yellow-200 flex items-center justify-center p-2">
                    <Avatar className="w-44 h-44">
                      <AvatarImage 
                        src="/Mumbua Photo.jpeg" 
                        alt="Mumbua Mutuku" 
                        className="object-cover"
                      />
                      <AvatarFallback className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-yellow-500 bg-clip-text text-transparent">
                        MM
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-600 to-yellow-500 bg-clip-text text-transparent">
                    Mumbua Mutuku
                  </h3>
                  <p className="text-xl text-pink-600 font-semibold mb-4">
                    Senior Software Engineer
                  </p>
                  
                  <div className="space-y-4 text-gray-700">
                    <p className="text-lg font-medium text-gray-800 mb-3">
                      Backend Softwarer and DevOps Engineer with 5+ years of experience
                    </p>
                    <p className="leading-relaxed">
                    A passionate and experienced backend developer, IT consultant, and virtual assistant. With a deep love for all things technology, I have dedicated myself to helping businesses thrive by leveraging my expertise in these three distinct yet interrelated fields.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Education</h4>
                        <p className="text-sm text-gray-600">Software Engineering</p>
                        <p className="text-sm text-gray-600">Computer Science & Technology</p>
                        <p className="text-sm text-gray-600">Artificial Intelligence</p>
                        <p className="text-sm text-gray-600">Virtual Assistance</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Expertise</h4>
                        <p className="text-sm text-gray-600">Backend Development</p>
                        <p className="text-sm text-gray-600">Database Management</p>
                        <p className="text-sm text-gray-600">IT Consulting</p>
                        <p className="text-sm text-gray-600">Virtual Assistance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-yellow-500 bg-clip-text text-transparent">
              What Drives Our Team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              {...fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Collaborative Spirit</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork and collaborative problem-solving to deliver exceptional results.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              {...fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Continuous Learning</h3>
              <p className="text-gray-600">
                Our team stays ahead of industry trends through continuous learning and professional development.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              {...fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Client Success</h3>
              <p className="text-gray-600">
                Every team member is committed to ensuring our clients achieve their business objectives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;