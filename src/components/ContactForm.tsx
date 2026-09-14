import { useEffect, useRef, useState, type FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "1554807a-61da-4351-be55-b915bace1a04";

const ContactForm = () => {
  const { search } = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState("");
  const successRef = useRef<HTMLHeadingElement>(null);
  const pendingRequest = useRef<AbortController | null>(null);

  useEffect(() => {
    const service = new URLSearchParams(search).get("service");
    if (service) {
      setFormData((previous) => ({ ...previous, subject: service }));
      setHasSubmitted(false);
    }
  }, [search]);
  useEffect(() => {
    if (hasSubmitted) successRef.current?.focus();
  }, [hasSubmitted]);
  useEffect(
    () => () => {
      pendingRequest.current?.abort();
    },
    [],
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pendingRequest.current) return;
    setError("");
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setError(
        "Please enter your name, email, and a little about your project.",
      );
      return;
    }
    setIsSubmitting(true);
    const controller = new AbortController();
    pendingRequest.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject:
            formData.subject.trim() || `Message from ${formData.name.trim()}`,
          message: formData.message.trim(),
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success)
        throw new Error(
          "Your message couldn’t be sent. Please try again, or contact us by email.",
        );
      setFormData({ name: "", email: "", subject: "", message: "" });
      setHasSubmitted(true);
    } catch {
      setError(
        "Your message couldn’t be sent. Your details are still here. Please try again, or email hello@mglobalbusinessconsultancy.com.",
      );
    } finally {
      window.clearTimeout(timeout);
      pendingRequest.current = null;
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-panel">
      {hasSubmitted ? (
        <div className="form-success" role="status">
          <CheckCircle2 size={48} strokeWidth={1.3} />
          <h3 ref={successRef} tabIndex={-1}>
            Message sent.
          </h3>
          <p>
            Thank you for reaching out. We have received your message and will
            get back to you soon.
          </p>
          <button
            type="button"
            className="button button-outline"
            onClick={() => setHasSubmitted(false)}
          >
            Send another message <ArrowUpRight size={17} />
          </button>
        </div>
      ) : (
        <>
          <div className="form-heading">
            <h3>Tell us what’s next.</h3>
            <span>LET’S GET STARTED ↗</span>
          </div>
          <form onSubmit={handleSubmit} aria-busy={isSubmitting}>
            <fieldset disabled={isSubmitting}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">
                    Your name <span>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder="Alex Morgan"
                    maxLength={150}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">
                    Email address <span>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="alex@company.com"
                    maxLength={254}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="subject">
                  What can we help with?{" "}
                  <span className="field-optional">(optional)</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  placeholder="A new website, an app, a bigger idea…"
                  maxLength={250}
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
              </div>
              <div className="form-field">
                <label htmlFor="message">
                  A little about your project <span>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your idea, your goals, what you have in mind…"
                  rows={4}
                  maxLength={5000}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>
              <p className="form-note">
                Fields marked * are required. We’ll use your details to respond
                to your enquiry.
              </p>
              {error && (
                <p className="form-error" role="alert">
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="button button-brand form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    Sending your message{" "}
                    <LoaderCircle size={18} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Let’s start a conversation <ArrowUpRight size={19} />
                  </>
                )}
              </button>
            </fieldset>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;
