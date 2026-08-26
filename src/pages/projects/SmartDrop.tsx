import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const SmartDrop = () => {
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
              SmartDrop Smart Locker Platform
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {["Smart Lockers", "Logistics", "IoT", "Web Development"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <img
              src="/Smartdrop hero page.png"
              alt="SmartDrop smart locker pickup point"
              className="w-full h-auto rounded-lg shadow-2xl mb-12"
            />

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                SmartDrop is a smart locker platform built for faster and more reliable merchant
                deliveries. It gives customers a secure neighbourhood pickup point, helping businesses
                reduce failed deliveries, phone calls, rider waiting time, and missed handoffs.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-foreground">Key Features</h2>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                <li>Secure parcel lockers for customer pickup</li>
                <li>OTP-based access for protected parcel collection</li>
                <li>SMS customer flow for collection updates and instructions</li>
                <li>24/7 pickup availability at neighbourhood locker locations</li>
                <li>Merchant-focused delivery workflow designed to reduce failed deliveries</li>
                <li>Clear pricing, FAQs, and contact paths for customer onboarding</li>
              </ul>

              <h2 className="text-3xl font-bold mb-4 text-foreground">Business Value</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The platform makes delivery operations easier for merchants by separating drop-off from
                customer availability. Riders can place parcels in secure lockers, while customers pick
                them up when convenient using a simple verification flow.
              </p>
            </div>

            <div className="flex gap-4">
              <Button asChild size="lg">
                <a href="https://smartdrop.africa/" target="_blank" rel="noopener noreferrer">
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

export default SmartDrop;
