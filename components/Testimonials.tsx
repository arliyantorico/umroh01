
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const t = TESTIMONIALS[0]; // Simple static for this version

  return (
    <section className="py-24 bg-background-light">
      <div className="max-w-4xl mx-auto px-4 text-center animate-fade-up">
        <span className="material-symbols-outlined text-6xl text-accent/30 mb-6">format_quote</span>
        <p className="text-2xl md:text-3xl font-display italic text-primary leading-relaxed mb-8">
          {t.quote}
        </p>
        <div className="flex flex-col items-center justify-center">
          <div 
            className="w-16 h-16 rounded-full bg-cover bg-center mb-3 border-2 border-accent" 
            style={{ backgroundImage: `url("${t.image}")` }}
          />
          <h4 className="font-bold text-primary">{t.author}</h4>
          <span className="text-sm text-accent">{t.role}</span>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          <button className="w-3 h-3 rounded-full bg-accent"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-accent/50 transition-colors"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-accent/50 transition-colors"></button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
