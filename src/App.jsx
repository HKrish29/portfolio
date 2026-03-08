import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MatrixRain from './components/MatrixRain';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import SocialBar from './components/SocialBar';
import AvailableBadge from './components/AvailableBadge';
import ScrollProgress from './components/ScrollProgress';
import ParticleBackground from './components/ParticleBackground';
import LoadingScreen from './components/LoadingScreen';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import CertificatesPage from './pages/CertificatesPage';
import ContactPage from './pages/ContactPage';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LoadingScreen />
      <ScrollProgress />
      <ParticleBackground />
      <MatrixRain />
      <div className="scanline-overlay" />

      <Navbar />
      <SocialBar />
      <AvailableBadge />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <AnimatedRoutes />
      </main>

      <Footer />
      <ThemeToggle />
    </BrowserRouter>
  );
}

export default App;
