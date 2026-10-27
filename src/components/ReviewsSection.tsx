import React from 'react';
import { CUSTOMER_REVIEWS } from '../data/taxiData';
import { Star, Quote, CheckCircle, Sparkles } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900/60 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Verified Traveler Experiences
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Loved by Passengers Across <span className="text-amber-400">Gujarat</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Read what corporate commuters, pilgrim families, and airport travelers say about Rajkot Taxi Point.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-slate-950 border border-slate-800 hover:border-amber-400/50 rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 shadow-xl relative"
            >
              <Quote className="w-8 h-8 text-amber-400/20 absolute top-6 right-6" />

              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3.5">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-amber-400/40"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-white">{review.name}</h4>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 inline" />
                  </div>
                  <p className="text-xs text-amber-400/90 font-medium">
                    Trip: {review.trip}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {review.city} · {review.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
