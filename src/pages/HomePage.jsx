import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import './HomePage.css';

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
};

const pageTransition = { duration: 0.35, ease: 'easeInOut' };

const HomePage = () => (
    <motion.div
        className="page-wrapper"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
    >
        <Hero />
        
        {/* Academic Background Section */}
        <section className="home-academic section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="section-label">Education</div>
                    <h2 className="section-title">
                        <span style={{ color: 'var(--text-dim)' }}>{'// '}</span>
                        Academic Background
                    </h2>
                    <div className="neon-divider" />
                </motion.div>

                <motion.div
                    className="home-academic__card glass-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="home-academic__header">
                        <div>
                            <h3 className="home-academic__degree">Diploma in Computer Engineering</h3>
                            <p className="home-academic__institution">🎓 LJ Polytechnic</p>
                        </div>
                        <span className="home-academic__year">2023 - 2026</span>
                    </div>
                    <p className="home-academic__status">6th Semester — Final Year</p>
                    <div className="home-academic__highlights">
                        <span className="home-academic__tag">Computer Networks</span>
                        <span className="home-academic__tag">Operating Systems</span>
                        <span className="home-academic__tag">Cybersecurity</span>
                        <span className="home-academic__tag">IoT</span>
                        <span className="home-academic__tag">Web Technologies</span>
                    </div>
                    <Link to="/about" className="home-academic__link">
                        View Full Journey →
                    </Link>
                </motion.div>
            </div>
        </section>

        {/* Quick Links Section */}
        <section className="home-links section">
            <div className="container">
                <div className="home-links__grid">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Link to="/skills" className="home-link-card glass-card">
                            <div className="home-link-card__icon">⚡</div>
                            <h3>Technical Skills</h3>
                            <p>Linux, Python, IoT, Web Development</p>
                            <span className="home-link-card__arrow">→</span>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Link to="/projects" className="home-link-card glass-card">
                            <div className="home-link-card__icon">🚀</div>
                            <h3>Projects</h3>
                            <p>Bookstore System, AI Image Generator</p>
                            <span className="home-link-card__arrow">→</span>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Link to="/certificates" className="home-link-card glass-card">
                            <div className="home-link-card__icon">🏆</div>
                            <h3>Certificates</h3>
                            <p>Cybersecurity, Programming, Database</p>
                            <span className="home-link-card__arrow">→</span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    </motion.div>
);

export default HomePage;
