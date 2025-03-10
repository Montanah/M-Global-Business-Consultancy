import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import { Globe, Code, Smartphone, PenTool, Share, Search, FileText } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const services = [
    {
      title: "Web Design & Development",
      description: "Custom websites that are responsive, fast, and optimized for user experience.",
      icon: <Code className="h-10 w-10 text-indigo-400" />
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: <Smartphone className="h-10 w-10 text-green-400" />
    },
    {
      title: "Graphic Design",
      description: "Creative designs for branding, marketing materials, and digital assets.",
      icon: <PenTool className="h-10 w-10 text-pink-400" />
    },
    {
      title: "Social Media Management",
      description: "Strategic content creation and community engagement across platforms.",
      icon: <Share className="h-10 w-10 text-yellow-400" />
    },
    {
      title: "Digital Marketing",
      description: "SEO, PPC, and content marketing strategies to grow your online presence.",
      icon: <Search className="h-10 w-10 text-red-400" />
    },
    {
      title: "Business Plan Design & Registration",
      description: "Comprehensive business planning and registration services for startups and SMEs.",
      icon: <FileText className="h-10 w-10 text-gray-600" />
    }
  ];  

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="border-b border-purple-700 bg-gray-900/80 backdrop-blur-lg fixed w-full z-10"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Logo />
            </div>
            <NavigationMenu>
              <NavigationMenuList className="hidden md:flex items-center space-x-6">
                <NavigationMenuItem>
                  <a href="#services" onClick={(e) => smoothScroll(e, '#services')} className="text-white hover:text-purple-300 transition duration-300 ease-in-out transform hover:scale-110">
                    <Button variant="ghost">Services</Button>
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#footer" onClick={(e) => smoothScroll(e, '#footer')} className="text-white hover:text-purple-300 transition duration-300 ease-in-out transform hover:scale-110">
                    <Button variant="ghost">Contact</Button>
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#footer" onClick={(e) => smoothScroll(e, '#footer')} className="text-white hover:text-purple-300 transition duration-300 ease-in-out transform hover:scale-110">
                    <Button className="bg-purple-500 hover:bg-purple-600 text-white">Get a Quote</Button>
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </motion.nav>
  
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="pt-32 pb-20 px-6 text-center bg-gradient-to-b from-indigo-800 to-purple-700">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl font-extrabold text-white mb-6 animate-fade-in">
            M'Global Business Consultancy
          </h1>
          <p className="text-3xl font-semibold text-purple-200 mb-8 max-w-2xl mx-auto">
            Guaranteeing Excellence
          </p>
          <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto">
            Transforming ideas into successful digital solutions for businesses worldwide
          </p>
        </div>
      </motion.div>
  
      {/* Services Section with Animations */}
      <div className="py-20 bg-gray-100 text-gray-900" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-purple-900">
            Our Services
          </h2>
          <p className="text-lg text-center mb-12 text-gray-700 max-w-3xl mx-auto">
            We provide comprehensive solutions to help your business grow and succeed in the digital landscape
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
  
      {/* Footer */}
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Index;