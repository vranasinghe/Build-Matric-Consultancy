import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './Projects.css';

const IMAGES = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503387837-b154d5074bd2?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
];

const FEATURED = [true, true, false, true, true, false, false, false];

export default function Projects({ filter = 'featured', limit }) {
  const { t } = useLanguage();
  const items = t('projects.items');

  // Build project list with images and featured flag
  const projects = items.map((item, idx) => ({
    ...item,
    img: IMAGES[idx],
    featured: FEATURED[idx]
  }));

  let list = filter === 'featured' ? projects.filter((p) => p.featured) : projects;
  if (limit) list = list.slice(0, limit);

  return (
    <div className="projects-grid">
      {list.map((proj, idx) => (
        <div className="project-card" key={idx}>
          <img src={proj.img} alt={proj.title} />
          <div className="project-overlay">
            <div className="project-info">
              <h3>{proj.title}</h3>
              <p className="proj-cat">{proj.cat}</p>
              <p className="proj-loc">{proj.loc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
