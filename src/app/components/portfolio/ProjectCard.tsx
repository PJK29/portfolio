import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string | StaticImageData;
  isPlaceholder?: boolean;
}

interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}

export default function ProjectCard({ title, description, tags, link, image, isPlaceholder }: ProjectCardProps) {
  const cardClassName = `group relative block bg-white rounded-2xl border-2 border-slate-200 hover:border-slate-900 transition-all duration-300 hover:shadow-2xl cursor-pointer select-none ${isPlaceholder ? 'opacity-60' : ''}`;

  const cardContent = (
    <>
      {isPlaceholder && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-slate-900 text-white text-xs font-semibold rounded-full z-10" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          Coming Soon
        </div>
      )}

      <div className="relative w-full aspect-video bg-[#ffffff] rounded-t-2xl overflow-hidden flex items-center justify-center p-2">
        {image ? (
          <img 
            src={typeof image === 'string' ? image : image.src} 
            alt={title} 
            className="w-full h-full object-scale-down object-center group-hover:scale-110 transition-transform duration-500 cursor-auto" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-100 group-hover:bg-slate-200 transition-colors">
            <div className="text-6xl font-bold text-slate-300 group-hover:text-slate-400 transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>
              {title.charAt(0)}
            </div>
          </div>
        )}
      </div>

      <div className="p-8 select-none">
        <div className="flex items-start justify-between mb-4 select-none">
          <h3 className="text-2xl font-bold text-slate-900 transition-all select-none" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {title}
          </h3>
          {link && (
            <ArrowUpRight className="w-6 h-6 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          )}
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed text-justify select-none" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          {description}
        </p>

        <div className="flex flex-wrap gap-2 select-none">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm font-medium select-none"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  return link ? (
    <Link to={link} className={cardClassName} style={{ userSelect: 'none' }}>
      {cardContent}
    </Link>
  ) : (
    <div className={cardClassName} style={{ userSelect: 'none' }}>
      {cardContent}
    </div>
  );
}
