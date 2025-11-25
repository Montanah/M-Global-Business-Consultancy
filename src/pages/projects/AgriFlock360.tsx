import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const AgriFlock360 = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link to="/#portfolio">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              AgriFlock360 Platform Website & Mobile Application
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {["AgriTech", "Mobile App", "IoT", "PCB Design", "AI Analytics", "Hardware Development"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <img
              src="/agriflock-new.png"
              alt="AgriFlock360 Platform"
              className="w-full h-auto rounded-lg shadow-2xl mb-12"
            />

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                AgriFlock360 is a comprehensive AI-powered poultry management ecosystem that revolutionizes 
                smallholder farming across Africa. This innovative platform combines custom IoT hardware 
                with sophisticated software solutions to create a seamless farming experience.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-foreground">Hardware Development</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our team managed the complete hardware development cycle, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                <li>PCB design and schematic creation</li>
                <li>Gerber file generation for manufacturing</li>
                <li>International fabrication coordination with manufacturers in China</li>
                <li>Rigorous testing and assembly verification of smart brooder chips</li>
                <li>Solar-powered IoT sensor integration</li>
              </ul>

              <h2 className="text-3xl font-bold mb-4 text-foreground">Key Features</h2>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                <li>Mobile application with advanced offline functionality for low-connectivity areas</li>
                <li>Real-time environmental monitoring and alerts</li>
                <li>Automated climate control systems</li>
                <li>AI-driven analytics for optimizing poultry health and productivity</li>
                <li>Data-driven insights for better farm management decisions</li>
              </ul>

              <h2 className="text-3xl font-bold mb-4 text-foreground">Impact</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The platform empowers smallholder farmers with enterprise-grade technology, enabling 
                them to improve productivity, reduce losses, and make data-driven decisions that 
                significantly impact their livelihoods.
              </p>
            </div>

            <div className="flex gap-4">
              <Button asChild size="lg">
                <a href="https://agriflock360.netlify.app" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Live Project
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AgriFlock360;
