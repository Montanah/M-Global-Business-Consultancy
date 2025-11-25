import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const TrukLogistics = () => {
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
              Logistics Platform Website & Mobile Application
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {["Web Development", "Mobile App", "Enterprise"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <img
              src="/TRUK Screenshot.png"
              alt="TRUK Logistics Platform"
              className="w-full h-auto rounded-lg shadow-2xl mb-12"
            />

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                TRUK is a comprehensive logistics platform designed to streamline shipping and delivery 
                operations across Africa. The platform combines a modern website with powerful mobile 
                applications for both Android and iOS.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-foreground">Key Features</h2>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                <li>Fully responsive website with dedicated services section</li>
                <li>Seamless redirects to mobile app downloads</li>
                <li>Cross-platform mobile applications (Android & iOS)</li>
                <li>Modern, user-friendly interface designed for efficiency</li>
                <li>Real-time tracking and notifications</li>
                <li>Enterprise-grade logistics management</li>
              </ul>

              <h2 className="text-3xl font-bold mb-4 text-foreground">Technical Implementation</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The platform was built with scalability and user experience in mind, featuring:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                <li>Responsive web design that works seamlessly across all devices</li>
                <li>Native mobile applications for optimal performance</li>
                <li>Intuitive navigation and booking flows</li>
                <li>Integration with backend logistics systems</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Button asChild size="lg">
                <a href="https://trukafrica.com" target="_blank" rel="noopener noreferrer">
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

export default TrukLogistics;
