import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';

const projects = [
  {
    title: 'Hospital Management System',
    description: 'Streamlined patient records, appointments, and role-based admin controls.',
    tags: ['React', 'CSS', 'Node js', 'Express', 'MongoDB Atlas'],
    repo: 'https://github.com/delacer/hospital-management',
    image: '../assets/hospital.png',
    featured: false,
  },
  {
    title: 'Daily Scoop News App',
    description: 'Real-time news delivery with interactive UI and backend-driven state.',
    tags: ['React', 'Node', 'Express', 'MongoDB', 'MongoDB Atlas','Vite js'],
    repo: 'https://github.com/delacer/the-daily-scoop',
    image: '../assets/daily-scoop.png',
    featured: false,
  },
  {
    title: 'Community Marketplace',
    description: 'Empowered local sellers with guided flows and secure transactions.',
    tags: ['Modular UI', 'JWT','React', 'Node js', 'Express', 'MongoDB'],
    repo: 'https://github.com/delacer/community-marketplace',
    image: '../assets/community-marketplace.png',
    featured: false,
  },
  {
    title: 'Nashie Locksmiths',
    description: 'Service booking platform with location-based access.',
    tags: ['React','CSS', 'FormSpree', 'Netlify'],
    live: 'https://nashie-locksmiths.netlify.app',
    repo: 'https://github.com/delacer/nashie-locksmiths',
    image: '../assets/nashie-locksmiths.png',
    featured: false,
  },
  {
    title: 'Personal Portfolio',
    description: 'Modular, responsive showcase of your skills, values, and technical journey.',
    tags: ['React', 'TailwindCSS', 'FormSpree', 'Nelify'],
    live: 'https://elshebba-ruzvidzo.netlify.app',
    repo: 'https://github.com/delacer/personal-portfolio',
    image: '../assets/personal-portfolio.png',
    featured: false,
  },
];


const techFilters = ['All', 'React', 'MongoDB', 'JWT', 'UX Strategy', ];

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  const featured = projects.find((p) => p.featured);

  return (
    <motion.section
      id="portfolio"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 px-6 md:px-16 bg-gray-800 text-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">Portfolio</h2>
        <p className="text-gray-300 mb-10">
          These aren’t just projects — they’re systems designed to encode clarity, trust, and long-term stewardship.
        </p>
      </div>

      {/* Featured Case Study */}
      {featured && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 p-6 rounded-lg shadow-lg mb-12 max-w-5xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-cyan-300 mb-2">Featured: {featured.title}</h3>
          <p className="text-gray-400 mb-4">{featured.description}</p>
          <a
            href={featured.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded shadow"
          >
            View Case Study
          </a>
        </motion.div>
      )}

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {techFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === filter
                ? 'bg-cyan-500 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            } transition`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-cyan-400 transition cursor-pointer"
              onClick={() => setActiveProject(project)}
            >
              <h3 className="text-xl font-semibold text-cyan-300">{project.title}</h3>
              <p className="mt-3 text-gray-400">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-cyan-600 text-white px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4 text-sm">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-cyan-400 hover:underline"
                >
                  Live Demo <FaExternalLinkAlt />
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-gray-400 hover:text-cyan-400 transition"
                >
                  GitHub <FaGithub />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-12 text-center">
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded shadow transition"
        >
          Let’s build something meaningful together
        </a>
      </div>

      {/* Modal Preview */}
      {activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg max-w-xl w-full relative">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
              aria-label="Close preview"
            >
              <FaTimes />
            </button>
            <h3 className="text-2xl font-bold text-cyan-300 mb-2">{activeProject.title}</h3>
            <p className="text-gray-400 mb-4">{activeProject.description}</p>
            <img
              src={activeProject.image}
              alt={`${activeProject.title} preview`}
              className="w-full rounded shadow mb-4"
            />
            <div className="flex gap-4 text-sm">
              <a
                href={activeProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-cyan-400 hover:underline"
              >
                Live Demo <FaExternalLinkAlt />
              </a>
              <a
                href={activeProject.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-gray-400 hover:text-cyan-400 transition"
              >
                GitHub <FaGithub />
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Portfolio;
