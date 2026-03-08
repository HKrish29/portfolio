import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                >
                    <div className="section-label">About Me</div>
                    <h2 className="section-title">
                        <span className="about__code-comment">{'// '}</span>
                        Who Am I?
                    </h2>
                    <div className="neon-divider" />
                </motion.div>

                <div className="about__grid">
                    <motion.div
                        className="about__text"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, margin: '-100px' }}
                    >
                        <p>
                            I'm <span className="about__highlight">Hitarth Mankodia</span>, a final-year
                            Diploma student in <span className="about__highlight">Computer Engineering</span> (6th Semester),
                            deeply passionate about <span className="about__highlight">cybersecurity</span> and everything
                            that makes digital systems tick — and break.
                        </p>
                        <p>
                            My journey started with curiosity — wondering how systems get compromised and
                            how to defend against threats. That curiosity led me into the world of{' '}
                            <span className="about__highlight">Linux, Python scripting, IoT security</span>, and{' '}
                            <span className="about__highlight">network defense</span>. I believe in learning by doing,
                            building tools, and breaking things to understand them better.
                        </p>
                        <p>
                            My motto? <span className="about__highlight">"Hack to learn, don't learn to hack."</span>{' '}
                            I'm working towards becoming a cybersecurity expert — protecting the digital
                            world one vulnerability at a time.
                        </p>

                        <div className="about__info-grid">
                            <div className="about__info-item">
                                <span className="about__info-key">name</span>
                                <span className="about__info-sep">:</span>
                                <span className="about__info-value">"Hitarth Mankodia"</span>
                            </div>
                            <div className="about__info-item">
                                <span className="about__info-key">title</span>
                                <span className="about__info-sep">:</span>
                                <span className="about__info-value">"Cybersecurity Enthusiast"</span>
                            </div>
                            <div className="about__info-item">
                                <span className="about__info-key">education</span>
                                <span className="about__info-sep">:</span>
                                <span className="about__info-value">"LJ Polytechnic | Dip. CE"</span>
                            </div>
                            <div className="about__info-item">
                                <span className="about__info-key">status</span>
                                <span className="about__info-sep">:</span>
                                <span className="about__info-value about__info-value--active">
                                    "Open to Opportunities"
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about__visual"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true, margin: '-100px' }}
                    >
                        <div className="about__code-block glass-card">
                            <div className="about__code-header">
                                <span className="about__code-file">profile.json</span>
                                <span className="about__code-lang">JSON</span>
                            </div>
                            <pre className="about__code-content">
                                {`{
  "hacker": {
    "name": "Hitarth Mankodia",
    "alias": "CyberHitarth",
    "skills": ["Linux", "Python",
               "HTML/CSS", "IoT",
               "Windows"],
    "passion": "Breaking & defending
      digital systems",
    "education": "Diploma in CE",
    "semester": "6th (Final Year)",
    "interests": [
      "Cybersecurity",
      "Ethical Hacking",
      "Network Defense"
    ],
    "motto": "Hack to learn."
  }
}`}
                            </pre>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
