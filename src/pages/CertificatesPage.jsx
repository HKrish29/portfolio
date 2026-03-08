import { motion } from 'framer-motion';
import Certificates from '../components/Certificates';

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
};
const pageTransition = { duration: 0.35, ease: 'easeInOut' };

const CertificatesPage = () => (
    <motion.div
        className="page-wrapper"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
    >
        <Certificates />
    </motion.div>
);

export default CertificatesPage;
