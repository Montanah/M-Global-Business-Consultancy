import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const LIVE_URL = "https://mtaa-walk.mglobalbusinessconsultancy.com";

const MtaaWalk = () => {
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
              Mtaa Walk: 3D Street Mural Walk
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "Three.js / WebGL",
                "Custom 3D",
                "Audio Guide",
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
              src="/previews/immersive/mtaa-street.jpg"
              alt="Mtaa Walk 3D street at dawn, with murals on the building walls and the walk timeline at the bottom"
              width="1600"
              height="917"
              className="w-full h-auto rounded-lg shadow-2xl mb-12"
            />

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Project Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Mtaa Walk is a browser-based 3D street walk presenting eight
                murals of an imagined Nairobi neighbourhood. Visitors walk from
                the morning commute to a night of benga music and on to
                tomorrow’s dawn, and the sky changes with every step. It runs in
                the browser with no app, plug-in or platform subscription.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Key Features
              </h2>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                <li>Custom 3D scene built with Three.js (WebGL)</li>
                <li>Scroll, swipe or arrow-key navigation, with drag to look around</li>
                <li>
                  Time of day moves from 06:00 through night to dawn as the
                  visitor walks; street lights and windows come on after dark,
                  and it rains near the Long Rains mural
                </li>
                <li>
                  Narrated audio guide produced in-house, with on-screen
                  captions, pause, skip and mute
                </li>
                <li>Select any mural to read its story</li>
                <li>
                  List view for phones, slow connections and screen readers
                </li>
              </ul>

              <div className="grid gap-4 sm:grid-cols-2 mb-10 not-prose">
                <img
                  src="/previews/immersive/mtaa-mural.jpg"
                  alt="Close-up of the Morning Commute mural on a street wall in Mtaa Walk"
                  width="1600"
                  height="875"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-video object-cover object-top rounded-lg"
                />
                <img
                  src="/previews/immersive/mtaa-welcome.jpg"
                  alt="Mtaa Walk welcome screen with options to start the audio guide, walk alone or see all murals"
                  width="1600"
                  height="914"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-video object-cover object-top rounded-lg"
                />
              </div>

              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Built for Every Connection
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The whole experience is about 3.5 MB, and it works on desktop and
                mobile browsers. It is hosted on our own domain through Netlify
                with HTTPS, so the exhibition is fully owned rather than rented
                from a platform.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-foreground">
                About the Project
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A self-initiated portfolio project by M’Global Business
                Consultancy, Nairobi, 2026. The murals are original AI-assisted
                digital artworks made for this project. They are not
                photographs of existing walls.
              </p>
            </div>

            <div className="flex gap-4">
              <Button asChild size="lg">
                <a href={LIVE_URL} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Take the Walk
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default MtaaWalk;
