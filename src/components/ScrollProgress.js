import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
 import confetti from 'canvas-confetti';

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [milestonesTriggered, setMilestonesTriggered] = useState([]);

  useEffect(() => {
    const updateScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? (scrolled / height) * 100 : 0;
      setScroll(progress);

      // Section syncing
      const sections = ['home', 'about', 'skills', 'portfolio', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }

      // Milestone triggers
      const milestones = [25, 50, 75];
      milestones.forEach((m) => {
        if (progress > m && !milestonesTriggered.includes(m)) {
          setMilestonesTriggered((prev) => [...prev, m]);

          // Trigger toast or confetti here
         toast.success(`🎉 Milestone reached: ${m}%`);
         confetti({ particleCount: 100, spread: 70 });

          console.log(`🎯 Milestone reached: ${m}%`);
        }
      });
    };

    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, [milestonesTriggered]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const barColor =
    scroll > 80
      ? 'bg-gradient-to-r from-green-400 via-lime-400 to-green-500'
      : 'bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500';

  return (
    <>
      {/* Scroll Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <motion.div
          className={`h-full ${barColor} animate-pulse`}
          initial={{ width: 0 }}
          animate={{ width: `${scroll}%` }}
          transition={{ ease: 'easeOut', duration: 0.2 }}
        />
      </div>

      {/* Floating Label */}
      <AnimatePresence>
        {scroll > 5 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-2 right-4 text-xs bg-gray-900 text-white px-2 py-1 rounded shadow z-50"
          >
            {Math.round(scroll)}% — {activeSection.toUpperCase()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll-to-Top Button */}
      <AnimatePresence>
        {scroll > 95 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition z-50"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollProgress;
