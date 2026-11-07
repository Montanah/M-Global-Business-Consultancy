import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const LIVE_URL = "https://unmute.mglobalbusinessconsultancy.com";

const Unmute = () => {
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
              UNMUTE: 3D Virtual Exhibition Concept
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "Three.js / WebGL",
                "Virtual Exhibition",
                "Content Management",
                "Accessibility",
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
              src="/previews/immersive/unmute-room.jpg"
              alt="UNMUTE 3D gallery room with framed photographs on the walls and a room introduction panel"
              width="800"
              height="410"
              className="w-full h-auto rounded-lg shadow-2xl mb-12"
            />

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Project Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                UNMUTE is a concept 3D virtual exhibition for the 16 Days of
                Activism against Gender-Based Violence. Visitors enter a welcome
                hall and walk into three themed rooms of photographs and short
                stories about justice after violence is reported. It shows how
                an advocacy campaign can become a lasting, survivor-centred
                online archive that the organisation runs itself.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Key Features
              </h2>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                <li>
                  Custom 3D gallery built with Three.js: a welcome hall and three
                  themed rooms, with a map and room-to-room navigation
                </li>
                <li>
                  Each photograph opens to a large view with its caption and
                  story
                </li>
                <li>
                  Guided tour with narration, captions and a full transcript, or
                  free exploration by mouse, keyboard or touch
                </li>
                <li>
                  Staff panel to publish, reorder and take down photographs
                  instantly without a developer
                </li>
                <li>
                  Privacy-respecting visitor analytics: time per room and most
                  viewed photographs
                </li>
                <li>
                  2D gallery for older phones and slow connections; interface
                  ready for French, Portuguese and Arabic (right to left)
                </li>
              </ul>

              <div className="grid gap-4 sm:grid-cols-2 mb-10 not-prose">
                <img
                  src="/previews/immersive/unmute-photo.jpg"
                  alt="A photograph opened in the UNMUTE exhibition, with its caption, story and navigation buttons"
                  width="800"
                  height="410"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-video object-cover object-top rounded-lg"
                />
                <img
                  src="/previews/immersive/unmute-staff.jpg"
                  alt="UNMUTE staff panel listing photographs with controls to reorder, publish or take them down"
                  width="800"
                  height="410"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-video object-cover object-top rounded-lg"
                />
              </div>

              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Designed for Sensitive Content
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Exhibitions about gender-based violence carry real risk for the
                people in them. Photographs cannot be downloaded from the
                gallery, any item can be removed at once, and visitor analytics
                store nothing that identifies a person. The exhibition is a
                single lightweight web page that runs on the organisation’s own
                hosting, with no platform subscription.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-foreground">
                About the Project
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A self-initiated concept prototype by M’Global Business
                Consultancy, Nairobi, 2026. All images, partner names and
                stories in the prototype are placeholders.
              </p>
            </div>

            <div className="flex gap-4">
              <Button asChild size="lg">
                <a href={LIVE_URL} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Enter the Exhibition
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Unmute;
