import React, { useState } from 'react';
import { TAXI_FAQS } from '../data/taxiData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { usePhone } from '../context/PhoneContext';

export const FAQSection: React.FC = () => {
  const { getWhatsAppLink } = usePhone();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Rajkot Taxi <span className="text-amber-400">Questions Answered</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Clear, transparent answers about our Rajkot taxi booking, payment, and vehicle policies.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {TAXI_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left py-4 px-6 flex items-center justify-between gap-4 font-bold text-white hover:text-amber-400 transition"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions */}
        <div className="mt-12 text-center p-6 bg-slate-900 border border-slate-800 rounded-2xl">
          <p className="text-slate-300 text-sm">
            Have a question not listed here? Our Rajkot dispatch team is active 24 hours a day.
          </p>
          <a
            href={getWhatsAppLink('Hello Rajkot Taxi Point, I have a question regarding taxi booking.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-emerald-400 hover:text-emerald-300 font-bold text-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask Directly on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
