import { useState } from "react";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="bg-gray-900 py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Get In Touch</h2>
      <p className="text-white mb-8">
        Have questions about our gym or membership options? Contact us and we&apos;ll get back to you as soon as possible.
      </p>
      <div className="space-y-6 text-white">
        <ContactInfoItem icon={MapPin} title="Location" content="123 Fitness Street, Gym City, GC 12345" />
        <ContactInfoItem icon={Phone} title="Phone" content="(123) 456-7890" />
        <ContactInfoItem icon={Mail} title="Email" content="info@fitzone.com" />
      </div>
      <div className="mt-8">
        <h3 className="font-bold mb-4 text-white">Follow Us</h3>
        <div className="flex gap-4">
          <SocialLink href="#" icon={Instagram} />
          <SocialLink href="#" icon={Facebook} />
          <SocialLink href="#" icon={Twitter} />
        </div>
      </div>
    </div>
  );
}

function ContactInfoItem({ icon: Icon, title, content }: { icon: React.ElementType; title: string; content: string }) {
  return (
    <div className="flex items-start gap-4">
      <Icon className="h-6 w-6 text-primary mt-0.5" />
      <div>
        <h3 className="font-bold mb-1">{title}</h3>
        <p className="text-white">{content}</p>
      </div>
    </div>
  );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: React.ElementType }) {
  return (
    <Link
      href={href}
      className="h-10 w-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
}

function ContactForm() {
  // 🔹 State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // 🔹 State for handling submission status
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  // 🔹 Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setResponse("Your message has been sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form after success
      } else {
        setResponse(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setResponse("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-muted p-8 rounded-lg">
      <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <Input id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <Input id="email" name="email" type="email" placeholder="Your email" value={formData.email} onChange={handleChange} required />
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <label htmlFor="subject" className="text-sm font-medium">Subject</label>
        <Input id="subject" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
      </div>
      <div className="space-y-2 mb-6">
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <Textarea id="message" name="message" placeholder="Your message" rows={5} value={formData.message} onChange={handleChange} required />
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </Button>
      {response && <p className="mt-4 text-green-500">{response}</p>}
    </form>
  );
}
