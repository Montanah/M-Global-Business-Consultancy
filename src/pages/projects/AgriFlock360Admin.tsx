import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const AgriFlock360Admin = () => {
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
              AgriFlock360 Admin Panel Web Application
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {["Admin Panel", "AgriTech", "Dashboard", "Operations"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <img
              src="/Agriflock 360 Admin panel.png"
              alt="AgriFlock360 admin panel dashboard"
              className="w-full h-auto rounded-lg shadow-2xl mb-12"
            />

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The AgriFlock360 Admin Panel is the control center behind the AgriFlock360 website,
                mobile application, IoT hardware, and customer operations. It gives administrators
                one place to monitor the platform, manage operational data, respond to issues, and
                keep the public-facing ecosystem accurate.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-foreground">Key Features</h2>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                <li>Dashboard overview for active devices, users, farms, revenue, and system alerts</li>
                <li>Farm, deployment, firmware, and operations queue management</li>
                <li>Support and service tools for customer requests and platform issues</li>
                <li>Farmer, farmer activity, extension officer, and extension service administration</li>
                <li>Hardware inventory controls for batteries, SIM cards, devices, and related assets</li>
                <li>Farmer product, insight, pricing, and system setting management</li>
              </ul>

              <h2 className="text-3xl font-bold mb-4 text-foreground">Operational Role</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The admin panel controls the data and operational items surfaced across the
                AgriFlock360 platform details, including hardware development records, connected
                device activity, farm information, farmer services, alerts, support workflows, and
                performance snapshots.
              </p>
            </div>

            <div className="flex gap-4">
              <Button asChild size="lg" variant="outline">
                <Link to="/projects/agriflock360">
                  View AgriFlock360 Website Project
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AgriFlock360Admin;
