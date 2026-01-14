
import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Prepare for Your Next Journey</h2>
          <p className="text-accent/80 text-lg mb-8">Subscribe to receive exclusive offers and spiritual preparation guides.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              className="flex-1 px-6 py-4 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent backdrop-blur-sm" 
              placeholder="Your Email Address" 
              type="email" 
            />
            <button className="px-8 py-4 bg-accent hover:bg-[#9e824c] text-primary font-bold rounded-lg shadow-lg transition-colors" type="button">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#052b2a] text-white pt-16 pb-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-3xl text-accent">mosque</span>
                <h3 className="text-xl font-display font-bold">Umrah & Hajj Plus</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Your trusted partner in fulfilling the fifth pillar of Islam. We provide comprehensive packages tailored to your spiritual and comfort needs.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-accent transition-colors"><span className="material-symbols-outlined">public</span></a>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors"><span className="material-symbols-outlined">mail</span></a>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors"><span className="material-symbols-outlined">call</span></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-accent font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                {['About Us', 'Hajj Packages', 'Umrah Packages', 'Blog & Guides', 'Contact Support'].map(link => (
                  <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-accent font-bold mb-6">Legal</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                {['Terms of Service', 'Privacy Policy', 'Refund Policy', 'Travel Insurance'].map(link => (
                  <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-accent font-bold mb-6">Contact Us</h4>
              <div className="flex flex-col gap-4 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-accent mt-0.5">location_on</span>
                  <span>123 Sacred Road, Suite 404<br/>Medina Business District</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent">phone</span>
                  <span>+966 12 345 6789</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent">email</span>
                  <span>salam@umrahhajjplus.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2023 Umrah & Hajj Plus. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-accent">verified</span>
              <span>Licensed by Ministry of Hajj & Umrah</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
