import ProjectCard from './ProjectCard';
import FadeInSection from './FadeInSection';
import AskifyLogoDesign from '../images/AskifyLogoDesign.png';
import MovieTickerBooking from '../images/MovieTickerBooking.jpg';
import TimetableGenerator from '../images/Timetable_Generator.png';

export default function Projects() {
  const projects = [
    {
      title: 'Askify',
      description: 'AI-powered Q&A system with semantic understanding and sentiment analysis. Supports YouTube videos, documents, and audio as input sources.',
      tags: ['AI/ML', 'NLP', 'React', 'Python', 'Sentiment Analysis'],
      link: '/projects/askify',
      image: AskifyLogoDesign,
      isPlaceholder: false
    },
    {
      title: 'Ticket-Booker',
      description: 'Movie ticket booking system for a theatre allowing a portal offering movie listings, showtimes, seat selection and ensures data integrity for bookings.',
      tags: ['Full-Stack', 'React', 'Node.js', 'PostgreSQL'],
      link: '/projects/Ticket-Booker',
      image: MovieTickerBooking,
      isPlaceholder: false
    },
    {
      title: 'QuickAI - Devops Pipeline',
      description: 'Devops Pipeline to automate quality-checks, deployment issues and monitoring on new git pushes for Quick-AI fullstack project',
      tags: ['DevOps', 'Docker', 'Kind-Kubernetes', 'Monitoring'],
      link: '/projects/devops',
      isPlaceholder: false
    },
    {
      title: 'Timetable Generator',
      description: 'Smart timetable generation tool that optimizes scheduling based on constraints and preferences.',
      tags: ['Genetic Algorithm', 'React', 'Optimization'],
      link: '/projects/timetable',
      image: TimetableGenerator,
      isPlaceholder: false
    },
    {
      title: 'Redesigning McD App Interface',
      description: 'Designed High fidelity Static Prototype for McDelivery Application',
      tags: ['UIUX', 'Prototyping'],
      link: '/projects/uiux',
      isPlaceholder: false
    }
  ];

  return (
    <section className="py-32 relative " id="projects">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <FadeInSection>
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-6 text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Projects</h2>
            <div className="w-24 h-2 bg-slate-900"></div>
            <p className="mt-6 text-lg text-slate-700 max-w-2xl text-justify" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              A collection of projects showcasing my skills in full-stack development,
              AI/ML, and problem-solving.
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 ">
          {projects.map((project, index) => (
            <FadeInSection key={index} delay={index * 100}>
              <div className="p-4">
                <ProjectCard {...project} />
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
