import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Facebook, Youtube, MapPin, PhoneCall, MessageSquare, ClipboardCheck, Calendar } from 'lucide-react';

import Navigation from './components/Navigation';

export default function ServiceAreasPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-slate-50 font-sans selection:bg-purple-500/30 selection:text-purple-200 overflow-hidden flex flex-col">
      <Helmet>
        <title>Service Areas (Amarillo, Canyon, Bushland) | Ascension Agents</title>
        <meta name="description" content="Discover our local service areas. Ascension Agents provides AI automation solutions in Amarillo, Canyon, and Bushland, TX." />
        <link rel="canonical" href="https://ghost.ascensionagents.io/service-areas" />
      </Helmet>
      <div className="fixed inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header - Reused from LandingPage */}
        <Navigation />

        {/* Hero Section */}
        <section className="pt-40 pb-20 lg:pt-48 lg:pb-24 flex-grow">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#eab308]/10 via-zinc-950/0 to-zinc-950/0 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-8 leading-[1.1] text-white">
                  Local Service Areas <br />
                  <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,#eab308,#ff6b00,#a855f7,#0055ff)]">Texas Panhandle</span>
                </h1>
                <p className="text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                  <a href="https://ascensionagents.io" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 underline transition-colors">Ascension Agents</a> powers local contractors and service businesses in Amarillo, Canyon, and Bushland. We ensure you never miss a lead, no matter where you are in the panhandle.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 text-left mt-16">
                  <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-6 hover:bg-zinc-800/50 transition-colors">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4">
                      <MapPin className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">Amarillo, TX</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Whether you're servicing downtown or the outskirts on I-40, our AI answers missed calls instantly. Keep Amarillo residents happy with 24/7 web chat and lead qualification while you're on the job site.
                    </p>
                  </div>
                  
                  <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-6 hover:bg-zinc-800/50 transition-colors">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">Canyon, TX</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      For businesses growing in Canyon, missing a call from a new homeowner can cost thousands. Ghost instantly replies to missed calls with a text, capturing the lead before they call your competitor down the road.
                    </p>
                  </div>

                  <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-6 hover:bg-zinc-800/50 transition-colors">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">Bushland, TX</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Serving the expanding Bushland community means lots of drive time. While you're on the road, our Ai Automations cover your phone lines and website, booking appointments automatically.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-20 max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-10">How It Works For Local Companies</h2>
              <div className="space-y-6">
                <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-16 h-16 bg-zinc-950 rounded-full flex items-center justify-center shrink-0 border border-zinc-800">
                    <PhoneCall className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">1. Missed Call Text-Back</h3>
                    <p className="text-zinc-400">If you're on a roof in Amarillo or under a sink in Canyon and can't answer, Ghost instantly texts the caller: "Hi, this is [Your Business]. We're on a job but how can we help?" You capture the lead instantly.</p>
                  </div>
                </div>

                <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-16 h-16 bg-zinc-950 rounded-full flex items-center justify-center shrink-0 border border-zinc-800">
                    <MessageSquare className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">2. Intelligent Web Chat</h3>
                    <p className="text-zinc-400">A potential customer in Bushland finds your website at 10 PM. Ghost acts as a live agent, answering questions about your services, capturing their contact info, and booking them directly into your calendar.</p>
                  </div>
                </div>

                <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-16 h-16 bg-zinc-950 rounded-full flex items-center justify-center shrink-0 border border-zinc-800">
                    <ClipboardCheck className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">3. Automated Lead Qualification</h3>
                    <p className="text-zinc-400">Not every lead is the right fit. Ghost asks the right questions upfront like project scope, timeline, and budget to filter out tire-kickers and ensure you only spend time on high-value tickets.</p>
                  </div>
                </div>

                <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-16 h-16 bg-zinc-950 rounded-full flex items-center justify-center shrink-0 border border-zinc-800">
                    <Calendar className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">4. 24/7 Appointment Booking</h3>
                    <p className="text-zinc-400">Sync Ghost directly with your scheduling software. It identifies open slots and books free estimates or service calls automatically, turning late-night inquiries into booked appointments before you wake up.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden mt-12">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#eab308]/10 via-zinc-950/0 to-zinc-950/0 pointer-events-none"></div>
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to stop missing calls?</h2>
              <p className="text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                Get an AI employee that works 24/7, qualifies leads, and books appointments for you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link 
                  to="/about"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="w-full sm:w-auto bg-[linear-gradient(to_right,#eab308,#ff6b00,#a855f7,#0055ff)] text-white font-bold text-sm tracking-wide px-8 py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a 
                  href="https://calendly.com/adambeckner/ascensionagents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-lg font-bold text-white border border-zinc-700 hover:border-zinc-500 bg-zinc-900/50 hover:bg-zinc-800/80 transition-all flex items-center justify-center gap-2"
                >
                  Schedule A Demo
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto border-t border-zinc-900 bg-zinc-950/50 relative z-10 pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-5 gap-12 lg:gap-24 mb-16">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
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
                <h4 className="text-center md:text-left font-bold text-white mb-5 tracking-wider text-sm">Service Areas</h4>
                <ul className="space-y-4 text-zinc-400 font-medium text-sm text-center md:text-left">
                  <li>Amarillo, TX</li>
                  <li>Canyon, TX</li>
                  <li>Bushland, TX</li>
                </ul>
              </div>

              <div>
                <h4 className="text-center md:text-left font-bold text-white mb-5 tracking-wider text-sm">Company</h4>
                <ul className="space-y-4 text-zinc-400 font-medium">
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms and Conditions</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-zinc-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-zinc-500 text-sm font-medium">© {new Date().getFullYear()} <a href="https://ascensionagents.io" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Ascension Agents</a>. All rights reserved.</p>
              <p className="text-zinc-500 text-sm font-medium flex items-center gap-1.5 flex-wrap sm:flex-nowrap justify-center md:justify-end text-center md:text-right mt-4 md:mt-0">
                Built for local services businesses in Amarillo, Canyon & Bushland.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
