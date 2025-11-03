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
    title: "Logistics Platform Website & Mobile Application",
    description: "A fully developed website featuring a dedicated services section and seamless redirects to mobile app downloads, complemented by a modern, user-friendly mobile application designed for both Android and iOS platforms",
    image: "/TRUK Screenshot.png",
    liveUrl: "https://trukafrica.com",
    tags: ["Web Development", "Mobile App", "Enterprise"]
  },
  {
    id: 2,
    title: "TRUK Admin Panel Web Application",
    description: "A fully developed responsive and intuitive admin dashboard delivering real-time insights into the TRUK mobile app's key metrics and user behavior.",
    image: "/Admin Panel.jpg",
    liveUrl: "https://truk-admin-panel.netlify.app/",
    tags: ["Web Development", "Web App", "Enterprise"]
  },
  {
    id: 3,
    title: "Comprehensive Church Website",
    description: "A modern, dynamic website showcasing church programs, enhanced with integrated audio recordings and a seamlessly embedded YouTube channel.",
    image: "/DCIN Screenshot.png",
    liveUrl: "https://www.deliverancechurchinternationalnyansiongo.org",
    tags: ["Church Management", "Audio Streaming", "Ministry Tools"]
  },
  {
    id: 4,
    title: "HealthTech Mobile App",
    description: "Revolutionary healthcare app connecting patients with doctors, featuring telemedicine and health tracking.",
    image: "/portfolio-health-africa.jpg",
    liveUrl: "https://healthtech-demo.com",
    tags: ["Healthcare", "Mobile App", "Telemedicine"]
  },
  {
    id: 5,
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
  
  // Responsive items per view
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1; // mobile
      if (window.innerWidth < 1024) return 2; // tablet
      return 3; // desktop
    }
    return 3;
  };
  
  const [itemsPerView, setItemsPerView] = useState(getItemsPerView);
  const maxIndex = Math.max(0, portfolioItems.length - itemsPerView);

  React.useEffect(() => {
    const handleResize = () => {
      const newItemsPerView = getItemsPerView();
      setItemsPerView(newItemsPerView);
      setCurrentIndex(0); // Reset to first slide on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          <div className="flex justify-between items-center mb-8 px-2">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              aria-label="Previous projects"
              className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-50 flex-shrink-0"
            >
              <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
            </Button>
            
            <div className="flex space-x-2 mx-4">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
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
              aria-label="Next projects"
              className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-50 flex-shrink-0"
            >
              <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
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
                className={`grid gap-4 md:gap-6 lg:gap-8 ${
                  itemsPerView === 1 ? 'grid-cols-1' : 
                  itemsPerView === 2 ? 'grid-cols-1 md:grid-cols-2' : 
                  'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                }`}
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
                          className="w-full h-40 md:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
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
                      <CardContent className="p-4 md:p-6">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{item.title}</h3>
                        <p className="text-gray-600 mb-3 md:mb-4 text-xs md:text-sm leading-relaxed">{item.description}</p>
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