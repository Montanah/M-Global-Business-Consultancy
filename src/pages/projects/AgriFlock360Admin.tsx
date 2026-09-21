import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AgriFlock360Admin = () => {
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
              AgriFlock360 Admin Panel Web Application
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {["Admin Panel", "AgriTech", "Dashboard", "Operations"].map(
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
              src="/previews/agriflock-admin.jpg"
              alt="AgriFlock360 admin panel dashboard"
              className="w-full h-auto rounded-lg shadow-2xl mb-12"
            />

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Project Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The AgriFlock360 Admin Panel is the control center behind the
                AgriFlock360 website, mobile application, IoT hardware, and
                customer operations. It gives administrators one place to
                monitor the platform, manage operational data, respond to
                issues, and keep the public-facing ecosystem accurate.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Key Features
              </h2>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                <li>
                  Dashboard overview for active devices, users, farms, revenue,
                  and system alerts
                </li>
                <li>
                  Farm, deployment, firmware, and operations queue management
                </li>
                <li>
                  Support and service tools for customer requests and platform
                  issues
                </li>
                <li>
                  Farmer, farmer activity, extension officer, and extension
                  service administration
                </li>
                <li>
                  Hardware inventory controls for batteries, SIM cards, devices,
                  and related assets
                </li>
                <li>
                  Farmer product, insight, pricing, and system setting
                  management
                </li>
              </ul>

              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Operational Role
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The admin panel controls the data and operational items surfaced
                across the AgriFlock360 platform details, including hardware
                development records, connected device activity, farm
                information, farmer services, alerts, support workflows, and
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
    </div>
  );
};

export default AgriFlock360Admin;
