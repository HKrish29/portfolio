import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
    {
        year: '2024 - Present',
        role: 'Cybersecurity Self-Learner',
        company: 'Self-Directed',
        location: 'Remote',
        description: [
            'Studying ethical hacking, penetration testing, and network security concepts',
            'Practicing on CTF challenges and vulnerable lab environments',
            'Building Python-based security tools and automation scripts',
            'Learning about OWASP Top 10, vulnerability assessment, and threat modeling',
        ],
        tech: ['Linux', 'Python', 'Wireshark', 'Nmap', 'Burp Suite'],
        status: 'active',
    },
    {
        year: '2023 - 2024',
        role: 'IoT & Web Projects',
        company: 'College Projects',
        location: 'On-site',
        description: [
            'Built a full Bookstore Management System with database CRUD operations',
            'Developed an AI Image Generator integrating machine learning APIs',
            'Created IoT prototypes with sensor networks and embedded systems',
            'Designed responsive websites using HTML, CSS, and modern UI practices',
        ],
        tech: ['Python', 'HTML/CSS', 'IoT', 'Database', 'API'],
        status: 'completed',
    },
    {
        year: '2022 - 2023',
        role: 'Programming Foundations',
        company: 'Diploma Studies',
        location: 'On-site',
        description: [
            'Learned core programming with Python and scripting fundamentals',
            'Mastered Linux system administration and Bash shell scripting',
            'Explored Windows server environments and Active Directory basics',
            'Studied computer networking, OS internals, and data structures',
        ],
        tech: ['Python', 'Linux', 'Windows', 'Networking', 'Git'],
        status: 'completed',
    },
];

const education = [
    {
        year: '2023 - 2026',
        degree: 'Diploma in Computer Engineering',
        institution: 'LJ Polytechnic',
        gpa: '6th Semester — Final Year',
        highlights: ['Computer Networks', 'Operating Systems', 'Cybersecurity Basics', 'IoT', 'Web Technologies'],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="section experience">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                >
                    <div className="section-label">Journey</div>
                    <h2 className="section-title">
                        <span className="exp__code-comment">{'// '}</span>
                        Experience Timeline
                    </h2>
                    <p className="section-subtitle">
                        My cybersecurity journey — from foundations to future operations.
                    </p>
                    <div className="neon-divider" />
                </motion.div>

                {/* Timeline */}
                <div className="exp__timeline">
                    <div className="exp__timeline-line" />

                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            className="exp__card glass-card"
                            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            viewport={{ once: true, margin: '-50px' }}
                        >
                            <div className="exp__card-header">
                                <div className="exp__card-status">
                                    <span className={`exp__status-dot exp__status-dot--${exp.status}`} />
                                    <span className="exp__card-year">{exp.year}</span>
                                </div>
                                <span className="exp__card-location">{exp.location}</span>
                            </div>

                            <h3 className="exp__card-role">{exp.role}</h3>
                            <p className="exp__card-company">@{exp.company}</p>

                            <ul className="exp__card-list">
                                {exp.description.map((item, j) => (
                                    <li key={j}>
                                        <span className="exp__list-arrow">▹</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="exp__card-tech">
                                {exp.tech.map((t, j) => (
                                    <span key={j} className="exp__tech-tag">{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Education */}
                <motion.div
                    className="exp__education"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: '-50px' }}
                >
                    <div className="section-label" style={{ marginTop: 60 }}>Education</div>
                    <h2 className="section-title" style={{ fontSize: '1.8rem' }}>
                        <span className="exp__code-comment">{'// '}</span>
                        Academic Background
                    </h2>
                    <div className="neon-divider" />

                    {education.map((edu, i) => (
                        <div key={i} className="exp__edu-card glass-card" style={{ marginTop: 24 }}>
                            <div className="exp__card-header">
                                <span className="exp__card-year">{edu.year}</span>
                                <span className="exp__edu-gpa">{edu.gpa}</span>
                            </div>
                            <h3 className="exp__card-role">{edu.degree}</h3>
                            <p className="exp__card-company">@{edu.institution}</p>
                            <div className="exp__card-tech" style={{ marginTop: 16 }}>
                                {edu.highlights.map((h, j) => (
                                    <span key={j} className="exp__tech-tag">{h}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
