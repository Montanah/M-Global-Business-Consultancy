import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const EducationalPlatform = () => {
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
              Educational Platform
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {["Education", "LMS", "Video Streaming"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
              alt="Educational Platform"
              className="w-full h-auto rounded-lg shadow-2xl mb-12"
            />

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                An interactive learning management system designed to revolutionize online education. 
                This comprehensive platform combines video streaming, progress tracking, and 
                collaborative tools to create an engaging learning experience.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-foreground">Key Features</h2>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                <li>High-quality video streaming for lectures and tutorials</li>
                <li>Comprehensive progress tracking and analytics</li>
                <li>Interactive collaborative tools for peer learning</li>
                <li>Assignment submission and grading system</li>
                <li>Discussion forums and live chat</li>
                <li>Mobile-responsive design for learning on any device</li>
              </ul>

              <h2 className="text-3xl font-bold mb-4 text-foreground">Learning Experience</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The platform offers a rich learning environment with:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                <li>Adaptive learning paths based on student performance</li>
                <li>Interactive quizzes and assessments</li>
                <li>Real-time collaboration tools for group projects</li>
                <li>Personalized learning dashboards</li>
                <li>Certificate generation upon course completion</li>
              </ul>

              <h2 className="text-3xl font-bold mb-4 text-foreground">Instructor Tools</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Educators are empowered with comprehensive tools to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                <li>Create and manage course content easily</li>
                <li>Track student engagement and performance</li>
                <li>Conduct live sessions and webinars</li>
                <li>Provide personalized feedback</li>
                <li>Generate detailed analytics reports</li>
              </ul>

              <h2 className="text-3xl font-bold mb-4 text-foreground">Impact on Education</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This platform makes quality education accessible to learners worldwide, breaking 
                down geographical and economic barriers while providing a rich, interactive 
                learning experience that rivals traditional classroom settings.
              </p>
            </div>

            <div className="flex gap-4">
              <Button asChild size="lg">
                <a href="https://eduplatform-demo.com" target="_blank" rel="noopener noreferrer">
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

export default EducationalPlatform;
