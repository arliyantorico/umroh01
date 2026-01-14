
import React, { useState, useEffect } from 'react';
import { Package } from '../types';
import { generatePackageTour } from '../services/videoService';

interface PackageModalProps {
  pkg: Package | null;
  onClose: () => void;
}

const PackageModal: React.FC<PackageModalProps> = ({ pkg, onClose }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [videoLoading, setVideoLoading] = useState(false);
  const [videoError, setVideoError] = useState<string | null>(null);
  const [loadingStatus, setLoadingStatus] = useState("Preparing...");

  useEffect(() => {
    // Reset video state when package changes
    setVideoUrl(null);
    setVideoError(null);
    setVideoLoading(false);
  }, [pkg]);

  if (!pkg) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  const handleGenerateTour = async () => {
    try {
      setVideoError(null);
      const hasKey = await window.aistudio.hasSelectedApiKey();
      
      if (!hasKey) {
        // As per guidelines, if key selection is triggered, assume success for UX 
        // but it will fail if the user cancels.
        await window.aistudio.openSelectKey();
      }

      setVideoLoading(true);
      const url = await generatePackageTour(pkg.title, (status) => {
        setLoadingStatus(status);
      });
      setVideoUrl(url);
    } catch (err: any) {
      if (err.message?.includes("Requested entity was not found")) {
        setVideoError("API Key invalid or not found. Please re-select a paid project key.");
        // Reset key selection as requested by guidelines
        window.aistudio.openSelectKey();
      } else {
        setVideoError("Could not generate tour at this time. Please try again later.");
      }
    } finally {
      setVideoLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white w-full max-w-6xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: Content Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="relative h-64 md:h-96">
            <button 
              onClick={onClose}
              className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-black/20 text-white flex items-center justify-center hover:bg-black/40 transition-colors backdrop-blur-md"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            
            {videoUrl ? (
              <video 
                src={videoUrl} 
                className="w-full h-full object-cover" 
                controls 
                autoPlay 
                loop
              />
            ) : videoLoading ? (
              <div className="w-full h-full bg-primary flex flex-col items-center justify-center text-white px-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 border-4 border-accent/30 border-t-accent rounded-full animate-spin mb-6 mx-auto"></div>
                  <h3 className="text-2xl font-display font-bold mb-2 animate-pulse">{loadingStatus}</h3>
                  <p className="text-accent/70 text-sm max-w-xs mx-auto">AI is generating your immersive spiritual tour. This may take a minute.</p>
                </div>
              </div>
            ) : (
              <div className="relative w-full h-full">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    onClick={handleGenerateTour}
                    className="bg-accent/90 hover:bg-accent text-primary px-6 py-3 rounded-full font-bold shadow-2xl backdrop-blur-md flex items-center gap-2 transform hover:scale-105 transition-all group"
                  >
                    <span className="material-symbols-outlined animate-pulse">play_circle</span>
                    <span>AI Spiritual Tour Preview</span>
                  </button>
                </div>
              </div>
            )}

            <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
              <span className={`${pkg.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block shadow-lg`}>
                {pkg.tag}
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-black text-white">{pkg.title}</h2>
            </div>
          </div>

          <div className="p-6 md:p-10">
            {videoError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm flex items-center gap-3 animate-fade-up">
                <span className="material-symbols-outlined">error</span>
                <p>{videoError}</p>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <section>
                  <h3 className="text-xl font-display font-bold text-primary mb-3">About this Journey</h3>
                  <p className="text-gray-600 leading-relaxed">{pkg.longDescription || pkg.description}</p>
                </section>

                <section>
                  <h3 className="text-xl font-display font-bold text-primary mb-4">What's Included</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pkg.inclusions?.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="material-symbols-outlined text-accent text-lg">check_circle</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {pkg.itinerary && (
                  <section>
                    <h3 className="text-xl font-display font-bold text-primary mb-4">Journey Timeline</h3>
                    <div className="space-y-4 border-l-2 border-accent/20 ml-3 pl-6 relative">
                      {pkg.itinerary.map((step, idx) => (
                        <div key={idx} className="relative">
                          <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-white shadow-sm"></div>
                          <h4 className="font-bold text-primary text-sm uppercase tracking-wide">{step.day}</h4>
                          <p className="text-gray-600 text-sm mt-1">{step.activity}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              <div className="lg:col-span-1">
                <div className="bg-parchment p-6 rounded-2xl border border-accent/10 sticky top-0">
                  <h3 className="text-lg font-display font-bold text-primary mb-4">Quick Highlights</h3>
                  <ul className="space-y-3">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                        <span className="material-symbols-outlined text-accent">
                          {feat.toLowerCase().includes('flight') ? 'flight' : feat.toLowerCase().includes('star') ? 'hotel' : 'verified'}
                        </span>
                        <span className="text-sm font-medium text-gray-800">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Veo Billing Notice (Mandatory for key selection flow) */}
                  <div className="mt-6 p-4 bg-white/50 rounded-xl border border-accent/5">
                    <p className="text-[10px] text-gray-400 leading-tight">
                      Video tour generation requires a paid API key. 
                      <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" className="text-accent underline ml-1">Learn about billing</a>
                    </p>
                  </div>

                  <div className="mt-6 p-4 bg-primary rounded-xl text-white text-center">
                    <p className="text-xs opacity-70 mb-1">Total Package Price</p>
                    <p className="text-2xl font-bold">{pkg.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Inquiry Form */}
        <div className="w-full md:w-80 lg:w-96 bg-gray-50 border-t md:border-t-0 md:border-l border-gray-100 flex flex-col p-6 md:p-8">
          <div className="hidden md:flex justify-between items-center mb-8">
            <h3 className="text-xl font-display font-bold text-primary">Inquiry</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {formStatus === 'success' ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 animate-fade-up">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl">check_circle</span>
              </div>
              <h4 className="text-xl font-bold text-primary">Inquiry Sent!</h4>
              <p className="text-gray-500 text-sm">One of our spiritual consultants will contact you within 24 hours.</p>
              <button 
                onClick={() => setFormStatus('idle')}
                className="mt-4 text-accent font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-sm text-gray-500 mb-6">Fill out the form below and we'll get back to you with a personalized quote and more details.</p>
              
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">Full Name</label>
                <input required className="w-full bg-white border-gray-200 rounded-lg text-sm focus:ring-accent focus:border-accent" type="text" placeholder="Abdullah Ahmad" />
              </div>
              
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">Email Address</label>
                <input required className="w-full bg-white border-gray-200 rounded-lg text-sm focus:ring-accent focus:border-accent" type="email" placeholder="email@example.com" />
              </div>
              
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">Phone Number</label>
                <input required className="w-full bg-white border-gray-200 rounded-lg text-sm focus:ring-accent focus:border-accent" type="tel" placeholder="+966 --- --- ---" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">Number of Pilgrims</label>
                <select className="w-full bg-white border-gray-200 rounded-lg text-sm focus:ring-accent focus:border-accent">
                  <option>1 Person</option>
                  <option>2 Persons</option>
                  <option>3 Persons</option>
                  <option>Family (4+)</option>
                </select>
              </div>

              <button 
                disabled={formStatus === 'submitting'}
                className="w-full bg-primary hover:bg-[#083d3b] text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 mt-4"
              >
                {formStatus === 'submitting' ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-lg">mail</span>
                    <span>Confirm Interest</span>
                  </>
                )}
              </button>
              <p className="text-[10px] text-gray-400 text-center mt-4">
                By clicking, you agree to our Terms and spiritual guidance policy.
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes scale-up {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-scale-up { animation: scale-up 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(178, 148, 91, 0.2); border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default PackageModal;
