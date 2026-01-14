
import React from 'react';
import { FEATURES } from '../constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-parchment relative overflow-hidden">
      <div className="absolute -right-20 -top-20 opacity-5 pointer-events-none">
        <svg className="text-primary animate-[spin_60s_linear_infinite]" fill="currentColor" height="400" viewBox="0 0 100 100" width="400">
          <path d="M50 0L58.8 29.2L89.6 20.4L69.2 46.2L100 50L69.2 53.8L89.6 79.6L58.8 70.8L50 100L41.2 70.8L10.4 79.6L30.8 53.8L0 50L30.8 46.2L10.4 20.4L41.2 29.2L50 0Z"></path>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 lg:px-40 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-16">Why Choose Our Guidance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center animate-fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="w-20 h-20 rounded-full bg-white border border-accent/30 flex items-center justify-center mb-6 shadow-lg">
                <span className="material-symbols-outlined text-4xl text-accent">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
