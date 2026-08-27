import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "M'Global Business Consultancy transformed our online presence with a stunning website that perfectly captures our brand. Their attention to detail is unmatched!",
    name: "Pst. Barnabas",
    location: "Kisii, Kenya",
    service: "Website Development",
    accent: "from-blue-400 to-cyan-300"
  },
  {
    quote: "M'Global's creative, professional e-cards help us connect deeply with our congregation. A true blessing to our ministry.",
    name: "Pst. Laban",
    location: "Nairobi, Kenya",
    service: "Graphic Design",
    accent: "from-emerald-400 to-teal-300"
  },
  {
    quote: "M'Global's stunning e-cards capture the spirit of adventure, helping us connect with clients and promote our tours. Their creativity, professionalism, and efficiency make them a valued partner!",
    name: "Isaac",
    location: "Kisii, Kenya",
    service: "Digital Design",
    accent: "from-pink-400 to-rose-300"
  },
  {
    quote: "The mobile app developed by M'Global Business Consultancy increased our customer engagement by 200%. Professional and reliable service!",
    name: "Michael",
    location: "San Francisco, CA",
    service: "Mobile App",
    accent: "from-amber-300 to-orange-400"
  },
  {
    quote: "Their digital marketing strategies helped us reach our target audience effectively. We saw results within weeks!",
    name: "Emma",
    location: "London, UK",
    service: "Digital Marketing",
    accent: "from-violet-300 to-fuchsia-400"
  },
  {
    quote: "The business planning service was a game-changer for our startup. Comprehensive and strategic approach!",
    name: "Ahmed",
    location: "Dubai, UAE",
    service: "Business Planning",
    accent: "from-lime-300 to-green-400"
  }
];

const TestimonialSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = direction === "left" ? -360 : 360;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-200 backdrop-blur-sm">
            <Star className="h-4 w-4 fill-cyan-200 text-cyan-200" />
            Client Results
          </span>
          <h2 className="mt-5 text-3xl font-bold text-white md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-base text-slate-300 md:text-lg">
            Feedback from clients who trusted us with websites, apps, designs, marketing, and business planning.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 scrollbar-hide"
        style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.article
            key={testimonial.name}
            className="flex-none w-[82vw] snap-start sm:w-[23rem] lg:w-[25rem]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div className="relative h-full min-h-[22rem] overflow-hidden rounded-lg border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/25">
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${testimonial.accent}`} />
              <div className="mb-8 flex items-start justify-between gap-4">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${testimonial.accent} text-lg font-bold text-slate-950`}>
                  {testimonial.name.charAt(0)}
                </div>
                <Quote className="h-9 w-9 text-white/10" />
              </div>

              <div className="mb-5 flex gap-1 text-amber-300" aria-label="Five star review">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="text-base leading-relaxed text-slate-100">
                "{testimonial.quote}"
              </p>

              <div className="mt-8 flex items-end justify-between gap-4">
                <div>
                  <p className="font-semibold leading-tight text-white">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-slate-400">{testimonial.location}</p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                  {testimonial.service}
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-1 gap-3 text-sm text-slate-300 sm:grid-cols-3">
        <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
          <span className="font-semibold text-white">Clear communication</span>
          <span className="block text-slate-400">From planning to handover</span>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
          <span className="font-semibold text-white">Practical delivery</span>
          <span className="block text-slate-400">Built around client goals</span>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
          <span className="font-semibold text-white">Ongoing support</span>
          <span className="block text-slate-400">Help after launch</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
