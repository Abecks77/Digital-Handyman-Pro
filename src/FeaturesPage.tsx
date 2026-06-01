import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, PhoneCall, Calendar, Star, MessageCircle, Users, Mail, KanbanSquare, Facebook, Youtube, PhoneMissed, Send, RefreshCw, Mic, Target, Handshake, Brain } from 'lucide-react';

export default function FeaturesPage() {
  const features = [
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
      title: "Missed Call Text Back",
      desc: "When a call goes unanswered, an instant automated text fires immediately to keep that lead engaged.",
      statTitle: "62% of calls to small businesses go unanswered.",
      statDesc: "Capture leads before they call your competitor.",
      bgContext: "bg-purple-500/10"
    },
    {
      icon: <PhoneCall className="w-8 h-8 text-purple-400" />,
      title: "AI Voice Agent (24/7)",
      desc: "A fully trained voice AI answers inbound calls, qualifies leads, and books appointments around the clock.",
      statTitle: "80% of callers hang up when they reach voicemail.",
      statDesc: "Never lose a lead to an answering machine again.",
      bgContext: "bg-purple-500/10"
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-400" />,
      title: "Auto-Booking",
      desc: "Leads book directly into your calendar. Confirmations and reminders go out automatically.",
      statTitle: "Automation increases booking revenue by 27%.",
      statDesc: "Your calendar fills while you focus on the job.",
      bgContext: "bg-purple-500/10"
    },
    {
      icon: <Star className="w-8 h-8 text-purple-400" />,
      title: "Google Business Profile",
      desc: "Automatically request Google reviews from satisfied customers right after a job is completed.",
      statTitle: "98% of consumers read local business reviews.",
      statDesc: "Dominate local search rankings with 5-star proof.",
      bgContext: "bg-purple-500/10"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-400" />,
      title: "Website Chat Widget",
      desc: "A live chat widget that captures visitor info, qualifies leads, and routes them into your pipeline.",
      statTitle: "Live chat increases conversions by up to 40%.",
      statDesc: "Turn website visitors into booked jobs instantly.",
      bgContext: "bg-purple-500/10"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Database Reactivation",
      desc: "Turn your dormant contact list into booked jobs with automated re-engagement campaigns.",
      statTitle: "Acquiring new customers costs 5x more than retention.",
      statDesc: "Unlock hidden revenue from your existing list.",
      bgContext: "bg-purple-500/10"
    },
    {
      icon: <Mail className="w-8 h-8 text-purple-400" />,
      title: "SMS & Email Automation",
      desc: "Multi-step follow-up sequences sent automatically so no lead falls through the cracks.",
      statTitle: "SMS has a 98% open rate vs 20% for email.",
      statDesc: "Stay top-of-mind with zero manual effort.",
      bgContext: "bg-purple-500/10"
    },
    {
      icon: <KanbanSquare className="w-8 h-8 text-purple-400" />,
      title: "CRM & Pipeline",
      desc: "Track every lead from first contact to closed job. See exactly where every prospect is.",
      statTitle: "CRM systems can increase sales by up to 29%.",
      statDesc: "Complete visibility into your business growth.",
      bgContext: "bg-purple-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-50 font-sans selection:bg-purple-500/30 selection:text-purple-200 overflow-hidden flex flex-col">
      <div className="fixed inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header - Reused */}
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
          <div className="bg-zinc-950/40 backdrop-blur-md border border-zinc-800/50 rounded-full px-4 py-2.5 flex items-center justify-between shadow-2xl shadow-purple-500/10 group transition-all duration-500 hover:border-zinc-700/50 hover:bg-zinc-950/60">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 pl-2">
                <Link 
                  to="/"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <img 
                    src="https://lh3.googleusercontent.com/d/1ZLJZ7dsYejGIKWSos3yiZYw8NW7y45Hd" 
                    alt="Ascension Agents Logo" 
                    className="h-8 w-auto object-contain rounded-md"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <div className="h-4 w-[1px] bg-zinc-800 hidden sm:block"></div>
                <div className="hidden sm:flex items-center gap-2 px-2 py-1 rounded-full bg-zinc-900/50 border border-zinc-800/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">GHOST: ACTIVE</span>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-1 bg-zinc-900/30 rounded-full p-1 border border-zinc-800/30">
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all">Home</Link>
              <Link to="/features" className="px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-zinc-800/50 transition-all">Features</Link>
              <Link to="/service-areas" className="px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all">Service Areas</Link>
              <Link to="/about" className="px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all">About Ascension</Link>
              <Link to="/faq" className="px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all">FAQ</Link>
            </div>

            <div className="flex items-center gap-3">
              <a 
                href="https://api.ascensionagents.io/payment-link/69c4b6c5fb727d9c905d2836"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group/btn overflow-hidden rounded-full p-[1px] block"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-purple-600 to-blue-600 rounded-full opacity-70 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                <div className="relative bg-zinc-950 px-5 py-2 rounded-full flex items-center justify-center gap-2 transition-all duration-300 group-hover/btn:bg-transparent">
                  <span className="font-bold text-white text-xs tracking-wide">Get Started</span>
                  <ArrowRight className="w-3 h-3 text-white group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-40 pb-20 lg:pt-48 lg:pb-32 flex-grow">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-900/10 via-zinc-950/0 to-zinc-950/0 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-8 leading-[1.1] text-white">
                  Powerful <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-purple-500 to-blue-600">automation tools</span>
                </h1>
                <p className="text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                  Designed specifically for the unique needs of local service businesses.
                </p>
              </motion.div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-8 hover:bg-zinc-800/40 transition-colors flex flex-col h-full group"
                >
                  <div className="mb-6">
                    <div className={`w-14 h-14 ${feature.bgContext} rounded-xl flex items-center justify-center`}>
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                    {feature.desc}
                  </p>
                  
                  <div className="pt-6 border-t border-zinc-800/50">
                    <div className="flex flex-col gap-2">
                       <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest flex items-center gap-2">
                         <Star className="w-3 h-3" />
                         THE BUSINESS CASE
                       </span>
                       <p className="text-sm font-semibold text-zinc-200 mt-1">{feature.statTitle}</p>
                       <p className="text-xs text-zinc-500 italic leading-relaxed mt-1">{feature.statDesc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden mt-12">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-900/10 via-zinc-950/0 to-zinc-950/0 pointer-events-none"></div>
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to upgrade your operations?</h2>
              <p className="text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                Get an AI employee that works 24/7, qualifies leads, and books appointments for you.
              </p>
              {/* Centralized Pricing Card */}
              <div className="bg-zinc-900/80 border-2 border-purple-500/30 rounded-3xl overflow-hidden relative shadow-[0_0_40px_-15px_rgba(168,85,247,0.2)] flex flex-col mt-12 text-left">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-purple-500 to-blue-600"></div>
                <div className="p-8 border-b border-zinc-800/80 bg-purple-950/20 text-center">
                  <p className="text-purple-200/70 text-base md:text-lg">Everything you need to capture leads, qualify prospects, and close deals 24/7.</p>
                  
                  <div className="mt-8 flex flex-col items-center justify-center">
                    <div className="flex items-center gap-3 mb-2 flex-wrap justify-center">
                       <span className="text-xl font-bold text-zinc-500 line-through decoration-red-500/50 decoration-2">$2,500 setup</span>
                       <span className="text-xs font-bold bg-red-500/20 text-red-500 px-3 py-1 rounded-full uppercase tracking-wider border border-red-500/30 animate-pulse">Limited Time: $0 Setup</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                       <span className="text-5xl font-black text-white">$550</span>
                       <span className="text-zinc-500 text-xl font-medium">/ month</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 lg:p-12 space-y-8 flex-grow">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Column 1 */}
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center flex-shrink-0">
                          <PhoneMissed className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">Missed Call Text-Back</h4>
                          <p className="text-zinc-400 text-sm leading-relaxed">Turns missed calls into text conversations automatically.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center flex-shrink-0">
                          <MessageSquare className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">24/7 AI Website Chat</h4>
                          <p className="text-zinc-400 text-sm leading-relaxed">Engages visitors on your site around the clock and collects info.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center flex-shrink-0">
                          <Send className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">Instant SMS Follow-Up</h4>
                          <p className="text-zinc-400 text-sm leading-relaxed">Automatically texts leads the second they submit a form.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">Automated Scheduling</h4>
                          <p className="text-zinc-400 text-sm leading-relaxed">Handles back-and-forth scheduling directly onto your calendar.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center flex-shrink-0">
                          <RefreshCw className="w-5 h-5 text-purple-400" />
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
                          <Mic className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">AI Voice Agent (Ghost)</h4>
                          <p className="text-zinc-400 text-sm leading-relaxed">Answers calls live, holds natural conversations, and handles inquiries.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center flex-shrink-0">
                          <Target className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">Real-Time Lead Qualification</h4>
                          <p className="text-zinc-400 text-sm leading-relaxed">Asks questions, determines fit, and filters out time-wasters.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center flex-shrink-0">
                          <Handshake className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">Warm Handoff To Your Team</h4>
                          <p className="text-zinc-400 text-sm leading-relaxed">Provides a full summary of needs, urgency, and intent.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center flex-shrink-0">
                          <Brain className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">Trained On Your Business</h4>
                          <p className="text-zinc-400 text-sm leading-relaxed">Custom-trained on your services, pricing, and communication.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center flex-shrink-0">
                          <Star className="w-5 h-5 text-purple-400" />
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
                    href="https://api.ascensionagents.io/payment-link/69c4b6c5fb727d9c905d2836"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-5 rounded-xl bg-gradient-to-r from-orange-500 via-purple-600 to-blue-600 hover:opacity-90 text-white font-bold text-lg transition-opacity shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 group block text-center"
                  >
                    Get Started Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto border-t border-zinc-900 bg-zinc-950/50 relative z-10 pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-1 md:col-span-2">
                <img 
                    src="https://lh3.googleusercontent.com/d/1ZLJZ7dsYejGIKWSos3yiZYw8NW7y45Hd" 
                    alt="Ascension Agents Logo" 
                    className="h-10 w-auto object-contain mb-6 rounded-md opacity-80"
                    referrerPolicy="no-referrer"
                />
                <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-6">
                  Ascension provides AI employees and Ai Automations to home service contractors, ensuring you never miss another lead or potential customer while on the job.
                </p>
                <div className="flex items-center gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-white font-bold mb-6">Platform</h4>
                <ul className="space-y-4">
                  <li><Link to="/#features" className="text-zinc-400 hover:text-white text-sm transition-colors">Features</Link></li>
                  <li><Link to="/about" className="text-zinc-400 hover:text-white text-sm transition-colors">About</Link></li>
                  <li><Link to="/service-areas" className="text-zinc-400 hover:text-white text-sm transition-colors">Service Areas</Link></li>
                  <li>
                    <a 
                      href="https://api.ascensionagents.io/payment-link/69c4b6c5fb727d9c905d2836"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-zinc-400 hover:text-white text-sm transition-colors"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-bold mb-6">Contact</h4>
                <ul className="space-y-4">
                  <li className="text-zinc-400 text-sm">support@ascensionagents.io</li>
                  <li className="text-zinc-400 text-sm">Based in Texas</li>
                  <li>
                    <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors mt-2 inline-block">
                      Contact Us &rarr;
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-zinc-600 text-xs">
                © {new Date().getFullYear()} Ascension Agents. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">Privacy Policy</a>
                <a href="#" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
