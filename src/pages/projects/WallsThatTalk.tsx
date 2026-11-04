import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const LIVE_URL =
  "https://artspaces.kunstmatrix.com/en/exhibition/16106085/walls-talk-mural-concepts-nairobi";

const groups = [
  {
    name: "Moving City",
    works: "Matatu Dreams, Boda Boda Ballet, City of the Sun, Jacaranda Season",
  },
  {
    name: "Hands and Patterns",
    works: "Mama Mboga, Kanga Code, Beadwork Horizon, Tin Roof Rain",
  },
  {
    name: "Voices and Futures",
    works: "Hustle, Sauti (Voice), Neighbours, Wind Over the Hills",
  },
];

const highlights = [
  { file: "wtt-01-matatu-dreams.jpg", title: "Matatu Dreams", w: 900, h: 678 },
  { file: "wtt-06-kanga-code.jpg", title: "Kanga Code", w: 678, h: 900 },
  { file: "wtt-10-hustle.jpg", title: "Hustle", w: 678, h: 900 },
  { file: "wtt-12-sauti.jpg", title: "Sauti (Voice)", w: 900, h: 678 },
];

const WallsThatTalk = () => {
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
              Walls That Talk: Mural Concepts for Nairobi
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "Virtual Exhibition",
                "KUNSTMATRIX",
                "Curation",
                "Guided Tour",
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
              src="/previews/immersive/wtt-room.jpg"
              alt="Walls That Talk 3D gallery room on KUNSTMATRIX with mural concepts hung along the walls"
              width="1600"
              height="847"
              className="w-full h-auto rounded-lg shadow-2xl mb-12"
            />

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Project Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nairobi talks through its walls. Painted minibuses, shop
                shutters and murals carry the city’s humour, hopes and
                arguments. Walls That Talk imagines twelve new murals for the
                city and hangs them in a virtual 3D gallery on KUNSTMATRIX
                Art.Spaces. We handled the concept, curation, exhibition text
                and installation.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Three Groups, Twelve Works
              </h2>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                {groups.map((group) => (
                  <li key={group.name}>
                    <strong className="text-foreground">{group.name}:</strong>{" "}
                    {group.works}
                  </li>
                ))}
              </ul>

              <div className="grid gap-4 grid-cols-2 md:grid-cols-4 mb-10 not-prose">
                {highlights.map((work) => (
                  <figure key={work.file} className="m-0">
                    <img
                      src={`/previews/immersive/${work.file}`}
                      alt={`${work.title}, a digital mural concept from Walls That Talk`}
                      width={work.w}
                      height={work.h}
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                    <figcaption className="mt-2 text-sm text-muted-foreground">
                      {work.title}
                    </figcaption>
                  </figure>
                ))}
              </div>

              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Key Features
              </h2>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                <li>Walk-through 3D gallery room viewable in the browser</li>
                <li>Works hung in three themed groups, one group per wall</li>
                <li>Guided tour that moves from work to work in a set order</li>
                <li>Captions and details for every work</li>
                <li>Exhibition catalogue</li>
              </ul>

              <img
                src="/previews/immersive/wtt-jacaranda.jpg"
                alt="Jacaranda Season shown in close-up view during the guided tour"
                width="1600"
                height="847"
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-lg mb-10 not-prose"
              />

              <h2 className="text-3xl font-bold mb-4 text-foreground">
                About the Project
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A self-initiated portfolio project by M’Global Business
                Consultancy, 2026. The works are original digital artworks
                created with AI image tools and credited as AI-assisted. They
                are not photographs of existing walls and do not reproduce the
                work of any named artist.
              </p>
            </div>

            <div className="flex gap-4">
              <Button asChild size="lg">
                <a href={LIVE_URL} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Visit the Exhibition
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default WallsThatTalk;
