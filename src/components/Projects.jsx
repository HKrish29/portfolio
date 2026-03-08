import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: 'Bookstore Management System',
        codename: 'Operation: PageVault',
        description: 'A complete bookstore management application for tracking inventory, managing sales records, and handling customer data with an efficient and clean user interface.',
        tech: ['Python', 'Database', 'CRUD', 'CLI'],
        category: 'app',
        status: 'DEPLOYED',
        link: '#',
        github: 'https://github.com/HKrish29',
        features: [
            'Full inventory management with CRUD operations',
            'Sales tracking and reporting dashboard',
            'Customer data management system',
        ],
    },
    {
        id: 2,
        title: 'AI Image Generator',
        codename: 'Operation: PixelForge',
        description: 'An AI-powered image generation tool that leverages machine learning APIs to create unique images from text prompts — exploring the intersection of AI and creative design.',
        tech: ['Python', 'AI/ML', 'API Integration', 'UI'],
        category: 'ai',
        status: 'DEPLOYED',
        link: '#',
        github: 'https://github.com/HKrish29',
        features: [
            'Text-to-image generation via AI models',
            'Custom prompt engineering interface',
            'Image export and gallery features',
        ],
    },
    {
        id: 3,
        title: 'Portfolio Terminal',
        codename: 'Operation: Interface',
        description: 'This very website — a hacker-themed interactive portfolio built with React and Framer Motion, featuring matrix rain, terminal boot sequences, and glassmorphism effects.',
        tech: ['React', 'Vite', 'Framer Motion', 'CSS3', 'Canvas API'],
        category: 'web',
        status: 'LIVE',
        link: '#',
        github: 'https://github.com/HKrish29',
        features: [
            'Matrix rain canvas animation',
            'Terminal boot sequence on load',
            'Animated skill visualizations',
        ],
    },
    {
        id: 4,
        title: 'Coming Soon — Cyber Tools',
        codename: 'Operation: RedShield',
        description: 'Currently developing cybersecurity utilities — network scanners, vulnerability checkers, and red-team tools to sharpen offensive and defensive skills.',
        tech: ['Python', 'Linux', 'Networking', 'Bash'],
        category: 'cyber',
        status: 'IN_PROGRESS',
        link: '#',
        github: 'https://github.com/HKrish29',
        features: [
            'Port scanning & enumeration tools',
            'Automated vulnerability assessment',
            'Custom payload generators',
        ],
    },
];

const filters = [
    { key: 'all', label: 'All Systems' },
    { key: 'web', label: 'Web' },
    { key: 'app', label: 'Applications' },
    { key: 'ai', label: 'AI/ML' },
    { key: 'cyber', label: 'Cybersecurity' },
];

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filtered = activeFilter === 'all'
        ? projects
        : projects.filter((p) => p.category === activeFilter);

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                >
                    <div className="section-label">Projects</div>
                    <h2 className="section-title">
                        <span className="proj__comment">{'// '}</span>
                        Mission Operations
                    </h2>
                    <p className="section-subtitle">
                        Systems I've designed and built. Each project is an operation
                        with a clear objective and real-world application.
                    </p>
                    <div className="neon-divider" />
                </motion.div>

                {/* Filters */}
                <motion.div
                    className="proj__filters"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {filters.map((f) => (
                        <button
                            key={f.key}
                            className={`proj__filter-btn ${activeFilter === f.key ? 'proj__filter-btn--active' : ''}`}
                            onClick={() => setActiveFilter(f.key)}
                        >
                            {f.label}
                        </button>
                    ))}
                </motion.div>

                {/* Project Grid */}
                <div className="proj__grid">
                    <AnimatePresence mode="wait">
                        {filtered.map((project, i) => (
                            <motion.div
                                key={project.id}
                                className="proj__card glass-card"
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="proj__card-top">
                                    <div className="proj__card-meta">
                                        <span className={`proj__status proj__status--${project.status.toLowerCase().replace('_', '-')}`}>
                                            {project.status}
                                        </span>
                                        <span className="proj__codename">{project.codename}</span>
                                    </div>
                                    <div className="proj__card-links">
                                        <a href={project.github} target="_blank" rel="noreferrer" className="proj__link-icon" title="View Source">
                                            {'</>'}
                                        </a>
                                        <a href={project.link} className="proj__link-icon" title="Live Demo">
                                            ↗
                                        </a>
                                    </div>
                                </div>

                                <h3 className="proj__card-title">{project.title}</h3>
                                <p className="proj__card-desc">{project.description}</p>

                                <div className="proj__features">
                                    {project.features.map((f, j) => (
                                        <div key={j} className="proj__feature">
                                            <span className="proj__feature-arrow">▹</span>
                                            {f}
                                        </div>
                                    ))}
                                </div>

                                <div className="proj__card-tech">
                                    {project.tech.map((t, j) => (
                                        <span key={j} className="proj__tech-tag">{t}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Projects;
