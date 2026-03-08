import { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);

        try {
            const response = await fetch('https://formspree.io/f/xyknyqvq', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSent(true);
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setSent(false), 5000);
            }
        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setSending(false);
        }
    };

    const socials = [
        { name: 'GitHub', url: 'https://github.com/HKrish29', icon: '⟐' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hitarth-nir92/', icon: '◈' },
    ];

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                >
                    <div className="section-label">Contact</div>
                    <h2 className="section-title">
                        <span className="contact__comment">{'// '}</span>
                        Establish Connection
                    </h2>
                    <p className="section-subtitle">
                        Have a project idea, opportunity, or just want to talk cybersecurity?
                        Send a transmission — I'll get back to you.
                    </p>
                    <div className="neon-divider" />
                </motion.div>

                <div className="contact__grid">
                    {/* Form */}
                    <motion.form
                        className="contact__form glass-card"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="contact__form-header">
                            <span className="contact__form-title">new_message.sh</span>
                            <span className="contact__form-status">
                                {sent ? '● SENT' : sending ? '◌ SENDING...' : '○ DRAFT'}
                            </span>
                        </div>

                        <div className="contact__field">
                            <label className="contact__label">
                                <span className="contact__label-prefix">$</span> name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="contact__input"
                                placeholder="Enter your name..."
                                required
                            />
                        </div>

                        <div className="contact__field">
                            <label className="contact__label">
                                <span className="contact__label-prefix">$</span> email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="contact__input"
                                placeholder="your@email.com"
                                required
                            />
                        </div>

                        <div className="contact__field">
                            <label className="contact__label">
                                <span className="contact__label-prefix">$</span> message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="contact__input contact__textarea"
                                placeholder="Type your message..."
                                rows={5}
                                required
                            />
                        </div>

                        <motion.button
                            type="submit"
                            className="contact__submit"
                            disabled={sending}
                            whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(0,255,136,0.3)' }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {sent ? '✓ Transmission Sent' : sending ? '◌ Sending...' : '> Send Transmission'}
                        </motion.button>
                    </motion.form>

                    {/* Info Panel */}
                    <motion.div
                        className="contact__info"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="contact__terminal glass-card">
                            <div className="contact__terminal-header">
                                <span>connection_info.log</span>
                            </div>
                            <div className="contact__terminal-body">
                                <p className="contact__terminal-line">
                                    <span className="contact__terminal-key">STATUS</span>: <span className="contact__terminal-val--green">ONLINE</span>
                                </p>
                                <p className="contact__terminal-line">
                                    <span className="contact__terminal-key">RESPONSE_TIME</span>: <span className="contact__terminal-val">{'< 24 hours'}</span>
                                </p>
                                <p className="contact__terminal-line">
                                    <span className="contact__terminal-key">PREFERRED</span>: <span className="contact__terminal-val">LinkedIn, GitHub</span>
                                </p>
                                <p className="contact__terminal-line">
                                    <span className="contact__terminal-key">TIMEZONE</span>: <span className="contact__terminal-val">IST (UTC+5:30)</span>
                                </p>
                                <p className="contact__terminal-line">
                                    <span className="contact__terminal-key">AVAILABILITY</span>: <span className="contact__terminal-val--green">Open to opportunities</span>
                                </p>
                            </div>
                        </div>

                        <div className="contact__socials">
                            <h4 className="contact__socials-title">Connect via:</h4>
                            <div className="contact__socials-grid">
                                {socials.map((s, i) => (
                                    <motion.a
                                        key={i}
                                        href={s.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="contact__social-link glass-card"
                                        whileHover={{ scale: 1.05, borderColor: 'rgba(0,255,136,0.4)' }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="contact__social-icon">{s.icon}</span>
                                        <span className="contact__social-name">{s.name}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
