import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ChevronDown, MessageSquare, Plus } from 'lucide-react';
import Navigation from './components/Navigation';

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      category: "General Questions",
      items: [
        {
          q: "What is Ascension and who is GHOST?",
          a: "Ascension is an AI-powered automation platform built for local service businesses to stop losing leads. GHOST is your 24/7 AI employee that handles missed calls, SMS text messages, and website chats, allowing you to capture leads and scale your operations on autopilot."
        },
        {
          q: "What types of industries is GHOST perfect for?",
          a: "While GHOST can adapt to various industries, it is ideally suited for local service businesses including Home Service Companies, Construction Companies, Real Estate Professionals, Medical and Dental Practices, Online Educators/Coaches, Agencies/Consultants, Legal Service Providers, and Personal Trainers."
        },
        {
          q: "Why should I hire GHOST instead of a human receptionist?",
          a: "A human receptionist is limited by 9-to-5 working hours, sick days, vacations, and the inability to multi-task. GHOST operates 24/7/365, responds instantly (under 3 seconds), handles unlimited simultaneous chats, has no hiring or training overhead, and charges a flat, predictable monthly rate."
        },
        {
          q: "How does the \"Missed Call Text-Back\" feature work?",
          a: "Statistically, 70% of callers won’t leave a voicemail; they will simply call your competitor. When you miss a call because you are busy or it’s after hours, GHOST intercepts that call and instantly sends a text message to the caller, starting a conversation and securing the booking before they look elsewhere."
        },
        {
          q: "Can GHOST handle more than just website chats?",
          a: "Yes! GHOST goes far beyond a traditional chatbot. It integrates seamlessly into your website chat, SMS routing, Google Business Profile, and social media channels to manage all inbound communication from one central location through Ascension."
        }
      ]
    },
    {
      category: "How GHOST Works & Features",
      items: [
        {
          q: "How does GHOST learn about my specific business?",
          a: "During onboarding, we map out your specific services, pricing, service areas, guidelines, and FAQs. We use this detailed data to build GHOST's knowledge base and train the AI to speak authentically in your unique brand voice."
        },
        {
          q: "Will GHOST book appointments directly onto my calendar?",
          a: "Yes. GHOST integrates directly with your active calendar. It manages the back-and-forth communication of finding a time that works for the client, checks your real-time availability, and schedules the estimate or appointment automatically."
        },
        {
          q: "What does \"Lead Qualification\" mean, and how does it help my business?",
          a: "GHOST filters out the \"tire-kickers\" and time-wasters. It asks your specific, pre-determined qualifying questions to evaluate the lead's fit, intent, and readiness. Your team only steps in when a high-quality, fully vetted lead is ready."
        },
        {
          q: "Can GHOST handle actual phone calls, or is it text-only?",
          a: "GHOST features an advanced AI Voice Agent. It can answer live incoming phone calls, hold natural, flowing conversations, answer customer inquiries, and handle bookings over the phone just like a human assistant."
        },
        {
          q: "What is a \"Warm Handoff\" to my team?",
          a: "Once GHOST has fully qualified a hot lead, it delivers a comprehensive summary directly to your team. This includes the customer's specific needs, their level of urgency, and their intent, ensuring your team is fully prepared before taking over."
        },
        {
          q: "What is \"Database Reactivation\" and how does it work?",
          a: "Database Reactivation uses GHOST's automated SMS workflows to reach out to old, \"dead\" leads or past customers sitting in your database. It automatically sparks fresh conversations to turn old contacts into newly booked appointments."
        },
        {
          q: "Can Ascension help me get more Google Reviews?",
          a: "Yes. The platform includes an Auto Review Generation feature. After your team finishes a job, the system automatically triggers automated review requests via SMS, helping you boost your local SEO and build trust."
        }
      ]
    },
    {
      category: "Pricing, Setup, & Commitments",
      items: [
        {
          q: "How much does Ascension cost?",
          a: "We offer a transparent, flat-rate pricing model: a $2,500 one-time setup fee, followed by a monthly subscription of $300/month."
        },
        {
          q: "Are there any long-term contracts or cancellation fees?",
          a: "No, there are no long-term contracts. Our subscriptions are month-to-month, and you can cancel anytime. We believe in earning your business every single month by delivering a real, tangible ROI."
        },
        {
          q: "Do I need any technical or coding skills to set this up?",
          a: "Not at all. Our service features a 100% Done-For-You setup. Our integration team handles all the prompt engineering, technical integrations, workflow automations, and testing. It is entirely hands-off for you."
        },
        {
          q: "How long does the onboarding and deployment process take?",
          a: "Because it is a fully done-for-you service, GHOST is typically trained, integrated, and ready to start capturing leads for your business within just a matter of days."
        }
      ]
    },
    {
      category: "Marketing Suite & Management",
      items: [
        {
          q: "What is included in the Ascension marketing suite?",
          a: "In addition to your core AI lead-nurturing automations, your subscription gives you full access to an all-in-one marketing suite, including:\n\n• CRM & Pipeline Management\n• Unlimited Sales Funnels & Website Builder\n• Surveys, Forms, and Email/2-Way SMS Marketing\n• Call Tracking & Reputation Management\n• Document Signing tools and Analytics dashboards"
        },
        {
          q: "How can I keep track of the conversations GHOST is having?",
          a: "The platform features a centralized CRM & Pipeline Management dashboard. You can monitor every single conversation, lead status, and booked appointment in real-time to make sure nothing slips through the cracks."
        },
        {
          q: "Will my competitors be using this exact same system?",
          a: "While AI is expanding rapidly, we custom-train your specific GHOST agent tailored specifically to your business values, guidelines, and market. Deploying GHOST early gives you a massive automated speed advantage over local competitors."
        },
        {
          q: "How do I get started?",
          a: "Getting started is simple! You can fill out the intake form on our website with your company details, or skip the line entirely by booking a Strategy Call directly on our page. Our integration team will guide you through the rest."
        }
      ]
    }
  ];

  let globalIndex = 0;

  return (
    <div className="min-h-screen text-zinc-50 font-sans selection:bg-purple-500/30 relative flex flex-col">
      <Helmet>
        <title>FAQ | Ascension Agents</title>
        <meta name="description" content="Frequently Asked Questions about Ascension Agents and GHOST, the 24/7 AI employee." />
        <link rel="canonical" href="https://ghost.ascensionagents.io/faq" />
      </Helmet>
      {/* Global SaaS Background - Unified across the entire page */}
      <div className="fixed inset-0 z-0 bg-zinc-950">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        {/* Glowing Orbs for depth */}
        <div className="absolute left-0 right-0 top-[-10%] -z-10 m-auto h-[400px] w-[400px] rounded-full bg-orange-500 opacity-20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-slate-500 opacity-10 blur-[150px]"></div>
        <div className="absolute top-[40%] right-[-10%] -z-10 h-[400px] w-[400px] rounded-full bg-purple-500 opacity-10 blur-[120px]"></div>
      </div>

      {/* Header */}
      <Navigation />

      <main className="relative z-10 pt-40 pb-20 lg:pt-48 lg:pb-32 flex-grow flex flex-col min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#eab308]/10 via-zinc-950/0 to-zinc-950/0 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 w-full mb-auto">
          
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 leading-[1.1] text-white">
                Frequently Asked <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,#eab308,#ff6b00,#a855f7,#0055ff)]">Questions</span>
              </h1>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Everything you need to know about Ascension, GHOST, and how we automate your business.
              </p>
            </motion.div>
          </div>

          <div className="space-y-12">
            {faqData.map((section, sIndex) => (
              <motion.div 
                key={sIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: sIndex * 0.1 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
                  <MessageSquare className="w-5 h-5 text-purple-400" />
                  <h2 className="text-2xl font-bold text-white">{section.category}</h2>
                </div>

                <div className="space-y-4">
                  {section.items.map((item, iIndex) => {
                    const currentIndex = globalIndex++;
                    const isOpen = openIndex === currentIndex;
                    
                    return (
                      <div 
                        key={iIndex}
                        className={`group border rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-zinc-900/80 border-purple-500/50' : 'bg-zinc-900/30 border-zinc-800/50 hover:border-zinc-700'}`}
                      >
                        <button
                          onClick={() => toggleFaq(currentIndex)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                        >
                          <span className={`font-semibold pr-8 text-lg transition-colors ${isOpen ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>
                            {item.q}
                          </span>
                          <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-purple-500/20 text-purple-400 rotate-45' : 'bg-zinc-800 text-zinc-400 group-hover:bg-zinc-700 group-hover:text-white'}`}>
                            <Plus className="w-5 h-5" />
                          </span>
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 text-zinc-400 leading-relaxed whitespace-pre-wrap">
                                {item.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center bg-zinc-900/50 p-10 rounded-2xl border border-zinc-800">
            <h3 className="text-2xl text-white font-bold mb-4">Still have questions?</h3>
            <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
              Schedule a strategy call with our team and we'll walk you through exactly how GHOST can work for your specific business.
            </p>
            <a 
              href="https://calendly.com/adambeckner/ascensionagents"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[linear-gradient(to_right,#eab308,#ff6b00,#a855f7,#0055ff)] hover:opacity-90 font-bold text-white px-8 py-4 rounded-xl transition-opacity shadow-lg shadow-purple-500/25"
            >
              Book a Strategy Call
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 bg-zinc-950 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Link 
                to="/" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:opacity-80 transition-opacity cursor-pointer"
              >
                <img 
                  src="https://lh3.googleusercontent.com/d/1fiqEiIUyp52Zo22koroPSYFZEne_tCjm" 
                  alt="Ascension Agents Logo" 
                  className="h-10 w-auto object-contain rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </Link>
            </div>
            <div className="flex gap-6 text-sm text-zinc-500">
              <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-zinc-300 transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-zinc-600">
            © {new Date().getFullYear()} Ascension Agents. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
