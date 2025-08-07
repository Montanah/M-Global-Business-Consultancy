import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, CheckCircle } from 'lucide-react';
import Footer from '@/components/Footer';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Strategic Vision",
      description: "We help businesses develop clear roadmaps for sustainable growth and digital transformation."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client-Centric Approach",
      description: "Every solution is tailored to meet the unique needs and objectives of our clients."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence in Delivery",
      description: "We maintain the highest standards of quality in all our services and deliverables."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Proven Results",
      description: "Our track record speaks for itself with successful projects across various industries."
    }
  ];

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
                <a href="/about" className="text-pink-600 px-3 py-2 rounded-md text-sm font-medium">
                  About Us
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
                About M'Global
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empowering businesses with innovative digital solutions and strategic consulting services. 
              We transform ideas into reality and help organizations thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-yellow-500 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide comprehensive business consultancy and digital solutions that enable our clients 
                to achieve sustainable growth, operational excellence, and competitive advantage in their 
                respective markets. We are committed to delivering innovative, cost-effective solutions 
                that drive measurable results.
              </p>
            </motion.div>
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-yellow-500 bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the leading business consultancy firm in East Africa, recognized for our expertise 
                in digital transformation, strategic planning, and innovative solutions. We envision a 
                future where every business, regardless of size, has access to world-class consultancy 
                services that unlock their full potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-yellow-500 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-pink-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
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
                    Mitt Isaac
                  </h3>
                  <p className="text-xl text-pink-600 font-semibold mb-4">
                    Director & Founder
                  </p>
                  
                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      With over a decade of experience in business consultancy and digital transformation, 
                      Mitt Isaac brings a wealth of knowledge in strategic planning, operations management, 
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

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-yellow-500 bg-clip-text text-transparent">
              Why Choose M'Global?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              {...fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Proven Track Record</h3>
              <p className="text-gray-600">
                Successfully delivered 100+ projects across various industries with measurable results.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              {...fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Expert Team</h3>
              <p className="text-gray-600">
                Our team consists of experienced professionals with deep industry knowledge and expertise.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              {...fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Innovative Solutions</h3>
              <p className="text-gray-600">
                We leverage cutting-edge technology and creative approaches to solve complex business challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;