import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const TrukLogistics = () => {
  return (
    <div className="min-h-screen bg-background">
      <main id="main-content" className="project-page">
        <div className="site-container">
          <Link to="/#portfolio" className="text-link project-back">
            <ArrowLeft size={16} /> Back to our work
          </Link>
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              TRUKFLOW Logistics Website & Mobile Application
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "Logistics",
                "Web Development",
                "Mobile App",
                "Smart Lockers",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <img
              src="/previews/trukflow.jpg"
              alt="TRUKFLOW logistics website"
              className="w-full h-auto rounded-lg shadow-2xl mb-12"
            />

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Project Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                TRUKFLOW is a comprehensive logistics platform designed to
                streamline goods movement and delivery operations across East
                Africa. The platform combines a modern website, driver
                marketplace onboarding, mobile workflows, and smart locker
                delivery options.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Key Features
              </h2>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                <li>
                  Fully responsive website with dedicated services section
                </li>
                <li>
                  Driver marketplace flows for verified transporters and brokers
                </li>
                <li>Goods movement workflows for merchants and customers</li>
                <li>
                  SmartDrop smart locker integration for secure parcel
                  collection
                </li>
                <li>Modern, user-friendly interface designed for efficiency</li>
                <li>Real-time tracking and notifications</li>
                <li>Enterprise-grade logistics management</li>
              </ul>

              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Technical Implementation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The platform was built with scalability and user experience in
                mind, featuring:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                <li>
                  Responsive web design that works seamlessly across all devices
                </li>
                <li>
                  Clear product navigation for DriverMarketplace and SmartDrop
                  services
                </li>
                <li>Intuitive onboarding and goods movement flows</li>
                <li>Integration with backend logistics systems</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Button asChild size="lg">
                <a
                  href="https://www.trukflow.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Live Project
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default TrukLogistics;
