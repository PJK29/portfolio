import { Award, Code, Briefcase, GraduationCap } from 'lucide-react';
import FadeInSection from './FadeInSection';

export default function Experience() {
  const achievements = [
    {
      icon: Code,
      title: 'Problem Solver',
      color: 'bg-blue-500',
      items: [
        '170+ LeetCode problems solved',
        '910+ Codeforces rating',
        'Strong foundation in algorithms and data structures'
      ]
    },
    {
      icon: Award,
      title: 'Hackathon Experience',
      color: 'bg-orange-500',
      items: [
        'Participated in 4 hackathons',
        'Built projects under time constraints',
        'Collaborated with diverse teams'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      color: 'bg-green-500',
      items: [
        'Solid 8.5 CGPA track record',
        'Computer Engineering student',
        'SPIT, Mumbai'
      ]
    },
    {
      icon: Briefcase,
      title: 'Professional Development',
      color: 'bg-red-500',
      items: [
        'Completed Oracle AI Foundation Course',
        'Continuous learning mindset',
        'Focus on emerging technologies'
      ]
    }
  ];

  return (
    <section className="py-32 relative" id="experience">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <FadeInSection>
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-6 text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Experience & Achievements</h2>
            <div className="w-24 h-2 bg-slate-900"></div>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <FadeInSection key={index} delay={100 + (index * 100)}>
                <div
                  className="group bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-slate-900 transition-all hover:shadow-2xl hover:-translate-y-2"
                >
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${achievement.color} rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4 text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>{achievement.title}</h3>
                    <ul className="space-y-3">
                      {achievement.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-slate-600 text-justify" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
