import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Certificates.css';

const certificates = [
    {
        id: 1,
        title: 'Foundation of Cybersecurity',
        issuer: 'Google / Coursera',
        date: '2024',
        category: 'cybersecurity',
        description: 'Comprehensive cybersecurity fundamentals covering security principles, threats, and best practices.',
        badge: '🛡️',
        color: '#00ff88',
        image: '/certificate/Foundation Of CyberSecurity.pdf',
    },
    {
        id: 2,
        title: 'Academic Marksheet',
        issuer: 'LJ Polytechnic',
        date: '2024-2026',
        category: 'education',
        description: 'Diploma in Computer Engineering semester marksheet and academic performance record.',
        badge: '🎓',
        color: '#00d4ff',
        image: '/certificate/MarkSheet.pdf',
    },
    {
        id: 3,
        title: 'Python Programming',
        issuer: 'Online Platform',
        date: '2024',
        category: 'programming',
        description: 'Python programming course covering fundamentals, data structures, and application development.',
        badge: '🐍',
        color: '#a855f7',
        image: '/certificate/Python.pdf',
    },
    {
        id: 4,
        title: 'Database Management Systems',
        issuer: 'Online Platform',
        date: '2024',
        category: 'programming',
        description: 'Database design, SQL queries, normalization, and database administration concepts.',
        badge: '🗄️',
        color: '#ff6b6b',
        image: '/certificate/DBMS.pdf',
    },
    {
        id: 5,
        title: 'JavaScript DOM Manipulation',
        issuer: 'Online Platform',
        date: '2024',
        category: 'programming',
        description: 'Advanced JavaScript DOM manipulation, event handling, and dynamic web page creation.',
        badge: '⚡',
        color: '#ffd93d',
        image: '/certificate/JavaScript Dom.pdf',
    },
    {
        id: 6,
        title: 'GitHub Fundamentals',
        issuer: 'GitHub / Online Platform',
        date: '2024',
        category: 'programming',
        description: 'Version control training covering Git commands, collaboration, and repository management.',
        badge: '🔧',
        color: '#6bcf7f',
        image: '/certificate/GitHub.pdf',
    },
    {
        id: 7,
        title: 'Artificial Intelligence',
        issuer: 'Online Platform',
        date: '2024',
        category: 'cybersecurity',
        description: 'AI fundamentals, machine learning concepts, and practical AI application development.',
        badge: '🤖',
        color: '#00d4ff',
        image: '/certificate/AI.pdf',
    },
    {
        id: 8,
        title: 'Scratch Programming',
        issuer: 'Online Platform',
        date: '2024',
        category: 'programming',
        description: 'Visual programming and computational thinking through Scratch block-based coding.',
        badge: '🎮',
        color: '#ff8c42',
        image: '/certificate/Scratch.pdf',
    },
];

const filters = [
    { key: 'all', label: 'All' },
    { key: 'cybersecurity', label: 'Cybersecurity' },
    { key: 'education', label: 'Education' },
    { key: 'programming', label: 'Programming' },
];

const Certificates = () => {
    const [filter, setFilter] = useState('all');
    const [selected, setSelected] = useState(null);

    const filtered = filter === 'all' ? certificates : certificates.filter(c => c.category === filter);

    return (
        <section id="certificates" className="section certificates">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                >
                    <div className="section-label">Achievements</div>
                    <h2 className="section-title">
                        <span className="certs__comment">{'// '}</span>
                        Certificates & Achievements
                    </h2>
                    <p className="section-subtitle">
                        Professional certifications and academic achievements.
                    </p>
                    <div className="neon-divider" />
                </motion.div>

                {/* Filters */}
                <motion.div
                    className="certs__filters"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    {filters.map(f => (
                        <button
                            key={f.key}
                            className={`certs__filter-btn ${filter === f.key ? 'certs__filter-btn--active' : ''}`}
                            onClick={() => setFilter(f.key)}
                        >
                            {f.label}
                        </button>
                    ))}
                </motion.div>

                {/* Certificate Cards */}
                <div className="certs__grid">
                    <AnimatePresence mode="wait">
                        {filtered.map((cert, i) => (
                            <motion.div
                                key={cert.id}
                                className="certs__card glass-card"
                                style={{ '--cert-color': cert.color }}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                whileHover={{ y: -6 }}
                                onClick={() => setSelected(cert)}
                            >
                                <div className="certs__card-accent" style={{ background: cert.color }} />

                                <div className="certs__card-image">
                                    <div className="certs__card-placeholder" style={{ '--cert-color': cert.color }}>
                                        <span className="certs__card-badge">{cert.badge}</span>
                                        <span className="certs__placeholder-text">CERTIFICATE</span>
                                    </div>
                                    <div className="certs__card-overlay">
                                        <span>📄 VIEW</span>
                                    </div>
                                </div>

                                <div className="certs__card-body">
                                    <span className="certs__card-category" style={{ color: cert.color }}>
                                        {cert.badge} {cert.category.toUpperCase()}
                                    </span>
                                    <h3 className="certs__card-title">{cert.title}</h3>
                                    <p className="certs__card-issuer">
                                        <span style={{ color: cert.color }}>@</span> {cert.issuer}
                                    </p>
                                    <p className="certs__card-desc">{cert.description}</p>
                                    <div className="certs__card-footer">
                                        <span className="certs__card-date">{cert.date}</span>
                                        <span className="certs__card-view" style={{ color: cert.color }}>View →</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Fullscreen PDF Viewer Modal */}
                <AnimatePresence>
                    {selected && (
                        <motion.div
                            className="certs__modal-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelected(null)}
                        >
                            <motion.div
                                className="certs__modal certs__modal--pdf glass-card"
                                style={{ '--cert-color': selected.color }}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                onClick={e => e.stopPropagation()}
                            >
                                <button className="certs__modal-close" onClick={() => setSelected(null)}>✕</button>
                                <div className="certs__modal-accent" style={{ background: selected.color }} />
                                
                                <div className="certs__modal-header">
                                    <div>
                                        <h2 style={{ color: selected.color }}>{selected.badge} {selected.title}</h2>
                                        <p className="certs__modal-issuer">@{selected.issuer} · {selected.date}</p>
                                    </div>
                                    <a 
                                        href={selected.image} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="certs__modal-download"
                                        onClick={e => e.stopPropagation()}
                                    >
                                        ⬇ Download
                                    </a>
                                </div>

                                <div className="certs__pdf-viewer">
                                    <iframe
                                        src={selected.image}
                                        title={selected.title}
                                        className="certs__pdf-iframe"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Certificates;
