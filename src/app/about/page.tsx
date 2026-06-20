"use client";

import { motion } from "framer-motion";
import { Terminal, Lightbulb, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-8"
        >
          Engineering with <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Precision</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-foreground/80 leading-relaxed"
        >
          We are an elite collective of software architects, data scientists, and engineers dedicated to solving the most complex operational bottlenecks for modern enterprises.
        </motion.p>
      </section>

      {/* Ethos Section */}
      <section className="py-16 bg-card border-y border-card-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Terminal className="w-8 h-8 text-primary" />,
                title: "Cutting-Edge Architecture",
                desc: "We refuse to build legacy software. Every system we design leverages modern, scalable architecture designed to handle immense load and future growth."
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-secondary" />,
                title: "Data-Driven Decisions",
                desc: "Gut feelings don't scale. We implement intelligent analytics and AI-driven automation to ensure your software generates measurable business impact."
              },
              {
                icon: <Users className="w-8 h-8 text-accent" />,
                title: "Radical Ownership",
                desc: "We don't just act as vendors; we act as your dedicated engineering partners. We take full ownership of the product lifecycle from ideation to deployment."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-background border border-white/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="pt-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-16">Leadership</h2>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-card border border-card-border rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 text-left"
        >
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/30 p-1">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400" 
                alt="Founder Portrait"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-2">Alexander Chen</h3>
            <p className="text-primary font-medium mb-6 uppercase tracking-wider text-sm">Founder & Chief Architect</p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              With over a decade of experience in building high-frequency trading systems and enterprise data platforms, Alexander founded Aura with a singular vision: to bridge the gap between complex AI research and practical, scalable business applications.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Holding a strong foundation in Data Science and Machine Learning, he leads our engineering teams to deliver robust, intelligent solutions that fundamentally transform how our clients operate.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
