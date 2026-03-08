import { motion } from 'framer-motion';
import Skills from '../components/Skills';

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
};
const pageTransition = { duration: 0.35, ease: 'easeInOut' };

const SkillsPage = () => (
    <motion.div
        className="page-wrapper"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
    >
        <Skills />
    </motion.div>
);

export default SkillsPage;
