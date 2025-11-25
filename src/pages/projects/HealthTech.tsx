import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const HealthTech = () => {
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
              HealthTech Mobile App
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {["Healthcare", "Mobile App", "Telemedicine"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <img
              src="/portfolio-health-africa.jpg"
              alt="HealthTech Mobile App"
              className="w-full h-auto rounded-lg shadow-2xl mb-12"
            />

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A revolutionary healthcare mobile application that bridges the gap between patients 
                and healthcare providers across Africa. This innovative platform brings quality 
                healthcare services to users' fingertips.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-foreground">Key Features</h2>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                <li>Telemedicine consultations with certified doctors</li>
                <li>Health tracking and monitoring tools</li>
                <li>Appointment scheduling and management</li>
                <li>Digital prescription management</li>
                <li>Health records storage and access</li>
                <li>Video and chat consultations</li>
              </ul>

              <h2 className="text-3xl font-bold mb-4 text-foreground">Telemedicine Capabilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The platform offers comprehensive telemedicine features:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                <li>High-quality video consultations</li>
                <li>Secure messaging with healthcare providers</li>
                <li>Real-time symptom assessment</li>
                <li>Prescription delivery coordination</li>
                <li>Follow-up appointment reminders</li>
              </ul>

              <h2 className="text-3xl font-bold mb-4 text-foreground">Impact on Healthcare Access</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This application democratizes access to healthcare, particularly benefiting 
                underserved communities by connecting them with qualified medical professionals 
                regardless of geographic barriers.
              </p>
            </div>

            <div className="flex gap-4">
              <Button asChild size="lg">
                <a href="https://healthtech-demo.com" target="_blank" rel="noopener noreferrer">
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

export default HealthTech;
