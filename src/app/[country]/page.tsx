"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { 
  Moon, Sun, Mail, Phone, Key,
  ArrowRight, CheckCircle2, Shield, Zap, 
  Database, Globe, Layers, Cpu, Search,
  Rocket, Target, Map, Terminal, MessageCircle, ChevronDown
} from "lucide-react";
import { useState, useEffect } from "react";

const projectsData = [
  {
    id: "edusmartpro",
    name: "EduSmartPro",
    url: "https://www.edusmartpro.in",
    desc: "A clean management system scaling thousands of student records seamlessly during peak times.",
    demoEmail: "shani", 
    demoPass: "demo123"
  },
  {
    id: "buzzme",
    name: "Buzz Me",
    url: "https://buzz-me-self.vercel.app",
    desc: "Real-time social platform optimized for fast messaging and smooth user experience.",
    demoEmail: "test@buzzme.com",
    demoPass: "test1234"
  },
  {
    id: "urgerelief",
    name: "Urge Relief",
    url: "https://urge-relief.vercel.app",
    desc: "Habit-tracking dashboard with simple, effective analytics to help users monitor progress.",
    demoEmail: "user@urgerelief.com",
    demoPass: "demo2025"
  },
  {
    id: "rizzonator",
    name: "Rizzonator AI",
    url: "https://rizzonator-ai.vercel.app",
    desc: "AI assistant interface focused on clean prompt delivery and natural user interactions.",
    demoEmail: "No Login Required",
    demoPass: "N/A"
  }
];

const testimonials = [
  {
    name: "Alex R.",
    content: "Shani engineered our Next.js MVP with aggressive performance optimizations, resulting in a 40% decrease in bounce rate. Absolute precision.",
    status: "Product Lead"
  },
  {
    name: "Sarah T.",
    content: "Pixel-perfect implementation of our design system. The attention to UI/UX details accelerated our time-to-market significantly.",
    status: "UX Director"
  },
  {
    name: "Marcus K.",
    content: "Delivered Phase 1 ahead of schedule with flawless AI feature integrations. We are already negotiating the retainer for Phase 2.",
    status: "SaaS Founder"
  },
  {
    name: "Rohan M.",
    content: "The database architecture is incredibly robust. Scaled to 10k monthly active users without a single bottleneck.",
    status: "Technical Co-founder"
  }
];

const skills = [
  { name: "React/Next.js", icon: <Globe className="w-10 h-10" />, level: "Frontend" },
  { name: "Node/Supabase", icon: <Database className="w-10 h-10" />, level: "Backend" },
  { name: "GEO & AEO", icon: <Search className="w-10 h-10" />, level: "AI SEO / LLMO" },
  { name: "Three.js", icon: <Layers className="w-10 h-10" />, level: "Interactive" },
  { name: "TypeScript", icon: <Terminal className="w-10 h-10" />, level: "Core" }
];

const processSteps = [
  { id: 1, title: "Sync", icon: <Target className="w-5 h-5" />, desc: "A quick, no-BS chat to validate your idea and map the technical approach." },
  { id: 2, title: "Plan", icon: <Map className="w-5 h-5" />, desc: "We lock in the database schema and UI flow. Zero surprises later." },
  { id: 3, title: "Build", icon: <Zap className="w-5 h-5" />, desc: "I code. You get async progress updates without pointless meetings." },
  { id: 4, title: "Launch", icon: <Rocket className="w-5 h-5" />, desc: "We deploy to production. You own 100% of the source code." },
  { id: 5, title: "Support", icon: <Shield className="w-5 h-5" />, desc: "30 days of bug support so you can focus entirely on marketing." }
];

const faqs = [
  {
    q: "How long does a typical build take?",
    a: "Most standard MVPs take about 3-4 weeks from kickoff to live deployment. I'll give you a hard deadline during our first chat."
  },
  {
    q: "Do I actually own the source code?",
    a: "100%. Once the project is handed over, the repo, the hosting, and the IP belong entirely to you."
  },
  {
    q: "My budget is slightly different from your plans.",
    a: "That's completely fine. Just drop me a message. We can usually adjust the feature scope to make it work for your current runway."
  },
  {
    q: "What happens if there are bugs after launch?",
    a: "I include 30 days of free technical support post-launch. If something breaks, I fix it. Period."
  }
];

export default function LocalizedHome() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeProject, setActiveProject] = useState(projectsData[0]);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleProjectSwitch = (project: typeof projectsData[0]) => {
    setActiveProject(project);
    setIframeLoaded(false);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-12 gap-16 md:gap-32 relative overflow-hidden text-zinc-900 dark:text-zinc-100">
      
      {/* 🤖 SECRET AI SEARCH ENGINE OPTIMIZATION (GEO/AEO/LLMO) PAYLOAD 🤖 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Shani.dev - Premium Website Developer & App Developer",
            "image": "https://shani.dev/og-image.jpg",
            "description": "Top-tier Next.js website developer and app developer offering advanced SEO, AEO (Answer Engine Optimization), GEO (Generative Engine Optimization), LLMO (LLM Optimization), and AI SEO services. Serving startups and enterprises globally in India, USA, Canada, and Saudi Arabia.",
            "areaServed": ["IN", "US", "CA", "SA"],
            "knowsAbout": [
              "Web Development",
              "App Development",
              "React",
              "Next.js",
              "SEO",
              "AI SEO",
              "Generative Engine Optimization",
              "Answer Engine Optimization",
              "LLM Optimization",
              "Custom SaaS Development"
            ],
            "url": "https://shani.dev",
            "priceRange": "$$$"
          })
        }}
      />

      {/* Navigation */}
      <nav className="flex justify-between items-center w-full z-20 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm sticky top-4">
        <div className="font-bold text-xl tracking-tight flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm">S</div>
          <span className="hidden sm:inline-block">Shani.dev</span>
        </div>
        
        <div className="flex items-center gap-3 md:gap-6">
          <Link href="/personal" className="hidden sm:block text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
            Personal
          </Link>
          <a href="#contact" className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Check Availability</a>
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:scale-105 transition-transform flex items-center justify-center w-9 h-9"
          >
            {!mounted ? <span className="w-5 h-5 block" /> : resolvedTheme === "dark" ? <Sun className="w-4 h-4 text-zinc-400" /> : <Moon className="w-4 h-4 text-zinc-600" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center text-center gap-6 mt-4 md:mt-8 z-10 px-2"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400 text-xs font-semibold border border-blue-100 dark:border-blue-900/30">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Currently accepting 1 new project
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-4xl leading-tight">
          Turn your idea into a <br className="hidden sm:block" />
          <span className="text-blue-600 dark:text-blue-500">revenue-generating MVP.</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl font-medium px-4">
          I build scalable web apps powered by AI, GEO, and traditional SEO. Zero ghosting. Transparent updates. Production-ready code.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto items-center px-4">
          <a href="#contact" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors font-semibold text-lg w-full sm:w-auto shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-200">
            See if we're a fit <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        
        <p className="mt-2 text-[10px] sm:text-xs font-semibold text-zinc-400 dark:text-zinc-500 tracking-wide uppercase">
          10+ MVPs Shipped • AI SEO Optimized • Fast Delivery
        </p>
      </motion.section>

      {/* Case Studies */}
      <section id="work" className="w-full flex flex-col gap-8 md:gap-10 z-10">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Proof of Work</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base">Hover and click below to load the live production environments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24 mb-6 md:mb-12">
          {projectsData.map((project) => {
            const isActive = activeProject.id === project.id;
            return (
              <div key={project.id} className="relative w-full h-[180px] flex justify-center group/card z-10 hover:z-50">
                
                {/* Main Top Card */}
                <div 
                  onClick={() => handleProjectSwitch(project)}
                  className={`absolute w-full h-[180px] rounded-[25px] z-20 transition-all duration-400 cursor-pointer p-6 md:p-8 flex flex-col justify-between shadow-md border ${
                    isActive 
                      ? "bg-[#FFE87C] border-yellow-400 dark:bg-blue-900/40 dark:border-blue-700 text-black dark:text-white" 
                      : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-black dark:text-white group-hover/card:bg-[#FFE87C] group-hover/card:border-yellow-400 dark:group-hover/card:bg-blue-900/30 dark:group-hover/card:border-blue-700 group-hover/card:rounded-b-xl"
                  }`}
                >
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3 tracking-tight">{project.name}</h3>
                    <p className={`text-xs md:text-sm leading-relaxed ${isActive ? "text-zinc-800 dark:text-blue-100" : "text-zinc-500 dark:text-zinc-400 group-hover/card:text-zinc-800 dark:group-hover/card:text-blue-200"}`}>
                      {project.desc}
                    </p>
                  </div>
                </div>

                {/* Hidden Expanded Bottom Card */}
                <div className="absolute top-0 w-[95%] h-[180px] bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-[35px] -z-10 transition-all duration-500 ease-in-out group-hover/card:h-[260px] shadow-xl flex items-end justify-center pb-6">
                  <div className="opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 delay-150 flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm">
                    <Zap className="w-4 h-4" /> Initialize Live Preview
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Preview Window */}
        <div className="w-full h-[400px] sm:h-[500px] md:h-[650px] mt-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 overflow-hidden flex flex-col relative shadow-sm group">
          <div className="h-10 bg-zinc-100 dark:bg-zinc-900 flex items-center px-4 gap-2 shrink-0 border-b border-zinc-200 dark:border-zinc-800">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            <div className="mx-auto text-[10px] md:text-xs font-mono text-zinc-500 truncate px-2 max-w-[200px] sm:max-w-none">
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
                className="bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-100 p-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm shrink-0 border-b border-blue-100 dark:border-blue-900/30"
              >
                <div className="flex items-center gap-2 font-medium">
                  <Key className="w-4 h-4 opacity-70" /> Demo Login:
                </div>
                <div className="flex items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-xs bg-white dark:bg-zinc-900 px-2 sm:px-3 py-1 sm:py-1.5 rounded border border-blue-100 dark:border-zinc-800">
                  <span className="opacity-70">User:</span> <span>{activeProject.demoEmail}</span>
                  <span className="w-px h-3 bg-zinc-300 dark:bg-zinc-700" />
                  <span className="opacity-70">Pass:</span> <span>{activeProject.demoPass}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!iframeLoaded ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-8 text-center bg-zinc-50 dark:bg-zinc-950 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500 mb-4">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Load Live Application</h3>
              <p className="text-zinc-500 text-xs sm:text-sm mb-6 max-w-sm px-4">Click below to see the actual product running directly in your browser.</p>
              <button 
                onClick={() => setIframeLoaded(true)}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-transform hover:scale-105 shadow-sm text-xs sm:text-sm"
              >
                Run Demo
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
      </section>

      {/* Skills Showcase */}
      <section className="w-full z-10 py-10 sm:py-16 hidden sm:block">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold tracking-tight">The Arsenal</h2>
        </div>
        
        <div className="group relative flex justify-center items-center h-[250px] w-full max-w-3xl mx-auto cursor-default">
          {skills.map((skill, index) => {
            const rotations = ["-rotate-[20deg]", "-rotate-[10deg]", "rotate-0", "rotate-[10deg]", "rotate-[20deg]"];
            const margins = ["-mr-8", "-mr-8", "mx-0", "-ml-8", "-ml-8"];
            
            return (
              <div 
                key={skill.name}
                className={`relative w-[140px] h-[180px] bg-gradient-to-b from-zinc-200/60 to-transparent dark:from-white/10 dark:to-transparent border border-zinc-300/50 dark:border-white/10 shadow-[0_25px_25px_rgba(0,0,0,0.1)] dark:shadow-[0_25px_25px_rgba(0,0,0,0.5)] flex flex-col justify-center items-center rounded-[10px] backdrop-blur-[10px] transition-all duration-500 ease-out origin-bottom ${rotations[index]} ${margins[index]} group-hover:rotate-0 group-hover:mx-2 z-10 hover:!z-50 hover:-translate-y-4`}
              >
                <div className="text-zinc-800 dark:text-white drop-shadow-md mb-4">
                  {skill.icon}
                </div>
                
                <div className="absolute bottom-0 w-full h-[40px] bg-zinc-300/30 dark:bg-white/5 flex flex-col justify-center items-center border-t border-zinc-300/50 dark:border-white/10 rounded-b-[10px]">
                  <span className="text-zinc-800 dark:text-white font-bold text-sm">{skill.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full z-10 py-10">
        <div className="flex flex-col gap-2 mb-10 md:mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">The Build Process</h2>
          <p className="text-zinc-500 text-sm font-medium px-4">A straightforward framework to get your product live without the bloat.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 relative">
          <div className="hidden md:block absolute top-8 left-10 right-10 h-px bg-zinc-200 dark:bg-zinc-800 -z-10" />
          
          {processSteps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 shadow-sm z-10">
                {step.icon}
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">{step.title}</h3>
                <p className="text-[11px] sm:text-xs text-zinc-500 mt-1.5 leading-relaxed max-w-[200px]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full z-10 py-12 md:py-16">
        <div className="flex flex-col gap-3 mb-10 md:mb-12 text-center max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple, Transparent Pricing</h2>
          <p className="text-zinc-500 text-sm font-medium">Flexible scopes to fit your startup's exact stage. Not sure what you need? We can adjust features to match your budget.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto px-4">
          
          {/* Basic */}
          <div className="p-6 md:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 flex flex-col hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
            <h3 className="text-xl font-semibold mb-2">Basic</h3>
            <p className="text-zinc-500 text-sm mb-6 lg:min-h-[48px]">Test the waters. Perfect for validating a core idea quickly. Only frontend, no complex backend.</p>
            <div className="text-4xl md:text-5xl font-bold mb-8">₹999<span className="text-xl text-zinc-400">+</span></div>
            <ul className="space-y-3 text-sm font-medium mb-8 flex-1">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" /> High-conversion landing page</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" /> Fully mobile responsive</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" /> AEO / Basic SEO Setup</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" /> 2 revisions</li>
            </ul>
            <a href="#contact" className="w-full py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 text-center font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center">Start Basic</a>
          </div>

          {/* Growth - The Anchor */}
          <div className="p-6 md:p-8 rounded-3xl border-2 border-blue-500 bg-white dark:bg-zinc-900 flex flex-col relative shadow-xl transform lg:-translate-y-4 transition-all hover:shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-sm whitespace-nowrap">
              Best Value
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">MVP Build</h3>
            <p className="text-zinc-500 text-sm mb-6 lg:min-h-[48px]">
              The complete package to launch and scale a real business. Landing pages with complex design and backend support.
            </p>
            <div className="text-4xl md:text-5xl font-bold mb-8">₹2,999<span className="text-xl text-zinc-400">+</span></div>
            <ul className="space-y-3 text-sm font-medium mb-8 flex-1">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" /> Full web application build</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" /> Secure Database & Auth</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" /> Advanced Generative SEO (GEO)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" /> Priority delivery timeline</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" /> 4 revisions</li>
            </ul>
            <a href="#contact" className="w-full py-3 rounded-xl bg-blue-600 text-white text-center font-semibold hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center">Launch Your SaaS</a>
          </div>

          {/* Advanced */}
          <div className="p-6 md:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 flex flex-col hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
            <h3 className="text-xl font-semibold mb-2">Advanced</h3>
            <p className="text-zinc-500 text-sm mb-6 lg:min-h-[48px]">Built to scale. For complex architectures and unique bespoke solutions.</p>
            <div className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-zinc-400 dark:from-white dark:to-zinc-500">Custom</div>
            <ul className="space-y-3 text-sm font-medium mb-8 flex-1">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" /> Advanced LLMO Implementations</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" /> Complex 3rd-party APIs</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" /> Scalable cloud infrastructure</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" /> 7 revisions</li>
            </ul>
            <a href="https://wa.me/7388739691" target="_blank" rel="noreferrer" className="w-full py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 text-center font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" /> Let's Talk
            </a>
          </div>

        </div>
      </section>

      {/* Raw Feedback Testimonials */}
      <section className="w-full z-10 py-8">
        <div className="text-center mb-10 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Client Outcomes</h2>
          <p className="text-zinc-500 text-sm">Real results from founders scaling with my code.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 sm:p-5 rounded-2xl bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900/40 dark:to-zinc-800/40 border border-zinc-200 dark:border-zinc-700 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-blue-300 dark:hover:border-blue-600 group"
            >
              <div className="mb-4">
                <p className="text-sm sm:text-base font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed italic">
                  "{t.content}"
                </p>
              </div>
              <div>
                <div className="font-semibold text-sm sm:text-base capitalize text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">{t.name}</div>
                <div className="text-[10px] sm:text-xs text-blue-500 font-bold uppercase tracking-wide mt-1 group-hover:text-blue-400 transition-colors">{t.status}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full z-10 py-12 md:py-16 max-w-3xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Common Questions</h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-white/50 dark:bg-zinc-900/30"
            >
              <button 
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left font-semibold text-sm md:text-base"
              >
                {faq.q}
                <ChevronDown className={`w-5 h-5 text-zinc-500 transition-transform shrink-0 ml-4 ${openFaq === index ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-4 md:px-5 pb-4 md:pb-5 text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Frictionless Contact Section */}
      <motion.section
        id="contact"
        className="w-full max-w-4xl mx-auto bg-zinc-950 dark:bg-zinc-50 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-16 text-center text-white dark:text-black mt-8 shadow-xl relative overflow-hidden z-10"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">Let's figure it out together.</h2>
        <p className="text-zinc-500 dark:text-zinc-600 text-sm md:text-lg mb-8 md:mb-10 max-w-xl mx-auto font-medium">
          Got an idea but don't know where to start? Just drop a message. We'll have a casual chat about your project—no pressure, no sales tactics. Let's see if we're a good fit.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 w-full">
          <a href="https://wa.me/7388739691" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-6 md:px-8 py-3.5 md:py-4 rounded-xl bg-[#25D366] text-white hover:bg-[#20b858] transition-colors font-semibold text-sm md:text-base w-full sm:w-auto shadow-sm hover:-translate-y-1">
            <MessageCircle className="w-5 h-5 shrink-0" /> Drop a WhatsApp
          </a>
          <a href="mailto:shanibrooo@gmail.com" className="flex items-center justify-center gap-3 px-6 md:px-8 py-3.5 md:py-4 rounded-xl bg-zinc-800 dark:bg-zinc-200 text-white dark:text-black hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors font-semibold text-sm md:text-base w-full sm:w-auto hover:-translate-y-1">
            <Mail className="w-5 h-5 shrink-0" /> Send an Email
          </a>
        </div>
      </motion.section>

      <footer className="w-full text-center py-8 md:py-10 text-sm text-zinc-500 z-10 flex flex-col items-center gap-4 mt-4">
        <div className="w-8 h-8 bg-zinc-200 dark:bg-zinc-800 rounded-lg flex items-center justify-center font-bold text-zinc-400">S</div>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <p className="font-medium tracking-wide text-xs">© {new Date().getFullYear()} Shani.dev • Lucknow, India</p>
          <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">|</span>
          <Link href="/personal" className="font-medium tracking-wide text-xs hover:text-blue-500 transition-colors">
            Read the raw story
          </Link>
        </div>
      </footer>
    </div>
  );
}