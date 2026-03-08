import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__top">
                        <motion.div
                            className="footer__brand"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <span className="footer__logo">
                                <img src="/logo.jpeg" alt="HM Logo" className="footer__logo-img" />
                                <span className="footer__bracket">{`{`}</span>
                                <span className="footer__logo-text">HM</span>
                                <span className="footer__bracket">{`}`}</span>
                            </span>
                            <span className="footer__tagline">Cybersecurity Enthusiast | Ethical Hacker</span>
                        </motion.div>

                        <div className="footer__links">
                            <div className="footer__link-group">
                                <h4>Navigation</h4>
                                <Link to="/">Home</Link>
                                <Link to="/about">About</Link>
                                <Link to="/skills">Skills</Link>
                                <Link to="/projects">Projects</Link>
                            </div>
                            <div className="footer__link-group">
                                <h4>Connect</h4>
                                <a href="https://www.linkedin.com/in/hitarth-nir92/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                <a href="https://github.com/HKrish29" target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href="https://www.instagram.com/hitarth_hrc29/" target="_blank" rel="noopener noreferrer">Instagram</a>
                                <Link to="/contact">Contact</Link>
                                <Link to="/certificates">Certificates</Link>
                            </div>
                            <div className="footer__link-group">
                                <h4>Education</h4>
                                <p>LJ Polytechnic</p>
                                <p>Diploma in Computer Engineering</p>
                                <p>6th Semester (Final Year)</p>
                            </div>
                        </div>
                    </div>

                    <div className="footer__divider" />

                    <div className="footer__bottom">
                        <div className="footer__meta">
                            <span className="footer__copyright">
                                <span className="footer__copyright-symbol">©</span> {year} Hitarth Mankodia. All rights reserved.
                            </span>
                            <span className="footer__tech">
                                Built with <span className="footer__heart">♥</span> using React + Framer Motion
                            </span>
                        </div>

                        <div className="footer__status">
                            <span className="footer__status-dot"></span>
                            <span>System Operational</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
