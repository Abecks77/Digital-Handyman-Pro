import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Facebook, Youtube, Phone, Mail, MapPin, Check } from 'lucide-react';

export default function AboutPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        phoneNumber: '',
        email: '',
        companyName: '',
        consent: false
      });
      
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-50 font-sans selection:bg-purple-500/30 selection:text-purple-200 overflow-hidden flex flex-col">
      <Helmet>
        <title>About Us | Ascension Agents</title>
        <meta name="description" content="Learn about Ascension Agents and how we use AI to help local service businesses in Amarillo, Canyon, and Bushland, TX." />
        <link rel="canonical" href="https://ghost.ascensionagents.io/about" />
      </Helmet>
      <div className="fixed inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header - Reused from LandingPage */}
        <Navigation />

        {/* Hero Section */}
        <section className="pt-40 pb-20 lg:pt-48 lg:pb-32 flex-grow">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#0055ff]/10 via-zinc-950/0 to-zinc-950/0 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto mb-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-8 leading-[1.1] text-white">
                  About <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,#eab308,#ff6b00,#a855f7,#0055ff)]">Ascension</span>
                </h1>
                <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
                  At Ascension it has always been our goal to build high leverage, low maintenance systems to help companies run a more efficient business. Since Ai has blown up worldwide, we have been working diligently to put together products that work with you to scale your company.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-6xl mx-auto mb-20"
            >
                {/* Contact Us Section matching the new design format */}
                <div className="text-left">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 border-b border-zinc-800/50 pb-6 gap-6">
                     <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">CONTACT US</h2>
                     <p className="text-zinc-400 max-w-sm text-sm">
                       If you have any questions, please feel free to get in touch with us via phone, text, email, the form below, or even on social media!
                     </p>
                  </div>

                  <div className="grid lg:grid-cols-5 gap-8">
                    {/* Left Column: Form */}
                    <div className="lg:col-span-3 bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-8 relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                       <h3 className="text-xl font-bold text-white mb-8 tracking-wider uppercase">Get In Touch</h3>
                       <form className="space-y-6 relative z-10" onSubmit={handleFormSubmit}>
                          <div className="grid md:grid-cols-2 gap-6">
                             <div className="space-y-2">
                               <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Full Name</label>
                               <input type="text" required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} placeholder="John Doe" className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-zinc-600" />
                             </div>
                             <div className="space-y-2">
                               <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Phone Number</label>
                               <input type="tel" required value={formData.phoneNumber} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} placeholder="(555) 000-0000" className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-zinc-600" />
                             </div>
                          </div>
                          <div className="space-y-2">
                             <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Work Email</label>
                             <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@company.com" className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-zinc-600" />
                          </div>
                          <div className="space-y-2">
                             <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Company Name</label>
                             <input type="text" required value={formData.companyName} onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} placeholder="Acme Plumbing" className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-zinc-600" />
                          </div>
                          <div className="flex items-start gap-3 mt-4">
                            <div className="flex items-center h-5 mt-1">
                              <input
                                id="sms-consent"
                                type="checkbox"
                                required
                                checked={formData.consent}
                                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                                className="w-5 h-5 rounded border-zinc-800 bg-zinc-950/50 text-purple-500 focus:ring-purple-500/50 transition-all cursor-pointer"
                              />
                            </div>
                            <label htmlFor="sms-consent" className="text-sm text-zinc-400 leading-relaxed cursor-pointer select-none">
                              By checking this box, I consent to receive SMS communications from <a href="https://ascensionagents.io" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 underline transition-colors">Ascension Agents</a> regarding product updates, alerts, and marketing. Message frequency varies. Message and data rates may apply. Reply STOP to cancel, HELP for help. Privacy Policy & Terms of Service apply.
                            </label>
                          </div>

                          <button 
                            type="submit"
                            disabled={isSubmitting || isSubmitted}
                            className="w-full md:w-auto bg-[linear-gradient(to_right,#eab308,#ff6b00,#a855f7,#0055ff)] text-white font-bold text-sm tracking-wide px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-70 flex items-center justify-center gap-2"
                          >
                            <span>{isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Get Your AI Employee Today!'}</span>
                            {!isSubmitting && !isSubmitted && <ArrowRight className="w-4 h-4 text-white" />}
                            {isSubmitted && <Check className="w-4 h-4 text-green-400" />}
                          </button>
                       </form>
                    </div>

                    {/* Right Column: Info & Hours */}
                    <div className="lg:col-span-2 space-y-8">
                      {/* Contact Info */}
                      <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
                        <h3 className="text-xl font-bold text-white mb-8 tracking-wider uppercase relative z-10">Contact Information</h3>
                        <div className="space-y-8 relative z-10">
                          <div className="grid sm:grid-cols-2 gap-6">
                            <div className="flex gap-4">
                              <div className="mt-0.5"><Phone className="w-5 h-5 text-purple-400" /></div>
                              <div>
                                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1.5">Phone</p>
                                <p className="text-zinc-200 text-sm">(806) 336-9830</p>
                              </div>
                            </div>
                            <div className="flex gap-4">
                              <div className="mt-0.5"><MapPin className="w-5 h-5 text-orange-400" /></div>
                              <div>
                                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1.5">Address</p>
                                <p className="text-zinc-200 text-sm">General Area<br />Amarillo, TX 79101</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="mt-0.5"><Mail className="w-5 h-5 text-blue-400" /></div>
                            <div>
                              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1.5">Email</p>
                              <p className="text-zinc-200 text-sm">ascensionagents@proton.me</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Business Hours */}
                      <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-8 relative overflow-hidden">
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl -mr-10 -mb-10 pointer-events-none"></div>
                        <h3 className="text-xl font-bold text-white mb-8 tracking-wider uppercase relative z-10">Business Hours</h3>
                        <div className="grid grid-cols-2 gap-6 relative z-10">
                          <div>
                             <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1.5">Monday - Friday</p>
                             <p className="text-zinc-200 text-sm">9:00 am - 4:00 pm</p>
                          </div>
                          <div>
                             <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1.5">Saturday - Sunday</p>
                             <p className="text-zinc-200 text-sm">Closed</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-6xl mx-auto"
            >
                <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-8 md:p-12 text-left">
                  <h2 className="text-2xl font-bold mb-4 text-white">Our Story</h2>
                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    It started with a simple observation: the best local service businesses provide excellent service, but often struggle with the 24/7 demands of customer communication. Missed calls meant missed revenue. We knew there had to be a better way than hiring expensive receptionists or working through the night.
                  </p>
                  <p className="text-zinc-400 leading-relaxed mb-6">
                    That's why we created Ghost, an AI employee that never sleeps, never takes a day off, and seamlessly handles the front lines of your business. Ghost isn't just software; it's a fundamental shift in how local businesses operate.
                  </p>
                  <h2 className="text-2xl font-bold mb-4 text-white">Our Vision</h2>
                  <p className="text-zinc-400 leading-relaxed">
                    We envision a world where local business owners can focus purely on what they do best, leaving the repetitive lead capturing and scheduling to intelligent automation. We are committed to continuous innovation, ensuring our clients always remain one step ahead of the competition.
                  </p>
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

              <div>
                <h4 className="text-center md:text-left font-bold text-white mb-5 tracking-wider text-sm">Newsletter</h4>
                <p className="text-zinc-400 text-sm mb-4">Join our <a href="https://ascensionagents.io" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">Ascension Agents</a> newsletter</p>
                <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-purple-500 w-full"
                  />
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-lg text-sm font-bold transition-colors">
                    Join
                  </button>
                </form>
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
