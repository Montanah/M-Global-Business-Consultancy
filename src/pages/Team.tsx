import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const Team = () => {
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
            <div className="flex items-center">
              <img src="/Logo.png" alt="M'Global Logo" className="h-10 w-auto mr-3" />
              <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-yellow-500 bg-clip-text text-transparent">
                M'Global Business Consultancy
              </span>
            </div>
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
              Meet the visionary leaders driving innovation and excellence at M'Global
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            {...fadeInUp}
          >
            <div className="bg-gradient-to-r from-pink-50 to-yellow-50 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-200 to-yellow-200 flex items-center justify-center">
                    <div className="w-44 h-44 rounded-full bg-white flex items-center justify-center">
                      <span className="text-6xl font-bold bg-gradient-to-r from-pink-600 to-yellow-500 bg-clip-text text-transparent">
                        MI
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-600 to-yellow-500 bg-clip-text text-transparent">
                    Mititi Isaac
                  </h3>
                  <p className="text-xl text-pink-600 font-semibold mb-4">
                    Director & Founder
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
                        <p className="text-sm text-gray-600">MBA in Strategic Management</p>
                        <p className="text-sm text-gray-600">BSc in Business Administration</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Expertise</h4>
                        <p className="text-sm text-gray-600">Business Strategy</p>
                        <p className="text-sm text-gray-600">Digital Transformation</p>
                        <p className="text-sm text-gray-600">Operations Management</p>
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