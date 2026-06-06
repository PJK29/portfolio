import { useState } from 'react';
import FadeInSection from './FadeInSection';
import Logo from './Logo';

export default function Hero() {
  const [isTilting, setIsTilting] = useState(false);

  const handleLogoClick = () => {
    setIsTilting(true);
    setTimeout(() => setIsTilting(false), 1000);
  };

  return (
 <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-20 md:pt-24">
      <FadeInSection>
        <div className="relative max-w-7xl mx-auto px-8  pt-2 z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          <button
            onClick={handleLogoClick}
            className={`inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-slate-900 border-4 border-white shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-slate-900/20 overflow-hidden ${
              isTilting ? 'animate-tilt' : ''
            }`}
            aria-label="Logo"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 relative">
              <Logo className="!absolute !inset-0 !w-full !h-full" />
            </div>
          </button>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-900 text-center md:text-left"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Preetish Kulkarni
          </h1>
        </div>

        <p className="space-y-6 text-lg text-slate-700 text-justify mb-12 mt-6 md:mt-10 max-w-2xl leading-relaxed " style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          Building practical applications with a focus on clean code and user experience.
          Always learning, always growing. Passionate about solving real-world problems through technology and innovation.
        </p>

        <p className="text-xl text-slate-600 mb-8 max-w-3xl font-semibold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        Your neighborhood friendly Computer Engineering Student
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <span className="inline-flex items-center gap-2">
              View Projects
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 bg-white text-slate-900 rounded-xl hover:bg-slate-50 transition-all font-semibold shadow-md hover:shadow-xl border-2 border-slate-900 hover:-translate-y-1"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <span className="inline-flex items-center gap-2">
              Get in Touch
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </button>
        </div>
        </div>
      </FadeInSection>
    </section>
  );
}
