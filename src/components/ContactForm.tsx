import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Create mailto link with pre-filled data and CC to both emails
    const mailtoLink = `mailto:hello@mglobalbusinessconsultancy.com?cc=mititi.isaac@mglobalbusinessconsultancy.com&subject=${encodeURIComponent(formData.subject || `Message from ${formData.name}`)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open user's email client
    window.location.href = mailtoLink;
    
    toast.success("Opening your email client...");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 max-w-2xl mx-auto">
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
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
            required
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-white mb-2 block">
            Email *
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
            required
          />
        </div>

        <div>
          <Label htmlFor="subject" className="text-white mb-2 block">
            Subject
          </Label>
          <Input
            id="subject"
            type="text"
            placeholder="Subject (optional)"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
          />
        </div>

        <div>
          <Label htmlFor="message" className="text-white mb-2 block">
            Message *
          </Label>
          <Textarea
            id="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="bg-white/20 border-white/30 text-white placeholder:text-white/60 min-h-[150px]"
            required
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-lg transition-all"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
