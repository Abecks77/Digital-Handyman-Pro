import { ReactNode, useEffect, useRef, useState, FC, FormEvent } from 'react';
import { motion, useInView, animate } from 'motion/react';
import { 
  Bot, PhoneMissed, Clock, TrendingDown, DollarSign, 
  CheckCircle2, XCircle, ArrowRight, ArrowDown, Calendar, Zap, Shield, Star, Heart,
  UserPlus, PhoneCall, Filter, Flame, MessageSquare, Check, User, Timer,
  Frown, AlertCircle, TrendingUp, ClipboardCheck, BrainCircuit,
  Wrench, Send, Hammer, Mic, Target, RefreshCw, Handshake, Brain, ChevronDown, Facebook, Youtube,
  Users, BarChart2, Layout, ClipboardList, Mail, BookOpen, Edit3, PieChart, Bell,
  UserCheck, CalendarCheck
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
      <PrimaryIcon className={`w-4 h-4 text-slate-400 transition-transform ${PrimaryIcon === ChevronDown || PrimaryIcon === ArrowDown ? 'group-hover:translate-y-1' : 'group-hover:translate-x-1'}`} />
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

const SectionBottomCTAs = () => (
  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
    <a 
      href="https://calendly.com/adambeckner/digitalhandyman"
      target="_blank"
      rel="noopener noreferrer"
      className="relative group overflow-hidden rounded-full p-[1px] block w-full sm:w-auto"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-slate-500 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></span>
      <div className="relative bg-zinc-950/80 backdrop-blur-sm px-8 py-4 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-zinc-900/50">
        <span className="font-bold text-white whitespace-nowrap">Schedule A Demo</span>
      </div>
    </a>

    <a 
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
      }}
      className="px-8 py-4 rounded-full font-bold text-white border border-zinc-700 hover:border-zinc-500 bg-zinc-900/50 hover:bg-zinc-800/80 transition-all flex items-center justify-center gap-2 group cursor-pointer w-full sm:w-auto whitespace-nowrap"
    >
      Keep Learning
      <ChevronDown className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors group-hover:translate-y-1" />
    </a>
  </div>
);

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

const DashboardFeatureShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    { 
      id: "crm",
      title: "CRM & Pipeline Management", 
      icon: Users,
      desc: "Track every lead, conversation, and opportunity in one centralized dashboard so nothing falls through the cracks.",
      visual: (
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
            <span className="font-semibold text-white">Sales Pipeline</span>
            <span className="text-xs text-zinc-400 bg-zinc-800 px-2 py-1 rounded">32 Active Leads</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700/30">
              <div className="text-xs text-zinc-400 mb-2">New Leads</div>
              <div className="space-y-2">
                <div className="h-16 bg-zinc-700/30 rounded border border-zinc-600/20 p-2">
                  <div className="h-2 w-1/2 bg-blue-400/40 rounded mb-2"></div>
                  <div className="h-2 w-3/4 bg-zinc-600/40 rounded"></div>
                </div>
                <div className="h-16 bg-zinc-700/30 rounded border border-zinc-600/20 p-2">
                  <div className="h-2 w-2/3 bg-cyan-400/40 rounded mb-2"></div>
                  <div className="h-2 w-1/2 bg-zinc-600/40 rounded"></div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700/30">
              <div className="text-xs text-zinc-400 mb-2">In Conversation</div>
              <div className="space-y-2">
                <div className="h-16 bg-zinc-700/30 rounded border border-zinc-600/20 p-2">
                  <div className="h-2 w-3/4 bg-blue-400/40 rounded mb-2"></div>
                  <div className="h-2 w-1/4 bg-zinc-600/40 rounded"></div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700/30">
              <div className="text-xs text-zinc-400 mb-2">Appointments Booked</div>
              <div className="space-y-2">
                <div className="h-16 bg-zinc-700/30 rounded border border-zinc-600/20 p-2">
                  <div className="h-2 w-1/2 bg-green-400/40 rounded mb-2"></div>
                  <div className="h-2 w-full bg-zinc-600/40 rounded"></div>
                </div>
                <div className="h-16 bg-zinc-700/30 rounded border border-zinc-600/20 p-2">
                  <div className="h-2 w-full bg-green-400/40 rounded mb-2"></div>
                  <div className="h-2 w-3/4 bg-zinc-600/40 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: "funnels",
      title: "Unlimited Sales Funnels", 
      icon: Filter,
      desc: "Build high-converting landing pages and customized sales funnels to capture more leads effortlessly.",
      visual: (
        <div className="space-y-4 pt-4">
           <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
            <span className="font-semibold text-white">Funnel Setup</span>
            <button className="text-xs text-cyan-400 bg-cyan-950 px-2 py-1 rounded border border-cyan-800">+ New Step</button>
          </div>
          <div className="flex flex-col space-y-2 relative items-center pt-8">
             <div className="w-full max-w-sm bg-zinc-800 p-3 rounded-lg border border-zinc-700 flex justify-between items-center z-10">
                 <span className="text-sm font-medium text-white">1. Opt-in Page</span>
                 <span className="text-xs text-green-400">42% Conv</span>
             </div>
             <div className="h-8 w-px bg-zinc-600 -my-2 relative z-0"></div>
             <div className="w-full max-w-sm bg-zinc-800 p-3 rounded-lg border border-zinc-700 flex justify-between items-center z-10">
                 <span className="text-sm font-medium text-white">2. Booking Calendar</span>
                 <span className="text-xs text-green-400">18% Conv</span>
             </div>
             <div className="h-8 w-px bg-zinc-600 -my-2 relative z-0"></div>
             <div className="w-full max-w-sm bg-zinc-800 p-3 rounded-lg border border-zinc-700 flex justify-between items-center z-10">
                 <span className="text-sm font-medium text-white">3. Thank You Page</span>
             </div>
          </div>
        </div>
      )
    },
    { 
      id: "website",
      title: "Website Builder", 
      icon: Layout,
      desc: "Create lightning-fast, mobile-optimized websites from scratch with our intuitive drag-and-drop builder.",
      visual: (
        <div className="flex bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 h-64 mt-4">
           <div className="w-1/4 bg-zinc-950 border-r border-zinc-800 p-4 space-y-4">
              <div className="h-6 bg-zinc-800 rounded"></div>
              <div className="h-20 bg-zinc-800 rounded"></div>
              <div className="h-8 bg-zinc-800 rounded"></div>
              <div className="h-8 bg-zinc-800 rounded"></div>
           </div>
           <div className="w-3/4 p-4 relative">
              <div className="absolute top-2 right-2 flex gap-2">
                 <div className="w-6 h-6 bg-zinc-800 rounded-full"></div>
                 <div className="w-6 h-6 bg-zinc-800 rounded-full"></div>
              </div>
              <div className="w-2/3 h-8 bg-zinc-800 rounded mb-4 mt-8"></div>
              <div className="w-full h-4 bg-zinc-800 rounded mb-2"></div>
              <div className="w-4/5 h-4 bg-zinc-800 rounded mb-6"></div>
              <div className="w-32 h-10 bg-cyan-600/50 rounded"></div>
           </div>
        </div>
      )
    },
    { 
      id: "surveys",
      title: "Surveys & Forms", 
      icon: ClipboardList,
      desc: "Gather critical customer information and feedback securely with customizable forms and surveys.",
      visual: (
        <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 max-w-md mx-auto mt-4">
          <div className="h-6 w-1/2 bg-zinc-700/50 rounded mb-6 mx-auto"></div>
          <div className="space-y-4">
            <div>
              <div className="h-4 w-1/4 bg-zinc-700/50 rounded mb-2"></div>
              <div className="h-10 w-full bg-zinc-800 rounded border border-zinc-700"></div>
            </div>
            <div>
              <div className="h-4 w-1/3 bg-zinc-700/50 rounded mb-2"></div>
              <div className="h-24 w-full bg-zinc-800 rounded border border-zinc-700"></div>
            </div>
            <div className="h-10 w-full bg-cyan-600/50 rounded mt-4 flex items-center justify-center text-sm font-medium text-cyan-200">Submit Form</div>
          </div>
        </div>
      )
    },
    { 
      id: "email",
      title: "Email Marketing", 
      icon: Mail,
      desc: "Send targeted blasts or build automated email nurture sequences to engage your audience over time.",
      visual: (
        <div className="flex h-full min-h-[250px] bg-zinc-900 rounded-lg border border-zinc-800 mt-4 overflow-hidden">
           <div className="w-1/3 border-r border-zinc-800 p-4 space-y-3">
             <div className="font-medium text-xs text-zinc-400 mb-2 uppercase">Campaigns</div>
             <div className="p-2 bg-zinc-800 rounded border-l-2 border-cyan-400"><div className="h-3 w-3/4 bg-zinc-600 rounded"></div></div>
             <div className="p-2 hover:bg-zinc-800/50 rounded"><div className="h-3 w-full bg-zinc-700 rounded"></div></div>
             <div className="p-2 hover:bg-zinc-800/50 rounded"><div className="h-3 w-5/6 bg-zinc-700 rounded"></div></div>
           </div>
           <div className="w-2/3 p-6 flex flex-col">
             <div className="flex items-center gap-4 mb-6 border-b border-zinc-800 pb-4">
                <div className="w-10 h-10 rounded-full bg-cyan-900 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <div className="h-4 w-48 bg-zinc-700 rounded mb-2"></div>
                  <div className="h-3 w-32 bg-zinc-800 rounded"></div>
                </div>
             </div>
             <div className="flex-1 bg-zinc-950 rounded border border-zinc-800 p-6 flex items-center justify-center">
                 <div className="text-center w-full max-w-xs">
                     <div className="h-20 bg-zinc-800 rounded mb-4"></div>
                     <div className="h-4 w-3/4 bg-zinc-700 rounded mx-auto mb-2"></div>
                     <div className="h-4 w-1/2 bg-zinc-700 rounded mx-auto mb-6"></div>
                     <div className="h-8 w-1/3 bg-cyan-600/50 rounded mx-auto"></div>
                 </div>
             </div>
           </div>
        </div>
      )
    },
    { 
      id: "sms",
      title: "2-Way SMS Marketing", 
      icon: MessageSquare,
      desc: "Text clients directly from your dashboard and run bulk SMS promotions for instant engagement.",
      visual: (
        <div className="max-w-md mx-auto bg-zinc-900 rounded-lg flex flex-col h-[320px] border border-zinc-800 overflow-hidden mt-4">
           <div className="bg-zinc-800 p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-cyan-800"></div>
              <div>
                <div className="h-4 w-24 bg-zinc-400 rounded mb-1"></div>
                <div className="h-2 w-16 bg-zinc-600 rounded"></div>
              </div>
           </div>
           <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
             <div className="self-end bg-cyan-900 p-3 rounded-2xl rounded-tr-sm max-w-[80%]">
                <div className="h-3 w-32 bg-cyan-700 rounded mb-2"></div>
                <div className="h-3 w-20 bg-cyan-700 rounded"></div>
             </div>
             <div className="self-start bg-zinc-800 p-3 rounded-2xl rounded-tl-sm max-w-[80%]">
                <div className="h-3 w-40 bg-zinc-600 rounded mb-2"></div>
                <div className="h-3 w-24 bg-zinc-600 rounded"></div>
             </div>
             <div className="self-end bg-cyan-900 p-3 rounded-2xl rounded-tr-sm max-w-[80%]">
                <div className="h-3 w-28 bg-cyan-700 rounded"></div>
             </div>
           </div>
           <div className="p-3 border-t border-zinc-800 flex gap-2">
              <div className="h-10 flex-1 bg-zinc-800 rounded-full shrink-0"></div>
              <div className="h-10 w-10 bg-cyan-600/50 rounded-full shrink-0 flex items-center justify-center">
                 <Send className="w-4 h-4 text-cyan-400" />
              </div>
           </div>
        </div>
      )
    },
    { 
      id: "booking",
      title: "Booking & Appointments", 
      icon: Calendar,
      desc: "Let clients schedule time on your calendar autonomously without phone tag or double-booking.",
      visual: (
        <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 h-full mt-4">
           <div className="flex justify-between items-center mb-6 border-b border-zinc-800 pb-4">
              <span className="font-semibold text-white">Calendar</span>
              <div className="flex gap-2">
                 <span className="px-3 py-1 text-xs bg-zinc-800 rounded-lg text-zinc-400">Day</span>
                 <span className="px-3 py-1 text-xs bg-cyan-900 rounded-lg text-cyan-400 border border-cyan-800">Week</span>
              </div>
           </div>
           <div className="grid grid-cols-5 gap-2 h-48">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="text-center text-xs text-zinc-500 mb-2 font-medium">Mon {i+10}</div>
                  <div className="flex-1 border-r border-zinc-800/50 relative">
                     {i === 2 && <div className="absolute top-4 left-1 right-1 h-12 bg-blue-900/50 border-l-2 border-blue-500 rounded text-[10px] p-1 text-blue-300">Quote</div>}
                     {i === 4 && <div className="absolute top-16 left-1 right-1 h-16 bg-green-900/50 border-l-2 border-green-500 rounded text-[10px] p-1 text-green-300">Job</div>}
                  </div>
                </div>
              ))}
           </div>
        </div>
      )
    },
    { 
      id: "automations",
      title: "Workflow Automations", 
      icon: Zap,
      desc: "Automate repetitive tasks like follow-ups, appointment reminders, and onboarding sequences.",
      visual: (
        <div className="flex flex-col items-center justify-center p-8 space-y-4">
           <div className="w-full max-w-sm bg-zinc-800 p-4 rounded-lg border border-zinc-700 flex items-center gap-3">
              <div className="bg-zinc-700 text-zinc-400 p-2 rounded-lg">
                <PhoneCall className="w-4 h-4"/>
              </div>
              <span className="text-sm font-medium text-white">Trigger: Missed Call</span>
           </div>
           <div className="w-px h-6 bg-cyan-500/50 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-900 border border-cyan-500"></div>
           </div>
           <div className="w-full max-w-sm bg-zinc-800 p-4 rounded-lg border border-zinc-700 flex items-center gap-3 border-l-4 border-l-blue-500">
              <div className="bg-blue-900/50 text-blue-400 p-2 rounded-lg">
                <MessageSquare className="w-4 h-4"/>
              </div>
              <span className="text-sm font-medium text-white">Action: Send SMS</span>
           </div>
           <div className="w-px h-6 bg-cyan-500/50 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-900 border border-cyan-500"></div>
           </div>
           <div className="w-full max-w-sm bg-zinc-800 p-4 rounded-lg border border-zinc-700 flex items-center gap-3 border-l-4 border-l-green-500">
              <div className="bg-green-900/50 text-green-400 p-2 rounded-lg">
                <Bell className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium text-white">Action: Internal Alert</span>
           </div>
        </div>
      )
    },
    { 
      id: "courses",
      title: "Courses / Products", 
      icon: BookOpen,
      desc: "Host your own video training materials, resources, and digital products in a secure portal.",
      visual: (
        <div className="grid grid-cols-2 gap-4 col-span-2 md:col-span-1 mt-4">
           <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 col-span-2">
              <div className="h-32 bg-zinc-800 flex items-center justify-center relative">
                 <div className="w-12 h-12 bg-cyan-600/50 rounded-full flex items-center justify-center absolute z-10">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent"></div>
              </div>
              <div className="p-4">
                 <div className="h-4 w-3/4 bg-zinc-500 rounded mb-2"></div>
                 <div className="h-3 w-1/2 bg-zinc-700 rounded"></div>
              </div>
           </div>
           <div className="bg-zinc-900 rounded-lg p-3 border border-zinc-800 flex items-center gap-3 col-span-2">
              <div className="h-10 w-16 bg-zinc-800 rounded flex-shrink-0"></div>
              <div className="flex-1">
                <div className="h-3 w-full bg-zinc-600 rounded mb-1"></div>
                <div className="h-2 w-1/2 bg-zinc-700 rounded"></div>
              </div>
           </div>
        </div>
      )
    },
    { 
      id: "call-tracking",
      title: "Call Tracking", 
      icon: PhoneCall,
      desc: "Track exactly which marketing campaigns drive inbound phone calls to optimize your marketing spend.",
      visual: (
        <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 mt-4">
           <div className="flex justify-between items-center mb-6 pb-4 border-b border-zinc-800 tracking-wide">
              <span className="font-semibold text-white">Call Log</span>
              <span className="text-xs font-semibold px-2 py-1 bg-green-900/30 text-green-400 rounded border border-green-800/50">Active Numbers</span>
           </div>
           <div className="space-y-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="flex justify-between items-center p-3 bg-zinc-800/50 rounded border border-zinc-700/50 hover:bg-zinc-800 transition-colors">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-900/30 flex flex-shrink-0 items-center justify-center border border-blue-800/50">
                         <PhoneCall className="w-3 h-3 text-blue-400" />
                      </div>
                      <div>
                         <div className="h-3 w-24 bg-zinc-400 rounded mb-1"></div>
                         <div className="h-2 w-16 bg-zinc-600 rounded mb-1"></div>
                      </div>
                   </div>
                   <div className="text-right">
                      <div className="h-3 w-16 bg-cyan-700/80 rounded mb-1 ml-auto"></div>
                      <div className="h-2 w-10 bg-zinc-600 rounded ml-auto"></div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      )
    },
    { 
      id: "reputation",
      title: "Reputation Management", 
      icon: Star,
      desc: "Automatically request, monitor, and instantly reply to Google and Facebook reviews to build trust.",
      visual: (
        <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 mt-4">
           <div className="flex items-center gap-8 mb-8 pb-6 border-b border-zinc-800">
              <div className="text-center">
                 <div className="text-5xl font-bold text-white mb-2">4.9</div>
                 <div className="flex gap-1 text-yellow-500 mb-1 justify-center">
                   <Star className="w-4 h-4 fill-current"/>
                   <Star className="w-4 h-4 fill-current"/>
                   <Star className="w-4 h-4 fill-current"/>
                   <Star className="w-4 h-4 fill-current"/>
                   <Star className="w-4 h-4 fill-current"/>
                 </div>
                 <div className="text-sm text-zinc-400">128 Reviews</div>
              </div>
              <div className="flex-1 space-y-2">
                 {[5,4,3,2,1].map((rating, i) => (
                   <div key={rating} className="flex items-center gap-2">
                      <span className="text-xs font-medium text-zinc-400 w-2">{rating}</span>
                      <div className="flex-1 h-2.5 bg-zinc-800 rounded-full overflow-hidden">
                         <div className="h-full bg-yellow-500 rounded-full" style={{width: i === 0 ? '85%' : i === 1 ? '10%' : i === 2 ? '5%' : '0%'}}></div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           <div className="p-5 bg-zinc-800/30 rounded-lg border border-zinc-700/50">
              <div className="flex justify-between mb-3">
                <div className="flex gap-1 text-yellow-500"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                <span className="text-xs text-zinc-500">2 days ago</span>
              </div>
              <div className="h-2 w-full bg-zinc-600 rounded mb-2"></div>
              <div className="h-2 w-3/4 bg-zinc-600 rounded mb-4"></div>
              <div className="h-7 w-24 bg-cyan-900/50 text-cyan-400 border border-cyan-800 rounded text-xs flex items-center justify-center font-medium">Reply instantly</div>
           </div>
        </div>
      )
    },
    { 
      id: "analytics",
      title: "Tracking & Analytics", 
      icon: TrendingUp,
      desc: "Get detailed, easy-to-read insights into your traffic, conversion rates, and total revenue.",
      visual: (
        <div className="grid grid-cols-2 gap-4 mt-4">
           <div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800 shadow-sm flex flex-col justify-between">
             <div>
                <div className="text-sm font-medium text-zinc-400 mb-1">Total Revenue</div>
                <div className="text-3xl font-bold text-white mb-4">$14,250</div>
             </div>
             <div className="h-20 w-full flex items-end gap-1.5">
                {[4, 6, 5, 8, 7, 10, 12].map((h, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-sm" style={{height: `${h * 8}%`}}></div>
                ))}
             </div>
           </div>
           <div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800 shadow-sm flex flex-col items-center justify-center">
             <div className="text-sm font-medium text-zinc-400 mb-1 w-full text-left">Lead Conversion</div>
             <div className="text-3xl font-bold text-white mb-4 w-full text-left">24.8%</div>
             <div className="h-20 w-full flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-[6px] border-zinc-800 border-r-cyan-500 border-t-cyan-500 rotate-45 relative shadow-[0_0_15px_rgba(6,182,212,0.2)]"></div>
             </div>
           </div>
           <div className="col-span-2 bg-zinc-900 p-5 rounded-xl border border-zinc-800 shadow-sm">
             <div className="text-sm font-medium text-zinc-400 mb-4">Traffic Sources</div>
             <div className="space-y-4">
               <div className="flex items-center gap-3">
                 <div className="text-xs font-semibold w-16 text-zinc-300">Organic</div>
                 <div className="flex-1 h-2.5 bg-zinc-800 rounded-full overflow-hidden"><div className="h-full w-[60%] bg-blue-500 rounded-full"></div></div>
                 <div className="text-xs font-mono text-zinc-400">60%</div>
               </div>
               <div className="flex items-center gap-3">
                 <div className="text-xs font-semibold w-16 text-zinc-300">Direct</div>
                 <div className="flex-1 h-2.5 bg-zinc-800 rounded-full overflow-hidden"><div className="h-full w-[30%] bg-cyan-500 rounded-full"></div></div>
                 <div className="text-xs font-mono text-zinc-400">30%</div>
               </div>
             </div>
           </div>
        </div>
      )
    },
    { 
      id: "communities",
      title: "Communities", 
      icon: Users,
      desc: "Build and manage private groups or memberships to foster loyalty among your best clients.",
      visual: (
        <div className="bg-zinc-900 rounded-xl border border-zinc-800 h-full flex overflow-hidden mt-4 shadow-sm">
           <div className="w-16 bg-zinc-950 border-r border-zinc-800 flex flex-col items-center py-4 gap-4">
              <div className="w-10 h-10 bg-cyan-900 rounded-xl border border-cyan-700/50 shadow-sm"></div>
              <div className="w-10 h-10 bg-zinc-800 rounded-full opacity-50"></div>
              <div className="w-10 h-10 bg-zinc-800 rounded-full opacity-50"></div>
           </div>
           <div className="flex-1 p-5 flex flex-col">
              <div className="h-6 w-32 bg-zinc-700 rounded mb-6"></div>
              <div className="space-y-4">
                 <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50 flex gap-4">
                    <div className="w-10 h-10 bg-zinc-600 rounded-full shrink-0"></div>
                    <div className="w-full pt-1">
                       <div className="h-3 w-24 bg-zinc-500 rounded mb-2.5"></div>
                       <div className="h-2 w-3/4 bg-zinc-600 rounded mb-1.5"></div>
                       <div className="h-2 w-1/2 bg-zinc-600 rounded"></div>
                    </div>
                 </div>
                 <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50 flex gap-4">
                    <div className="w-10 h-10 bg-zinc-600 rounded-full shrink-0"></div>
                    <div className="w-full pt-1">
                       <div className="h-3 w-32 bg-zinc-500 rounded mb-2.5"></div>
                       <div className="h-2 w-2/3 bg-zinc-600 rounded mb-1.5"></div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )
    },
    { 
      id: "signing",
      title: "Document Signing", 
      icon: Edit3,
      desc: "Send contracts, proposals, and agreements for secure, legally binding digital signatures.",
      visual: (
        <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 h-full flex flex-col items-center justify-center relative mt-4 shadow-sm overflow-hidden">
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
           <div className="w-56 h-64 bg-zinc-100 rounded shadow-2xl p-6 relative origin-bottom -rotate-[4deg] z-10 transition-transform hover:rotate-0 duration-500 border border-zinc-300">
              <div className="h-2.5 w-1/2 bg-zinc-300 rounded mb-5"></div>
              <div className="h-1.5 w-full bg-zinc-300 rounded mb-2.5"></div>
              <div className="h-1.5 w-full bg-zinc-300 rounded mb-2.5"></div>
              <div className="h-1.5 w-3/4 bg-zinc-300 rounded mb-8"></div>
              
              <div className="h-1.5 w-full bg-zinc-300 rounded mb-2.5"></div>
              <div className="h-1.5 w-5/6 bg-zinc-300 rounded mb-10"></div>
              
              <div className="border hover:border-solid border-cyan-500 border-dashed rounded p-3 text-center text-[10px] font-bold tracking-wider text-cyan-600 bg-cyan-50/50 cursor-pointer transition-colors">
                 SIGNATURE HERE
              </div>
           </div>
           <div className="absolute bottom-10 right-10 bg-gradient-to-r from-blue-500 via-cyan-500 to-slate-500 rounded-full p-4 shadow-lg shadow-cyan-500/30 z-20 hover:scale-110 transition-transform">
              <Edit3 className="w-6 h-6 text-white" />
           </div>
        </div>
      )
    },
    { 
      id: "ghost",
      title: "AI Voice Agent (GHOST)", 
      icon: Bot,
      desc: "Your 24/7 AI employee that answers live calls, texts your leads, and books jobs around the clock.",
      visual: (
        <div className="flex flex-col items-center justify-center h-full p-8 relative overflow-hidden bg-zinc-950 border border-zinc-800 rounded-xl mt-4 shadow-sm">
           <div className="absolute flex items-center justify-center w-full h-full">
               <div className="w-56 h-56 border border-cyan-500/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
               <div className="absolute w-40 h-40 border border-cyan-500/30 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
               <div className="absolute w-full h-full bg-cyan-900/10 blur-3xl"></div>
           </div>
           
           <div className="relative z-10 w-28 h-28 bg-zinc-900 border border-cyan-500/50 rounded-full flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(6,182,212,0.4)]">
              <Bot className="w-14 h-14 text-cyan-400" />
           </div>
           
           <div className="bg-zinc-800/80 backdrop-blur-md border border-zinc-700 p-5 rounded-2xl relative z-10 w-full max-w-sm space-y-4 shadow-xl">
              <div className="flex items-center justify-center gap-2 font-semibold text-white mb-2">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                GHOST Agent Active
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-medium text-zinc-300 p-2.5 bg-zinc-900/80 rounded-lg">
                   <span>Current Status</span>
                   <span className="text-cyan-400">Handling Inquiries</span>
                </div>
                <div className="flex items-center justify-between text-xs font-medium text-zinc-300 p-2.5 bg-zinc-900/80 rounded-lg">
                   <span>Calls Handled Today</span>
                   <span className="text-white font-mono text-sm">24</span>
                </div>
                <div className="flex items-center justify-between text-xs font-medium text-zinc-300 p-2.5 bg-zinc-900/80 rounded-lg">
                   <span>Appointments Booked</span>
                   <span className="text-white font-mono text-sm">3</span>
                </div>
              </div>
           </div>
        </div>
      )
    }
  ];

  return (
    <div className="grid lg:grid-cols-[350px_1fr] gap-6 bg-zinc-900/50 border border-zinc-800/80 rounded-3xl p-6 shadow-2xl w-full">
      {/* Sidebar: Feature List */}
      <div className="flex flex-col space-y-1.5 lg:h-[600px] overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin', scrollbarColor: '#3f3f46 transparent' }}>
        {features.map((feature, idx) => (
          <button
            key={feature.id}
            onClick={() => setActiveIndex(idx)}
            className={`flex items-center gap-4 w-full p-3.5 rounded-xl text-left transition-all duration-300 border ${
              activeIndex === idx 
                ? 'bg-cyan-950/40 border-cyan-500/40 shadow-[inset_0_0_20px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/20' 
                : 'bg-zinc-800/20 border-transparent hover:bg-zinc-800/60 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <div className={`p-2 rounded-lg transition-colors ${activeIndex === idx ? 'bg-cyan-500/20 text-cyan-400' : 'bg-zinc-800/80 text-zinc-400'}`}>
               <feature.icon className="w-5 h-5 flex-shrink-0" />
            </div>
            <span className={`font-semibold tracking-wide text-sm ${activeIndex === idx ? 'text-white' : ''}`}>
              {feature.title}
            </span>
          </button>
        ))}
      </div>

      {/* Main Area: Showcase Content */}
      <div className="bg-zinc-950 rounded-2xl border border-zinc-800/80 relative overflow-hidden flex flex-col h-[500px] lg:h-[600px] shadow-inner shadow-black/50">
        {/* Header desc */}
        <div className="p-8 pb-0 z-20 relative">
           <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
           >
              <h3 className="text-2xl font-bold text-white mb-2">{features[activeIndex].title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm max-w-xl">{features[activeIndex].desc}</p>
           </motion.div>
        </div>

        {/* Visualizer */}
        <div className="flex-1 p-8 relative z-20 h-full flex flex-col overflow-hidden">
           <motion.div
              key={`visual-${activeIndex}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="flex-1 w-full h-full flex flex-col"
           >
              {features[activeIndex].visual}
           </motion.div>
        </div>
        
        {/* Decorative background glow based on feature */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-cyan-900/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-500/5 blur-[80px] rounded-full pointer-events-none z-0"></div>
      </div>
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
                    src="https://lh3.googleusercontent.com/d/1544mD2hMn-HUIbIWIjKI1IARn_uqRZ-A" 
                    alt="Digital Handyman Logo" 
                    className="h-8 w-auto object-contain rounded-md"
                    referrerPolicy="no-referrer"
                  />
                </a>
                <div className="h-4 w-[1px] bg-zinc-800 hidden sm:block"></div>
                <div className="hidden sm:flex items-center gap-2 px-2 py-1 rounded-full bg-zinc-900/50 border border-zinc-800/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">GHOST: ACTIVE</span>
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

        {/* 1. Hero Section & GHOST Intro */}
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
                <div className="absolute -top-20 -left-6 text-[10rem] font-black text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter hidden lg:block leading-none">
                  GHOST
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
                    <span className="block">Turn Missed Leads</span>
                    <span className="relative inline-block mt-2">
                      <GradientText>Into Revenue</GradientText>
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-slate-500 rounded-full opacity-50"
                      />
                    </span>
                  </h1>
                  
                  <p className="text-xl text-zinc-400 mb-12 leading-relaxed max-w-lg font-medium">
                    Meet <span className="text-white font-bold">GHOST</span>, your 24/7 AI employee that handles SMS, web chats, and missed calls so you can scale your local business on autopilot.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <DualCTA 
                      primaryText="See what Ghost can do for you"
                      primaryIcon={ArrowDown}
                      primaryAction={() => {
                        const el = document.getElementById('how-it-works');
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* GHOST Intro (Mock Conversation) */}
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
                      <h3 className="font-semibold text-white">Ghost AI</h3>
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
                  *An illustrative example of GHOST's automated response capabilities.
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
                  desc: "We map out your services, pricing, service areas, and FAQs to build GHOST's knowledge base. We train your AI to speak in your brand's voice, ensuring every customer interaction feels authentic, professional, and perfectly aligned with your business values." 
                },
                { 
                  step: "02", 
                  title: "We Deploy Ghost", 
                  desc: "We integrate Ghost directly into your website, SMS routing, Google Business Profile, and social media channels. The setup is completely hands-off for you. Our team handles the technical integration so you don't have to write a single line of code." 
                },
                { 
                  step: "03", 
                  title: "You Watch Leads Roll In", 
                  desc: "GHOST handles inquiries 24/7, qualifies leads based on your specific criteria, and books jobs directly onto your calendar. Wake up to new appointments, stop worrying about missed calls, and watch your revenue grow on autopilot." 
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

        {/* 2.5 The GHOST Lead Flow */}
        <section id="lead-flow" className="py-24 bg-zinc-900/30 border-y border-zinc-800/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-zinc-950/0 to-zinc-950/0 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="relative inline-block">
                  The <GradientText>Ghost Lead Flow</GradientText>
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
                Ghost turns inbound demand into a structured process instead of a scramble. Every new inquiry is handled the same way, every time.
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
                  desc: "GHOST immediately engages the caller, asking the right questions to keep the conversation moving forward."
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
                  desc: "While the lead talks, GHOST determines fit, intent, and readiness. Time-wasters are filtered out."
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
                The AI agent engages the caller, asks the right questions, and keeps the conversation moving forward with purpose. While the lead talks, Ghost determines fit, intent, and readiness without relying on guesswork. Nothing slips through. Nothing is rushed. By the time the interaction is complete, the outcome is clear. Your team receives a lead that has already been evaluated, prioritized, and prepared, allowing them to step in at the moment it actually matters.
              </p>
              <SectionBottomCTAs />
            </div>
          </div>
        </section>

        {/* 2.6 Why GHOST Wins */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="relative inline-block">
                  How <GradientText>Ghost</GradientText> Removes The <GradientText>Biggest Sales Problems</GradientText>
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
                Ghost wins because it removes human dependency from the most fragile part of the sales process. It creates a system where every inbound opportunity is handled with the same discipline, precision, and follow-through. There is no variation based on mood, availability, or experience level. Decisions are made based on signals, not assumptions. As a result, sales teams stop reacting and start operating with clarity. Ghost does not compete with people. It outperforms inconsistency. That is what turns inbound demand into a reliable advantage instead of an ongoing risk.
              </p>
              <SectionBottomCTAs />
            </div>
          </div>
        </section>

        {/* 2.7 Now vs With Ghost */}
        <section className="py-24 bg-zinc-900/30 border-y border-zinc-800/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-zinc-950/0 to-zinc-950/0 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-[1.2rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 whitespace-nowrap tracking-tight">
                <span className="relative inline-block">
                  Why Our Customers <GradientText>Love Ghost</GradientText>
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

              {/* WITH GHOST - The Solution */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-blue-950/20 border border-blue-500/30 rounded-3xl p-8 md:p-12 relative overflow-hidden group shadow-[0_0_50px_rgba(59,130,246,0.1)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-600/5 to-transparent pointer-events-none"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_20px_rgba(96,165,250,0.8)]"></div>
                
                <h3 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">With Ghost</h3>
                
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
                Ghost replaces uncertainty with clarity, chaos with structure, and missed opportunities with momentum. For the business owner, this means no longer wondering what happened to yesterday's calls or whether opportunities are slipping through the cracks. You stop feeling chained to your phone, inbox, or sales team just to make sure leads are handled correctly. Inbound sales become something you trust instead of something you monitor. Your business runs with consistency whether you are in the office or not. Decisions get easier because the data is clear, the handoffs are clean, and the results are predictable. Ghost gives you back control, confidence, and the ability to scale without being personally involved in every conversation.
              </p>
              <SectionBottomCTAs />
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
                  desc: "70% of callers won't leave a voicemail. If you don't answer immediately, they call the next business on Google. GHOST intercepts missed calls with an instant text back, turning a lost opportunity into a booked job." 
                },
                { 
                  icon: Clock, 
                  title: "Slow Follow-up Kills Deals", 
                  desc: "Leads go cold in exactly 5 minutes. Can your human team drop everything to respond to every single inquiry instantly? GHOST responds in under 3 seconds, every single time, guaranteeing you're always the first to reply." 
                },
                { 
                  icon: TrendingDown, 
                  title: "Wasted Advertising Spend", 
                  desc: "You're paying hundreds or thousands for clicks, but losing the leads because no one was available to chat when they landed on your site. GHOST maximizes your ROI by engaging every single visitor 24/7." 
                },
                { 
                  icon: DollarSign, 
                  title: "The Crushing Cost of Hiring", 
                  desc: "Recruiting, training, payroll, benefits, and turnover. Humans are expensive, they make mistakes, they take vacations, and they sleep. GHOST works 168 hours a week for a fraction of the cost of a minimum-wage employee." 
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

          {/* Transition Band & 4 Employees in 1 */}
          <div className="pt-24 pb-32 border-y border-zinc-800/50 relative overflow-hidden bg-zinc-950/50">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="text-center max-w-4xl mx-auto mb-16 relative">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-tight">
                  Here's How We <GradientText>Fix The Leak.</GradientText>
                </h2>
                <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                  We don't just provide a chatbot. We build specialized AI lead nurturing automations designed to take over the specific bottlenecks in your local business, so you can focus on the work that actually pays.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Card 1: Receptionist */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 md:p-10 relative z-10 group hover:border-blue-500/40 transition-colors shadow-xl h-full flex flex-col"
                >
                  <div className="relative w-full h-48 bg-zinc-950/50 rounded-xl border border-zinc-800/50 mb-8 flex items-center justify-center overflow-hidden group-hover:border-blue-500/30 transition-colors">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent"></div>
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="relative z-10 flex gap-4">
                        <div className="w-16 h-24 rounded-xl border border-blue-500/30 bg-zinc-950 flex flex-col items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.2)] overflow-hidden">
                           <div className="w-10 h-16 bg-blue-900/20 rounded overflow-hidden p-1 flex flex-col gap-1.5 justify-center">
                             <motion.div initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} transition={{ repeat: Infinity, duration: 2 }} className="w-3/4 h-2 bg-blue-400/50 rounded self-start"></motion.div>
                             <motion.div initial={{ opacity: 0, x: 5 }} animate={{ opacity: 1, x: 0 }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} className="w-3/4 h-2 bg-zinc-600/50 rounded self-end"></motion.div>
                             <motion.div initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} transition={{ repeat: Infinity, duration: 2, delay: 1 }} className="w-3/4 h-2 bg-blue-400/50 rounded self-start"></motion.div>
                           </div>
                        </div>
                      </motion.div>
                      <motion.div animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bg-blue-500/20 blur-2xl w-32 h-32 rounded-full"></motion.div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">The 24/7 Receptionist</h3>
                    <p className="text-zinc-400 leading-relaxed">
                      Missed calls cost you money. When you're on a job site or it's after hours, your AI receptionist instantly texts back missed calls, answers common questions about your services, and keeps the lead warm until you're ready.
                    </p>
                  </div>
                </motion.div>
                
                {/* Card 2: Qualifier */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 md:p-10 relative z-10 group hover:border-cyan-500/40 transition-colors shadow-xl h-full flex flex-col"
                >
                  <div className="relative w-full h-48 bg-zinc-950/50 rounded-xl border border-zinc-800/50 mb-8 flex items-center justify-center overflow-hidden group-hover:border-cyan-500/30 transition-colors">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-slate-500/5 to-transparent"></div>
                      <div className="relative z-10 flex flex-col items-center gap-3">
                        <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} className="w-24 h-2.5 bg-zinc-800 rounded-full flex overflow-hidden shadow-inner">
                           <div className="w-1/3 bg-red-500/50"></div><div className="w-2/3 bg-cyan-400/50"></div>
                        </motion.div>
                        <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.15)] my-1">
                          <UserCheck className="w-6 h-6 text-cyan-400/70" />
                        </div>
                        <motion.div animate={{ scaleX: [1, 0.8, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="w-16 h-2.5 bg-cyan-400/60 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.3)]"></motion.div>
                        <motion.div animate={{ scaleX: [1, 0.6, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.2 }} className="w-10 h-2.5 bg-cyan-400/60 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.3)]"></motion.div>
                      </div>
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className="absolute border border-cyan-500/10 w-48 h-48 rounded-full border-dashed"></motion.div>
                      <motion.div animate={{ opacity: [0.1, 0.4, 0.1] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute bg-cyan-500/20 blur-2xl w-32 h-32 rounded-full"></motion.div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">The Lead Qualifier</h3>
                    <p className="text-zinc-400 leading-relaxed">
                      Stop wasting time driving to unqualified estimates. Your AI automation engages new leads via SMS or web chat, asks your specific qualifying questions, and filters out the tire-kickers before they ever reach your desk.
                    </p>
                  </div>
                </motion.div>

                {/* Card 3: Scheduler */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 md:p-10 relative z-10 group hover:border-slate-400/40 transition-colors shadow-xl h-full flex flex-col"
                >
                  <div className="relative w-full h-48 bg-zinc-950/50 rounded-xl border border-zinc-800/50 mb-8 flex items-center justify-center overflow-hidden group-hover:border-slate-500/30 transition-colors">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 via-blue-500/5 to-transparent"></div>
                      <div className="relative z-10 grid grid-cols-4 gap-2 p-3 border border-slate-500/30 bg-zinc-900/60 backdrop-blur-sm rounded-xl shadow-[0_0_20px_rgba(100,116,139,0.15)]">
                         {[0,1,2,3,4,5,6,7].map(i => (
                           <motion.div 
                             key={i}
                             animate={i === 2 || i === 5 || i === 7 ? { backgroundColor: ["rgba(63,63,70,0.5)", "rgba(16,185,129,0.2)", "rgba(63,63,70,0.5)"] } : {}}
                             transition={{ repeat: Infinity, duration: 3, delay: i * 0.3 }}
                             className={`w-8 h-8 ${i === 2 || i === 5 || i === 7 ? 'bg-zinc-800' : 'bg-zinc-800'} rounded border border-zinc-700/50 flex items-center justify-center overflow-hidden`}
                           >
                             {(i === 2 || i === 5 || i === 7) && (
                               <motion.div animate={{ scale: [0, 1.2, 1] }} transition={{ repeat: Infinity, duration: 3, delay: i * 0.3 }}>
                                 <Check className="w-4 h-4 text-green-400/80 drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]" />
                               </motion.div>
                             )}
                           </motion.div>
                         ))}
                      </div>
                      <motion.div animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.2, 0.5, 0.2] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute bg-slate-500/20 blur-2xl w-40 h-40 rounded-full"></motion.div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">The Scheduling Assistant</h3>
                    <p className="text-zinc-400 leading-relaxed">
                      Eliminate the endless back-and-forth of finding a time that works. The AI integrates directly with your calendar to book estimates and appointments automatically based on your real-time availability.
                    </p>
                  </div>
                </motion.div>

                {/* Card 4: Follow Up */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/60 rounded-3xl p-8 md:p-10 relative z-10 group hover:border-blue-500/40 transition-colors shadow-xl h-full flex flex-col"
                >
                  <div className="relative w-full h-48 bg-zinc-950/50 rounded-xl border border-zinc-800/50 mb-8 flex items-center justify-center overflow-hidden group-hover:border-blue-500/30 transition-colors">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent"></div>
                      <div className="relative z-10 w-24 h-24 flex items-center justify-center">
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 6, ease: "linear" }} className="absolute w-full h-full border-[3px] border-dashed border-blue-500/20 rounded-full"></motion.div>
                        <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }} className="absolute w-16 h-16 border-[2px] border-cyan-500/20 rounded-full"></motion.div>
                        <motion.div animate={{ scale: [0.8, 1.1, 0.8] }} transition={{ repeat: Infinity, duration: 2 }} className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                           <RefreshCw className="w-5 h-5 text-blue-400" />
                        </motion.div>
                      </div>
                      <motion.div animate={{ opacity: [0, 1, 0], y: [10, -20] }} transition={{ repeat: Infinity, duration: 2.5 }} className="absolute right-12 top-10 w-8 h-8 bg-zinc-900 rounded-lg border border-cyan-500/30 flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.2)]"><Mail className="w-4 h-4 text-cyan-400/80"/></motion.div>
                      <motion.div animate={{ opacity: [0, 1, 0], y: [10, -20] }} transition={{ repeat: Infinity, duration: 2.5, delay: 1.2 }} className="absolute left-12 bottom-10 w-8 h-8 bg-zinc-900 rounded-lg border border-blue-500/30 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.2)]"><MessageSquare className="w-4 h-4 text-blue-400/80"/></motion.div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">The Follow-Up Machine</h3>
                    <p className="text-zinc-400 leading-relaxed">
                      Sent a quote but haven't heard back? Finished a job and need a Google review? Your AI automation automatically follows up with customers via text or email at the perfect time, increasing your close rate and boosting your local SEO.
                    </p>
                  </div>
                </motion.div>
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
                *GHOST is not limited to the listed industries below, contact us for more info*
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
              <h2 className="text-[1.1rem] sm:text-[1.7rem] md:text-4xl lg:text-5xl font-bold mb-6 whitespace-nowrap tracking-tight">
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
                  <Bot className="w-5 h-5 text-blue-400 hidden sm:block" /> GHOST AI
                </div>
                <div className="p-5 md:p-8 font-semibold text-zinc-400 border-l border-zinc-800/80 text-sm md:text-lg">Human Hire</div>
              </div>
              
              {[
                { feature: "Availability", ghost: "24/7/365 (Never sleeps)", human: "9 to 5, Mon-Fri (40 hrs/wk)" },
                { feature: "Response Time", ghost: "Instant (< 3 seconds)", human: "Minutes to Hours" },
                { feature: "Cost Structure", ghost: "Flat, predictable monthly rate", human: "Salary, benefits, taxes, overtime" },
                { feature: "Onboarding & Training", ghost: "Ready to work in days", human: "Weeks of training & shadowing" },
                { feature: "Multitasking Capacity", ghost: "Unlimited simultaneous chats", human: "One call or chat at a time" },
                { feature: "Sick Days & PTO", ghost: "Zero", human: "15-20 days per year" }
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 border-b border-zinc-800/50 last:border-0 hover:bg-zinc-800/30 transition-colors">
                  <div className="p-5 md:p-8 text-zinc-300 flex items-center text-sm md:text-base font-medium">{row.feature}</div>
                  <div className="p-5 md:p-8 text-white border-l border-zinc-800/80 bg-blue-500/5 flex items-center gap-3 font-semibold text-sm md:text-base">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    {row.ghost}
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
              <h2 className="text-[1.05rem] sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-6 whitespace-nowrap tracking-tight">
                <span className="relative inline-block">
                  Get Access to <GradientText>Digital Handyman</GradientText>
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
                The complete system to capture leads, hold conversations, and close deals 24/7.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Centralized Pricing Card */}
              <div className="bg-zinc-900/80 border-2 border-cyan-500/30 rounded-3xl overflow-hidden relative shadow-[0_0_40px_-15px_rgba(6,182,212,0.2)] flex flex-col">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-slate-400"></div>
                <div className="p-8 border-b border-zinc-800/80 bg-cyan-950/20 text-center">
                  <p className="text-cyan-200/70 text-base md:text-lg">Everything you need to capture leads, qualify prospects, and close deals 24/7.</p>
                  
                  <div className="mt-8 flex flex-col items-center justify-center">
                    <div className="flex items-baseline gap-2">
                       <span className="text-5xl font-black text-white">$2,500</span>
                       <span className="text-zinc-400 text-xl font-medium">setup</span>
                    </div>
                    <div className="flex items-baseline gap-2 mt-2">
                       <span className="text-2xl font-bold text-cyan-400">then $500</span>
                       <span className="text-zinc-500 font-medium">/ month</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 lg:p-12 space-y-8 flex-grow">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Column 1 */}
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center flex-shrink-0">
                          <PhoneMissed className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">Missed Call Text-Back</h4>
                          <p className="text-zinc-400 text-sm leading-relaxed">Turns missed calls into text conversations automatically.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center flex-shrink-0">
                          <MessageSquare className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">24/7 AI Website Chat</h4>
                          <p className="text-zinc-400 text-sm leading-relaxed">Engages visitors on your site around the clock and collects info.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center flex-shrink-0">
                          <Send className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">Instant SMS Follow-Up</h4>
                          <p className="text-zinc-400 text-sm leading-relaxed">Automatically texts leads the second they submit a form.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">Automated Scheduling</h4>
                          <p className="text-zinc-400 text-sm leading-relaxed">Handles back-and-forth scheduling directly onto your calendar.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center flex-shrink-0">
                          <RefreshCw className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">Database Reactivation</h4>
                          <p className="text-zinc-400 text-sm leading-relaxed">Uses AI SMS to reactivate dead leads into booked appointments.</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Column 2 */}
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center flex-shrink-0">
                          <Mic className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">AI Voice Agent (Ghost)</h4>
                          <p className="text-zinc-400 text-sm leading-relaxed">Answers calls live, holds natural conversations, and handles inquiries.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center flex-shrink-0">
                          <Target className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">Real-Time Lead Qualification</h4>
                          <p className="text-zinc-400 text-sm leading-relaxed">Asks questions, determines fit, and filters out time-wasters.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center flex-shrink-0">
                          <Handshake className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">Warm Handoff To Your Team</h4>
                          <p className="text-zinc-400 text-sm leading-relaxed">Provides a full summary of needs, urgency, and intent.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center flex-shrink-0">
                          <Brain className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">Trained On Your Business</h4>
                          <p className="text-zinc-400 text-sm leading-relaxed">Custom-trained on your services, pricing, and communication.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center flex-shrink-0">
                          <Star className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">Auto Review Generation</h4>
                          <p className="text-zinc-400 text-sm leading-relaxed">Triggers Google review requests via SMS after job completion.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 pt-0 mt-auto">
                  <a 
                    href="https://api.digitalhandyman.xyz/payment-link/69c4b6c5fb727d9c905d2836"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-5 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-slate-500 hover:opacity-90 text-white font-bold text-lg transition-opacity shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 group block text-center"
                  >
                    Get Started Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. What's Included features chart */}
        <section className="py-24 relative border-t border-zinc-800/50 overflow-hidden bg-zinc-950/30">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Features with <GradientText>Digital Handyman Subscription</GradientText>
              </h2>
              <p className="text-zinc-400 text-lg">In addition to your lead nurturing automations, you get full access to our complete marketing suite.</p>
            </div>
            
            <DashboardFeatureShowcase />
          </div>
        </section>

        {/* 9. Contact Form & FOMO */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
                  <span className="relative inline-block">
                    Your Competitors Are <span className="whitespace-nowrap"><GradientText>Already Using AI.</GradientText></span>
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
                    <label className="block text-sm font-semibold text-zinc-300 mb-2">How can GHOST help you?</label>
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

        {/* 10. Footer */}
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
                      src="https://lh3.googleusercontent.com/d/1544mD2hMn-HUIbIWIjKI1IARn_uqRZ-A" 
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
