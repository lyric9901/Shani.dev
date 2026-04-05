"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun, Mail, Phone, Code2, ExternalLink } from "lucide-react";
import { useState } from "react";
import Hero3D from "@/components/Hero3D"; // Import the 3D component

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [showPricingContact, setShowPricingContact] = useState(false);

  const projects = [
    { name: "EduSmartPro", url: "https://edusmartpro.in", desc: "Coaching management system" },
    { name: "Buzz Me", url: "https://buzz-me-self.vercel.app", desc: "Teen social platform" },
    { name: "Urge Relief", url: "https://urge-relief.vercel.app", desc: "Habit tracking & relief" },
    { name: "Rizzonator AI", url: "https://rizzonator-ai.vercel.app", desc: "AI-powered assistant" },
  ];

  return (
<div className="flex flex-col min-h-screen font-sans max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-16 gap-16 md:gap-24 relative overflow-hidden">
      
      {/* 3D Background - Sits behind the Hero */}
      <Hero3D />

      {/* Navigation */}
      <nav className="flex justify-between items-center w-full z-10 bg-white/50 dark:bg-black/50 backdrop-blur-md p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
          <Code2 className="w-6 h-6 text-blue-600" />
          <span>dev.shani</span>
        </div>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:scale-110 transition-transform"
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center text-center gap-6 mt-12 z-10"
      >
       <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight max-w-4xl drop-shadow-sm">
          I build scalable <span className="text-blue-600 dark:text-blue-500">SaaS</span> & E-commerce experiences.
        </h1>
        <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 max-w-2xl font-medium backdrop-blur-sm bg-white/30 dark:bg-black/30 p-2 rounded-lg">
          Full-stack developer specializing in Next.js, Supabase, and heavy backend systems. No fluff, just high-performance apps.
        </p>
      </motion.section>

      {/* Projects Grid & Live Preview */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full flex flex-col gap-8 z-10"
      >
        <div className="flex justify-between items-end">
          <h2 className="text-3xl font-bold">Featured Work</h2>
         <a href="https://github.com/lyric9901" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-blue-500 transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
  @lyric9901
</a>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02, y: -5 }}
              className="group p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm flex justify-between items-center shadow-sm hover:shadow-xl transition-all"
            >
              <div>
                <h3 className="text-xl font-bold group-hover:text-blue-500 transition-colors">{project.name}</h3>
                <p className="text-zinc-500 text-sm mt-1">{project.desc}</p>
              </div>
              <ExternalLink className="w-5 h-5 text-zinc-400 group-hover:text-blue-500 transition-colors" />
            </motion.a>
          ))}
        </div>

        {/* Simulated Browser Window for Primary App */}
<div className="w-full h-[400px] md:h-[600px] mt-8 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 overflow-hidden shadow-2xl flex flex-col">          <div className="h-10 bg-zinc-200 dark:bg-zinc-950 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <div className="mx-auto text-xs font-mono text-zinc-500">edusmartpro.in - Live Demo</div>
          </div>
          <iframe 
            src="https://edusmartpro.in" 
            className="w-full flex-1 bg-white dark:bg-black"
            title="EduSmartPro Preview"
          />
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col gap-8 items-center z-10"
      >
        <h2 className="text-3xl font-bold">Investment</h2>
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
          <div className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Basic MVP</h3>
            <div className="text-4xl font-bold">₹999</div>
            <ul className="text-zinc-600 dark:text-zinc-400 space-y-2">
              <li>✓ Heavy Backend Integration</li>
              <li>✓ 5 Revisions included</li>
              <li>✓ Responsive UI</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border border-blue-500 bg-blue-50 dark:bg-blue-900/20 backdrop-blur-sm flex flex-col gap-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-3 py-1 rounded-bl-lg font-bold">
              POPULAR
            </div>
            <h3 className="text-xl font-semibold">Full MVP Setup</h3>
            <div className="text-4xl font-bold">₹1599</div>
            <ul className="text-zinc-600 dark:text-zinc-400 space-y-2">
              <li>✓ Auth / DB (Supabase/Mongo)</li>
              <li>✓ Custom API Routes</li>
              <li>✓ 5 Revisions included</li>
            </ul>
          </div>
        </div>

        {/* Interactive Contact Trigger */}
        <div className="flex flex-col items-center gap-4 mt-4">
          <button 
            onClick={() => setShowPricingContact(!showPricingContact)}
            className="text-sm font-medium underline underline-offset-4 text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
          >
            Looking for something else?
          </button>
          
          {showPricingContact && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-zinc-100 dark:bg-zinc-900 px-8 py-6 rounded-2xl text-center border border-zinc-200 dark:border-zinc-800 shadow-lg"
            >
              <p className="font-medium mb-4 text-lg">For custom setups and better charges, let's talk.</p>
              <div className="flex justify-center gap-4">
                <a href="mailto:shanibrooo@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition-transform font-medium">
                  <Mail className="w-4 h-4" /> Email Me
                </a>
                <a href="https://wa.me/917388739691" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white hover:scale-105 transition-transform font-medium">
                  <Phone className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="w-full text-center py-8 border-t border-zinc-200 dark:border-zinc-800 text-sm text-zinc-500 z-10">
        © {new Date().getFullYear()}. Built with Next.js & Three.js.
      </footer>
    </div>
  );
}