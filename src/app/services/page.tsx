"use client";

import { motion } from "framer-motion";
import { BrainCircuit, AppWindow, Building2 } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: "ai-data",
      title: "AI & Data Science Solutions",
      subtitle: "Unlock intelligence from your data",
      desc: "We build advanced RAG (Retrieval-Augmented Generation) pipelines, predictive analytics models, and intelligent chatbots tailored to your specific operational needs. Turn unstructured data into actionable insights.",
      icon: <BrainCircuit className="w-6 h-6 text-primary" />,
      features: ["RAG Pipelines", "Predictive Analytics", "Intelligent Chatbots", "NLP Models"],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
      reversed: false,
    },
    {
      id: "custom-app",
      title: "Custom Application Development",
      subtitle: "Flawless performance across all devices",
      desc: "End-to-end web and mobile app engineering. We utilize modern frameworks like React and Next.js for blazing-fast web experiences, and Flutter for seamless cross-platform mobile applications.",
      icon: <AppWindow className="w-6 h-6 text-secondary" />,
      features: ["React & Next.js", "Flutter Mobile Apps", "API Development", "Cloud Deployment"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      reversed: true,
    },
    {
      id: "enterprise",
      title: "Enterprise & Healthcare Systems",
      subtitle: "Secure, highly-concurrent architecture",
      desc: "Robust backend systems designed for complex operational requirements. We specialize in secure health-tech infrastructure, high-concurrency booking engines, and intelligent load-balancing management systems.",
      icon: <Building2 className="w-6 h-6 text-accent" />,
      features: ["HIPAA Compliant Systems", "High-Concurrency Booking", "Load-Balancing Hubs", "Legacy Modernization"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      reversed: false,
    },
  ];

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Services</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-foreground/70 max-w-2xl mx-auto"
        >
          We architect and deliver high-performance digital products, intelligent automation, and enterprise-grade operational systems.
        </motion.p>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-32">
        {services.map((service) => (
          <div 
            key={service.id} 
            className={`flex flex-col gap-12 lg:items-center ${service.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
          >
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: service.reversed ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                {service.icon}
                <span className="text-sm font-semibold uppercase tracking-wider">{service.title}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">{service.subtitle}</h2>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                {service.desc}
              </p>
              
              <ul className="grid grid-cols-2 gap-4">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-medium text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Image Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10" />
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </section>
    </div>
  );
}
