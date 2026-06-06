import FadeInSection from './FadeInSection';

export default function About() {
  return (
    <section className="py-32 relative" id="about">
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <FadeInSection>
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-6 text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>About Me</h2>
            <div className="w-24 h-2 bg-slate-900"></div>
          </div>
        </FadeInSection>

        <FadeInSection delay={100}>
          <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed text-justify" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            <p>
              I'm a Computer Engineering student at <span className="font-bold text-slate-900">Bharatiya Vidya Bhavan's Sardar Patel Institute of Technology</span>,
              passionate about building real-world applications that solve meaningful problems.
            </p>

            <p>
              My journey in tech is driven by my spirit to explore and learn. I indulge in 
              studies related to full-stack development, system designs, database management,
              ML, DevOps, and UI/UX. I aim and believe in staying versatile and adaptable.
            </p>

            <p>
              I enjoy the challenge of competitive programming and problem-solving.
              Beyond coding, I'm expanding into system management and data engineering.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Git', 'Tailwind CSS'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-900 hover:text-white hover:scale-110 transition-all border-2 border-slate-200 hover:border-slate-900 cursor-default"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Course Work</h3>
              <div className="flex flex-wrap gap-3">
                {['Computer Communications','Big Data Analysis' ,'Operating Systems', 'DBMS', 'Machine Learning', 'DevOps', 'UI/UX Design'].map((topic) => (
                  <span
                    key={topic}
                    className="px-4 py-2 bg-slate-50 text-slate-600 rounded-lg text-sm font-medium border-2 border-slate-200 hover:border-slate-900 hover:text-slate-900 hover:bg-white hover:scale-110 transition-all cursor-default"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
