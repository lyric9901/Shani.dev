"use client";

import { motion } from "framer-motion";
import { 
  Terminal, Zap, Target, 
  TrendingUp, RefreshCw, MessageCircle, Mail
} from "lucide-react";

export default function PersonalPage() {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  } as const;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-200 font-sans selection:bg-blue-500/30 relative overflow-hidden">
      
      {/* Background Ambient Gradients */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto px-6 py-20 md:py-32 relative z-10 flex flex-col gap-16 md:gap-24"
      >
        
        {/* 1. Hero Section */}
        <motion.section variants={itemVariants} className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit text-xs font-mono text-zinc-400 tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Executing
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500 leading-[1.1]">
            I build systems that generate value.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-medium leading-relaxed">
            Developer. AI Tinkerer. Builder. <br className="hidden md:block" />
            I write code to solve real market problems, leverage automation, and scale businesses.
          </p>
        </motion.section>

        {/* 2. About Me (The Reality) */}
        <motion.section variants={itemVariants} className="p-8 md:p-10 rounded-[2rem] bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors duration-700" />
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Terminal className="w-6 h-6 text-blue-400" /> The Reality
          </h2>
          <div className="space-y-4 text-zinc-400 text-lg leading-relaxed max-w-3xl">
            <p>
              I'm Shah Nawaz aka Shani, a developer based in Lucknow. While others are waiting for the "right time" to start, I'm actively shipping products. I don't care about traditional paths or padded resumes.
            </p>
            <p>
              I care about building scalable web applications for startups, integrating AI, and creating actual market value. I learn by deploying, I iterate rapidly, and I treat every line of code as a vehicle for growth and profitability.
            </p>
          </div>
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 3. Mindset / Philosophy */}
          <motion.section variants={itemVariants} className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Zap className="w-6 h-6 text-yellow-400" /> Core Principles
            </h2>
            <ul className="space-y-5">
              {[
                "Execution over ideation. Ideas are cheap; shipping is everything.",
                "Build fast, validate immediately, scale what works.",
                "Code is just a tool. The end goal is solving problems and generating revenue.",
                "AI is leverage. If you aren't automating, you are falling behind.",
                "Zero tolerance for bloated, overcomplicated architecture."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-300 font-medium">
                  <span className="text-blue-500 font-bold mt-0.5">↳</span> {text}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* 4. Currently Doing (Bento Box style) */}
          <motion.section variants={itemVariants} className="flex flex-col gap-4">
            <div className="p-6 rounded-[2rem] bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex-1">
              <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-2">Building</h3>
              <p className="text-lg font-semibold text-zinc-200">
                Developing AI-driven web applications and high-performance SaaS tools.
              </p>
            </div>
            <div className="p-6 rounded-[2rem] bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex-1">
              <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-2">Learning</h3>
              <p className="text-lg font-semibold text-zinc-200">
                Advanced system architecture, applied AI integration, and digital monetization.
              </p>
            </div>
            <div className="p-6 rounded-[2rem] bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-md flex-1">
              <h3 className="text-sm font-mono text-blue-400/80 uppercase tracking-widest mb-2">Next Milestone</h3>
              <p className="text-lg font-bold text-white">
                Deploying high-leverage software that generates independent, scalable revenue.
              </p>
            </div>
          </motion.section>
        </div>

        {/* 5. Stack (Floating / Experimental Layout) */}
        <motion.section variants={itemVariants} className="py-10">
          <h2 className="text-center text-sm font-mono text-zinc-500 uppercase tracking-widest mb-10">Tools of Leverage</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {["Next.js", "React 19", "Tailwind CSS", "TypeScript", "Node.js", "Supabase", "OpenAI APIs", "PostgreSQL"].map((tech, i) => (
              <motion.div
                key={tech}
                animate={{ 
                  y: [0, -8, 0],
                }}
                transition={{ 
                  duration: 3 + (i % 3), 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: i * 0.2
                }}
                className="px-6 py-3 rounded-full bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.08] hover:border-white/[0.2] hover:scale-110 transition-all cursor-default backdrop-blur-md font-medium text-zinc-300 tracking-wide shadow-xl"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 6. Traits / Personality */}
        <motion.section variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-6 rounded-[2rem] bg-zinc-900/50 border border-white/[0.05] flex flex-col items-center text-center gap-3 hover:bg-zinc-900 transition-colors">
            <Target className="w-8 h-8 text-blue-500" />
            <h3 className="font-bold text-white">Deep Work</h3>
            <p className="text-sm text-zinc-500">No distractions. Just a blank editor, extreme focus, and hours of uninterrupted execution.</p>
          </div>
          <div className="p-6 rounded-[2rem] bg-zinc-900/50 border border-white/[0.05] flex flex-col items-center text-center gap-3 hover:bg-zinc-900 transition-colors">
            <TrendingUp className="w-8 h-8 text-green-500" />
            <h3 className="font-bold text-white">Wealth Mechanics</h3>
            <p className="text-sm text-zinc-500">Obsessed with business models, capital allocation, and the architecture of making money online.</p>
          </div>
          <div className="p-6 rounded-[2rem] bg-zinc-900/50 border border-white/[0.05] flex flex-col items-center text-center gap-3 hover:bg-zinc-900 transition-colors">
            <RefreshCw className="w-8 h-8 text-purple-500" />
            <h3 className="font-bold text-white">Iterative Optimization</h3>
            <p className="text-sm text-zinc-500">Always refining. Whether it's a codebase, a daily routine, or a revenue stream, I ruthlessly look for the upgrade.</p>
          </div>
        </motion.section>

        {/* 7. Contact CTA */}
        <motion.section variants={itemVariants} className="mt-10 p-10 md:p-16 rounded-[3rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.05] text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50" />
          
          <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10 tracking-tight">
            Let's build something <br className="hidden sm:block" /> profitable.
          </h2>
          <p className="text-zinc-400 mb-10 max-w-md mx-auto relative z-10">
            Whether you need a scalable system engineered or want to partner on a high-leverage project—let's talk business.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <a href="https://wa.me/7388739691" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 border border-[#25D366]/20 transition-all font-bold">
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </a>
            <a href="https://instagram.com/shani_is_dead" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-pink-500/10 text-pink-400 hover:bg-pink-500/20 border border-pink-500/20 transition-all font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              Instagram
            </a>
            <a href="mailto:shanibrooo@gmail.com" className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/10 text-white hover:bg-white/20 border border-white/10 transition-all font-bold">
              <Mail className="w-5 h-5" /> Email
            </a>
          </div>
        </motion.section>

      </motion.div>
    </div>
  );
}