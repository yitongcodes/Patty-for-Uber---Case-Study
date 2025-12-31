
import React from 'react';
import { motion } from 'framer-motion';
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
 * Content updated per revised script.
 */

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
  <div className={`flex gap-3 group items-start ${className}`}>
    <div className="w-6 h-6 bg-uber-accent flex items-center justify-center text-white shrink-0 mt-1 shadow-purple-glow">
      <HelpCircle size={12} />
    </div>
    <p className="text-[11px] font-black uppercase tracking-widest text-uber-accent leading-tight bg-black/80 backdrop-blur-md p-2 border border-uber-accent/40">
      {text}
    </p>
  </div>
);

// --- Tangible UX Visual Components ---

const ScopeVennVisual = () => (
  <div className="relative bg-black border border-white/10 p-16 overflow-hidden flex flex-col items-center">
    <Annotation text="Opportunity: Use AI as an intent layer — not to replace systems, but to connect them." className="absolute top-8 right-8 z-20" />
    <div className="relative w-full max-w-2xl h-80 flex items-center justify-center">
      {/* Circle 1: Intranet Systems */}
      <div className="absolute left-1/4 -translate-x-1/4 w-64 h-64 rounded-full border-2 border-white/20 bg-white/5 flex flex-col items-center justify-center gap-2">
        <Database size={24} className="text-white/40" />
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Legacy_Systems</span>
      </div>
      
      {/* Circle 2: AI Capabilities */}
      <div className="absolute right-1/4 translate-x-1/4 w-64 h-64 rounded-full border-2 border-uber-accent/40 bg-uber-accent/5 flex flex-col items-center justify-center gap-2">
        <Zap size={24} className="text-uber-accent/60" />
        <span className="text-[10px] font-black uppercase tracking-widest text-uber-accent/60">AI_Capabilities</span>
      </div>

      {/* Intersection: Patty Intent Layer */}
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
    <Annotation text="Three-zone layout supports dense enterprise workflows without overwhelming focus." className="absolute top-4 right-4 z-20" />
    <div className="aspect-video bg-black/40 border border-white/5 flex gap-2 p-2">
      {/* Zone 1: Nav */}
      <div className="w-12 h-full bg-uber-gray-800 border border-white/10 flex flex-col items-center py-4 gap-4">
        <div className="w-6 h-6 bg-white/10"></div>
        <div className="w-6 h-6 bg-white/10"></div>
        <div className="w-6 h-6 bg-white/10"></div>
      </div>
      {/* Zone 2: Content */}
      <div className="flex-1 h-full bg-uber-gray-900 border border-white/10 p-4 space-y-4">
        <div className="h-4 w-1/3 bg-white/10"></div>
        <div className="h-32 w-full bg-white/5 border border-white/5"></div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-20 bg-white/5"></div>
          <div className="h-20 bg-white/5"></div>
        </div>
      </div>
      {/* Zone 3: Rail */}
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
    <Annotation text="Search groups by intent (Actions, Docs, People) to support task-first navigation." className="absolute -top-10 -right-4 z-20" />
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

const ContextMap = () => (
  <div className="relative aspect-video bg-uber-gray-900 border border-white/10 overflow-hidden flex items-center justify-center">
    <Annotation text="Explicit preview and confirmation states were introduced to restore trust." className="absolute bottom-4 left-4 z-20" />
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
    <div className="relative w-48 h-48">
      <div className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
      <div className="absolute inset-4 border-2 border-dashed border-uber-accent/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-uber-accent flex items-center justify-center shadow-purple-glow">
        <Cpu size={24} className="text-white" />
      </div>
    </div>
  </div>
);

// --- AI Native Components ---

const AIDraftCard = ({ title, content }: { title: string, content: string }) => (
  <div className="bg-uber-gray-900 border-2 border-uber-accent shadow-purple-glow p-8 relative overflow-hidden group">
    <Annotation text="AI output appears as a draft, not a final action — reinforcing user agency." className="absolute -top-12 left-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity" />
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

// --- Sections ---

const Hero = () => (
  <section className="min-h-screen flex items-center relative overflow-hidden bg-black py-32">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-uber-accent/10 to-transparent pointer-events-none"></div>
    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-uber-accent/20 blur-[120px] rounded-full"></div>

    <div className="container mx-auto px-12 lg:px-24 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex flex-col gap-6 mb-16">
            <span className="inline-block px-3 py-1 bg-white text-black text-[10px] font-black tracking-[0.3em] uppercase w-fit">
              Early-stage exploratory project
            </span>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white flex items-center justify-center text-black font-black text-4xl">P</div>
              <div className="h-12 w-[2px] bg-white/20"></div>
              <p className="text-sm font-black tracking-widest uppercase italic text-uber-gray-400">
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
        
        <div className="relative">
          <motion.div animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.8 }} className="bg-uber-gray-900 aspect-[4/5] shadow-heavy border border-white/10 p-12 flex flex-col gap-8 relative">
             <Annotation text="Layout: 3-zone layout (nav, content, rail) supports dense enterprise workflows." className="absolute -top-16 right-0" />
             <div className="flex items-center gap-4 border-b border-white/10 pb-8">
               <div className="w-12 h-12 bg-uber-accent flex items-center justify-center text-white font-black text-xl shadow-purple-glow">P</div>
               <div className="h-3 w-40 bg-white/10"></div>
             </div>
             <PattyChatBubble message="Hi Eric! I've summarized the PTO policy update for you. Ready to draft your leave request?" />
             <div className="mt-auto">
                <AIDraftCard title="Leave_Request_Draft" content="Type: Personal Leave | Duration: 2 Weeks | Starting: Oct 12, 2023 | Source: HR Policy Doc v4.2" />
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const ResearchSection = () => (
  <section className="py-40 bg-uber-gray-900 border-y border-white/5">
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
            <div className="flex gap-6 items-start">
              <Clock className="text-uber-accent shrink-0" size={32} />
              <p className="text-xl text-uber-gray-400">Reduced time-to-action for HR and operational workflows.</p>
            </div>
          </div>
        </div>
        <div className="bg-black border-4 border-white p-16 flex flex-col justify-center">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-uber-accent mb-8">Our_Research_Stack</p>
          <div className="grid grid-cols-2 gap-12 text-center">
            <div><p className="text-6xl font-black mb-2">05</p><p className="text-xs uppercase font-bold text-uber-gray-500">Expert Interviews</p></div>
            <div><p className="text-6xl font-black mb-2">18</p><p className="text-xs uppercase font-bold text-uber-gray-500">Surveys</p></div>
            <div><p className="text-6xl font-black mb-2">04</p><p className="text-xs uppercase font-bold text-uber-gray-500">In-depth Interviews</p></div>
            <div><p className="text-6xl font-black mb-2">01</p><p className="text-xs uppercase font-bold text-uber-gray-500">Usability Lab</p></div>
          </div>
        </div>
      </div>
      <div className="bg-uber-accent p-12 flex flex-col md:flex-row gap-12 items-center">
        <div className="text-xs font-black uppercase tracking-[0.3em] text-white/60">Core_Insight</div>
        <p className="text-3xl font-black italic tracking-tighter text-white">"AI should guide work forward while preserving trust and control."</p>
      </div>
    </div>
  </section>
);

const PrinciplesSection = () => (
  <section className="py-40 bg-black">
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
);

const VisualDesignBoard = () => (
  <section className="py-40 bg-uber-gray-900 overflow-hidden border-y border-white/5">
    <div className="container mx-auto px-12 lg:px-24">
      <SectionHeader 
        pill="Visual & UI Design"
        title="Visual design rationale." 
        subtitle="The visual system prioritizes legibility over decoration. UI foundations align with Uber's public design language to ensure realism and scalability."
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
        {/* Layout System Visual Card */}
        <div className="lg:col-span-12">
           <LayoutSystemVisual />
        </div>

        {/* Component Specimen Board */}
        <div className="lg:col-span-8 bg-black p-12 border border-white/10 relative">
          <Annotation text="Calm surfaces for dense information. Modular patterns draw inspiration from modern enterprise portals." className="absolute -top-12 left-10" />
          <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-uber-gray-500 mb-10">01_Design_Tokens_&_Specimens</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mb-16">
             {/* Typography Specimen */}
             <div className="space-y-4">
                <p className="text-[10px] font-black uppercase text-uber-gray-500 tracking-widest">Typeface_Uber_Move</p>
                <div className="space-y-2">
                   <p className="text-4xl font-black">Aa</p>
                   <p className="text-xs font-bold leading-relaxed opacity-60">Headline / 32pt / Black<br/>Body / 16pt / Regular<br/>Mono / 12pt / Medium</p>
                </div>
             </div>
             {/* Interaction Specimen */}
             <div className="space-y-4">
                <p className="text-[10px] font-black uppercase text-uber-gray-500 tracking-widest">Buttons_&_Controls</p>
                <div className="space-y-3">
                   <div className="h-10 bg-white flex items-center justify-center font-black text-black text-[10px] uppercase tracking-widest">Primary</div>
                   <div className="h-10 border border-white/30 flex items-center justify-center font-black text-white text-[10px] uppercase tracking-widest">Secondary</div>
                   <div className="h-10 bg-uber-accent flex items-center justify-center font-black text-white text-[10px] uppercase tracking-widest shadow-purple-glow">AI_Intent</div>
                </div>
             </div>
             {/* Depth Specimen */}
             <div className="space-y-4">
                <p className="text-[10px] font-black uppercase text-uber-gray-500 tracking-widest">Elevation_&_States</p>
                <div className="space-y-3">
                   <div className="h-12 bg-uber-gray-900 border border-white/10 shadow-heavy"></div>
                   <div className="h-12 bg-uber-gray-800 flex items-center justify-center">
                      <MousePointerClick size={16} className="text-uber-accent" />
                   </div>
                </div>
             </div>
          </div>
          <div className="p-8 bg-white text-black border-l-8 border-uber-accent">
             <h5 className="text-xl font-black uppercase tracking-tighter mb-2">Design Rationale.</h5>
             <p className="text-sm font-bold text-uber-gray-600 leading-relaxed">
               Patty's interface acts as a quiet, neural layer. We use clear hierarchy and predictable patterns to reduce the cognitive tax of navigating enterprise complexity.
             </p>
          </div>
        </div>

        {/* Icons and Color Palette Card */}
        <div className="lg:col-span-4 bg-uber-gray-800 p-12 border border-white/10 flex flex-col justify-between relative">
          <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-uber-gray-500 mb-10">02_System_Icons_&_Palette</h4>
          <div className="grid grid-cols-4 gap-4 mb-12">
            {[Search, MessageSquare, Calendar, Users, Cpu, Zap, ShieldCheck, Target, Eye, FileText, Activity, Layers].map((I, idx) => (
              <div key={idx} className="aspect-square bg-black/50 border border-white/5 flex items-center justify-center text-white/40"><I size={18} /></div>
            ))}
          </div>
          <div className="space-y-4">
            <div className="h-12 bg-white w-full border border-white/10 flex items-center px-4"><span className="text-[10px] font-black text-black uppercase">Uber_White</span></div>
            <div className="h-12 bg-black w-full border border-white/10 flex items-center px-4"><span className="text-[10px] font-black text-white uppercase">Uber_Black</span></div>
            <div className="h-12 bg-uber-accent w-full border border-white/10 flex items-center px-4 shadow-purple-glow"><span className="text-[10px] font-black text-white uppercase">Patty_Purple</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MotionSection = () => (
  <section className="py-40 bg-black">
    <div className="container mx-auto px-12 lg:px-24">
      <SectionHeader 
        pill="Motion Design"
        title="Motion as clarity." 
        subtitle="Motion is subtle, fast, and reversible. Used to explain status, preserve context, and reinforce trust."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="bg-uber-gray-900 p-12 border border-white/10 group">
           <Annotation text="AI Thinking State: Subtle activity without false urgency." className="mb-6" />
           <div className="h-2 w-full bg-white/5 relative overflow-hidden mb-6">
              <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="absolute top-0 left-0 h-full w-1/3 bg-uber-accent"></motion.div>
           </div>
           <p className="font-black text-xl mb-2">Explain Status</p>
           <p className="text-sm text-uber-gray-500 font-bold uppercase tracking-widest italic">Communicating system activity.</p>
        </div>
        <div className="bg-uber-gray-900 p-12 border border-white/10 group">
           <Annotation text="Search results reveal by intent category." className="mb-6" />
           <div className="space-y-2 mb-6">
              {[1, 2, 3].map(i => (
                <motion.div key={i} animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 10 }} transition={{ delay: i * 0.2 }} className="h-4 w-full bg-white/10"></motion.div>
              ))}
           </div>
           <p className="font-black text-xl mb-2">Preserve Context</p>
           <p className="text-sm text-uber-gray-500 font-bold uppercase tracking-widest italic">Guiding visual continuity.</p>
        </div>
        <div className="bg-uber-gray-900 p-12 border border-white/10 group">
           <Annotation text="Approved actions animate into their destination." className="mb-6" />
           <div className="flex justify-between items-center mb-6">
              <div className="w-12 h-12 border-2 border-uber-accent rounded-sm"></div>
              <ArrowRight className="text-uber-accent" />
              <div className="w-12 h-12 bg-uber-accent shadow-purple-glow"></div>
           </div>
           <p className="font-black text-xl mb-2">Reinforce Trust</p>
           <p className="text-sm text-uber-gray-500 font-bold uppercase tracking-widest italic">Confirming successful generation.</p>
        </div>
      </div>
    </div>
  </section>
);

const UseCaseSection = ({ title, intro, steps, impact, isReversed = false, extraVisual: ExtraVisual }: any) => (
  <section className={`py-40 ${isReversed ? 'bg-black' : 'bg-uber-gray-900'} border-t border-white/5`}>
    <div className="container mx-auto px-12 lg:px-24">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-32 items-start ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
        <div>
          <SectionHeader pill="Key Use Case" title={title} subtitle={intro} />
          <div className="space-y-12 mb-16">
            {steps.map((step: any, i: number) => (
              <div key={i} className="flex gap-8 group">
                <div className="text-7xl font-black text-white/5 group-hover:text-uber-accent/20 transition-all leading-none italic">
                  0{i + 1}
                </div>
                <div>
                  <h5 className="font-black text-2xl mb-2 uppercase tracking-tight">{step.label}</h5>
                  <p className="text-uber-gray-400 text-lg leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {ExtraVisual && (
            <div className="mb-16">
              <ExtraVisual />
            </div>
          )}

          <div className="bg-white p-10 flex flex-col md:flex-row items-center gap-10">
             <div className="text-7xl font-black text-black tracking-tighter">{impact.split(' ')[0]}</div>
             <div className="h-12 w-[2px] bg-black/10 hidden md:block"></div>
             <p className="text-black font-black uppercase text-sm tracking-widest">{impact.split(' ').slice(1).join(' ')}</p>
          </div>
        </div>
        
        <div className="relative lg:sticky lg:top-32">
           <div className="aspect-square bg-uber-gray-900 border-8 border-white/5 flex items-center justify-center p-12 relative">
              <div className="w-full h-full bg-black shadow-heavy border border-white/10 p-10 flex flex-col gap-8 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-uber-accent/10 blur-3xl rounded-full"></div>
                 <div className="h-4 w-48 bg-white/10"></div>
                 <div className="space-y-6">
                   <div className="h-16 w-full bg-white/5 border border-white/10 flex items-center px-6 gap-4">
                      <Search size={20} className="text-uber-accent"/>
                      <div className="h-3 w-40 bg-white/20"></div>
                   </div>
                   <div className="p-8 border-2 border-uber-accent bg-uber-accent/5 relative">
                      <div className="absolute -top-3 -right-3 bg-uber-accent text-white p-1 rounded-sm">
                         <ShieldCheck size={12} />
                      </div>
                      <div className="flex justify-between items-center mb-6">
                        <div className="h-2 w-24 bg-uber-accent"></div>
                        <Zap size={16} className="text-uber-accent"/>
                      </div>
                      <div className="space-y-3">
                        <div className="h-2 w-full bg-white/10"></div>
                        <div className="h-2 w-3/4 bg-white/10"></div>
                      </div>
                   </div>
                 </div>
                 <div className="mt-auto grid grid-cols-2 gap-4">
                   <div className="h-14 bg-white/5"></div>
                   <div className="h-14 bg-uber-accent flex items-center justify-center">
                     <Check size={20} className="text-white" />
                   </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const Navigation = () => (
  <nav className="fixed left-0 top-0 bottom-0 w-24 bg-black border-r border-white/10 z-50 flex flex-col items-center py-12 gap-12">
    <div className="w-12 h-12 bg-white flex items-center justify-center text-black font-black text-2xl shadow-heavy">P</div>
    <div className="w-10 h-[2px] bg-white/10"></div>
    <div className="flex flex-col gap-10 text-uber-gray-600">
      <div className="hover:text-uber-accent cursor-pointer transition-all hover:scale-125"><Layers size={26} /></div>
      <div className="hover:text-uber-accent cursor-pointer transition-all hover:scale-125"><Search size={26} /></div>
      <div className="hover:text-white cursor-pointer transition-all hover:scale-125"><MessageSquare size={26} /></div>
      <div className="hover:text-white cursor-pointer transition-all hover:scale-125"><Calendar size={26} /></div>
    </div>
    <div className="mt-auto hover:text-white cursor-pointer transition-all text-uber-gray-600">
      <Users size={26} />
    </div>
  </nav>
);

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen pl-24 font-sans selection:bg-uber-accent selection:text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      
      <section className="py-40 bg-black relative">
        <div className="container mx-auto px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
               <SectionHeader 
                  pill="Why This Project"
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

      <ResearchSection />

      <PrinciplesSection />

      <section className="py-40 bg-uber-gray-900 border-y border-white/5">
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
              <Annotation text="Smart Search: Light and available for frequent tasks. Results grouped by Actions, Docs, People." className="mb-8" />
              <h4 className="text-3xl font-black mb-4 uppercase">Smart Search</h4>
              <p className="text-uber-gray-400 font-bold mb-8">Interprets intent, surfaces actions, and guides next steps directly from the search bar.</p>
              <div className="h-16 w-full bg-white/5 flex items-center px-6 gap-4 border border-white/10">
                 <Search size={20} className="text-uber-accent" />
                 <div className="h-2 w-48 bg-white/20"></div>
              </div>
            </div>
            <div className="bg-black p-12 border border-white/10 group">
              <Annotation text="Patty Assistant: Deep conversational support for complex tasks. Supports drafts and artifacts." className="mb-8" />
              <h4 className="text-3xl font-black mb-4 uppercase">Patty Assistant</h4>
              <p className="text-uber-gray-400 font-bold mb-8">Conversational AI that drafts artifacts—always with explicit user confirmation.</p>
              <div className="flex gap-4">
                 <div className="w-10 h-10 bg-uber-accent rounded-sm"></div>
                 <div className="flex-1 h-10 bg-white/5 border border-white/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VisualDesignBoard />

      <UseCaseSection 
        title="Planning Personal Leave"
        intro="Employees struggle to interpret PTO policies and complete requests correctly."
        impact="80% TIME_RECLAIMED_ON_PTO"
        extraVisual={ProcessDrift}
        steps={[
          { label: "Intent Mapping", desc: "User searches 'personal leave' and Patty identifies the HR system intent." },
          { label: "Policy Synthesis", desc: "Patty summarizes the 50-page PDF into a 4-step actionable roadmap." },
          { label: "Guided Request", desc: "Steps the user through the application within the search interface." }
        ]}
      />

      <UseCaseSection 
        isReversed={true}
        title="Team Event Planning"
        intro="Coordinating team events requires aligning preferences, calendars, and communication."
        impact="75% FASTER_INITIATIVE_PROPOSAL"
        extraVisual={() => (
          <div className="space-y-8">
            <ContextMap />
            <div className="bg-[#080808] border-l-4 border-uber-accent p-6 font-mono text-[10px] leading-relaxed text-uber-gray-400">
              <p className="text-white font-bold uppercase tracking-widest mb-4 italic text-uber-accent">Iteration_Insight:</p>
              <p className="text-white font-bold">"Early testing revealed discomfort when AI acted without confirmation. Design response: Introduced explicit preview and approval checkpoints."</p>
            </div>
          </div>
        )}
        steps={[
          { label: "Contextual Proposals", desc: "Proposes event ideas based on team profiles and upcoming availability." },
          { label: "Auto_Poll", desc: "Generates a survey draft for the team to vote on dates/activities." },
          { label: "Action Completion", desc: "Drafts an event post and calendar invite after approval." }
        ]}
      />

      <MotionSection />

      <section className="py-60 bg-white text-black relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent opacity-10"></div>
        <div className="container mx-auto px-12 lg:px-24 text-center">
          <SectionHeader dark={false} pill="Validation & Outcomes" title="Early Results." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mt-24 relative z-10">
            <div>
              <p className="text-9xl font-black mb-8 tracking-tighter">75%</p>
              <p className="text-xl font-bold uppercase tracking-widest text-uber-gray-600 italic">Lift in Usability</p>
            </div>
            <div>
              <p className="text-9xl font-black mb-8 tracking-tighter">80%</p>
              <p className="text-xl font-bold uppercase tracking-widest text-uber-gray-600 italic">Workflows Accelerated</p>
            </div>
            <div>
              <p className="text-9xl font-black mb-8 tracking-tighter text-uber-accent">92%</p>
              <p className="text-xl font-bold uppercase tracking-widest text-uber-gray-600 italic">Increased Trust</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 bg-uber-gray-900 border-t-8 border-uber-accent">
        <div className="container mx-auto px-12 lg:px-24">
          <div className="max-w-4xl">
            <SectionHeader title="Reflection." subtitle="AI UX is about calibrated autonomy. Trust is designed, not assumed." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-xl text-uber-gray-400 font-bold leading-tight">
               <p>
                 Enterprise UX succeeds when systems feel <span className="text-white italic">predictable and humane</span>.
               </p>
               <p>
                 Next: Scale workflows, design edge cases, and deepen system integration with live data feeds.
               </p>
            </div>
            <div className="flex flex-wrap gap-8 mt-20">
               <BaseButton variant="primary">Access_Prototype</BaseButton>
               <BaseButton variant="secondary">Full_Research_PDF</BaseButton>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-32 bg-black border-t border-white/10">
        <div className="container mx-auto px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-20">
          <div className="flex items-center gap-6">
             <div className="w-14 h-14 bg-white flex items-center justify-center text-black font-black text-3xl">P</div>
             <div>
                <p className="font-black text-xl uppercase tracking-tighter">Patty_Intranet.</p>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-uber-gray-600 italic">Validated exploratory project</p>
             </div>
          </div>
          <div className="flex gap-16">
            <div className="group cursor-pointer">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-uber-gray-700 mb-2 group-hover:text-uber-accent">Network</p>
              <p className="font-black uppercase">LinkedIn</p>
            </div>
            <div className="group cursor-pointer">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-uber-gray-700 mb-2 group-hover:text-uber-accent">Work</p>
              <p className="font-black uppercase">Dribbble</p>
            </div>
          </div>
          <div className="text-right">
             <p className="text-xs font-black text-uber-gray-500 uppercase tracking-widest">© 2024 Yitong Du</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
