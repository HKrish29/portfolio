import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

const titles = [
    'Cybersecurity Enthusiast',
    'Linux Power User',
    'Python Developer',
    'IoT Explorer',
    'Future Cyber Expert',
];

const greetings = [
    { text: 'Hello', lang: 'English' },
    { text: 'नमस्ते', lang: 'Hindi' },
    { text: 'こんにちは', lang: 'Japanese' },
    { text: '你好', lang: 'Chinese' },
    { text: 'Bonjour', lang: 'French' },
    { text: 'Hola', lang: 'Spanish' },
];

const Hero = () => {
    const [titleIndex, setTitleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [bootLines, setBootLines] = useState([]);
    const [greetingIndex, setGreetingIndex] = useState(0);
    const [showGreeting, setShowGreeting] = useState(true);

    const bootSequence = [
        '[SYSTEM] Initializing secure connection...',
        '[KERNEL] Loading modules: crypto.so, firewall.so, ids.so',
        '[NETWORK] Scanning ports... all filtered ✓',
        '[AUTH] Identity verified — Welcome, Hitarth.',
        '[FIREWALL] Defense perimeter active.',
        '[SYSTEM] Portfolio data stream engaged...',
    ];

    // Multi-language greeting animation
    useEffect(() => {
        if (greetingIndex < greetings.length) {
            const timer = setTimeout(() => {
                setGreetingIndex(prev => prev + 1);
            }, 600);
            return () => clearTimeout(timer);
        } else {
            const hideTimer = setTimeout(() => {
                setShowGreeting(false);
            }, 800);
            return () => clearTimeout(hideTimer);
        }
    }, [greetingIndex]);

    // Boot sequence animation
    useEffect(() => {
        if (!showGreeting) {
            let i = 0;
            const interval = setInterval(() => {
                if (i < bootSequence.length) {
                    setBootLines((prev) => [...prev, bootSequence[i]]);
                    i++;
                } else {
                    clearInterval(interval);
                }
            }, 400);
            return () => clearInterval(interval);
        }
    }, [showGreeting]);

    // Typing effect
    useEffect(() => {
        if (!showGreeting) {
            const currentTitle = titles[titleIndex];
            const speed = isDeleting ? 40 : 80;

            const timeout = setTimeout(() => {
                if (!isDeleting) {
                    setDisplayText(currentTitle.substring(0, displayText.length + 1));
                    if (displayText === currentTitle) {
                        setTimeout(() => setIsDeleting(true), 2000);
                    }
                } else {
                    setDisplayText(currentTitle.substring(0, displayText.length - 1));
                    if (displayText === '') {
                        setIsDeleting(false);
                        setTitleIndex((prev) => (prev + 1) % titles.length);
                    }
                }
            }, speed);

            return () => clearTimeout(timeout);
        }
    }, [displayText, isDeleting, titleIndex, showGreeting]);

    return (
        <section className="hero">
            <div className="hero__grid-overlay" />

            {/* Multi-language Greeting Overlay */}
            <AnimatePresence>
                {showGreeting && (
                    <motion.div
                        className="hero__greeting-overlay"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="hero__greeting-container">
                            <AnimatePresence mode="wait">
                                {greetingIndex < greetings.length && (
                                    <motion.div
                                        key={greetingIndex}
                                        className="hero__greeting-text"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <span className="hero__greeting-main">{greetings[greetingIndex].text}</span>
                                        <span className="hero__greeting-lang">{greetings[greetingIndex].lang}</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container hero__container">
                {/* Boot Terminal */}
                <motion.div
                    className="hero__terminal"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: showGreeting ? 0 : 1, scale: showGreeting ? 0.9 : 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="hero__terminal-header">
                        <div className="hero__terminal-dots">
                            <span className="hero__terminal-dot hero__terminal-dot--red" />
                            <span className="hero__terminal-dot hero__terminal-dot--yellow" />
                            <span className="hero__terminal-dot hero__terminal-dot--green" />
                        </div>
                        <span className="hero__terminal-title">root@hitarth ~ $</span>
                    </div>
                    <div className="hero__terminal-body">
                        {bootLines.map((line, i) => (
                            <motion.div
                                key={i}
                                className={`hero__terminal-line ${
                                    line && (line.includes('✓') || line.includes('OK') || line.includes('verified'))
                                        ? 'hero__terminal-line--success'
                                        : line && line.includes('engaged')
                                            ? 'hero__terminal-line--info'
                                            : ''
                                }`}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.4 + 0.3 }}
                            >
                                {line}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Main Content */}
                <motion.div
                    className="hero__content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: showGreeting ? 0 : 1, y: showGreeting ? 40 : 0 }}
                    transition={{ duration: 0.8, delay: 2.5 }}
                >
                    <div className="hero__greeting">
                        <span className="hero__greeting-prefix">const</span>{' '}
                        <span className="hero__greeting-var">identity</span>{' '}
                        <span className="hero__greeting-eq">=</span>{' '}
                        <span className="hero__greeting-string">"Hello, World! I'm"</span>
                    </div>

                    <h1 className="hero__name">
                        <span className="hero__name-first">Hitarth</span>{' '}
                        <span className="hero__name-last">Mankodia</span>
                    </h1>

                    <div className="hero__title-wrapper">
                        <span className="hero__title-prefix">{'> '}</span>
                        <span className="hero__title-text">{displayText}</span>
                        <span className="hero__cursor">|</span>
                    </div>

                    <p className="hero__description">
                        I explore, defend, and secure digital systems.
                        Final-year Diploma student in Computer Engineering,
                        passionate about making the cyber world safer.
                    </p>

                    <div className="hero__actions">
                        <motion.a
                            href="/projects"
                            className="hero__btn hero__btn--primary"
                            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0,255,136,0.4)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="hero__btn-icon">{'>'}</span>
                            View Projects
                        </motion.a>
                        <motion.a
                            href="/contact"
                            className="hero__btn hero__btn--secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="hero__btn-icon">@</span>
                            Get In Touch
                        </motion.a>
                    </div>

                    <div className="hero__stats">
                        <div className="hero__stat">
                            <span className="hero__stat-number">6th</span>
                            <span className="hero__stat-label">Semester</span>
                        </div>
                        <div className="hero__stat-divider" />
                        <div className="hero__stat">
                            <span className="hero__stat-number">6+</span>
                            <span className="hero__stat-label">Skills</span>
                        </div>
                        <div className="hero__stat-divider" />
                        <div className="hero__stat">
                            <span className="hero__stat-number">2+</span>
                            <span className="hero__stat-label">Projects</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
