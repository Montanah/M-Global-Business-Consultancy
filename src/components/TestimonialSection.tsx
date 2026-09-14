import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import Reveal from "./Reveal";

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];
  return (
    <section
      id="testimonials"
      className="testimonials-section section-pad"
      aria-labelledby="testimonials-heading"
    >
      <div className="site-container testimonial-layout">
        <Reveal>
          <p className="eyebrow">
            <span className="section-index">04 /</span> IN THEIR WORDS
          </p>
          <h2 id="testimonials-heading">
            Built on trust.
            <br />
            <span className="muted">Backed by people.</span>
          </h2>
          <p className="testimonial-intro">
            The best part of what we do?
            <br />
            The people we get to do it with.
          </p>
          <div className="testimonial-controls">
            <button
              type="button"
              className="icon-button"
              onClick={() =>
                setIndex(
                  (index - 1 + testimonials.length) % testimonials.length,
                )
              }
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={18} />
            </button>
            <span>
              {String(index + 1).padStart(2, "0")}{" "}
              <span className="muted">
                / {String(testimonials.length).padStart(2, "0")}
              </span>
            </span>
            <button
              type="button"
              className="icon-button"
              onClick={() => setIndex((index + 1) % testimonials.length)}
              aria-label="Next testimonial"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </Reveal>
        <div
          className="testimonial-quote"
          aria-live="polite"
          aria-atomic="true"
        >
          <Quote
            size={42}
            strokeWidth={1}
            className="brand-accent-text"
            aria-hidden="true"
          />
          <blockquote key={testimonial.name}>
            <p>“{testimonial.quote}”</p>
            <footer>
              <span className="testimonial-avatar" aria-hidden="true">
                {testimonial.name.replace("Pst. ", "").charAt(0)}
              </span>
              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.location}</span>
              </div>
              <span className="testimonial-service">{testimonial.service}</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
