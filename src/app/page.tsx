"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Bot, Code2, Database } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                Data-Driven <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                  Software Solutions
                </span> <br />
                & AI Automation
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-lg">
                We engineer elite, scalable software systems and intelligent AI pipelines that solve complex bottlenecks for modern enterprises.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-primary text-black font-semibold hover:bg-primary-hover hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center gap-2"
                >
                  Discuss Your Vision
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all"
                >
                  View Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square md:aspect-video lg:aspect-square"
            >
              <img
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3"
                alt="Abstract AI Data Visualization"
                className="w-full h-full object-cover rounded-3xl border border-white/10 shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Marquee */}
      <section className="py-10 border-y border-white/10 bg-black/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <p className="text-center text-sm font-medium text-foreground/50 uppercase tracking-widest">
            Trusted by modern enterprises
          </p>
        </div>
        <div className="flex space-x-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity">
          {/* We duplicate the content to make the infinite scroll seamless */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex space-x-12 min-w-max items-center">
              <img src="https://via.placeholder.com/150x50/111827/ffffff?text=Enterprise+Corp" alt="Logo" className="h-8 object-contain" />
              <img src="https://via.placeholder.com/150x50/111827/ffffff?text=HealthTech+Inc" alt="Logo" className="h-8 object-contain" />
              <img src="https://via.placeholder.com/150x50/111827/ffffff?text=Retail+Giant" alt="Logo" className="h-8 object-contain" />
              <img src="https://via.placeholder.com/150x50/111827/ffffff?text=Data+Systems" alt="Logo" className="h-8 object-contain" />
              <img src="https://via.placeholder.com/150x50/111827/ffffff?text=AI+Innovators" alt="Logo" className="h-8 object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose LISH?</h2>
            <p className="text-lg text-foreground/70">
              We don&apos;t just write code. We architect scalable solutions that drive measurable business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Bot className="text-primary w-8 h-8" />,
                title: "Intelligent Automation",
                desc: "Agentic AI & RAG pipelines that automate workflows and unlock deep insights from your unstructured data.",
              },
              {
                icon: <Code2 className="text-secondary w-8 h-8" />,
                title: "Scalable Full-Stack",
                desc: "High-performance web and mobile applications engineered for massive scale and flawless user experiences.",
              },
              {
                icon: <Database className="text-accent w-8 h-8" />,
                title: "Custom Enterprise Systems",
                desc: "Robust booking engines, load-balancing management systems, and tailored operational hubs.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-8 rounded-2xl bg-card border border-card-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-card/50 border-y border-card-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Arsenal</h2>
              <p className="text-foreground/70 mb-8">
                We leverage the most powerful, modern frameworks to build systems that perform exceptionally under pressure.
              </p>
            </div>
            <div className="md:w-2/3 flex flex-wrap justify-center md:justify-end gap-6">
              {[
                { name: "Python", icon: "🐍" },
                { name: "FastAPI", icon: "⚡" },
                { name: "Node.js", icon: "🟢" },
                { name: "React", icon: "⚛️" },
                { name: "Next.js", icon: "▲" },
                { name: "Flutter", icon: "📱" },
              ].map((tech, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center gap-3 px-6 py-4 rounded-xl bg-background border border-white/10 hover:border-white/30 shadow-lg cursor-default"
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="font-semibold">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Scale?</h2>
            <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
              Get a free technical consultation or architectural review. Discover how our custom solutions can eliminate bottlenecks in your organization.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition-colors"
            >
              Request Free Consultation
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
