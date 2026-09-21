import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const TrukAdmin = () => {
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
              TRUKFLOW Admin Panel Web Application
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {["Web Development", "Web App", "Enterprise"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <img
              src="/Admin Panel.jpg"
              alt="TRUKFLOW Admin Panel"
              className="w-full h-auto rounded-lg shadow-2xl mb-12"
            />

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Project Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The TRUKFLOW Admin Panel is a sophisticated web application that
                provides comprehensive oversight of the TRUKFLOW logistics
                platform. It delivers real-time insights into key metrics and
                user behavior, enabling data-driven decision making.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Key Features
              </h2>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                <li>Fully responsive dashboard design</li>
                <li>Real-time metrics and analytics</li>
                <li>User behavior tracking and insights</li>
                <li>Intuitive data visualization</li>
                <li>Comprehensive reporting tools</li>
                <li>Admin controls for platform management</li>
              </ul>

              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Technical Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The admin panel was built with modern web technologies to
                ensure:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                <li>Fast, responsive performance across all devices</li>
                <li>Real-time data updates and synchronization</li>
                <li>Secure authentication and authorization</li>
                <li>Scalable architecture for growing data needs</li>
                <li>Intuitive user interface for efficient workflows</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Button asChild size="lg">
                <a
                  href="https://truk-admin-panel.netlify.app/"
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

export default TrukAdmin;
