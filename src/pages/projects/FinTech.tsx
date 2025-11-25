import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const FinTech = () => {
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
              FinTech Dashboard
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {["FinTech", "Dashboard", "Analytics"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
              alt="FinTech Dashboard"
              className="w-full h-auto rounded-lg shadow-2xl mb-12"
            />

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A comprehensive financial dashboard that empowers users with real-time analytics, 
                portfolio tracking, and actionable investment insights. This platform transforms 
                complex financial data into clear, actionable information.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-foreground">Key Features</h2>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                <li>Real-time financial analytics and reporting</li>
                <li>Portfolio tracking and performance metrics</li>
                <li>Investment insights and recommendations</li>
                <li>Interactive data visualization</li>
                <li>Multi-asset class support</li>
                <li>Customizable dashboards and alerts</li>
              </ul>

              <h2 className="text-3xl font-bold mb-4 text-foreground">Analytics Capabilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The dashboard provides sophisticated analytics tools:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                <li>Real-time market data integration</li>
                <li>Advanced charting and visualization</li>
                <li>Risk assessment and portfolio optimization</li>
                <li>Historical performance analysis</li>
                <li>Comparative benchmarking</li>
              </ul>

              <h2 className="text-3xl font-bold mb-4 text-foreground">User Experience</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Designed with both novice and experienced investors in mind, the platform offers 
                an intuitive interface that makes complex financial concepts accessible while 
                providing the depth needed for sophisticated analysis.
              </p>
            </div>

            <div className="flex gap-4">
              <Button asChild size="lg">
                <a href="https://fintech-demo.com" target="_blank" rel="noopener noreferrer">
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

export default FinTech;
