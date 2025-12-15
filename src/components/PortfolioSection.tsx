import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaFacebook, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface SocialLinks {
  facebook?: string;
  linkedin?: string;
  instagram?: string;
  x?: string;
  tiktok?: string;
}

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image?: string;
  video?: string;
  liveUrl: string;
  detailsUrl: string;
  tags: string[];
  socialLinks?: SocialLinks;
}

interface PortfolioCategory {
  id: string;
  label: string;
  items: PortfolioItem[];
}

const portfolioCategories: PortfolioCategory[] = [
  {
    id: "web-dev",
    label: "Web & App Development",
    items: [
      {
        id: 1,
        title: "AgriFlock360 Platform Website & Mobile Application",
        description: "Comprehensive AI-powered poultry management ecosystem featuring custom IoT hardware and software. Our team handled the complete hardware development cycle: PCB design and schematic creation, Gerber file generation, and international fabrication coordination with manufacturers in China. Post-fabrication, we conducted rigorous testing and assembly verification of the smart brooder chips. The platform includes a mobile application with advanced offline functionality for seamless operation in low-connectivity areas, real-time environmental monitoring, automated climate control, and solar-powered IoT sensors. The system integrates AI-driven analytics to optimize poultry health and productivity for smallholder farmers across Africa.",
        image: "/agriflock-new.png",
        liveUrl: "https://agriflock360.netlify.app",
        detailsUrl: "/projects/agriflock360",
        tags: ["AgriTech", "Mobile App", "IoT", "PCB Design", "AI Analytics", "Hardware Development"]
      },
      {
        id: 2,
        title: "Logistics Platform Website & Mobile Application",
        description: "A fully developed website featuring a dedicated services section and seamless redirects to mobile app downloads, complemented by a modern, user-friendly mobile application designed for both Android and iOS platforms",
        image: "/TRUK Screenshot.png",
        liveUrl: "https://trukafrica.com",
        detailsUrl: "/projects/truk-logistics",
        tags: ["Web Development", "Mobile App", "Enterprise"]
      },
      {
        id: 3,
        title: "TRUK Admin Panel Web Application",
        description: "A fully developed responsive and intuitive admin dashboard delivering real-time insights into the TRUK mobile app's key metrics and user behavior.",
        image: "/Admin Panel.jpg",
        liveUrl: "https://truk-admin-panel.netlify.app/",
        detailsUrl: "/projects/truk-admin",
        tags: ["Web Development", "Web App", "Enterprise"]
      },
      {
        id: 4,
        title: "Comprehensive Church Website",
        description: "A modern, dynamic website showcasing church programs, enhanced with integrated audio recordings and a seamlessly embedded YouTube channel.",
        image: "/DCIN Screenshot.png",
        liveUrl: "https://www.deliverancechurchinternationalnyansiongo.org",
        detailsUrl: "/projects/church-website",
        tags: ["Church Management", "Audio Streaming", "Ministry Tools"]
      },
      {
        id: 5,
        title: "HealthTech Mobile App",
        description: "Revolutionary healthcare app connecting patients with doctors, featuring telemedicine and health tracking.",
        image: "/portfolio-health-africa.jpg",
        liveUrl: "https://healthtech-demo.com",
        detailsUrl: "/projects/healthtech",
        tags: ["Healthcare", "Mobile App", "Telemedicine"]
      },
      {
        id: 6,
        title: "FinTech Dashboard",
        description: "Comprehensive financial dashboard with real-time analytics, portfolio tracking, and investment insights.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        liveUrl: "https://fintech-demo.com",
        detailsUrl: "/projects/fintech",
        tags: ["FinTech", "Dashboard", "Analytics"]
      },
      {
        id: 7,
        title: "Educational Platform",
        description: "Interactive learning management system with video streaming, progress tracking, and collaborative tools.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
        liveUrl: "https://eduplatform-demo.com",
        detailsUrl: "/projects/educational-platform",
        tags: ["Education", "LMS", "Video Streaming"]
      }
    ]
  },
  {
    id: "design-marketing",
    label: "Design & Marketing",
    items: [
      {
        id: 1,
        title: "Deliverance Church International Nyansiongo - Social Media Management",
        description: "Comprehensive social media management across Facebook, Instagram, and X (Twitter). We create engaging content, manage community interactions, and build an active online presence to connect the church with its congregation and wider community.",
        image: "/DCIN Screenshot.png",
        liveUrl: "https://www.facebook.com/DCINyansiongo",
        detailsUrl: "/projects/church-website",
        tags: ["Social Media", "Content Creation", "Community Management"],
        socialLinks: {
          facebook: "https://www.facebook.com/DCINyansiongo",
          instagram: "https://www.instagram.com/dcinyansiongo",
          x: "https://x.com/dcinyansiongo"
        }
      },
      {
        id: 2,
        title: "TRUK - Social Media Management",
        description: "Full-service social media management for TRUK logistics platform. We handle content strategy, brand storytelling, and engagement across all major platforms including LinkedIn, Facebook, Instagram, X, and TikTok to drive brand awareness and user acquisition.",
        image: "/TRUK Screenshot.png",
        liveUrl: "https://www.linkedin.com/company/truk-africa",
        detailsUrl: "/projects/truk-logistics",
        tags: ["Social Media", "Brand Strategy", "Digital Marketing"],
        socialLinks: {
          facebook: "https://www.facebook.com/profile.php?id=61577130358564",
          linkedin: "https://www.linkedin.com/company/truk-ltd",
          instagram: "https://www.instagram.com/truk_ltd",
          x: "https://x.com/trukltd",
          tiktok: "https://www.tiktok.com/@truk_ltd"
        }
      },
      {
        id: 3,
        title: "AgriFlock 360 - Social Media Management",
        description: "Strategic social media management for AgriFlock 360's AI-powered poultry platform. We create educational content, showcase product features, and engage with farmers and agricultural stakeholders across LinkedIn, Facebook, Instagram, X, and TikTok.",
        image: "/agriflock-new.png",
        liveUrl: "https://www.linkedin.com/company/agriflock-360",
        detailsUrl: "/projects/agriflock360",
        tags: ["Social Media", "AgriTech Marketing", "Content Strategy"],
        socialLinks: {
          facebook: "https://www.facebook.com/profile.php?id=61584028213600",
          linkedin: "https://www.linkedin.com/company/agriflock-360",
          x: "https://x.com/agriflock360",
          instagram: "https://www.instagram.com/agriflock_360",
          tiktok: "https://www.tiktok.com/@agriflock_360"
        }
      },
      {
        id: 4,
        title: "M'Global Farm - Social Media Management",
        description: "Complete social media presence management for M'Global Farm. We develop and execute content calendars, engage with the farming community, and promote sustainable agricultural practices across LinkedIn, Facebook, Instagram, X, and TikTok.",
        image: "/M_Global_Farm_Logo.png",
        liveUrl: "https://www.facebook.com/profile.php?id=100068009874336",
        detailsUrl: "#",
        tags: ["Social Media", "Agriculture", "Brand Building"],
        socialLinks: {
          facebook: "https://www.facebook.com/profile.php?id=100068009874336",
          instagram: "https://www.instagram.com/m_global_farm",
          x: "https://x.com/m_global_farm"
        }
      },
      {
        id: 5,
        title: "TRUK Animation Video",
        description: "Professional animation video created for TRUK logistics platform showcasing their brand identity and services through engaging motion graphics.",
        video: "/TRUK_Animation_video_1.mp4",
        liveUrl: "#",
        detailsUrl: "/projects/truk-logistics",
        tags: ["Animation", "Motion Graphics", "Brand Video"]
      }
    ]
  },
  {
    id: "business",
    label: "Business Plans & Registration",
    items: []
  }
];

interface PortfolioCarouselProps {
  items: PortfolioItem[];
}

const PortfolioCarousel: React.FC<PortfolioCarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };
  
  const [itemsPerView, setItemsPerView] = useState(getItemsPerView);
  const maxIndex = Math.max(0, items.length - itemsPerView);

  React.useEffect(() => {
    const handleResize = () => {
      const newItemsPerView = getItemsPerView();
      setItemsPerView(newItemsPerView);
      setCurrentIndex(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    setCurrentIndex(0);
  }, [items]);

  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">Coming soon! We're preparing amazing projects for this category.</p>
      </div>
    );
  }

  return (
    <div className="relative">
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
            {items.slice(currentIndex, currentIndex + itemsPerView).map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <div className="relative group">
                    {item.video ? (
                      <video
                        src={item.video}
                        className="w-full h-40 md:h-48 object-cover"
                        controls
                        muted
                        playsInline
                      />
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-40 md:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    )}
                    {!item.video && (
                      <>
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
                      </>
                    )}
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
                    {item.socialLinks ? (
                      <div className="flex flex-col gap-3">
                        <div className="flex justify-center gap-3">
                          {item.socialLinks.facebook && (
                            <a href={item.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                              <FaFacebook className="h-5 w-5" />
                            </a>
                          )}
                          {item.socialLinks.linkedin && (
                            <a href={item.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors">
                              <FaLinkedin className="h-5 w-5" />
                            </a>
                          )}
                          {item.socialLinks.instagram && (
                            <a href={item.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition-colors">
                              <FaInstagram className="h-5 w-5" />
                            </a>
                          )}
                          {item.socialLinks.x && (
                            <a href={item.socialLinks.x} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black transition-colors">
                              <FaXTwitter className="h-5 w-5" />
                            </a>
                          )}
                          {item.socialLinks.tiktok && (
                            <a href={item.socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black transition-colors">
                              <FaTiktok className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          asChild
                        >
                          <Link to={item.detailsUrl}>
                            Learn More
                          </Link>
                        </Button>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          asChild
                        >
                          <Link to={item.detailsUrl}>
                            Learn More
                          </Link>
                        </Button>
                        <Button
                          variant="default"
                          size="sm"
                          className="flex-1"
                          asChild
                        >
                          <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1 h-4 w-4" />
                            Live
                          </a>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
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

        <Tabs defaultValue="web-dev" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 h-auto gap-2 bg-transparent">
            {portfolioCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="py-3 px-4 text-sm md:text-base font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg border border-gray-200 data-[state=active]:border-transparent transition-all"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {portfolioCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <PortfolioCarousel items={category.items} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </motion.div>
  );
};

export default PortfolioSection;