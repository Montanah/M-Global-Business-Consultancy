
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import { Globe, Code, Smartphone, PenTool, Share, Search, FileText } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Web Design & Development",
      description: "Custom websites that are responsive, fast, and optimized for user experience.",
      icon: <Code className="h-10 w-10 text-blue-500" />
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: <Smartphone className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Graphic Design",
      description: "Creative designs for branding, marketing materials, and digital assets.",
      icon: <PenTool className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Social Media Management",
      description: "Strategic content creation and community engagement across platforms.",
      icon: <Share className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Digital Marketing",
      description: "SEO, PPC, and content marketing strategies to grow your online presence.",
      icon: <Search className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Business Plan Design & Registration",
      description: "Comprehensive business planning and registration services for startups and SMEs.",
      icon: <FileText className="h-10 w-10 text-blue-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-700 to-blue-900">
      {/* Navigation */}
      <nav className="border-b border-blue-800 bg-blue-900/90 backdrop-blur-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Logo />
            </div>
            <NavigationMenu>
              <NavigationMenuList className="hidden md:flex items-center space-x-4">
                <NavigationMenuItem>
                  <Button variant="ghost" className="text-white hover:text-blue-200">Services</Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button variant="ghost" className="text-white hover:text-blue-200">About Us</Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button variant="ghost" className="text-white hover:text-blue-200">Portfolio</Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button variant="ghost" className="text-white hover:text-blue-200">Contact</Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">Get a Quote</Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in">
            M'Global Business Consultancy
          </h1>
          <p className="text-3xl font-semibold text-blue-200 mb-8 max-w-2xl mx-auto">
            Guaranteeing Excellence
          </p>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Transforming ideas into successful digital solutions for businesses worldwide
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
              Our Services
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-800/50">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">
            Our Services
          </h2>
          <p className="text-lg text-center mb-12 text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive solutions to help your business grow and succeed in the digital landscape
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Why Choose Us Section */}
      <div className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">
            Why Choose M'Global
          </h2>
          <p className="text-lg text-center mb-12 text-gray-600 max-w-3xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional results for our clients
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold ml-4 text-blue-900">Global Reach</h3>
              </div>
              <p className="text-gray-600">Working with clients worldwide to deliver solutions that transcend borders.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <PenTool className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold ml-4 text-blue-900">Creative Approach</h3>
              </div>
              <p className="text-gray-600">Innovative thinking to solve complex business challenges with elegant solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold ml-4 text-blue-900">Results Focused</h3>
              </div>
              <p className="text-gray-600">Committed to delivering measurable results that impact your bottom line.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100">Get in touch with our expert team today and discover how M'Global can help you achieve your business goals.</p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
            Contact Us Now
          </Button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
