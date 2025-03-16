import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import { Globe, Code, Smartphone, PenTool, Share, Search, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      title: "Web Design & Development",
      description: "Custom websites that are responsive, fast, and optimized for user experience.",
      icon: <Code className="h-10 w-10 text-indigo-400" />,
      bg: "bg-gradient-to-br from-purple-200 to-indigo-300"
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: <Smartphone className="h-10 w-10 text-green-400" />,
      bg: "bg-gradient-to-br from-green-200 to-teal-300"
    },
    {
      title: "Graphic Design",
      description: "Creative designs for branding, marketing materials, and digital assets.",
      icon: <PenTool className="h-10 w-10 text-pink-400" />,
      bg: "bg-gradient-to-br from-pink-200 to-red-300"
    },
    {
      title: "Social Media Management",
      description: "Strategic content creation and community engagement across platforms.",
      icon: <Share className="h-10 w-10 text-yellow-400" />,
      bg: "bg-gradient-to-br from-yellow-200 to-orange-300"
    },
    {
      title: "Digital Marketing",
      description: "SEO, PPC, and content marketing strategies to grow your online presence.",
      icon: <Search className="h-10 w-10 text-red-400" />,
      bg: "bg-gradient-to-br from-red-200 to-purple-300"
    },
    {
      title: "Business Plan Design & Registration",
      description: "Comprehensive business planning and registration services for startups and SMEs.",
      icon: <FileText className="h-10 w-10 text-gray-600" />,
      bg: "bg-gradient-to-br from-gray-200 to-gray-400"
    }
  ];

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="border-b border-purple-700 bg-gray-900/80 backdrop-blur-lg fixed w-full z-20"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between h-20 items-center">
            <Logo />
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList className={`md:flex md:items-center md:space-x-6 ${
                  menuOpen 
                    ? "flex flex-col absolute top-full left-0 w-full p-4 mt-2 shadow-lg"
                    : "hidden md:flex"
                }`}>
                  <NavigationMenuItem className="text-center py-2 md:py-0">
                    <a href="#services" onClick={(e) => smoothScroll(e, '#services')} className="text-white hover:text-purple-300 transition duration-300 ease-in-out transform hover:scale-110 block md:inline">
                      <Button variant="ghost">Services</Button>
                    </a>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="text-center py-2 md:py-0">
                    <a href="#footer" onClick={(e) => smoothScroll(e, '#footer')} className="text-white hover:text-purple-300 transition duration-300 ease-in-out transform hover:scale-110 block md:inline">
                      <Button variant="ghost">Contact</Button>
                    </a>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="text-center py-2 md:py-0">
                    <a href="#footer" onClick={(e) => smoothScroll(e, '#footer')} className="text-white hover:text-purple-300 transition duration-300 ease-in-out transform hover:scale-110 block md:inline">
                      <Button className="bg-purple-500 hover:bg-purple-600 text-white">Get a Quote</Button>
                    </a>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <button 
                className="md:hidden text-white p-2"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
  
      {/* Hero Section */}
      <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="pt-32 pb-5 px-6 text-center bg-gradient-to-b from-indigo-800 to-purple-700 relative z-10"> {/* Added relative z-index */}
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 mb-6 animate-fade-in">
            M'Global Business Consultancy
          </h1>
          <p className="text-xl md:text-3xl font-semibold bg-gradient-to-r from-pink-400 to-yellow-200 bg-clip-text text-transparent mb-8 max-w-2xl mx-auto">
            Guaranteeing Excellence
          </p>
          <p className="text-md md:text-xl text-purple-100 mb-10 max-w-3xl mx-auto">
            Transforming <span className="bg-gradient-to-r from-pink-400 to-yellow-200 bg-clip-text text-transparent">ideas</span> into successful <span className="bg-gradient-to-r from-pink-400 to-yellow-200 bg-clip-text text-transparent">digital solutions</span> for businesses worldwide
          </p>
        </div>
      </motion.div>
  
      {/* Services Section with Animations */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 bg-gray-100 text-gray-900" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-red-500 via-orange-300 to-slate-950">
            Our Services
          </h2>
          <p className="text-md md:text-lg text-center mb-12 text-gray-700 max-w-3xl mx-auto">
            We provide comprehensive solutions to help your business grow and succeed in the digital landscape
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={{ scale: 1.1 }}>
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  bg={service.bg}
                />
              </motion.div>
            ))}
          </div>
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