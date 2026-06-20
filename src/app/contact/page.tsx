"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Code2, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    projectType: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/lishorganization@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formState)
      });
      if (response.ok) {
        setFormState({ name: "", company: "", email: "", projectType: "", description: "" });
        alert("Thank you! Your message has been sent successfully.");
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
        >
          Let&apos;s Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Together</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-foreground/70 max-w-2xl mx-auto"
        >
          Whether you need a full-scale enterprise system or an intelligent AI integration, our team is ready to engineer your solution.
        </motion.p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-foreground/70 leading-relaxed mb-8">
                Reach out to us directly or fill out the form. We aim to respond to all inquiries within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-card border border-card-border flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50 font-medium">Email</p>
                    <p className="text-lg font-medium">lishorganization@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-card border border-card-border flex items-center justify-center text-secondary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50 font-medium">Phone</p>
                    <p className="text-lg font-medium">6379961830</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-card border border-card-border flex items-center justify-center text-accent">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50 font-medium">Office</p>
                    <p className="text-lg font-medium">Chennai, 603203</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-card border border-card-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors">
                  <Globe size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-card border border-card-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors">
                  <Code2 size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3 bg-card border border-card-border rounded-3xl p-8 md:p-10 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground/80">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Enterprise Corp"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground/80">Work Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="projectType" className="text-sm font-medium text-foreground/80">Project Type</label>
                <select 
                  id="projectType" 
                  name="projectType" 
                  required
                  value={formState.projectType}
                  onChange={handleChange}
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
                >
                  <option value="" disabled>Select an option</option>
                  <option value="AI/Data">AI & Data Science Solutions</option>
                  <option value="Custom App">Custom Application Development</option>
                  <option value="Enterprise System">Enterprise & Healthcare System</option>
                  <option value="Other">Other / General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium text-foreground/80">Project Description</label>
                <textarea 
                  id="description" 
                  name="description" 
                  rows={4}
                  required
                  value={formState.description}
                  onChange={handleChange}
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Briefly describe your operational bottlenecks or project goals..."
                />
              </div>

              <button 
                type="submit"
                className={`w-full py-4 rounded-xl bg-primary text-black font-bold text-lg hover:bg-primary-hover transition-colors flex items-center justify-center gap-2 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
