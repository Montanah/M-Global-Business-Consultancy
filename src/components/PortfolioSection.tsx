import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  tags: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "TechCorp Enterprise Solution",
    description: "Complete digital transformation with custom web platform and mobile app for enterprise resource management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    liveUrl: "https://techcorp-demo.com",
    tags: ["Web Development", "Mobile App", "Enterprise"]
  },
  {
    id: 2,
    title: "E-Commerce Revolution",
    description: "Modern e-commerce platform with advanced analytics, inventory management, and seamless payment integration.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    liveUrl: "https://ecommerce-demo.com",
    tags: ["E-Commerce", "Analytics", "Payment Integration"]
  },
  {
    id: 3,
    title: "HealthTech Mobile App",
    description: "Revolutionary healthcare app connecting patients with doctors, featuring telemedicine and health tracking.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    liveUrl: "https://healthtech-demo.com",
    tags: ["Healthcare", "Mobile App", "Telemedicine"]
  },
  {
    id: 4,
    title: "FinTech Dashboard",
    description: "Comprehensive financial dashboard with real-time analytics, portfolio tracking, and investment insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    liveUrl: "https://fintech-demo.com",
    tags: ["FinTech", "Dashboard", "Analytics"]
  },
  {
    id: 5,
    title: "Educational Platform",
    description: "Interactive learning management system with video streaming, progress tracking, and collaborative tools.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    liveUrl: "https://eduplatform-demo.com",
    tags: ["Education", "LMS", "Video Streaming"]
  }
];

const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, portfolioItems.length - itemsPerView);

  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      variants={fadeInUp} 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
      id="portfolio"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover the innovative solutions we've created for our clients across various industries
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className="h-12 w-12 rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-50"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <div className="flex space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              disabled={currentIndex === maxIndex}
              className="h-12 w-12 rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-50"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Portfolio Cards */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {portfolioItems.slice(currentIndex, currentIndex + itemsPerView).map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                      <div className="relative group">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button
                            size="icon"
                            className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30"
                            asChild
                          >
                            <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-5 w-5 text-white" />
                            </a>
                          </Button>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full border border-blue-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          asChild
                        >
                          <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                            View Live Project
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioSection;