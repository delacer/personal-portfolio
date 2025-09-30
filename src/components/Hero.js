import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import profileImg from '../assets/prof.jpg'

const Hero = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative hero-bg min-h-screen text-white flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-20 gap-10"
    >
      {/* Text Content */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-3xl md:text-4xl font-semibold">{getGreeting()}, I'm</h1>
        <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mt-2">
          Elshebba H. Ruzvidzo
        </h2>
        <h3 className="text-lg md:text-xl mt-4 font-medium text-gray-200">
          <Typewriter
            words={[
              'Visionary Full-Stack Developer',
              'Architect of Secure Systems',
              'Builder of Legacy-Driven Platforms',
              'UI/UX Strategist with Purpose',
            ]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h3>
        <p className="mt-6 text-gray-400 leading-relaxed">
          I build systems that encode dignity, trust, and legacy — platforms that empower users and endure with purpose.
        </p>

        <motion.a
          whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px #22d3ee' }}
          whileTap={{ scale: 0.95 }}
          href="/assets/elshebba-cv.pdf"
          download
          aria-label="Download Elshebba's CV"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded shadow transition duration-300"
        >
          <FaDownload />
          Download CV
        </motion.a>
      </div>

      {/* Avatar */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="flex-shrink-0"
      >
        <div className="hex-frame w-48 h-48 md:w-64 md:h-64 mx-auto">
          <img
            src={profileImg}
            alt="Elshebba H. Ruzvidzo – Full-Stack Developer"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </motion.div>

      {/* Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce text-cyan-400 text-sm text-center">
          ↓ Scroll to explore
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
