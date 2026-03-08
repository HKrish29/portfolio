import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './AvailableBadge.css';

const AvailableBadge = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div
            className="available-badge"
            initial={{ y: -100, opacity: 0 }}
            animate={{ 
                y: isVisible ? 0 : -100, 
                opacity: isVisible ? 1 : 0 
            }}
            transition={{ delay: isVisible ? 3 : 0, duration: 0.5 }}
        >
            <span className="available-badge__dot"></span>
            <span className="available-badge__text">Available for Work</span>
        </motion.div>
    );
};

export default AvailableBadge;
