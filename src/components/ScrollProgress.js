import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percentage =
        height > 0 ? (scrollTop / height) * 100 : 0;

      setProgress(percentage);
    };

    window.addEventListener("scroll", updateProgress);

    updateProgress();

    return () =>
      window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <>
      {/* Progress Bar */}

      <div className="fixed left-0 top-0 z-[70] h-[2px] w-full bg-transparent">

        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400"
          animate={{
            width: `${progress}%`,
          }}
          transition={{
            duration: 0.15,
          }}
        />

      </div>

      {/* Scroll To Top */}

      <AnimatePresence>

        {progress > 20 && (

          <motion.button
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.8,
            }}
            whileHover={{
              scale: 1.08,
              y: -4,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
                        className="
              fixed
              bottom-8
              right-8
              z-[70]
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              text-white
              backdrop-blur-xl
              shadow-[0_10px_40px_rgba(0,0,0,.35)]
              transition-all
              duration-300
              hover:border-cyan-400/40
              hover:bg-cyan-500/10
              hover:text-cyan-400
            "
            aria-label="Scroll to top"
          >
            <motion.div
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
              }}
            >
              <FaArrowUp />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollProgress;