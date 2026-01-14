
import React, { useState } from 'react';
import { PACKAGES } from '../constants';
import { Package } from '../types';
import PackageModal from './PackageModal';

const FeaturedPackages: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  return (
    <section id="packages" className="py-24 px-4 lg:px-40 bg-background-light relative overflow-hidden">
      <div className="absolute inset-0 pattern-bg pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h3 className="text-accent font-bold uppercase tracking-widest text-sm mb-2">Exclusive Offers</h3>
            <h2 className="text-4xl font-display font-bold text-primary">Featured Packages</h2>
          </div>
          <a href="#" className="text-primary font-medium hover:underline decoration-accent underline-offset-4 flex items-center gap-1 group">
            View all packages 
            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              onClick={() => setSelectedPackage(pkg)}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full animate-fade-up cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute top-4 left-4 z-10 ${pkg.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}>
                  {pkg.tag}
                </div>
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: `url("${pkg.image}")` }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-accent">schedule</span>
                  <span className="text-sm font-medium">{pkg.duration}</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-display font-bold text-[#0e1b1a] mb-2 group-hover:text-primary transition-colors">
                  {pkg.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{pkg.description}</p>
                <div className="flex items-center gap-4 mb-6 border-t border-gray-100 pt-4">
                  {pkg.features.map(f => (
                    <div key={f} className="flex items-center gap-1 text-xs text-gray-500">
                      <span className="material-symbols-outlined text-base text-accent">
                        {f.toLowerCase().includes('flight') ? 'flight' : f.toLowerCase().includes('star') ? 'hotel' : 'verified'}
                      </span> 
                      {f}
                    </div>
                  ))}
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400 uppercase">Starting from</span>
                    <div className="text-xl font-bold text-primary">{pkg.price}</div>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-parchment text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">
                      {pkg.price === 'Inquire' ? 'call' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PackageModal 
        pkg={selectedPackage} 
        onClose={() => setSelectedPackage(null)} 
      />
    </section>
  );
};

export default FeaturedPackages;
