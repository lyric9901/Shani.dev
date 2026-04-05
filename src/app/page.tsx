"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { 
  Moon, Sun, Mail, Phone, ExternalLink, Key, Info, 
  ArrowRight, CheckCircle2, Clock, Shield, Zap 
} from "lucide-react";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// FIX: Dynamically import the 3D component with SSR disabled. 
// This absolutely prevents hydration mismatches and mobile WebGL crashes.
const Hero3D = dynamic(() => import("@/components/Hero3D"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-zinc-50 dark:from-zinc-900 dark:to-black -z-10 opacity-50" />
});

const projectsData = [
  {
    id: "edusmartpro",
    name: "EduSmartPro",
    url: "https://edusmartpro.in",
    desc: "Built a scalable coaching management system handling student data, role-based auth, and scheduling. Result: Zero-downtime launch.",
    demoUsername: "shani",
    demoPass: "demo123"
  },
  {
    id: "buzzme",
    name: "Buzz Me",
    url: "https://buzz-me-self.vercel.app",
    desc: "Teen social platform engineered for real-time engagement, secure messaging, and high concurrent user loads.",
    demoEmail: "test@buzzme.com",
    demoPass: "test1234"
  },
  {
    id: "urgerelief",
    name: "Urge Relief",
    url: "https://urge-relief.vercel.app",
    desc: "Habit tracking application utilizing a robust cloud database for long-term metric storage and analytics.",
    demoEmail: "user@urgerelief.com",
    demoPass: "demo2025"
  },
  {
    id: "rizzonator",
    name: "Rizzonator AI",
    url: "https://rizzonator-ai.vercel.app",
    desc: "AI-powered assistant utilizing advanced prompt engineering and seamless third-party API integrations.",
    demoEmail: "No Login Required",
    demoPass: "N/A"
  }
];

export default function Home() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeProject, setActiveProject] = useState(projectsData[0]);
  const [iframeLoaded, setIframeLoaded] = useState(false); // FIX: Memory saving state for mobile

  useEffect(() => {
    setMounted(true);
  }, []);

  // When switching projects, unload the iframe to save memory
  const handleProjectSwitch = (project: typeof projectsData[0]) => {
    setActiveProject(project);
    setIframeLoaded(false);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-12 gap-20 md:gap-32 relative overflow-hidden">
      
      {mounted && <Hero3D />}

      {/* Premium Navigation */}
      <nav className="flex justify-between items-center w-full z-10 bg-white/70 dark:bg-black/70 backdrop-blur-lg p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
        <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">S</div>
          <span>Shani.</span>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden sm:block text-sm font-medium hover:text-blue-600 transition-colors">Book Call</a>
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:scale-110 transition-transform flex items-center justify-center w-9 h-9"
            aria-label="Toggle Theme"
          >
            {!mounted ? <span className="w-5 h-5 block" /> : resolvedTheme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Hero Section - Business Focused */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center text-center gap-8 mt-8 z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-100 dark:border-blue-800">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Accepting 1 new client for next month
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight">
          Launch Your SaaS in 4 Weeks. <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Not 6 Months.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl font-medium">
          Stop gambling with freelance marketplaces. I design, build, and ship production-ready web applications for founders who need to move fast. No technical debt. No ghosting.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <a href="#contact" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition-transform font-bold text-lg w-full sm:w-auto shadow-xl">
            Book a Discovery Call <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#work" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors font-bold text-lg w-full sm:w-auto">
            View Case Studies
          </a>
        </div>
      </motion.section>

      {/* The Pain Point / Solution Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full grid md:grid-cols-3 gap-8 z-10"
      >
        <div className="flex flex-col gap-3 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800/50">
          <Clock className="w-8 h-8 text-blue-500 mb-2" />
          <h3 className="text-xl font-bold">Agency-Level Speed</h3>
          <p className="text-zinc-600 dark:text-zinc-400">Traditional agencies bloat scopes and take months. I use modern stacks (Next.js & Supabase) to ship your MVP in weeks.</p>
        </div>
        <div className="flex flex-col gap-3 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800/50">
          <Shield className="w-8 h-8 text-blue-500 mb-2" />
          <h3 className="text-xl font-bold">Zero Ghosting Policy</h3>
          <p className="text-zinc-600 dark:text-zinc-400">You work directly with me. No junior devs, no language barriers, and absolute transparency on daily progress.</p>
        </div>
        <div className="flex flex-col gap-3 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800/50">
          <Zap className="w-8 h-8 text-blue-500 mb-2" />
          <h3 className="text-xl font-bold">Built to Scale</h3>
          <p className="text-zinc-600 dark:text-zinc-400">Your app isn't just a prototype. It's built on the same enterprise-grade infrastructure powering modern unicorns.</p>
        </div>
      </motion.section>

      {/* Case Studies (Interactive Showcase) */}
      <motion.section
        id="work"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-full flex flex-col gap-8 z-10"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl md:text-4xl font-bold">Proven Outcomes</h2>
          <p className="text-zinc-600 dark:text-zinc-400">Select a case study below to launch a live, interactive preview.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projectsData.map((project) => {
            const isActive = activeProject.id === project.id;
            return (
              <div 
                key={project.id}
                onClick={() => handleProjectSwitch(project)}
                className={`cursor-pointer p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 ${
                  isActive 
                    ? "border-blue-500 bg-blue-50/80 dark:bg-blue-900/20 shadow-lg ring-1 ring-blue-500" 
                    : "border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 hover:border-blue-300 hover:shadow-md"
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`text-xl font-bold ${isActive ? "text-blue-600 dark:text-blue-400" : ""}`}>
                    {project.name}
                  </h3>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{project.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Memory-Safe Live Preview Window */}
        <div className="w-full h-[450px] md:h-[650px] mt-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 overflow-hidden shadow-2xl flex flex-col relative group">
          <div className="h-10 bg-zinc-200 dark:bg-zinc-950 flex items-center px-4 gap-2 shrink-0 border-b border-zinc-300 dark:border-zinc-800">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <div className="mx-auto text-xs font-mono text-zinc-500 truncate px-2">
              {activeProject.url.replace("https://", "")}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeProject.demoEmail !== "No Login Required" && (
              <motion.div 
                key={`banner-${activeProject.id}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-blue-600 text-white p-3 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm shrink-0 shadow-md z-10"
              >
                <div className="flex items-center gap-2 font-semibold">
                  <Info className="w-4 h-4" /> Try the Live Demo:
                </div>
                <div className="flex items-center gap-3 font-mono text-xs bg-black/20 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                  <span>Email: {activeProject.demoEmail}</span>
                  <span className="w-px h-3 bg-white/30" />
                  <span className="flex items-center gap-1"><Key className="w-3 h-3" /> Pass: {activeProject.demoPass}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* FIX: Click-to-load logic saves massive memory on mobile */}
          {!iframeLoaded ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-zinc-100 dark:bg-zinc-900 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 to-transparent" />
              <Zap className="w-12 h-12 text-blue-500 mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-2">Initialize {activeProject.name}</h3>
              <p className="text-zinc-500 mb-8 max-w-sm">This loads a full production application in your browser. Click below to start the interactive demo.</p>
              <button 
                onClick={() => setIframeLoaded(true)}
                className="relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-transform shadow-xl"
              >
                Run Live Application
              </button>
            </div>
          ) : (
            mounted && (
              <iframe 
                key={`iframe-${activeProject.url}`} 
                src={activeProject.url} 
                className="w-full flex-1 bg-white dark:bg-black border-none"
                title={`${activeProject.name} Preview`}
              />
            )
          )}
        </div>
      </motion.section>

      {/* Premium Pricing Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col gap-10 items-center z-10 mt-12"
      >
        <div className="text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Investment</h2>
          <p className="text-zinc-600 dark:text-zinc-400">Stop paying hourly rates with no end in sight. I build on a strict, milestone-based flat rate so you know exactly what you get and when.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
          
          <div className="p-8 md:p-10 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md flex flex-col gap-6 shadow-sm">
            <div>
              <h3 className="text-2xl font-bold mb-2">Blueprint & Architecture</h3>
              <p className="text-zinc-500 h-10">Perfect for validating an idea before building.</p>
            </div>
            <div className="text-5xl font-extrabold">₹10,000</div>
            <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 my-2" />
            <ul className="text-zinc-700 dark:text-zinc-300 space-y-4 font-medium flex-1">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Complete technical roadmap</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Database schema design</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Core UI/UX wireframes</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> You own the blueprints completely</li>
            </ul>
          </div>

          <div className="p-8 md:p-10 rounded-3xl border border-blue-500 bg-blue-50 dark:bg-blue-900/10 flex flex-col gap-6 relative shadow-2xl overflow-hidden transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-sm px-4 py-1.5 rounded-bl-xl font-bold uppercase tracking-wide">
              The Full Launch
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-blue-900 dark:text-blue-100">The SaaS MVP</h3>
              <p className="text-blue-700 dark:text-blue-300 h-10">From idea to paying customers in 4 weeks.</p>
            </div>
            <div className="text-5xl font-extrabold text-blue-950 dark:text-white">
              <span className="text-2xl text-blue-600 dark:text-blue-400 font-medium mr-2">Starts at</span>
              ₹45,000
            </div>
            <div className="w-full h-px bg-blue-200 dark:bg-blue-800 my-2" />
            <ul className="text-blue-900 dark:text-blue-100 space-y-4 font-medium flex-1">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" /> Full front-end & back-end build</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" /> Secure user authentication</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" /> Payment gateway integration</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" /> 30 days of post-launch bug support</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* High-Converting Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mx-auto bg-zinc-900 dark:bg-zinc-50 rounded-3xl p-8 md:p-12 text-center text-white dark:text-black mt-12 shadow-2xl relative overflow-hidden z-10"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-indigo-500" />
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to stop planning and start launching?</h2>
        <p className="text-zinc-400 dark:text-zinc-600 text-lg mb-10 max-w-2xl mx-auto">
          Let's jump on a quick 15-minute scoping call. We'll discuss your idea, outline the tech stack, and see if we're a good fit. No pressure, no hard sells.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
          <a href="mailto:shanibrooo@gmail.com" className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors font-bold text-lg w-full sm:w-auto">
            <Mail className="w-5 h-5" /> Email Me Directly
          </a>
          <a href="https://wa.me/7388739691" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white hover:bg-[#20b858] transition-colors font-bold text-lg w-full sm:w-auto">
            <Phone className="w-5 h-5" /> Chat on WhatsApp
          </a>
        </div>
      </motion.section>

      <footer className="w-full text-center py-8 text-sm text-zinc-500 z-10 flex flex-col items-center gap-2 mt-8">
        <div className="w-8 h-8 bg-zinc-200 dark:bg-zinc-800 rounded-lg flex items-center justify-center font-bold text-zinc-400">S</div>
        © {new Date().getFullYear()} Shani Studio. All rights reserved.
      </footer>
    </div>
  );
}