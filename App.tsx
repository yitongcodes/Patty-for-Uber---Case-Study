
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  MessageSquare, 
  Calendar, 
  CheckCircle2, 
  Layers,
  Zap,
  ShieldCheck,
  Target,
  Users,
  FileText,
  Edit3,
  Check,
  MousePointer2,
  Type,
  Palette,
  Layout,
  Cpu,
  ArrowRight,
  TrendingUp,
  Activity,
  Command,
  HelpCircle,
  Eye,
  Clock,
  Columns,
  Maximize2,
  MousePointerClick,
  Database,
  Network
} from 'lucide-react';

/** 
 * PATTY FOR UBER: HEAVY CASE STUDY 
 * High-contrast, bold, and architecturally dense.
 * Enhanced with Floating Side Navigation.
 */

// --- Navigation Config ---
const NAV_ITEMS = [
  { id: 'overview', label: 'Overview' },
  { id: 'research', label: 'Research' },
  { id: 'principles', label: 'Principles' },
  { id: 'solution', label: 'Solution' },
  { id: 'design', label: 'Visual Design' },
  { id: 'use-cases', label: 'Use Cases' },
  { id: 'motion', label: 'Motion' },
  { id: 'results', label: 'Results' },
  { id: 'reflection', label: 'Reflection' },
];

// --- Floating Side Navigation ---
const FloatingSidebar = () => {
  const [activeId, setActiveId] = useState('overview');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-10% 0px -70% 0px' }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -20; 
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  return (
    <div className="fixed left-0 top-0 bottom-0 w-64 z-[100] hidden lg:flex flex-col justify-center px-12 pointer-events-none">
      <div className="pointer-events-auto flex flex-col items-start space-y-8">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-uber-gray-600 mb-4">Contents</p>
        <div className="flex flex-col space-y-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-left text-xs font-black uppercase tracking-widest transition-all duration-300 group flex items-center gap-4 ${
                activeId === item.id ? 'text-white translate-x-2' : 'text-uber-gray-600 hover:text-white'
              }`}
            >
              {activeId === item.id && (
                <motion.div 
                  layoutId="active-nav-line" 
                  className="w-1.5 h-1.5 bg-uber-accent shadow-purple-glow" 
                />
              )}
              <span className={activeId === item.id ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Design System Components (Base) ---

const BaseButton = ({ 
  children, 
  variant = 'primary', 
  className = "" 
}: { 
  children: React.ReactNode, 
  variant?: 'primary' | 'secondary' | 'ghost', 
  className?: string 
}) => {
  const styles = {
    primary: "bg-white text-black hover:bg-uber-gray-200",
    secondary: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black",
    ghost: "bg-transparent text-uber-gray-400 hover:text-white"
  };
  return (
    <button className={`px-8 py-4 font-black text-xs tracking-[0.2em] uppercase transition-all rounded-none ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
};

const SectionHeader = ({ title, subtitle, pill, dark = true }: { title: string, subtitle?: string, pill?: string, dark?: boolean }) => (
  <div className="mb-20">
    {pill && (
      <span className={`inline-block px-3 py-1 ${dark ? 'bg-uber-accent text-white' : 'bg-black text-white'} text-[10px] font-black tracking-[0.3em] uppercase mb-6`}>
        {pill}
      </span>
    )}
    <h2 className={`text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-8 ${dark ? 'text-white' : 'text-black uppercase'}`}>
      {title}
    </h2>
    {subtitle && <p className={`text-xl max-w-2xl leading-relaxed font-medium ${dark ? 'text-uber-gray-400' : 'text-uber-gray-600'}`}>{subtitle}</p>}
  </div>
);

// --- Perry-Style Annotation ---
const Annotation = ({ text, className = "" }: { text: string, className?: string }) => (
  <div className={`flex gap-3 group items-start z-40 ${className}`}>
    <div className="w-6 h-6 bg-uber-accent flex items-center justify-center text-white shrink-0 mt-1 shadow-purple-glow">
      <HelpCircle size={12} />
    </div>
    <p className="text-[11px] font-black uppercase tracking-widest text-uber-accent leading-tight bg-black/90 backdrop-blur-md p-2 border border-uber-accent/40 max-w-[200px]">
      {text}
    </p>
  </div>
);

// --- Tangible UX Visual Components ---

const ScopeVennVisual = () => (
  <div className="relative bg-black border border-white/10 p-16 overflow-hidden flex flex-col items-center">
    <Annotation text="Opportunity: Use AI as an intent layer — not to replace systems, but to connect them." className="absolute top-8 right-8" />
    <div className="relative w-full max-w-2xl h-80 flex items-center justify-center">
      <div className="absolute left-1/4 -translate-x-1/4 w-64 h-64 rounded-full border-2 border-white/20 bg-white/5 flex flex-col items-center justify-center gap-2">
        <Database size={24} className="text-white/40" />
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Legacy_Systems</span>
      </div>
      
      <div className="absolute right-1/4 translate-x-1/4 w-64 h-64 rounded-full border-2 border-uber-accent/40 bg-uber-accent/5 flex flex-col items-center justify-center gap-2">
        <Zap size={24} className="text-uber-accent/60" />
        <span className="text-[10px] font-black uppercase tracking-widest text-uber-accent/60">AI_Capabilities</span>
      </div>

      <motion.div 
        animate={{ scale: [1, 1.05, 1] }} 
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="z-10 w-48 h-48 rounded-full bg-uber-accent flex flex-col items-center justify-center text-white shadow-purple-glow border-4 border-black"
      >
        <div className="w-10 h-10 bg-white rounded-none flex items-center justify-center text-uber-accent font-black text-xl mb-2">P</div>
        <span className="text-[12px] font-black uppercase tracking-tighter text-center">Intent_Layer</span>
      </motion.div>
    </div>
    
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl text-center">
      <div className="space-y-2">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-uber-gray-500">Domain_A</p>
        <p className="text-xs font-bold text-uber-gray-400">Policy Databases, HR Tools, Internal Portals</p>
      </div>
      <div className="space-y-2">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-uber-accent">The_Synthesis</p>
        <p className="text-xs font-bold text-white">Connecting Intent to Action</p>
      </div>
      <div className="space-y-2">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-uber-gray-500">Domain_B</p>
        <p className="text-xs font-bold text-uber-gray-400">NLP, LLM Orchestration, Generative Flows</p>
      </div>
    </div>
  </div>
);

const LayoutSystemVisual = () => (
  <div className="relative bg-uber-gray-900 border border-white/10 p-8 overflow-hidden group">
    <Annotation text="Three-zone layout supports dense enterprise workflows without overwhelming focus." className="absolute top-4 right-4" />
    <div className="aspect-video bg-black/40 border border-white/5 flex gap-2 p-2">
      <div className="w-12 h-full bg-uber-gray-800 border border-white/10 flex flex-col items-center py-4 gap-4">
        <div className="w-6 h-6 bg-white/10"></div>
        <div className="w-6 h-6 bg-white/10"></div>
        <div className="w-6 h-6 bg-white/10"></div>
      </div>
      <div className="flex-1 h-full bg-uber-gray-900 border border-white/10 p-4 space-y-4">
        <div className="h-4 w-1/3 bg-white/10"></div>
        <div className="h-32 w-full bg-white/5 border border-white/5"></div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-20 bg-white/5"></div>
          <div className="h-20 bg-white/5"></div>
        </div>
      </div>
      <div className="w-40 h-full bg-uber-gray-800/50 border border-white/10 p-4 space-y-3">
        <div className="h-3 w-full bg-white/10"></div>
        <div className="h-12 w-full bg-uber-accent/10 border border-uber-accent/20"></div>
        <div className="h-12 w-full bg-white/5"></div>
      </div>
    </div>
    <div className="mt-8 grid grid-cols-3 gap-8 text-[10px] font-black uppercase tracking-widest text-uber-gray-500">
      <div>01_Left_Navigation</div>
      <div>02_Primary_Content</div>
      <div>03_Secondary_Rail</div>
    </div>
  </div>
);

const ProcessDrift = () => (
  <div className="bg-black border border-white/10 p-8 flex flex-col gap-6 relative">
    <Annotation text="Search groups by intent (Actions, Docs, People) to support task-first navigation." className="absolute -top-10 -right-4" />
    <div className="flex justify-between items-center">
      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-uber-gray-500">UX_Complexity_Compression</p>
      <div className="px-2 py-0.5 bg-green-500 text-[8px] font-black text-black uppercase">Optimized</div>
    </div>
    <div className="grid grid-cols-2 gap-12">
      <div className="space-y-3 opacity-30">
        <p className="text-[10px] font-black uppercase text-uber-gray-600">Legacy_Path (14m)</p>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-2 w-full bg-uber-gray-800 flex items-center px-2">
            <div className="h-1 w-1 bg-uber-gray-600 rounded-full"></div>
          </div>
        ))}
      </div>
      <div className="space-y-3">
        <p className="text-[10px] font-black uppercase text-uber-accent">Patty_Path (45s)</p>
        <div className="h-4 w-full bg-uber-accent/20 border border-uber-accent flex items-center px-2 gap-2">
          <Command size={8} className="text-uber-accent" />
          <div className="h-1 w-16 bg-uber-accent"></div>
        </div>
        <div className="h-4 w-full bg-uber-accent/20 border border-uber-accent flex items-center px-2 gap-2">
          <Check size={8} className="text-uber-accent" />
          <div className="h-1 w-12 bg-uber-accent"></div>
        </div>
      </div>
    </div>
  </div>
);

const AIDraftCard = ({ title, content }: { title: string, content: string }) => (
  <div className="bg-uber-gray-900 border-2 border-uber-accent shadow-purple-glow p-8 relative overflow-hidden group">
    <Annotation text="AI output appears as a draft, not a final action — reinforcing user agency." className="absolute -top-12 left-0 opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="mb-8">
      <span className="text-[10px] font-black text-uber-accent uppercase tracking-[0.3em] flex items-center gap-2 mb-2">
        <div className="w-2 h-2 bg-uber-accent animate-pulse"></div> AI Orchestration
      </span>
      <h4 className="font-black text-2xl text-white">{title}</h4>
    </div>
    <div className="bg-black/50 p-6 border border-white/10 text-sm text-uber-gray-400 mb-8 font-mono leading-relaxed h-32 overflow-hidden relative">
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black to-transparent"></div>
      {content}
    </div>
    <div className="flex gap-4">
      <BaseButton variant="primary" className="flex-1 !py-3">Approve</BaseButton>
      <BaseButton variant="secondary" className="flex-1 !py-3">Edit</BaseButton>
    </div>
  </div>
);

const PattyChatBubble = ({ message, isAI = true }: { message: string, isAI?: boolean }) => (
  <div className={`flex ${isAI ? 'justify-start' : 'justify-end'} mb-8 relative group`}>
    <div className={`max-w-[85%] p-6 ${isAI ? 'bg-uber-accent text-white shadow-heavy' : 'bg-uber-gray-800 text-white'} border border-white/5`}>
      {isAI && (
        <div className="flex items-center gap-3 mb-3">
          <div className="w-6 h-6 bg-white rounded-none flex items-center justify-center text-uber-accent font-black text-[10px]">P</div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 italic">Patty_v2.5</span>
        </div>
      )}
      <p className="text-base leading-relaxed font-bold tracking-tight">{message}</p>
    </div>
  </div>
);

// --- Main Sections ---

const Hero = () => (
  <section id="overview" className="min-h-screen flex items-center relative overflow-hidden bg-black py-32 lg:pl-64">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-uber-accent/10 to-transparent pointer-events-none"></div>
    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-uber-accent/20 blur-[120px] rounded-full"></div>

    <div className="container mx-auto px-12 lg:px-24 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex flex-col gap-8 mb-20">
            <span className="inline-block px-3 py-1 bg-white text-black text-[10px] font-black tracking-[0.3em] uppercase w-fit">
              Early-stage exploratory project
            </span>
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-white flex items-center justify-center text-black font-black text-4xl shrink-0">P</div>
              <div className="h-16 w-[1px] bg-white/20"></div>
              <p className="text-sm font-black tracking-widest uppercase italic text-uber-gray-400 max-w-[200px] leading-snug">
                Early AI exploration · Enterprise intranet · 2023
              </p>
            </div>
          </div>
          
          <h1 className="text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter mb-12 uppercase">
            Patty — <br/><span className="text-outline">AI Assistant.</span>
          </h1>
          
          <p className="text-2xl text-white max-w-lg mb-16 font-black leading-tight">
            A post-ChatGPT vision exploring how AI could translate employee intent into action inside a large-scale enterprise intranet.
          </p>
          
          <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-12">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-uber-accent mb-3">Product_Designer</p>
              <p className="text-xl font-black">Yitong Du</p>
              <p className="text-xs text-uber-gray-500 font-bold uppercase mt-1">UX · AI Interaction · Research</p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-uber-accent mb-3">Sponsorship</p>
              <p className="text-xl font-black">16 Weeks</p>
              <p className="text-xs text-uber-gray-500 font-bold uppercase mt-1">Sponsored Concept</p>
            </div>
          </div>
        </motion.div>
        
        <div className="relative group/hero">
          <motion.div animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.8 }} className="bg-uber-gray-900 aspect-[4/5] shadow-heavy border border-white/10 p-12 flex flex-col gap-8 relative z-10">
             <Annotation text="Layout: 3-zone layout (nav, content, rail) supports dense enterprise workflows." className="absolute -bottom-24 left-0" />
             
             <div className="flex items-center gap-4 border-b border-white/10 pb-8">
               <div className="w-12 h-12 bg-uber-accent flex items-center justify-center text-white font-black text-xl shadow-purple-glow">P</div>
               <div className="h-3 w-40 bg-white/10"></div>
             </div>
             
             <PattyChatBubble message="Hi Eric! I've summarized the PTO policy update for you. Ready to draft your leave request?" />
             
             <div className="mt-auto">
                <AIDraftCard title="Leave_Request_Draft" content="Type: Personal Leave | Duration: 2 Weeks | Starting: Oct 12, 2023 | Source: HR Policy Doc v4.2" />
             </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -top-24 -right-16 bg-white text-black p-8 shadow-heavy border-b-8 border-uber-accent z-30 pointer-events-none"
          >
             <p className="text-[10px] font-black uppercase tracking-widest mb-1">Efficiency_Gain</p>
             <p className="text-5xl font-black tracking-tighter">80%</p>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen font-sans selection:bg-uber-accent selection:text-white overflow-x-hidden">
      <FloatingSidebar />
      
      <Hero />
      
      <section id="research" className="py-40 bg-black relative lg:pl-64">
        <div className="container mx-auto px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
               <SectionHeader 
                  pill="The Context"
                  title="Why rethink an intranet with AI?" 
                  subtitle="Enterprise intranets are powerful but fragmented. Information is present, but hard to action."
               />
            </div>
            <div className="text-2xl text-uber-gray-400 font-bold leading-tight flex flex-col justify-end">
              <p className="mb-12">
                Employees began expecting natural-language assistance, while intranets remained document-centric. <span className="text-white">Opportunity:</span> Use AI as an intent layer.
              </p>
              <div className="bg-uber-accent p-12 text-white shadow-heavy">
                 <p className="text-xs font-black uppercase tracking-[0.4em] mb-4">The_Stance</p>
                 <p className="text-3xl font-black italic tracking-tighter uppercase">AI should assist, <br/>not decide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 bg-uber-gray-900 border-y border-white/5 lg:pl-64">
        <div className="container mx-auto px-12 lg:px-24">
          <SectionHeader 
            pill="Research & Industry Validation"
            title="Grounded in enterprise UX." 
            subtitle="This project was anchored in established intranet research and enterprise UX principles."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32 mb-24">
            <div className="space-y-12">
              <p className="text-2xl font-bold leading-tight">Industry studies show that high-performing intranets prioritize:</p>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <TrendingUp className="text-uber-accent shrink-0" size={32} />
                  <p className="text-xl text-uber-gray-400">Task completion over content volume.</p>
                </div>
                <div className="flex gap-6 items-start">
                  <Search className="text-uber-accent shrink-0" size={32} />
                  <p className="text-xl text-uber-gray-400">Search that routes users to actions, not just documents.</p>
                </div>
              </div>
            </div>
            <div className="bg-black border-4 border-white p-16 flex flex-col justify-center">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-uber-accent mb-8">Our_Research_Stack</p>
              <div className="grid grid-cols-2 gap-12 text-center">
                <div><p className="text-6xl font-black mb-2">05</p><p className="text-xs uppercase font-bold text-uber-gray-500">Expert Interviews</p></div>
                <div><p className="text-6xl font-black mb-2">18</p><p className="text-xs uppercase font-bold text-uber-gray-500">Surveys</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="principles" className="py-40 bg-black lg:pl-64">
        <div className="container mx-auto px-12 lg:px-24">
          <SectionHeader title="Design Principles." subtitle="The non-negotiables that guided every interaction in Patty." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/10 border border-white/10">
            {[
              { icon: Target, title: "Task-first, not doc-first", desc: "Employees search to get work done, not just to read files." },
              { icon: Users, title: "Human-in-the-loop control", desc: "AI proposes; users approve. The human always signs off." },
              { icon: Zap, title: "Progressive intelligence", desc: "Transitions seamlessly from Search → Guidance → Conversation." },
              { icon: Eye, title: "Transparency over magic", desc: "All AI output is previewable, editable, and citeable." },
              { icon: Layout, title: "Enterprise calm", desc: "Clarity and predictability over novelty or visual noise." },
              { icon: Cpu, title: "Intent Layer", desc: "AI interprets vague requests and orchestrates multi-step systems." }
            ].map((p, i) => (
              <div key={i} className="bg-black p-12 group hover:bg-uber-accent transition-colors duration-500">
                <p.icon className="mb-8 text-uber-accent group-hover:text-white" size={40} />
                <h4 className="text-2xl font-black mb-4 uppercase tracking-tight group-hover:text-white">{p.title}</h4>
                <p className="text-uber-gray-400 group-hover:text-white/80 font-bold leading-snug">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solution" className="py-40 bg-uber-gray-900 border-y border-white/5 lg:pl-64">
        <div className="container mx-auto px-12 lg:px-24">
          <SectionHeader 
            pill="Solution Overview"
            title="Two entry points. <br/>One mental model." 
            subtitle="Smart Search and Patty Assistant work in tandem to flatten organizational hierarchy."
          />
          <div className="space-y-12 mb-24">
            <ScopeVennVisual />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-black p-12 border border-white/10 group">
              <Annotation text="Smart Search: Results grouped by Actions, Docs, People." className="mb-8" />
              <h4 className="text-3xl font-black mb-4 uppercase">Smart Search</h4>
              <p className="text-uber-gray-400 font-bold mb-8">Interprets intent, surfaces actions directly from the search bar.</p>
              <div className="h-16 w-full bg-white/5 flex items-center px-6 gap-4 border border-white/10">
                 <Search size={20} className="text-uber-accent" />
                 <div className="h-2 w-48 bg-white/20"></div>
              </div>
            </div>
            <div className="bg-black p-12 border border-white/10 group">
              <Annotation text="Patty Assistant: Conversational AI that drafts artifacts." className="mb-8" />
              <h4 className="text-3xl font-black mb-4 uppercase">Patty Assistant</h4>
              <p className="text-uber-gray-400 font-bold mb-8">Deep conversational support for complex, multi-step tasks.</p>
              <div className="flex gap-4">
                 <div className="w-10 h-10 bg-uber-accent rounded-sm"></div>
                 <div className="flex-1 h-10 bg-white/5 border border-white/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="design" className="py-40 bg-black lg:pl-64">
        <div className="container mx-auto px-12 lg:px-24">
          <SectionHeader 
            pill="Visual & UI Design"
            title="Visual design rationale." 
            subtitle="The visual system prioritizes legibility over decoration, aligning with Uber's public design language."
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
            <div className="lg:col-span-12">
               <LayoutSystemVisual />
            </div>
            <div className="lg:col-span-12 bg-black p-12 border border-white/10 relative">
              <Annotation text="Calm surfaces for dense information." className="absolute -top-12 left-10" />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                 <div className="space-y-4">
                    <p className="text-[10px] font-black uppercase text-uber-gray-500 tracking-widest">Typeface_Uber_Move</p>
                    <p className="text-4xl font-black">Aa</p>
                 </div>
                 <div className="space-y-4">
                    <p className="text-[10px] font-black uppercase text-uber-gray-500 tracking-widest">Colors</p>
                    <div className="flex gap-2">
                       <div className="w-8 h-8 bg-white border border-white/10"></div>
                       <div className="w-8 h-8 bg-uber-accent shadow-purple-glow"></div>
                       <div className="w-8 h-8 bg-uber-gray-800"></div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="use-cases" className="py-40 bg-uber-gray-900 border-t border-white/5 lg:pl-64">
        <div className="container mx-auto px-12 lg:px-24">
           <SectionHeader pill="Key Use Cases" title="Intent in action." />
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-40">
              <div className="space-y-8">
                <p className="text-xs font-black uppercase tracking-[0.4em] text-uber-accent mb-3">Case_01</p>
                <h4 className="text-4xl font-black uppercase">Planning Personal Leave</h4>
                <p className="text-xl text-uber-gray-400 font-bold leading-relaxed">Simplifying policy interpretation and request drafting for HR workflows.</p>
                <div className="bg-white p-8 text-black"><p className="text-7xl font-black tracking-tighter">80%</p><p className="text-xs font-black uppercase tracking-widest">Efficiency Reclaimed</p></div>
              </div>
              <div className="aspect-square bg-black border border-white/10 p-12 flex flex-col justify-center">
                 <div className="h-12 w-full bg-uber-accent/10 border border-uber-accent p-4 mb-4"></div>
                 <div className="h-4 w-1/2 bg-white/10 mb-2"></div>
                 <div className="h-4 w-3/4 bg-white/10"></div>
              </div>
           </div>
        </div>
      </section>

      <section id="motion" className="py-40 bg-black lg:pl-64">
        <div className="container mx-auto px-12 lg:px-24">
          <SectionHeader pill="Motion Design" title="Motion as clarity." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-uber-gray-900 p-12 border border-white/10 group">
               <div className="h-2 w-full bg-white/5 relative overflow-hidden mb-6">
                  <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="absolute top-0 left-0 h-full w-1/3 bg-uber-accent"></motion.div>
               </div>
               <p className="font-black text-xl mb-2">Explain Status</p>
            </div>
            <div className="bg-uber-gray-900 p-12 border border-white/10 group">
               <div className="flex justify-between items-center mb-6">
                  <div className="w-12 h-12 border-2 border-uber-accent rounded-sm"></div>
                  <ArrowRight className="text-uber-accent" />
                  <div className="w-12 h-12 bg-uber-accent shadow-purple-glow"></div>
               </div>
               <p className="font-black text-xl mb-2">Reinforce Trust</p>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="py-60 bg-white text-black relative lg:pl-64">
        <div className="container mx-auto px-12 lg:px-24 text-center">
          <SectionHeader dark={false} pill="Validation & Outcomes" title="Early Results." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mt-24">
            <div>
              <p className="text-9xl font-black mb-8 tracking-tighter">75%</p>
              <p className="text-xl font-bold uppercase tracking-widest text-uber-gray-600 italic">Lift in Usability</p>
            </div>
            <div>
              <p className="text-9xl font-black mb-8 tracking-tighter text-uber-accent">92%</p>
              <p className="text-xl font-bold uppercase tracking-widest text-uber-gray-600 italic">Increased Trust</p>
            </div>
          </div>
        </div>
      </section>

      <section id="reflection" className="py-40 bg-uber-gray-900 border-t-8 border-uber-accent lg:pl-64">
        <div className="container mx-auto px-12 lg:px-24">
          <div className="max-w-4xl">
            <SectionHeader title="Reflection." subtitle="AI UX is about calibrated autonomy. Trust is designed, not assumed." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-xl text-uber-gray-400 font-bold leading-tight">
               <p>Enterprise UX succeeds when systems feel predictable and humane.</p>
               <p>Next: Scale workflows and design edge cases for global enterprise data.</p>
            </div>
            <div className="flex flex-wrap gap-8 mt-20">
               <BaseButton variant="primary">Access Prototype</BaseButton>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-32 bg-black border-t border-white/10 lg:pl-64">
        <div className="container mx-auto px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-20">
          <div className="flex items-center gap-6">
             <div className="w-14 h-14 bg-white flex items-center justify-center text-black font-black text-3xl">P</div>
             <p className="font-black text-xl uppercase tracking-tighter">Patty_Intranet.</p>
          </div>
          <p className="text-xs font-black text-uber-gray-500 uppercase tracking-widest">© 2024 Yitong Du</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
