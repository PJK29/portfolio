import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  CalendarDays,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  Github,
  Globe,
  Layers,
  MonitorDot,
  Route,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow
} from 'lucide-react';
import FadeInSection from '../components/portfolio/FadeInSection';
import AskifyLogoDesign from '../components/images/AskifyLogoDesign.png';
import MovieTickerBooking from '../components/images/MovieTickerBooking.jpg';
import TimetableGenerator from '../components/images/Timetable_Generator.png';

type ProjectLink = {
  label: string;
  href: string;
  type: 'github' | 'documentation' | 'live' | 'prototype';
};

type ProjectSection = {
  title: string;
  body: string;
  points: string[];
};

type ProjectMetric = {
  value: string;
  label: string;
};

type Project = {
  id: string;
  title: string;
  category: string;
  period: string;
  summary: string;
  formalOverview: string;
  role: string;
  image?: string;
  links: ProjectLink[];
  metrics: ProjectMetric[];
  stack: string[];
  highlights: string[];
  sections: ProjectSection[];
};

const projects: Project[] = [
  {
    id: 'askify',
    title: 'Askify',
    category: 'AI/ML',
    period: 'Academic Project',
    summary: 'A multimodal question-answering system that turns videos, text documents, and voice notes into grounded, context-aware answers through retrieval augmented generation.',
    formalOverview: 'Askify was designed for learners and researchers who need to extract reliable answers from long-form sources without manually combing through complete videos or documents. The system accepts YouTube links, document text, and voice notes, processes them through a RAG pipeline, and retrieves semantically relevant context before generating answers.',
    role: 'Designed the retrieval workflow, integrated transcription support for uncaptained media, implemented source analysis features, and evaluated the factual quality of generated responses.',
    image: AskifyLogoDesign,
    links: [
      { label: 'GitHub Repository', href: 'https://github.com/PJK29/askify', type: 'github' },
      { label: 'Detailed Documentation', href: 'https://drive.google.com/file/d/1xGzC03n2S-ZIibM7Hc6mB_K8-u76RtNW/view?usp=sharing', type: 'documentation' }
    ],
    metrics: [
      { value: '96%', label: 'factual accuracy on evaluation queries' },
      { value: '< 3 min', label: 'processing time for 15-20 minute videos' },
      { value: '3', label: 'supported source types' }
    ],
    stack: ['Python', 'RAG', 'FAISS', 'Groq Whisper', 'LLM APIs', 'NLP', 'Sentiment Analysis'],
    highlights: [
      'Built an interactive Q&A experience backed by context-aware retrieval.',
      'Stored source chunks in a FAISS vector database for semantic similarity search.',
      'Used Groq Whisper to transcribe voice notes and YouTube videos without captions.',
      'Added broad sentiment analysis and profanity detection for source-level insight.'
    ],
    sections: [
      {
        title: 'Problem Framing',
        body: 'Long-form learning material often contains valuable answers, but the cost of finding those answers is high. Askify narrows that gap by converting unstructured sources into searchable context.',
        points: [
          'Supported documents, YouTube content, and voice notes as knowledge sources.',
          'Focused on grounded responses so answers remain tied to retrieved source context.',
          'Added source quality signals through sentiment and profanity analysis.'
        ]
      },
      {
        title: 'Retrieval Pipeline',
        body: 'The project follows a practical RAG architecture: ingest, transcribe when required, chunk, embed, store, retrieve, and answer using the retrieved context.',
        points: [
          'Processed uncaptained audio and video sources through Groq Whisper transcription.',
          'Embedded source chunks and persisted them in FAISS for fast semantic lookup.',
          'Passed the most relevant chunks to the LLM to reduce unsupported generation.'
        ]
      },
      {
        title: 'Evaluation',
        body: 'The system was evaluated against prepared queries to measure factual faithfulness and processing practicality for medium-length media.',
        points: [
          'Reached 96% factual accuracy on evaluation questions.',
          'Processed 15-20 minute videos in under 3 minutes.',
          'Balanced answer quality with retrieval speed and source diversity.'
        ]
      }
    ]
  },
  {
    id: 'Ticket-Booker',
    title: 'Movie Ticket Booking System',
    category: 'Full-Stack',
    period: 'Software Engineering Project',
    summary: 'A cinema booking web application covering movie listings, showtimes, seat selection, user flows, and reliable booking records.',
    formalOverview: 'This project applies software engineering practices from planning and low-fidelity modeling through implementation. The application provides a booking workflow for cinema users while maintaining relational integrity for users, movies, showtimes, seats, and bookings.',
    role: 'Built user-facing interfaces, contributed to the backend service layer, and helped design the relational schema required for consistent booking behavior.',
    image: MovieTickerBooking,
    links: [
      { label: 'GitHub Repository', href: 'https://github.com/PJK29/Movie_Ticket_booking_SoftwareEngineering_Project', type: 'github' },
      { label: 'Documentation Directory', href: 'https://drive.google.com/drive/folders/1GZ1OlzHgDYEXwyVO4McUFLl5N_tawPQO?usp=sharing', type: 'documentation' }
    ],
    metrics: [
      { value: '4', label: 'core database entities' },
      { value: 'End-to-end', label: 'movie selection to booking flow' },
      { value: 'SE', label: 'modeled with engineering documentation' }
    ],
    stack: ['Next.js', 'Node.js', 'Express.js', 'PostgreSQL', 'REST APIs', 'Relational Schema Design'],
    highlights: [
      'Implemented a cinema booking workflow with movie listings, showtimes, and seat selection.',
      'Built frontend interfaces using Next.js.',
      'Developed backend services using Node.js and Express.js.',
      'Designed PostgreSQL tables for users, movies, showtimes, and bookings.'
    ],
    sections: [
      {
        title: 'Product Scope',
        body: 'The application models the practical path a cinema customer follows: discover a movie, inspect available showtimes, choose seats, and complete a booking.',
        points: [
          'Structured the user flow around clarity and low booking friction.',
          'Kept showtime and seat state tied to booking records for data consistency.',
          'Translated software engineering diagrams and documentation into working interfaces.'
        ]
      },
      {
        title: 'System Design',
        body: 'The project separates presentation, service logic, and persistence so the booking workflow can be reasoned about and tested more cleanly.',
        points: [
          'Frontend screens were built in Next.js for interactive booking steps.',
          'Express.js services handled application logic and database communication.',
          'PostgreSQL schema design protected relationships between users, movies, showtimes, and bookings.'
        ]
      },
      {
        title: 'Engineering Focus',
        body: 'The most important concern was avoiding inconsistent bookings while still presenting a straightforward cinema experience.',
        points: [
          'Maintained relational records for each booking transaction.',
          'Designed the schema around entities that naturally map to a theatre domain.',
          'Connected documentation artifacts with implementation decisions.'
        ]
      }
    ]
  },
  {
    id: 'devops',
    title: 'QuickAI DevOps Pipeline',
    category: 'DevOps',
    period: 'DevOps Project',
    summary: 'A containerized CI/CD and observability pipeline for QuickAI, a full-stack hub of generative AI utilities.',
    formalOverview: 'The project focuses on production-oriented delivery for a full-stack GenAI application. It packages the application with Docker, automates build and deployment work through Jenkins, deploys to Kubernetes Kind, and adds quality and monitoring layers through SonarQube, Prometheus, Loki, and Grafana.',
    role: 'Designed and tested the CI/CD workflow, configured container image flow, integrated static analysis, and connected monitoring tools for deployed Kubernetes pods.',
    links: [
      { label: 'GitHub Branch', href: 'https://github.com/PJK29/QuickAi/tree/kubernetes-cicd', type: 'github' },
      { label: 'Live QuickAI Website', href: 'https://quick-ai-cli.vercel.app/', type: 'live' },
      { label: 'Detailed Documentation', href: 'https://docs.google.com/document/d/1HRndbOzjwtjneLOQyoxU2-AhvVFgLQIN/edit?usp=sharing&ouid=107239441350862328265&rtpof=true&sd=true', type: 'documentation' }
    ],
    metrics: [
      { value: 'CI/CD', label: 'automated build and deploy workflow' },
      { value: 'K8s', label: 'deployment target using Kind' },
      { value: '3', label: 'monitoring and log tools integrated' }
    ],
    stack: ['Docker', 'Jenkins', 'Kubernetes Kind', 'SonarQube', 'Prometheus', 'Loki', 'Grafana'],
    highlights: [
      'Containerized the QuickAI full-stack project.',
      'Built a Jenkins pipeline to build Docker images and push updates to a registry.',
      'Deployed updated images to Kubernetes Kind.',
      'Integrated SonarQube quality gates plus Prometheus, Loki, and Grafana monitoring.'
    ],
    sections: [
      {
        title: 'Pipeline Objective',
        body: 'The goal was to make each code push easier to validate, package, deploy, and observe across a Kubernetes-based development environment.',
        points: [
          'Automated image creation and registry push steps through Jenkins.',
          'Reduced manual deployment steps by targeting Kubernetes Kind.',
          'Added static code analysis before deployment promotion.'
        ]
      },
      {
        title: 'Quality Gate',
        body: 'SonarQube was introduced to enforce a code quality checkpoint inside the pipeline rather than treating analysis as a separate manual activity.',
        points: [
          'Connected static analysis to the CI/CD flow.',
          'Used quality gate enforcement to make pipeline results more meaningful.',
          'Created a stronger feedback loop for future changes.'
        ]
      },
      {
        title: 'Observability',
        body: 'After deployment, the pipeline included monitoring and log visibility so deployed pods could be inspected beyond a simple success or failure signal.',
        points: [
          'Used Prometheus for metrics collection.',
          'Used Loki for log aggregation.',
          'Visualized operational data in Grafana dashboards.'
        ]
      }
    ]
  },
  {
    id: 'timetable',
    title: 'Time Table Generator',
    category: 'Algorithms + Frontend',
    period: 'Academic Prototype',
    summary: 'A college administration prototype for generating timetables from teacher, room, and scheduling constraints.',
    formalOverview: 'The Time Table Generator helps college administrators create feasible schedules by combining user-provided constraints with a backtracking algorithm. The project emphasizes the translation of real institutional scheduling restrictions into an interface-driven generation workflow.',
    role: 'Worked on React frontend interfaces and contributed to shaping how constraints are represented for the timetable generation process.',
    image: TimetableGenerator,
    links: [
      { label: 'Live Prototype', href: 'https://aviral-chi.vercel.app/login', type: 'live' },
      { label: 'Documentation', href: 'https://drive.google.com/file/d/1z9y5Lwg4un-zCoSJ_Rw5-Vw9_wb12TdK/view?usp=sharing', type: 'documentation' }
    ],
    metrics: [
      { value: 'Backtracking', label: 'constraint solving approach' },
      { value: 'Admin', label: 'primary user role' },
      { value: 'React', label: 'frontend implementation' }
    ],
    stack: ['React.js', 'Backtracking Algorithm', 'Constraint Modeling', 'Scheduling Logic'],
    highlights: [
      'Built a prototype for college administrators to generate timetables.',
      'Used backtracking to search for valid schedules under constraints.',
      'Modeled teacher and room restrictions as generation inputs.',
      'Worked on React interfaces for the scheduling workflow.'
    ],
    sections: [
      {
        title: 'Scheduling Challenge',
        body: 'Academic timetables are constraint-heavy: teacher availability, rooms, subjects, and conflicts all need to be respected at the same time.',
        points: [
          'Represented teacher constraints in the generation flow.',
          'Represented room constraints as part of feasible timetable search.',
          'Focused the prototype around college admin use cases.'
        ]
      },
      {
        title: 'Algorithmic Approach',
        body: 'Backtracking was used to explore possible timetable assignments and discard invalid branches when constraints were violated.',
        points: [
          'Modeled timetable generation as a constraint satisfaction problem.',
          'Applied recursive search to build feasible schedules.',
          'Prioritized valid combinations over manual schedule assembly.'
        ]
      },
      {
        title: 'Interface Work',
        body: 'The frontend needed to make constraint entry and generated output understandable for an administrative user.',
        points: [
          'Created React interfaces for entering timetable requirements.',
          'Kept workflow screens oriented around setup and generation.',
          'Supported the prototype goal of making scheduling decisions visible.'
        ]
      }
    ]
  },
  {
    id: 'project-four',
    title: 'McDelivery App Redesign',
    category: 'UI/UX',
    period: 'Group Design Project',
    summary: 'A high-fidelity Figma prototype redesigning the McDelivery mobile app experience with component-based interface thinking.',
    formalOverview: 'This UI/UX project explored how a familiar food ordering application could be redesigned through improved screen structure, component reuse, and high-fidelity interaction presentation. The work focused on practicing Figma workflows and making the app experience clearer as a polished prototype.',
    role: 'Contributed to the high-fidelity prototype, explored component-based Figma design, and supported the visual redesign of the McDelivery ordering experience.',
    links: [
      { label: 'Figma Prototype', href: 'https://www.figma.com/proto/le9rCAd08vAZd4JBUgnP7h/McDelivery-Figma-Group-5?node-id=164-1402&p=f&t=jORA7KA9z7zIlrEr-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=66%3A56', type: 'prototype' }
    ],
    metrics: [
      { value: 'Hi-fi', label: 'interactive prototype fidelity' },
      { value: 'Figma', label: 'primary design tool' },
      { value: 'Mobile', label: 'redesigned app surface' }
    ],
    stack: ['Figma', 'UI Design', 'Component-Based Design', 'Mobile Prototyping'],
    highlights: [
      'Created a high-fidelity static prototype for a McDelivery app redesign.',
      'Practiced component-based design using Figma.',
      'Focused on improving the clarity and polish of the ordering experience.',
      'Worked as part of a small design group.'
    ],
    sections: [
      {
        title: 'Design Goal',
        body: 'The redesign focused on turning a familiar delivery workflow into a clearer, more polished mobile experience while strengthening practical Figma skills.',
        points: [
          'Improved visual hierarchy across core app screens.',
          'Used reusable design components to maintain consistency.',
          'Presented the redesign as a high-fidelity prototype.'
        ]
      },
      {
        title: 'Prototype Work',
        body: 'The project used Figma to create a realistic mobile interface artifact suitable for critique and demonstration.',
        points: [
          'Built screen layouts with a consistent component language.',
          'Explored app flow presentation through a clickable prototype.',
          'Focused on interface polish, structure, and usability cues.'
        ]
      },
      {
        title: 'Learning Outcome',
        body: 'The project helped connect visual design decisions with interface systems thinking.',
        points: [
          'Strengthened proficiency with Figma tooling.',
          'Practiced collaboration around a shared design file.',
          'Applied high-fidelity presentation standards to a known product category.'
        ]
      }
    ]
  }
];

const iconByLinkType = {
  github: Github,
  documentation: BookOpen,
  live: Globe,
  prototype: MonitorDot
};

const sectionIcons = [Workflow, Route, ShieldCheck, Brain, Layers, Server, Database, Code2];

function getProjectIndex(projectId?: string) {
  return projects.findIndex((project) => project.id === projectId);
}

function getProject(projectId?: string) {
  const index = getProjectIndex(projectId);
  return index >= 0 ? projects[index] : null;
}

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = getProject(projectId);
  const projectIndex = getProjectIndex(projectId);
  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex >= 0 && projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-xl bg-white border-2 border-slate-900 rounded-2xl p-10 text-center shadow-2xl">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-500 mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Project archive
          </p>
          <h1 className="text-4xl font-bold mb-4 text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Project Not Found
          </h1>
          <p className="text-slate-600 mb-8" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            This case study is not available in the current portfolio data.
          </p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-slate-800"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen relative">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:py-14">
        <FadeInSection>
          <Link
            to="/#projects"
            className="group mb-10 inline-flex items-center gap-2 font-semibold text-slate-600 transition-all hover:-translate-x-1 hover:text-slate-900"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>
        </FadeInSection>

        <FadeInSection delay={80}>
          <section className="grid gap-8 border-2 border-slate-900 bg-white p-6 shadow-2xl sm:rounded-2xl sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:p-10">
            <div className="flex min-h-[28rem] flex-col justify-between">
              <div>
                <div className="mb-8 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    <CalendarDays className="h-4 w-4" />
                    {project.period}
                  </span>
                </div>

                <h1 className="mb-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {project.title}
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  {project.summary}
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {project.metrics.map((metric) => (
                  <div key={`${metric.value}-${metric.label}`} className="border-l-4 border-slate-900 bg-slate-50 px-4 py-3">
                    <p className="text-2xl font-bold text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      {metric.value}
                    </p>
                    <p className="mt-1 text-sm leading-5 text-slate-600" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border-2 border-slate-200 bg-slate-100">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="h-full w-full object-contain p-5" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-slate-100">
                    <div className="text-center">
                      <Sparkles className="mx-auto mb-5 h-14 w-14 text-slate-400" />
                      <p className="text-6xl font-bold text-slate-300" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        {project.title.charAt(0)}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {project.links.map((link) => {
                  const Icon = iconByLinkType[link.type];
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex min-h-14 items-center justify-between gap-3 rounded-xl border-2 border-slate-200 bg-white px-4 py-3 font-semibold text-slate-700 transition-all hover:-translate-y-1 hover:border-slate-900 hover:text-slate-900 hover:shadow-lg"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      <span className="inline-flex items-center gap-3">
                        <Icon className="h-5 w-5" />
                        {link.label}
                      </span>
                      <ExternalLink className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-slate-900" />
                    </a>
                  );
                })}
              </div>
            </div>
          </section>
        </FadeInSection>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.72fr_0.28fr]">
          <div className="space-y-8">
            <FadeInSection delay={160}>
              <section className="bg-white p-6 shadow-xl ring-2 ring-slate-200 sm:rounded-2xl sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
                    <Layers className="h-5 w-5" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    Project Overview
                  </h2>
                </div>
                <p className="text-lg leading-8 text-slate-700" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  {project.formalOverview}
                </p>
                <div className="mt-8 border-l-4 border-slate-900 bg-slate-50 p-5">
                  <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-500" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    My Role
                  </p>
                  <p className="text-slate-700 leading-7" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    {project.role}
                  </p>
                </div>
              </section>
            </FadeInSection>

            {project.sections.map((section, index) => {
              const Icon = sectionIcons[index % sectionIcons.length];
              return (
                <FadeInSection key={section.title} delay={220 + index * 80}>
                  <section className="bg-white p-6 shadow-xl ring-2 ring-slate-200 sm:rounded-2xl sm:p-8">
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-slate-900 bg-white text-slate-900">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="text-3xl font-bold text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        {section.title}
                      </h2>
                    </div>
                    <p className="mb-6 text-lg leading-8 text-slate-700" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {section.body}
                    </p>
                    <div className="grid gap-3">
                      {section.points.map((point) => (
                        <div key={point} className="flex gap-3 rounded-xl border-2 border-slate-100 bg-slate-50 p-4">
                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-900" />
                          <p className="leading-7 text-slate-700" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                </FadeInSection>
              );
            })}
          </div>

          <aside className="space-y-8 lg:sticky lg:top-8 lg:self-start">
            <FadeInSection delay={220}>
              <section className="bg-white p-6 shadow-xl ring-2 ring-slate-200 sm:rounded-2xl">
                <h2 className="mb-5 text-2xl font-bold text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Key Contributions
                </h2>
                <div className="space-y-3">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900" />
                      <p className="leading-7 text-slate-700" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </FadeInSection>

            <FadeInSection delay={300}>
              <section className="bg-white p-6 shadow-xl ring-2 ring-slate-200 sm:rounded-2xl">
                <h2 className="mb-5 text-2xl font-bold text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Technology Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border-2 border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            </FadeInSection>
          </aside>
        </div>

        <FadeInSection delay={360}>
          <nav className="mt-10 grid gap-4 border-t-2 border-slate-200 pt-8 sm:grid-cols-2">
            {previousProject ? (
              <Link
                to={`/projects/${previousProject.id}`}
                className="group flex items-center justify-between rounded-2xl border-2 border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-slate-900 hover:shadow-xl"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                <span>
                  <span className="block text-sm font-semibold text-slate-500">Previous project</span>
                  <span className="mt-1 block text-lg font-bold text-slate-900">{previousProject.title}</span>
                </span>
                <ArrowLeft className="h-5 w-5 text-slate-400 transition-transform group-hover:-translate-x-1 group-hover:text-slate-900" />
              </Link>
            ) : (
              <div />
            )}

            {nextProject && (
              <Link
                to={`/projects/${nextProject.id}`}
                className="group flex items-center justify-between rounded-2xl border-2 border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-slate-900 hover:shadow-xl"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                <span>
                  <span className="block text-sm font-semibold text-slate-500">Next project</span>
                  <span className="mt-1 block text-lg font-bold text-slate-900">{nextProject.title}</span>
                </span>
                <ArrowRight className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-slate-900" />
              </Link>
            )}
          </nav>
        </FadeInSection>
      </div>
    </main>
  );
}
