import { motion } from 'framer-motion';
import './Skills.css';

const skillGroups = [
    {
        title: 'Operating Systems',
        icon: '🖥️',
        color: '#00ff88',
        colorDim: 'rgba(0,255,136,0.15)',
        skills: [
            { name: 'Linux', sub: 'Kali / Ubuntu', level: 90 },
            { name: 'Windows', sub: 'Admin & Hardening', level: 85 },
            { name: 'Bash', sub: 'Shell Scripting', level: 80 },
            { name: 'CLI', sub: 'Command Line', level: 88 },
        ],
    },
    {
        title: 'Programming & Web',
        icon: '💻',
        color: '#00d4ff',
        colorDim: 'rgba(0,212,255,0.15)',
        skills: [
            { name: 'Python', sub: 'Scripting & Automation', level: 85 },
            { name: 'HTML5', sub: 'Markup & Structure', level: 90 },
            { name: 'CSS3', sub: 'Styling & Animations', level: 85 },
            { name: 'Automation', sub: 'Python Scripts', level: 75 },
        ],
    },
    {
        title: 'Cybersecurity',
        icon: '🛡️',
        color: '#a855f7',
        colorDim: 'rgba(168,85,247,0.15)',
        skills: [
            { name: 'Network', sub: 'Security & Protocols', level: 75 },
            { name: 'Ethical Hacking', sub: 'Basics & CTF', level: 70 },
            { name: 'Threat Analysis', sub: 'Assessment', level: 65 },
            { name: 'Hardening', sub: 'System Security', level: 70 },
        ],
    },
    {
        title: 'IoT & Hardware',
        icon: '📡',
        color: '#ff3366',
        colorDim: 'rgba(255,51,102,0.15)',
        skills: [
            { name: 'IoT Devices', sub: 'Protocols & Networks', level: 75 },
            { name: 'Embedded', sub: 'Systems & MCU', level: 65 },
            { name: 'Sensors', sub: 'Data & Integration', level: 70 },
            { name: 'IoT Security', sub: 'Vulnerabilities', level: 60 },
        ],
    },
];

// Tool badges (flat icon-style tags)
const tools = [
    { name: 'Kali Linux', icon: '🐉' },
    { name: 'Wireshark', icon: '🔍' },
    { name: 'Nmap', icon: '📡' },
    { name: 'Burp Suite', icon: '🕷️' },
    { name: 'Python', icon: '🐍' },
    { name: 'Git', icon: '🌿' },
    { name: 'VS Code', icon: '💙' },
    { name: 'VirtualBox', icon: '📦' },
    { name: 'Bash', icon: '⚡' },
    { name: 'Windows Server', icon: '🪟' },
    { name: 'Arduino', icon: '🔌' },
    { name: 'Metasploit', icon: '💻' },
];

const Skills = () => {
    return (
        <section id="skills" className="section skills">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                >
                    <div className="section-label">Skills</div>
                    <h2 className="section-title">
                        <span className="skills__comment">{'// '}</span>
                        Cyber Arsenal
                    </h2>
                    <p className="section-subtitle">
                        Tools, technologies, and disciplines in my cybersecurity toolkit.
                    </p>
                    <div className="neon-divider" />
                </motion.div>

                {/* Category Cards with Radial Skill Indicators */}
                <div className="skills__grid">
                    {skillGroups.map((group, gi) => (
                        <motion.div
                            key={gi}
                            className="skills__group glass-card"
                            style={{ '--group-color': group.color, '--group-dim': group.colorDim }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: gi * 0.1 }}
                            viewport={{ once: true, margin: '-50px' }}
                            whileHover={{ y: -4 }}
                        >
                            {/* Accent glow top border */}
                            <div className="skills__group-accent" style={{ background: `linear-gradient(90deg, ${group.color}, transparent)` }} />

                            <div className="skills__group-header">
                                <span className="skills__group-icon">{group.icon}</span>
                                <h3 className="skills__group-title" style={{ color: group.color }}>{group.title}</h3>
                            </div>

                            {/* Skill Items — Horizontal Badge Style with Level Dot */}
                            <div className="skills__items">
                                {group.skills.map((skill, si) => (
                                    <motion.div
                                        key={si}
                                        className="skills__item"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: gi * 0.1 + si * 0.07 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="skills__item-info">
                                            <span className="skills__item-name">{skill.name}</span>
                                            <span className="skills__item-sub">{skill.sub}</span>
                                        </div>
                                        <div className="skills__item-meter">
                                            <div className="skills__dots">
                                                {[...Array(10)].map((_, di) => (
                                                    <motion.div
                                                        key={di}
                                                        className={`skills__dot ${di < Math.round(skill.level / 10) ? 'skills__dot--filled' : ''}`}
                                                        style={di < Math.round(skill.level / 10) ? { background: group.color, boxShadow: `0 0 6px ${group.color}` } : {}}
                                                        initial={{ scale: 0 }}
                                                        whileInView={{ scale: 1 }}
                                                        transition={{ duration: 0.2, delay: gi * 0.1 + si * 0.07 + di * 0.03 }}
                                                        viewport={{ once: true }}
                                                    />
                                                ))}
                                            </div>
                                            <span className="skills__item-pct" style={{ color: group.color }}>{skill.level}%</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Tools Badge Cloud */}
                <motion.div
                    className="skills__tools-section"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <h3 className="skills__tools-title">
                        <span className="skills__comment">{'// '}</span> Tools I Use
                    </h3>
                    <div className="skills__tools-grid">
                        {tools.map((tool, i) => (
                            <motion.div
                                key={i}
                                className="skills__tool-badge glass-card"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.08, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="skills__tool-icon">{tool.icon}</span>
                                <span className="skills__tool-name">{tool.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
