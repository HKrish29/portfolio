import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = () => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setLoading(false), 500);
                    return 100;
                }
                return prev + 10;
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="loading-screen"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="loading-content">
                        <div className="loading-logo">
                            <img src="/logo.jpeg" alt="HM Logo" className="loading-logo-img" />
                            <span className="loading-bracket">{'{'}</span>
                            <span className="loading-text">HM</span>
                            <span className="loading-bracket">{'}'}</span>
                        </div>
                        <div className="loading-bar-container">
                            <motion.div
                                className="loading-bar"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                        <p className="loading-percent">{progress}%</p>
                        <p className="loading-status">Initializing secure connection...</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
