import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
    { path: '/', label: 'Home', cmd: './home' },
    { path: '/about', label: 'About', cmd: './about' },
    { path: '/skills', label: 'Skills', cmd: './arsenal' },
    { path: '/projects', label: 'Projects', cmd: './missions' },
    { path: '/certificates', label: 'Certificates', cmd: './certs' },
    { path: '/contact', label: 'Contact', cmd: './connect' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="navbar__inner">
                <motion.div
                    className="navbar__logo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/')}
                    style={{ cursor: 'pointer' }}
                >
                    <img src="/logo.jpeg" alt="HM Logo" className="navbar__logo-img" />
                    <span className="navbar__logo-bracket">{`{`}</span>
                    <span className="navbar__logo-text">HM</span>
                    <span className="navbar__logo-bracket">{`}`}</span>
                    <span className="navbar__logo-cursor">_</span>
                </motion.div>

                <div className="navbar__links">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            end={link.path === '/'}
                            className={({ isActive }) =>
                                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                            }
                        >
                            <motion.span
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            >
                                <span className="navbar__link-cmd">{link.cmd}</span>
                                <span className="navbar__link-label">{link.label}</span>
                            </motion.span>
                        </NavLink>
                    ))}
                </div>

                {/* To enable Resume PDF download, uncomment this and comment the LinkedIn link above */}
                {/* 
                <motion.a
                    href="/resume.pdf"
                    download
                    className="navbar__resume-btn"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,255,136,0.3)' }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="navbar__resume-icon">⬇</span> Resume
                </motion.a> 
                */}

                <motion.a
                    href="https://www.linkedin.com/in/hitarth-nir92/"
                    className="navbar__resume-btn"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,255,136,0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="navbar__resume-icon">◈</span> LinkedIn
                </motion.a>

                <button
                    className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="navbar__mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navLinks.map((link, i) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                end={link.path === '/'}
                                className={({ isActive }) =>
                                    `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
                                }
                            >
                                <motion.span
                                    initial={{ x: -30, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.08 }}
                                    style={{ display: 'flex', gap: '8px', alignItems: 'center' }}
                                >
                                    <span className="navbar__link-cmd">{link.cmd}</span>
                                    {link.label}
                                </motion.span>
                            </NavLink>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
