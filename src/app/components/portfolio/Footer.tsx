import FadeInSection from './FadeInSection';

export default function Footer() {
  return (
    <FadeInSection>
      <footer className="relative bg-slate-900 text-white py-12 z-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-2 text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>Preetish Kulkarni</div>
            <div className="text-slate-400" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Computer Engineering Student</div>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/PJK29"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors font-medium"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/preetish-kulkarni-a072672a8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors font-medium"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              LinkedIn
            </a>
            <a
              href="mailto:preetishrjk2005@gmail.com"
              className="text-slate-400 hover:text-white transition-colors font-medium"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          <p>© 2026 Preetish Kulkarni.</p>
        </div>
      </div>
      </footer>
    </FadeInSection>
  );
}
