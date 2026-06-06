import { Mail, Github, Linkedin, Send, Phone, MapPin } from 'lucide-react';
import FadeInSection from './FadeInSection';

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'preetishrjk2005@gmail.com',
      href: 'mailto:preetishrjk2005@gmail.com',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Preetish Kulkarni',
      href: 'https://www.linkedin.com/in/preetish-kulkarni-a072672a8/',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@PJK29',
      href: 'https://github.com/PJK29',
      color: 'from-slate-700 to-slate-900'
    }
  ];

  const additionalInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 XXXXX XXXXX',
      isPlaceholder: false
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mumbai, India',
      isPlaceholder: false
    }
  ];

  return (
    <section className="py-32 relative" id="contact">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <FadeInSection>
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-6 text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Let's Connect</h2>
            <div className="w-24 h-2 bg-slate-900"></div>
            <p className="mt-6 text-lg text-slate-700 max-w-2xl text-justify" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              I'm always open to discussing new projects, opportunities,
              or just having a chat about technology.
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          <FadeInSection delay={100}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>Get in Touch</h3>
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-slate-900 hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <div className={`p-3 rounded-lg ${method.color} group-hover:scale-110 transition-all shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-slate-500 mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{method.label}</div>
                    <div className="font-semibold text-slate-900 transition-all" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {method.value}
                    </div>
                  </div>
                  <Send className="w-5 h-5 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
                </a>
              );
            })}
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>Additional Info</h3>

            {additionalInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-6 bg-white rounded-xl border-2 border-slate-200 ${info.isPlaceholder ? 'opacity-60' : ''}`}
                >
                  <div className="p-3 rounded-lg bg-slate-200">
                    <Icon className="w-6 h-6 text-slate-700" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-slate-500 mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{info.label}</div>
                    <div className="font-semibold text-slate-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {info.value}
                      {info.isPlaceholder && (
                        <span className="ml-2 text-xs text-slate-400">(Placeholder)</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="mt-8 p-8 bg-slate-900 rounded-xl text-white shadow-2xl border-2 border-slate-900">
              <h4 className="text-xl font-bold mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>Open to Opportunities</h4>
              <p className="text-slate-300 leading-relaxed text-justify" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Seeking internships and full-time positions in
                software development. 
              </p>
            </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
