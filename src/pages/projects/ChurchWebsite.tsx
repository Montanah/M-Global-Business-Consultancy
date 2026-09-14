import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const ChurchWebsite = () => {
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Comprehensive Church Website
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {["Church Management", "Audio Streaming", "Ministry Tools"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            <img
              src="/previews/church.jpg"
              alt="Deliverance Church International Website"
              className="w-full h-auto rounded-lg shadow-2xl mb-12"
            />

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Project Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A modern, dynamic church website designed to connect the
                congregation and share the ministry's mission. The platform
                showcases church programs, services, and community initiatives
                in an engaging and accessible manner.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Key Features
              </h2>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                <li>Integrated audio recordings of sermons and teachings</li>
                <li>Seamlessly embedded YouTube channel for video content</li>
                <li>Dynamic program and event calendar</li>
                <li>Responsive design for all devices</li>
                <li>Easy-to-navigate ministry information</li>
                <li>Contact and donation integration</li>
              </ul>

              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Multimedia Integration
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The website features comprehensive multimedia capabilities:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                <li>Built-in audio player for sermon recordings</li>
                <li>YouTube integration for live streams and video archives</li>
                <li>Media library organization for easy content discovery</li>
                <li>Mobile-optimized playback controls</li>
              </ul>

              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Community Impact
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This platform serves as a digital home for the church community,
                enabling members to stay connected, access spiritual resources,
                and participate in church activities regardless of their
                physical location.
              </p>
            </div>

            <div className="flex gap-4">
              <Button asChild size="lg">
                <a
                  href="https://www.deliverancechurchinternationalnyansiongo.org"
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

export default ChurchWebsite;
