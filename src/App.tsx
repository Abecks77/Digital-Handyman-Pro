import { ReactNode, useEffect, useRef, useState, FC, FormEvent } from 'react';
import { motion, useInView, animate } from 'motion/react';
import { 
  Bot, PhoneMissed, Clock, TrendingDown, DollarSign, 
  CheckCircle2, XCircle, ArrowRight, Calendar, Zap, Shield, Star, Heart,
  UserPlus, PhoneCall, Filter, Flame, MessageSquare, Check, User, Timer,
  Frown, AlertCircle, TrendingUp, ClipboardCheck, BrainCircuit,
  Wrench, Send, Hammer, Mic, Target, RefreshCw, Handshake, Brain, ChevronDown, Facebook, Youtube
} from 'lucide-react';

const GradientText = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <span className={`bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-slate-400 ${className}`}>
    {children}
  </span>
);

const DualCTA = ({ 
  className = "", 
  showDemo = true, 
  primaryText = "Get Your AI Employee Today!", 
  primaryIcon: PrimaryIcon = ArrowRight,
  primaryAction,
  primaryLink = "https://api.digitalhandyman.xyz/payment-link/69c4b6c5fb727d9c905d2836"
}: { 
  className?: string, 
  showDemo?: boolean,
  primaryText?: string,
  primaryIcon?: any,
  primaryAction?: () => void,
  primaryLink?: string
}) => {
  const ButtonContent = (
    <div className="relative bg-zinc-950/80 backdrop-blur-sm px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 group-hover:bg-zinc-900/50">
      <span className="font-semibold text-white">{primaryText}</span>
      <PrimaryIcon className={`w-4 h-4 text-slate-400 transition-transform ${PrimaryIcon === ChevronDown ? 'group-hover:translate-y-1' : 'group-hover:translate-x-1'}`} />
    </div>
  );

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      {primaryAction ? (
        <button 
          onClick={primaryAction}
          className="relative group overflow-hidden rounded-full p-[1px]"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-slate-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
          {ButtonContent}
        </button>
      ) : (
        <a 
          href={primaryLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group overflow-hidden rounded-full p-[1px] block"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-slate-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
          {ButtonContent}
        </a>
      )}
      {showDemo && (
        <a 
          href="https://calendly.com/adambeckner/digitalhandyman"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-full font-semibold text-zinc-300 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 hover:bg-zinc-800 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 block"
        >
          <Calendar className="w-4 h-4" />
          <span>Book a Demo</span>
        </a>
      )}
    </div>
  );
};

const AnimatedStat: FC<{ value: string, label: string }> = ({ value, label }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numMatch = value.match(/\d+/);
    if (!numMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseInt(numMatch[0], 10);
    const prefix = value.substring(0, numMatch.index);
    const suffix = value.substring(numMatch.index! + numMatch[0].length);

    if (targetNum === 0) {
      setDisplayValue(value);
      return;
    }

    const controls = animate(0, targetNum, {
      duration: 2.5,
      ease: "easeOut",
      onUpdate: (v) => {
        setDisplayValue(`${prefix}${Math.round(v)}${suffix}`);
      }
    });

    return controls.stop;
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center px-4">
      <div className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">{displayValue}</div>
      <div className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">{label}</div>
    </div>
  );
};

export default function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    try {
      // Using no-cors if needed, but usually webhooks handle standard POST
      const response = await fetch('https://services.leadconnectorhq.com/hooks/IFOKwamOedRqCGzWsqmD/webhook-trigger/e8a0f146-9584-4246-b6b8-24eea9fd59d5', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'Website Form',
          submittedAt: new Date().toISOString()
        }),
      });
      
      // LeadConnector webhooks often return 200 even if they don't return a body
      if (response.ok || response.status === 200) {
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            fullName: '',
            phoneNumber: '',
            email: '',
            companyName: '',
            message: '',
            consent: false
          });
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still show success for UX if it's a CORS issue but the webhook likely fired
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-zinc-50 font-sans selection:bg-cyan-500/30 relative">
      
      {/* Global SaaS Background - Unified across the entire page */}
      <div className="fixed inset-0 z-0 bg-zinc-950">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        {/* Glowing Orbs for depth */}
        <div className="absolute left-0 right-0 top-[-10%] -z-10 m-auto h-[400px] w-[400px] rounded-full bg-blue-500 opacity-20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-slate-500 opacity-10 blur-[150px]"></div>
        <div className="absolute top-[40%] right-[-10%] -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500 opacity-10 blur-[120px]"></div>
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col">
        
        {/* Navigation */}
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
          <div className="bg-zinc-950/40 backdrop-blur-md border border-zinc-800/50 rounded-full px-4 py-2.5 flex items-center justify-between shadow-2xl shadow-cyan-500/10 group transition-all duration-500 hover:border-zinc-700/50 hover:bg-zinc-950/60">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 pl-2">
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <img 
                    src="https://lh3.googleusercontent.com/d/198nU5-hu5_saqJ6kJH2aIUSNj4Y5Ic3b" 
                    alt="Digital Handyman Logo" 
                    className="h-8 w-auto object-contain rounded-md"
                    referrerPolicy="no-referrer"
                  />
                </a>
                <div className="h-4 w-[1px] bg-zinc-800 hidden sm:block"></div>
                <div className="hidden sm:flex items-center gap-2 px-2 py-1 rounded-full bg-zinc-900/50 border border-zinc-800/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">ECHO: ACTIVE</span>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-1 bg-zinc-900/30 rounded-full p-1 border border-zinc-800/30">
              <a href="#how-it-works" className="px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all">How it Works</a>
              <a href="#features" className="px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all">Your Leaks</a>
              <a href="#perfect-for" className="px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all">Who It's For</a>
              <a href="#compare" className="px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all">Why Hire?</a>
            </div>

            <div className="flex items-center gap-3">
              <a 
                href="https://api.digitalhandyman.xyz/payment-link/69c4b6c5fb727d9c905d2836"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group/btn overflow-hidden rounded-full p-[1px] block"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-slate-500 rounded-full opacity-70 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                <div className="relative bg-zinc-950 px-5 py-2 rounded-full flex items-center justify-center gap-2 transition-all duration-300 group-hover/btn:bg-transparent">
                  <span className="font-bold text-white text-xs tracking-wide">Get Started</span>
                  <ArrowRight className="w-3 h-3 text-white group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </a>
            </div>
          </div>
        </nav>

        {/* 1. Hero Section & ECHO Intro */}
        <section className="pt-32 pb-20 lg:pt-48 lg:pb-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl relative"
              >
                {/* Background Decorative Text */}
                <div className="absolute -top-24 -left-12 text-[14rem] font-black text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter hidden lg:block leading-none">
                  ECHO
                </div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/50 backdrop-blur-md border border-zinc-800/50 text-xs font-bold text-zinc-400 mb-10 shadow-xl tracking-widest uppercase">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Next-Gen AI Workforce
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter mb-8 leading-[0.9] text-white">
                    <span className="block">Scale Without</span>
                    <span className="relative inline-block mt-2">
                      <GradientText>Hiring Anyone</GradientText>
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-slate-500 rounded-full opacity-50"
                      />
                    </span>
                  </h1>
                  
                  <p className="text-xl text-zinc-400 mb-12 leading-relaxed max-w-lg font-medium">
                    Meet <span className="text-white font-bold">ECHO</span>, your 24/7 AI employee that handles SMS, web chats, and missed calls so you can scale your local business on autopilot.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <DualCTA />
                  </div>
                </div>
              </motion.div>

              {/* ECHO Intro (Mock Conversation) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-slate-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/80 rounded-3xl p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6 border-b border-zinc-800/80 pb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-slate-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Echo AI</h3>
                      <p className="text-xs text-green-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                        Online • Replying instantly
                      </p>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-zinc-800 flex-shrink-0 flex items-center justify-center border border-zinc-700">
                        <span className="text-xs text-zinc-400">You</span>
                      </div>
                      <div className="bg-zinc-800/80 rounded-2xl rounded-tl-none p-4 text-sm text-zinc-200 max-w-[85%] border border-zinc-700/50 shadow-sm">
                        Hi, do you guys do emergency plumbing repairs? My pipe burst and water is everywhere!
                      </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} className="flex gap-3 flex-row-reverse">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-slate-500 flex-shrink-0 flex items-center justify-center shadow-md">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl rounded-tr-none p-4 text-sm text-white max-w-[85%] shadow-md">
                        Hi there! Yes, we offer 24/7 emergency plumbing. I can have a technician out to you within 45 minutes to stop the leak. What's your address?
                      </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5 }} className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-zinc-800 flex-shrink-0 flex items-center justify-center border border-zinc-700">
                        <span className="text-xs text-zinc-400">You</span>
                      </div>
                      <div className="bg-zinc-800/80 rounded-2xl rounded-tl-none p-4 text-sm text-zinc-200 max-w-[85%] border border-zinc-700/50 shadow-sm">
                        123 Main St. How much is the dispatch fee? I need someone ASAP.
                      </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.5 }} className="flex gap-3 flex-row-reverse">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-slate-500 flex-shrink-0 flex items-center justify-center shadow-md">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl rounded-tr-none p-4 text-sm text-white max-w-[85%] shadow-md">
                        Our emergency dispatch fee is $99, which goes toward your repair cost. I've locked in your spot for our next available tech. They will text you when they are 10 minutes away!
                      </div>
                    </motion.div>
                  </div>
                </div>
                <p className="text-center text-xs text-zinc-500 mt-4 italic relative z-10">
                  *An illustrative example of ECHO's automated response capabilities.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. How It Works */}
        <section id="how-it-works" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="relative inline-block">
                  How It <GradientText>Works</GradientText>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-slate-500 rounded-full opacity-50"
                  />
                </span>
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed">From onboarding to automated bookings in three simple steps. We handle the heavy lifting so you can focus on the work that actually pays.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-blue-500/0 via-cyan-500/50 to-slate-500/0"></div>
              
              {[
                { 
                  step: "01", 
                  title: "We Learn Your Business", 
                  desc: "We map out your services, pricing, service areas, and FAQs to build ECHO's knowledge base. We train your AI to speak in your brand's voice, ensuring every customer interaction feels authentic, professional, and perfectly aligned with your business values." 
                },
                { 
                  step: "02", 
                  title: "We Deploy Echo", 
                  desc: "We integrate Echo directly into your website, SMS routing, Google Business Profile, and social media channels. The setup is completely hands-off for you. Our team handles the technical integration so you don't have to write a single line of code." 
                },
                { 
                  step: "03", 
                  title: "You Watch Leads Roll In", 
                  desc: "ECHO handles inquiries 24/7, qualifies leads based on your specific criteria, and books jobs directly onto your calendar. Wake up to new appointments, stop worrying about missed calls, and watch your revenue grow on autopilot." 
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-zinc-900/80 backdrop-blur-sm border-2 border-cyan-500/30 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                    <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-slate-400">{item.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-20 flex justify-center">
              <DualCTA 
                showDemo={false} 
                primaryText="Keep Learning More" 
                primaryIcon={ChevronDown}
                primaryAction={() => {
                  const el = document.getElementById('lead-flow');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </div>
          </div>
        </section>

        {/* 2.5 The ECHO Lead Flow */}
        <section id="lead-flow" className="py-24 bg-zinc-900/30 border-y border-zinc-800/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-zinc-950/0 to-zinc-950/0 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="relative inline-block">
                  The <GradientText>Echo Lead Flow</GradientText>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-slate-500 rounded-full opacity-50"
                  />
                </span>
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Echo turns inbound demand into a structured process instead of a scramble. Every new inquiry is handled the same way, every time.
              </p>
            </div>

            {/* 4-Step Process Grid */}
            <div className="grid md:grid-cols-4 gap-6 mb-16 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-[88px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-500/20 via-cyan-500/40 to-slate-500/20 z-0"></div>
              
              {[
                {
                  visual: (
                    <div className="relative w-full h-32 bg-zinc-950/50 rounded-xl border border-zinc-800/50 mb-6 flex items-center justify-center overflow-hidden group-hover:border-blue-500/30 transition-colors">
                      <motion.div 
                        animate={{ y: [20, 0, 0, 20], opacity: [0, 1, 1, 0] }} 
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} 
                        className="bg-zinc-800/80 backdrop-blur-sm p-3 rounded-lg border border-zinc-700 w-2/3 shadow-lg"
                      >
                        <div className="h-2 w-1/2 bg-zinc-600 rounded mb-3"></div>
                        <div className="h-2 w-3/4 bg-zinc-600 rounded mb-4"></div>
                        <div className="h-6 w-full bg-blue-500 rounded flex items-center justify-center">
                          <span className="text-[8px] font-bold text-white tracking-wider">SUBMIT</span>
                        </div>
                      </motion.div>
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0, 1, 0] }} 
                        transition={{ repeat: Infinity, duration: 4, delay: 1 }} 
                        className="absolute bottom-6 right-8"
                      >
                        <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                      </motion.div>
                    </div>
                  ),
                  title: "1. A New Lead Opts In",
                  desc: "A potential customer submits a form, sends a text, or calls your business."
                },
                {
                  visual: (
                    <div className="relative w-full h-32 bg-zinc-950/50 rounded-xl border border-zinc-800/50 mb-6 flex items-center justify-center overflow-hidden group-hover:border-cyan-500/30 transition-colors">
                      <motion.div 
                        animate={{ scale: [1, 1.1, 1] }} 
                        transition={{ repeat: Infinity, duration: 2 }} 
                        className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center relative z-10 border border-cyan-500/30"
                      >
                        <Bot className="w-8 h-8 text-cyan-400" />
                      </motion.div>
                      {/* Ripples */}
                      <motion.div animate={{ scale: [1, 2], opacity: [0.5, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute w-16 h-16 rounded-full border border-cyan-500/50"></motion.div>
                      <motion.div animate={{ scale: [1, 2.5], opacity: [0.3, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} className="absolute w-16 h-16 rounded-full border border-cyan-500/30"></motion.div>
                    </div>
                  ),
                  title: "2. AI Agent Calls Within 60 Seconds",
                  desc: "ECHO immediately engages the caller, asking the right questions to keep the conversation moving forward."
                },
                {
                  visual: (
                    <div className="relative w-full h-32 bg-zinc-950/50 rounded-xl border border-zinc-800/50 mb-6 flex flex-col items-center justify-center overflow-hidden group-hover:border-slate-500/30 transition-colors">
                      <div className="absolute top-4 flex gap-6 w-full justify-center">
                        <motion.div animate={{ y: [0, 30], opacity: [1, 0], scale: [1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }}>
                          <XCircle className="w-5 h-5 text-red-500/80" />
                        </motion.div>
                        <motion.div animate={{ y: [0, 40], opacity: [1, 1], scale: [1, 0.8] }} transition={{ repeat: Infinity, duration: 2, delay: 1 }}>
                          <CheckCircle2 className="w-5 h-5 text-green-500/80" />
                        </motion.div>
                      </div>
                      <Filter className="w-10 h-10 text-slate-400 relative z-10 mt-4" />
                      <motion.div animate={{ y: [0, 20], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 1.5 }} className="absolute bottom-4">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </motion.div>
                    </div>
                  ),
                  title: "3. The AI Qualifies & Filters",
                  desc: "While the lead talks, ECHO determines fit, intent, and readiness. Time-wasters are filtered out."
                },
                {
                  visual: (
                    <div className="relative w-full h-32 bg-zinc-950/50 rounded-xl border border-zinc-800/50 mb-6 flex items-center justify-center overflow-hidden group-hover:border-orange-500/30 transition-colors">
                      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent"></div>
                      <motion.div 
                        animate={{ y: [20, 0, 0, 20], opacity: [0, 1, 1, 0] }} 
                        transition={{ repeat: Infinity, duration: 4, delay: 0.5 }} 
                        className="bg-zinc-800/90 backdrop-blur-sm p-3 rounded-lg border-blue-500/50 w-3/4 relative shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                      >
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-slate-500 text-[8px] font-bold px-2 py-0.5 rounded-full text-white shadow-lg flex items-center gap-1">
                          <Flame className="w-2 h-2" /> HOT LEAD
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center">
                            <UserPlus className="w-4 h-4 text-zinc-400" />
                          </div>
                          <div>
                            <div className="h-2 w-16 bg-zinc-600 rounded mb-1.5"></div>
                            <div className="h-1.5 w-10 bg-zinc-600 rounded"></div>
                          </div>
                        </div>
                        <div className="h-1.5 w-full bg-zinc-700 rounded mt-3"></div>
                        <div className="h-1.5 w-4/5 bg-zinc-700 rounded mt-1.5"></div>
                      </motion.div>
                    </div>
                  ),
                  title: "4. Your Team Gets a Hot Lead",
                  desc: "Your team receives a lead that has already been evaluated, prioritized, and prepared."
                }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/80 rounded-2xl p-6 relative z-10 group hover:border-blue-500/50 transition-colors shadow-xl"
                >
                  {step.visual}
                  <h3 className="text-lg font-bold mb-3 text-white">{step.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="w-full text-center bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
              <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                The AI agent engages the caller, asks the right questions, and keeps the conversation moving forward with purpose. While the lead talks, Echo determines fit, intent, and readiness without relying on guesswork. Nothing slips through. Nothing is rushed. By the time the interaction is complete, the outcome is clear. Your team receives a lead that has already been evaluated, prioritized, and prepared, allowing them to step in at the moment it actually matters.
              </p>
            </div>
          </div>
        </section>

        {/* 2.6 Why ECHO Wins */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="relative inline-block">
                  How <GradientText>Echo</GradientText> Removes The <GradientText>Biggest Sales Problems</GradientText>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-slate-500 rounded-full opacity-50"
                  />
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16 relative">
              {[
                {
                  visual: (
                    <div className="relative w-full h-40 bg-zinc-950/50 rounded-xl border border-zinc-800/50 mb-8 flex items-center justify-center overflow-hidden group-hover:border-blue-500/30 transition-colors">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent"></div>
                      <motion.div 
                        animate={{ rotate: 360 }} 
                        transition={{ repeat: Infinity, duration: 4, ease: "linear" }} 
                        className="w-20 h-20 rounded-full border-4 border-blue-500/20 border-t-slate-500 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(100,116,139,0.2)]"
                      >
                        <div className="w-1.5 h-8 bg-gradient-to-b from-slate-400 to-blue-400 rounded-full origin-bottom -translate-y-4"></div>
                      </motion.div>
                      {/* Speed lines */}
                      <motion.div animate={{ x: [-100, 200], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} className="absolute h-0.5 w-16 bg-blue-400/50 rounded-full top-1/3 left-0"></motion.div>
                      <motion.div animate={{ x: [-100, 200], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.4, ease: "linear" }} className="absolute h-0.5 w-24 bg-cyan-400/50 rounded-full bottom-1/3 left-0"></motion.div>
                      <motion.div animate={{ x: [-100, 200], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.8, delay: 0.8, ease: "linear" }} className="absolute h-0.5 w-12 bg-slate-400/50 rounded-full top-1/2 left-0"></motion.div>
                    </div>
                  ),
                  title: "Speed",
                  desc: "Every call is answered instantly."
                },
                {
                  visual: (
                    <div className="relative w-full h-40 bg-zinc-950/50 rounded-xl border border-zinc-800/50 mb-8 flex items-center justify-center overflow-hidden group-hover:border-cyan-500/30 transition-colors">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-slate-500/5 to-transparent"></div>
                      <motion.div 
                        animate={{ scale: [0.95, 1.05, 0.95] }} 
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} 
                        className="relative z-10"
                      >
                        <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                          <MessageSquare className="w-10 h-10 text-cyan-400/50" />
                        </div>
                        <motion.div 
                          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.8] }} 
                          transition={{ repeat: Infinity, duration: 3, delay: 1.5 }} 
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <Check className="w-12 h-12 text-slate-400 drop-shadow-[0_0_10px_rgba(100,116,139,0.8)]" />
                        </motion.div>
                      </motion.div>
                      <motion.div animate={{ y: [20, -20], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute right-12 top-10 w-2 h-2 rounded-full bg-cyan-400/60"></motion.div>
                      <motion.div animate={{ y: [20, -20], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }} className="absolute left-12 bottom-10 w-3 h-3 rounded-full bg-slate-400/40"></motion.div>
                    </div>
                  ),
                  title: "Clarity",
                  desc: "Only qualified conversations reach your team."
                },
                {
                  visual: (
                    <div className="relative w-full h-40 bg-zinc-950/50 rounded-xl border border-zinc-800/50 mb-8 flex items-center justify-center overflow-hidden group-hover:border-slate-500/30 transition-colors">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 via-blue-500/5 to-transparent"></div>
                      <div className="flex gap-3 relative z-10">
                        {[0, 1, 2].map((i) => (
                          <motion.div 
                            key={i} 
                            animate={{ y: [0, -8, 0] }} 
                            transition={{ repeat: Infinity, duration: 2, delay: i * 0.2, ease: "easeInOut" }} 
                            className="flex flex-col items-center gap-3"
                          >
                            <div className={`w-12 h-12 rounded-full border flex items-center justify-center shadow-[0_0_20px_rgba(100,116,139,0.15)] ${i === 1 ? 'bg-slate-500/20 border-slate-500/50 w-14 h-14' : 'bg-blue-500/10 border-blue-500/30'}`}>
                              <User className={`${i === 1 ? 'text-slate-400 w-6 h-6' : 'text-blue-400 w-5 h-5'}`} />
                            </div>
                            <div className={`h-1.5 rounded-full ${i === 1 ? 'bg-slate-500/50 w-10' : 'bg-blue-500/50 w-8'}`}></div>
                          </motion.div>
                        ))}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-zinc-950/80 to-transparent pointer-events-none"></div>
                    </div>
                  ),
                  title: "Consistency",
                  desc: "Every lead gets the same focused experience."
                }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 relative z-10 group hover:border-blue-500/40 transition-colors text-center shadow-xl"
                >
                  {feature.visual}
                  <h3 className="text-3xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-lg text-zinc-400 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="w-full text-center bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
              <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                Echo wins because it removes human dependency from the most fragile part of the sales process. It creates a system where every inbound opportunity is handled with the same discipline, precision, and follow-through. There is no variation based on mood, availability, or experience level. Decisions are made based on signals, not assumptions. As a result, sales teams stop reacting and start operating with clarity. Echo does not compete with people. It outperforms inconsistency. That is what turns inbound demand into a reliable advantage instead of an ongoing risk.
              </p>
            </div>
          </div>
        </section>

        {/* 2.7 Now vs With Echo */}
        <section className="py-24 bg-zinc-900/30 border-y border-zinc-800/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-zinc-950/0 to-zinc-950/0 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="relative inline-block">
                  Why Our Customers <GradientText>Love Echo</GradientText>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-slate-500 rounded-full opacity-50"
                  />
                </span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16 relative">
              {/* Desktop Arrow connecting the two sides */}
              <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
                <motion.div 
                  animate={{ x: [0, 10, 0] }} 
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-400/50 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(100,116,139,0.3)] overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-slate-500/20"></div>
                  <ArrowRight className="w-8 h-8 text-blue-400 relative z-10" />
                </motion.div>
              </div>

              {/* NOW - The Problem */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 md:p-12 relative overflow-hidden group shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 to-transparent pointer-events-none"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
                
                <h3 className="text-3xl font-bold text-center mb-12 text-zinc-500">Now</h3>
                
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-2xl bg-zinc-950/50 border border-zinc-800/50 flex items-center justify-center mb-6 relative">
                      <PhoneMissed className="w-12 h-12 text-red-500/70" />
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }} 
                        transition={{ repeat: Infinity, duration: 2 }} 
                        className="absolute -top-3 -right-3 bg-red-600/80 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg"
                      >
                        9+
                      </motion.div>
                    </div>
                    <h4 className="font-bold text-zinc-400 tracking-wider">Missed Calls</h4>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-2xl bg-zinc-950/50 border border-zinc-800/50 flex items-center justify-center mb-6 relative">
                      <Frown className="w-12 h-12 text-red-400/60" />
                      <motion.div 
                        animate={{ y: [0, -10, 0], opacity: [0, 1, 0] }} 
                        transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} 
                        className="absolute -top-4 right-2 text-red-400/60 font-bold text-2xl"
                      >
                        ?
                      </motion.div>
                      <motion.div 
                        animate={{ y: [0, -15, 0], opacity: [0, 1, 0] }} 
                        transition={{ repeat: Infinity, duration: 2.5, delay: 1 }} 
                        className="absolute -top-6 left-2 text-red-400/60 font-bold text-xl"
                      >
                        ?
                      </motion.div>
                    </div>
                    <h4 className="font-bold text-zinc-400 tracking-wider">Frustration</h4>
                  </div>
                </div>
                
                <div className="text-center pt-8 border-t border-zinc-800/50">
                  <p className="text-zinc-500 font-medium text-xl">
                    Missed calls, dealing with chaos <br/>
                    <span className="text-red-500/60 font-bold border-b border-red-500/20 pb-1 inline-block mt-2">every day</span>
                  </p>
                </div>
              </motion.div>

              {/* WITH ECHO - The Solution */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-blue-950/20 border border-blue-500/30 rounded-3xl p-8 md:p-12 relative overflow-hidden group shadow-[0_0_50px_rgba(59,130,246,0.1)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-600/5 to-transparent pointer-events-none"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_20px_rgba(96,165,250,0.8)]"></div>
                
                <h3 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">With Echo</h3>
                
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-2xl bg-blue-900/30 border border-blue-500/50 flex items-center justify-center mb-6 relative overflow-hidden group-hover:border-slate-500/50 transition-colors">
                      <Bot className="w-12 h-12 text-blue-400 relative z-10 group-hover:text-slate-400 transition-colors" />
                      <motion.div animate={{ scale: [1, 1.5], opacity: [0.5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute inset-0 border-2 border-blue-400/50 rounded-2xl"></motion.div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-slate-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <h4 className="font-bold text-blue-100 tracking-wider group-hover:text-slate-200 transition-colors">AI Answers</h4>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-2xl bg-blue-900/30 border border-blue-500/50 flex items-center justify-center mb-6 relative group-hover:border-cyan-500/50 transition-colors">
                      <ClipboardCheck className="w-12 h-12 text-blue-400 group-hover:text-cyan-400 transition-colors" />
                      <motion.div animate={{ y: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="absolute -bottom-3 -right-3 bg-zinc-900 rounded-full p-1 border border-blue-500/30 group-hover:border-cyan-500/50">
                        <Filter className="w-6 h-6 text-blue-400 group-hover:text-cyan-400" />
                      </motion.div>
                    </div>
                    <h4 className="font-bold text-blue-100 tracking-wider group-hover:text-cyan-200 transition-colors">Qualified Leads</h4>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-2xl bg-blue-900/30 border border-blue-500/50 flex items-center justify-center mb-6 relative group-hover:border-blue-400/50 transition-colors">
                      <BrainCircuit className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors" />
                      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-1.5 shadow-lg">
                        <Check className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>
                    <h4 className="font-bold text-blue-100 tracking-wider group-hover:text-blue-200 transition-colors">Peace of Mind</h4>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-2xl bg-blue-900/30 border border-blue-500/50 flex items-center justify-center mb-6 relative overflow-hidden group-hover:border-slate-500/50 transition-colors">
                      <TrendingUp className="w-12 h-12 text-blue-400 relative z-10 group-hover:text-slate-400 transition-colors" />
                      <motion.div 
                        animate={{ x: [-50, 50], y: [50, -50] }} 
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }} 
                        className="absolute w-24 h-3 bg-slate-400/20 rotate-45"
                      ></motion.div>
                      <DollarSign className="absolute top-2 left-2 w-5 h-5 text-slate-400" />
                    </div>
                    <h4 className="font-bold text-blue-100 tracking-wider group-hover:text-slate-200 transition-colors">Growth</h4>
                  </div>
                </div>
                
                <div className="text-center pt-8 border-t border-blue-500/30">
                  <p className="text-blue-200 font-medium text-xl">
                    Consistent leads, <span className="text-blue-400 font-bold">smooth operation</span> <br/>
                    & <span className="text-blue-400 font-bold">predictable revenue</span>
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="w-full text-center bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
              <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                Echo replaces uncertainty with clarity, chaos with structure, and missed opportunities with momentum. For the business owner, this means no longer wondering what happened to yesterday's calls or whether opportunities are slipping through the cracks. You stop feeling chained to your phone, inbox, or sales team just to make sure leads are handled correctly. Inbound sales become something you trust instead of something you monitor. Your business runs with consistency whether you are in the office or not. Decisions get easier because the data is clear, the handoffs are clean, and the results are predictable. Echo gives you back control, confidence, and the ability to scale without being personally involved in every conversation.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Stats Bar */}
        <section className="py-16 border-y border-zinc-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-zinc-800/50">
              {[
                { value: "24/7", label: "Availability" },
                { value: "< 5s", label: "Response Time" },
                { value: "100%", label: "Lead Capture" },
                { value: "$0", label: "Hiring Fees" }
              ].map((stat, i) => (
                <AnimatedStat key={i} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </section>

        {/* 4. Features (The Leaks) */}
        <section id="features" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="relative inline-block">
                  The <GradientText>Leaks</GradientText> In Your Business
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-slate-500 rounded-full opacity-50"
                  />
                </span>
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed">Every unanswered call and delayed text is money walking out the door to your competitors. Here is exactly what's holding your growth back today.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-24">
              {[
                { 
                  icon: PhoneMissed, 
                  title: "Missed Calls = Lost Revenue", 
                  desc: "70% of callers won't leave a voicemail. If you don't answer immediately, they call the next business on Google. ECHO intercepts missed calls with an instant text back, turning a lost opportunity into a booked job." 
                },
                { 
                  icon: Clock, 
                  title: "Slow Follow-up Kills Deals", 
                  desc: "Leads go cold in exactly 5 minutes. Can your human team drop everything to respond to every single inquiry instantly? ECHO responds in under 3 seconds, every single time, guaranteeing you're always the first to reply." 
                },
                { 
                  icon: TrendingDown, 
                  title: "Wasted Advertising Spend", 
                  desc: "You're paying hundreds or thousands for clicks, but losing the leads because no one was available to chat when they landed on your site. ECHO maximizes your ROI by engaging every single visitor 24/7." 
                },
                { 
                  icon: DollarSign, 
                  title: "The Crushing Cost of Hiring", 
                  desc: "Recruiting, training, payroll, benefits, and turnover. Humans are expensive, they make mistakes, they take vacations, and they sleep. ECHO works 168 hours a week for a fraction of the cost of a minimum-wage employee." 
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 p-8 md:p-10 rounded-3xl hover:bg-zinc-800/40 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-zinc-800/80 flex items-center justify-center mb-8 text-slate-400 group-hover:scale-110 group-hover:bg-slate-500/10 transition-all duration-300 shadow-lg">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-lg">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Transition Band */}
          <div className="py-24 border-y border-zinc-800/50 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                Stop losing money to the void. <br/>
                <GradientText>Start capturing every opportunity.</GradientText>
              </h2>
              <p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto">
                Your customers expect instant answers. Give them what they want and watch your conversion rates skyrocket.
              </p>
              <div className="flex justify-center">
                <DualCTA showDemo={false} />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Who's This Perfect For? */}
        <section id="perfect-for" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                <span className="relative inline-block">
                  Who's This <GradientText>Perfect For?</GradientText>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-slate-500 rounded-full opacity-50"
                  />
                </span>
              </h2>
              <p className="text-sm md:text-base text-cyan-400 italic font-medium">
                *ECHO is not limited to the listed industries below, contact us for more info*
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-16">
              {[
                "Home Service Companies", 
                "Local Service Providers", 
                "Online Educators/Coaches",
                "Medical and Dental", 
                "Real Estate Professionals", 
                "Construction Companies",
                "Agencies/Consultants", 
                "Legal Service Providers", 
                "Personal Trainers"
              ].map((industry, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-5 flex items-center gap-4 hover:bg-zinc-800/80 hover:border-slate-500/30 transition-all duration-300 group shadow-lg"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/10 to-slate-500/10 flex items-center justify-center flex-shrink-0 group-hover:from-blue-500/20 group-hover:to-slate-500/20 transition-all">
                    <CheckCircle2 className="w-5 h-5 text-slate-400 group-hover:text-slate-300 transition-colors" />
                  </div>
                  <span className="font-bold text-zinc-100 uppercase tracking-wide text-sm">{industry}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="flex justify-center">
              <a 
                href="https://calendly.com/adambeckner/digitalhandyman"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden rounded-full p-[1px] block"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-slate-500 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></span>
                <div className="relative bg-zinc-950/80 backdrop-blur-sm px-10 py-5 rounded-full flex items-center justify-center gap-2 transition-all duration-300 group-hover:bg-transparent">
                  <span className="font-bold text-white uppercase tracking-widest text-sm">Schedule a call to get started</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* 6. Vs Hiring Table */}
        <section id="compare" className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="relative inline-block">
                  Why Not Just <GradientText>Hire Someone?</GradientText>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-slate-500 rounded-full opacity-50"
                  />
                </span>
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed">
                A human receptionist is great, but they have limits. See how an AI employee stacks up against a traditional hire when it comes to capturing leads and scaling your operations.
              </p>
            </div>

            <div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-3 border-b border-zinc-800/80 bg-zinc-900/80">
                <div className="p-5 md:p-8 font-semibold text-zinc-400 text-sm md:text-lg">Feature</div>
                <div className="p-5 md:p-8 font-bold text-white border-l border-zinc-800/80 bg-gradient-to-b from-blue-500/10 to-transparent text-sm md:text-lg flex items-center gap-2">
                  <Bot className="w-5 h-5 text-blue-400 hidden sm:block" /> ECHO AI
                </div>
                <div className="p-5 md:p-8 font-semibold text-zinc-400 border-l border-zinc-800/80 text-sm md:text-lg">Human Hire</div>
              </div>
              
              {[
                { feature: "Availability", echo: "24/7/365 (Never sleeps)", human: "9 to 5, Mon-Fri (40 hrs/wk)" },
                { feature: "Response Time", echo: "Instant (< 3 seconds)", human: "Minutes to Hours" },
                { feature: "Cost Structure", echo: "Flat, predictable monthly rate", human: "Salary, benefits, taxes, overtime" },
                { feature: "Onboarding & Training", echo: "Ready to work in days", human: "Weeks of training & shadowing" },
                { feature: "Multitasking Capacity", echo: "Unlimited simultaneous chats", human: "One call or chat at a time" },
                { feature: "Sick Days & PTO", echo: "Zero", human: "15-20 days per year" }
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 border-b border-zinc-800/50 last:border-0 hover:bg-zinc-800/30 transition-colors">
                  <div className="p-5 md:p-8 text-zinc-300 flex items-center text-sm md:text-base font-medium">{row.feature}</div>
                  <div className="p-5 md:p-8 text-white border-l border-zinc-800/80 bg-blue-500/5 flex items-center gap-3 font-semibold text-sm md:text-base">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    {row.echo}
                  </div>
                  <div className="p-5 md:p-8 text-zinc-500 border-l border-zinc-800/80 flex items-center gap-3 text-sm md:text-base">
                    <XCircle className="w-5 h-5 text-red-400/50 flex-shrink-0" />
                    {row.human}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Pricing/Tiers Comparison */}
        <section className="py-24 relative border-t border-zinc-800/50 overflow-hidden">
          {/* Section-specific atmospheric glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-cyan-600/5 blur-[150px] rounded-full"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="relative inline-block">
                  Choose Your <GradientText>System</GradientText>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-slate-500 rounded-full opacity-50"
                  />
                </span>
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Start with our foundational toolkit to capture every lead, or upgrade to the full AI employee to handle conversations and close deals.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              {/* Tier 1 */}
              <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col shadow-xl">
                <div className="p-8 border-b border-zinc-800/80 bg-zinc-900/80">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center border border-zinc-700/50">
                        <Wrench className="w-6 h-6 text-zinc-300" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Digital Handyman Automation Toolkit</h3>
                        <p className="text-zinc-400 text-sm mt-1">Automated systems that capture and follow up on leads</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs font-bold uppercase tracking-wider border border-zinc-700/50">Lite</span>
                  </div>
                </div>
                
                <div className="bg-zinc-900/50 px-8 py-4 border-b border-zinc-800/50">
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Lead Capture & Automation</span>
                </div>

                <div className="p-8 space-y-8 flex-grow">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center flex-shrink-0 border border-zinc-700/30">
                      <PhoneMissed className="w-5 h-5 text-zinc-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Missed Call Text-Back</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">Instantly texts anyone who calls when you're busy. Turns missed calls into text conversations automatically.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center flex-shrink-0 border border-zinc-700/30">
                      <MessageSquare className="w-5 h-5 text-zinc-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">24/7 AI Website Chat Widget</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">Engages visitors on your site around the clock and collects their contact info.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center flex-shrink-0 border border-zinc-700/30">
                      <Send className="w-5 h-5 text-zinc-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Instant SMS Follow-Up</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">Automatically texts leads the second they submit a form. Strike while the iron is hot.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center flex-shrink-0 border border-zinc-700/30">
                      <Calendar className="w-5 h-5 text-zinc-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Automated Scheduling</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">AI handles back-and-forth scheduling directly onto your calendar, eliminating the need for phone tag.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center flex-shrink-0 border border-zinc-700/30">
                      <RefreshCw className="w-5 h-5 text-zinc-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Database Reactivation</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">ECHO uses AI-powered SMS to re-engage dead leads and past clients, turning your existing list into booked appointments.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center flex-shrink-0 border border-zinc-700/30">
                      <Star className="w-5 h-5 text-zinc-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Reputation Rocket (Auto Reviews)</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">ECHO triggers Google review requests via SMS the moment you finish a job to drive map rankings and organic calls on autopilot.</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 pt-0 mt-auto">
                  <a 
                    href="https://digitalhandyman.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold transition-colors border border-zinc-700/50 flex items-center justify-center gap-2 group block text-center"
                  >
                    Look at the Automation Toolkit
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Tier 2 */}
              <div className="bg-zinc-900/80 border-2 border-cyan-500/30 rounded-3xl overflow-hidden relative shadow-[0_0_40px_-15px_rgba(6,182,212,0.2)] flex flex-col">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-slate-400"></div>
                <div className="p-8 border-b border-zinc-800/80 bg-cyan-950/20">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                        <Bot className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Digital Handyman Pro</h3>
                        <p className="text-cyan-200/70 text-sm mt-1">Everything in the Toolkit, plus a 24/7 AI employee that closes</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider">Pro</span>
                  </div>
                </div>
                
                <div className="bg-cyan-950/10 px-8 py-4 border-b border-zinc-800/50">
                  <span className="text-xs font-bold text-cyan-400/70 uppercase tracking-widest">Everything in the toolkit, plus...</span>
                </div>

                <div className="p-8 space-y-8 flex-grow">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 border border-cyan-500/20">
                      <Mic className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-white">AI Voice Agent (Echo)</h4>
                        <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded uppercase tracking-wider border border-cyan-500/20">Pro Only</span>
                      </div>
                      <p className="text-zinc-400 text-sm leading-relaxed">ECHO answers calls live, holds natural conversations, and handles inquiries just like a real employee. It is available every hour of every day.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 border border-cyan-500/20">
                      <Target className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-white">Real-Time Lead Qualification</h4>
                        <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded uppercase tracking-wider border border-cyan-500/20">Pro Only</span>
                      </div>
                      <p className="text-zinc-400 text-sm leading-relaxed">ECHO asks the right questions, determines fit and intent, and filters out time-wasters so your team only talks to serious prospects.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 border border-cyan-500/20">
                      <Handshake className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-white">Warm Handoff To Your Team</h4>
                        <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded uppercase tracking-wider border border-cyan-500/20">Pro Only</span>
                      </div>
                      <p className="text-zinc-400 text-sm leading-relaxed">When ECHO qualifies a lead, it hands off a full summary of their needs, urgency, and intent so your team steps in ready to close.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 border border-cyan-500/20">
                      <Brain className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-white">Trained On Your Business</h4>
                        <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded uppercase tracking-wider border border-cyan-500/20">Pro Only</span>
                      </div>
                      <p className="text-zinc-400 text-sm leading-relaxed">ECHO is custom-trained on your services, your pricing, and the way you communicate. It sounds like a knowledgeable member of your team instead of a robot.</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 pt-0 mt-auto">
                  <a 
                    href="https://api.digitalhandyman.xyz/payment-link/69c4b6c5fb727d9c905d2836"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-slate-500 hover:opacity-90 text-white font-bold transition-opacity shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 group block text-center"
                  >
                    Get access to Digital Handyman Pro
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Contact Form & FOMO */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  <span className="relative inline-block">
                    Your Competitors Are <GradientText>Already Using AI.</GradientText>
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-slate-500 rounded-full opacity-50"
                    />
                  </span>
                </h2>
                <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
                  Don't get left behind in the AI revolution. Deploy your AI employee today and start capturing every opportunity before the competition does. The businesses that adapt now will dominate their local markets.
                </p>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-blue-400 flex-shrink-0 shadow-lg">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">No long-term contracts</h4>
                      <p className="text-zinc-400 leading-relaxed">Cancel anytime. We don't lock you in. We earn your business every single month by delivering real ROI.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-slate-400 flex-shrink-0 shadow-lg">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">100% Done-for-you setup</h4>
                      <p className="text-zinc-400 leading-relaxed">We handle all the prompt engineering, integrations, and testing. You just handle the influx of new business.</p>
                    </div>
                  </div>
                </div>
                
                <div className="hidden lg:block">
                  <p className="text-sm text-zinc-500 mb-4 uppercase tracking-widest font-bold">Ready to skip the line?</p>
                  <a 
                    href="https://calendly.com/adambeckner/digitalhandyman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-full font-bold text-white bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 hover:bg-zinc-800 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Book a Strategy Call Now</span>
                  </a>
                </div>
              </div>

              <div className="bg-zinc-900/60 backdrop-blur-2xl border border-zinc-800/80 p-8 md:p-10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <h3 className="text-3xl font-bold mb-3">
                  <span className="relative inline-block">
                    Get Your <GradientText>AI Employee</GradientText>
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-slate-500 rounded-full opacity-50"
                    />
                  </span>
                </h3>
                <p className="text-zinc-400 mb-8 text-lg">Fill out the form below and our integration team will be in touch within 24 hours.</p>
                
                <form className="space-y-5" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-zinc-300 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-zinc-300 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-300 mb-2">Work Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-300 mb-2">Company Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Acme Plumbing"
                      className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-300 mb-2">How can ECHO help you?</label>
                    <textarea 
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your biggest bottleneck (e.g., missing calls after hours, spending too much on receptionists)..."
                      className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all resize-none"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex items-center h-5 mt-1">
                      <input
                        id="sms-consent"
                        type="checkbox"
                        required
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="w-5 h-5 rounded border-zinc-800 bg-zinc-950/50 text-cyan-500 focus:ring-cyan-500/50 transition-all cursor-pointer"
                      />
                    </div>
                    <label htmlFor="sms-consent" className="text-sm text-zinc-400 leading-relaxed cursor-pointer select-none">
                      I Consent to Receive SMS Notifications, Alerts & Occasional Marketing Communication from Digital Handyman. Message frequency varies. Message & data rates may apply. You can reply STOP to unsubscribe at any time.
                    </label>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full relative group overflow-hidden rounded-xl p-[1px] mt-6 block disabled:opacity-70"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-slate-500 rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <div className="relative bg-zinc-950/50 backdrop-blur-sm px-8 py-5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 group-hover:bg-transparent">
                      <span className="font-bold text-white text-lg tracking-wide">
                        {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Get Your AI Employee Today!'}
                      </span>
                      {!isSubmitting && !isSubmitted && <ArrowRight className="w-5 h-5 text-white" />}
                      {isSubmitted && <Check className="w-5 h-5 text-green-400" />}
                    </div>
                  </button>
                </form>
                
                <div className="mt-8 pt-8 border-t border-zinc-800/80 lg:hidden text-center">
                  <p className="text-sm text-zinc-400 mb-4 font-medium">Or skip the line and book directly</p>
                  <a 
                    href="https://calendly.com/adambeckner/digitalhandyman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-8 py-4 rounded-xl font-bold text-white bg-zinc-800/80 hover:bg-zinc-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg block"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Book a Strategy Call</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Footer */}
        <footer className="border-t border-zinc-800/50 pt-16 pb-8 bg-zinc-950/50 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-2">
                <div className="flex items-center mb-6">
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    <img 
                      src="https://lh3.googleusercontent.com/d/198nU5-hu5_saqJ6kJH2aIUSNj4Y5Ic3b" 
                      alt="Digital Handyman Logo" 
                      className="h-10 w-auto object-contain rounded-lg"
                      referrerPolicy="no-referrer"
                    />
                  </a>
                </div>
                <p className="text-zinc-400 max-w-sm mb-8 leading-relaxed">
                  Creating and deploying AI employees into local service businesses so you can scale without the overhead. Stop missing calls, start booking jobs.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 cursor-pointer transition-all">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 cursor-pointer transition-all">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-5 tracking-wider text-sm">Company</h4>
                <ul className="space-y-4 text-zinc-400 font-medium">
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms and Conditions</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white mb-5 tracking-wider text-sm">Newsletter</h4>
                <p className="text-zinc-400 text-sm mb-4">Join our digital handyman newsletter</p>
                <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 w-full"
                  />
                  <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-2 rounded-lg text-sm font-bold transition-colors">
                    Join
                  </button>
                </form>
              </div>
            </div>
            
            <div className="border-t border-zinc-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-zinc-500 text-sm font-medium">© {new Date().getFullYear()} Digital Handyman. All rights reserved.</p>
              <p className="text-zinc-500 text-sm font-medium flex items-center gap-1.5">
                Built for local services businesses to stop losing leads
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
