import { TreePine, Film, BookOpen, MapPin, Compass } from 'lucide-react';
import FadeInSection from './FadeInSection';

export default function Hobbies() {
  const hobbies = [
    { icon: TreePine, title: 'Wildlife', color: 'bg-green-500' },
    { icon: MapPin, title: 'Geography & GK', color: 'bg-blue-500' },
    { icon: BookOpen, title: 'Anime & Manga', color: 'bg-pink-500' },
    { icon: Compass, title: 'Outdoor Activities', color: 'bg-orange-500' },
    { icon: Film, title: 'Movies', color: 'bg-red-500' }
  ];

  return (
    <section className="py-32 relative" id="hobbies">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <FadeInSection>
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-6 text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Hobbies & Interests</h2>
            <div className="w-24 h-2 bg-slate-900"></div>
            <p className="mt-6 text-lg text-slate-700 max-w-2xl text-justify" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Beyond coding, I enjoy exploring nature, expanding my knowledge,
              and experiencing different forms of storytelling.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <FadeInSection key={index} delay={100 + (index * 50)}>
                <div
                  className="group relative bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all border-2 border-slate-200 hover:border-slate-900 hover:-translate-y-2"
                >
                <div className={`mb-4 inline-flex p-4 rounded-xl ${hobby.color} group-hover:scale-110 group-hover:rotate-12 transition-all shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>{hobby.title}</h3>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
