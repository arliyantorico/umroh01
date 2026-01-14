
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-20 min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/70 mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-light via-transparent to-transparent z-10"></div>
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105" 
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCBNhJfreFplaDrREiw12qyq9mH-Sx_Lmkkrno5i0UOvcY-9kX62BsKqN7yRLBNiBU-5Ao8syroD1pBY0Ib7yIdFqXPACQTrFUZfzl3mRTQ3fReny0XIhEiRCq7Raq3ulObCHCEDwhnet-IprpMetF6kZR8T3WpXk7hKYtclhqE7othXzhuTeEpIMYqLEwd-HJCFN43i5l2qvJKXbnBlAg3VkM383K3iSOxa9zjTH32Ney4CeBoCFq59Lgv9U8nTLnPWyQr2HFrPO4")' }}
        />
      </div>

      <div className="relative z-20 container mx-auto px-4 text-center mt-10 animate-fade-up">
        <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/30 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
          Spiritual Excellence
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 leading-tight drop-shadow-lg">
          Embark on Your <br/>
          <span className="italic font-display text-[#F0E6D2]">Sacred Journey</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-10 font-light leading-relaxed drop-shadow-md">
          Experience Hajj & Umrah with unparalleled comfort, spiritual guidance, and a service dedicated to your peace of mind.
        </p>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto bg-white p-3 rounded-xl shadow-2xl border border-accent/10">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="flex-1 w-full md:w-auto relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-accent">
                <span className="material-symbols-outlined">calendar_month</span>
              </div>
              <input 
                className="block w-full pl-10 pr-3 py-3 border-none rounded-lg bg-parchment text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-accent sm:text-sm font-medium h-12" 
                placeholder="Travel Date" 
                type="text" 
              />
            </div>
            <div className="w-px h-8 bg-gray-200 hidden md:block"></div>
            <div className="flex-1 w-full md:w-auto relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-accent">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <select className="block w-full pl-10 pr-10 py-3 border-none rounded-lg bg-parchment text-gray-900 focus:ring-2 focus:ring-accent sm:text-sm font-medium appearance-none h-12 cursor-pointer">
                <option>Umrah Package</option>
                <option>Hajj Package</option>
                <option>Custom Tour</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </div>
            </div>
            <div className="w-px h-8 bg-gray-200 hidden md:block"></div>
            <div className="flex-1 w-full md:w-auto relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-accent">
                <span className="material-symbols-outlined">group</span>
              </div>
              <select className="block w-full pl-10 pr-10 py-3 border-none rounded-lg bg-parchment text-gray-900 focus:ring-2 focus:ring-accent sm:text-sm font-medium appearance-none h-12 cursor-pointer">
                <option>2 Pilgrims</option>
                <option>1 Pilgrim</option>
                <option>3 Pilgrims</option>
                <option>4+ Pilgrims</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </div>
            </div>
            <button className="w-full md:w-auto px-8 h-12 bg-primary hover:bg-[#083d3b] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">search</span>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
