import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import Reveal from './Reveal';

export default function Contact() {
  const [status, setStatus] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setStatus('loading');

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json' 
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset(); 
        
        setTimeout(() => {
          setStatus('');
        }, 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 pb-32">
      <div className="w-[85%] max-w-3xl mx-auto">
        <Reveal>
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black mb-2 text-slate-900 dark:text-white">Message Me!</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Have an inquiry, project idea, or collaboration in mind? Leave a message!</p>
          </div>

          <div className="bg-gradient-to-br from-orange-100/70 to-amber-100/70 dark:bg-none dark:bg-[#111827] p-8 rounded-3xl border-2 border-amber-400/80 dark:border-slate-800 shadow-sm">
            
            <form action="https://formspree.io/f/xwlezede" method="POST" onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-orange-950 dark:text-slate-400 tracking-wider uppercase">Your Name</label>
                  <input type="text" name="name" required placeholder="John Doe" className="w-full bg-white/70 dark:bg-[#080c14] border-2 border-amber-300 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 dark:focus:border-amber-500 transition text-orange-950 dark:text-white placeholder:text-slate-400 font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-orange-950 dark:text-slate-400 tracking-wider uppercase">Email Address</label>
                  <input type="email" name="email" required placeholder="john@example.com" className="w-full bg-white/70 dark:bg-[#080c14] border-2 border-amber-300 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 dark:focus:border-amber-500 transition text-orange-950 dark:text-white placeholder:text-slate-400 font-medium" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-orange-950 dark:text-slate-400 tracking-wider uppercase">Subject</label>
                <input type="text" name="subject" required placeholder="Collaboration / Project Opportunity" className="w-full bg-white/70 dark:bg-[#080c14] border-2 border-amber-300 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 dark:focus:border-amber-500 transition text-orange-950 dark:text-white placeholder:text-slate-400 font-medium" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-orange-950 dark:text-slate-400 tracking-wider uppercase">Message</label>
                <textarea name="message" required rows="5" placeholder="Write your message here..." className="w-full bg-white/70 dark:bg-[#080c14] border-2 border-amber-300 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 dark:focus:border-amber-500 transition resize-none text-orange-950 dark:text-white placeholder:text-slate-400 font-medium"></textarea>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="flex items-center gap-2 p-4 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/50 rounded-xl text-sm font-bold animate-in fade-in slide-in-from-bottom-2">
                  <CheckCircle2 size={18} />
                  Message sent successfully! I will get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800/50 rounded-xl text-sm font-bold animate-in fade-in slide-in-from-bottom-2">
                  <AlertCircle size={18} />
                  Oops! Something went wrong. Please try again.
                </div>
              )}

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 disabled:from-slate-400 disabled:to-slate-500 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-1 disabled:hover:translate-y-0 disabled:hover:shadow-none text-white font-bold rounded-xl flex justify-center items-center gap-2 transition-all duration-300 shadow-md"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>
            </form>

          </div>
        </Reveal>
      </div>
    </section>
  );
}