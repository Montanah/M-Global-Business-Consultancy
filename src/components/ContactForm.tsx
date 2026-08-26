import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const WEB3FORMS_ACCESS_KEY = "1554807a-61da-4351-be55-b915bace1a04";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || `Message from ${formData.name.trim()}`,
          message: formData.message.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send your message right now");
      }

      toast.success("Message sent successfully.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setHasSubmitted(true);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to send your message right now";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 max-w-2xl mx-auto">
      {hasSubmitted ? (
        <div className="text-center py-10" role="status" aria-live="polite">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-white">
            Message Sent
          </h3>
          <p className="text-white/75 leading-relaxed mb-8">
            Thank you for reaching out. We have received your message and will get back to you soon.
          </p>
          <Button
            type="button"
            variant="outline"
            className="border-white/30 bg-white/10 text-white hover:bg-white/20"
            onClick={() => setHasSubmitted(false)}
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <>
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-yellow-200 bg-clip-text text-transparent">
            Send Us a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-white mb-2 block">
                Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                disabled={isSubmitting}
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-white mb-2 block">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                disabled={isSubmitting}
                required
              />
            </div>

            <div>
              <Label htmlFor="subject" className="text-white mb-2 block">
                Subject
              </Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject (optional)"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-white mb-2 block">
                Message *
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60 min-h-[150px]"
                disabled={isSubmitting}
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-lg transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;
