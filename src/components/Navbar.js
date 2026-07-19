import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaBars,
  FaTimes,
  FaDownload,
} from "react-icons/fa";

const navLinks = [
  "Home",
  "About",
  "Stack",
  "Portfolio",
  "Contact",
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5"
    >
      <motion.nav
        animate={{
          width: scrolled ? "92%" : "96%",
        }}
        transition={{
          duration: 0.35,
        }}
        className={`max-w-7xl rounded-full border transition-all duration-500 ${
          scrolled
            ? "border-white/15 bg-black/55 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,.35)]"
            : "border-white/10 bg-white/[0.03] backdrop-blur-xl"
        }`}
      >
        <div className="flex h-20 items-center justify-between px-8">

          {/* LOGO */}

          <motion.div
            whileHover={{
              scale: 1.04,
            }}
            className="cursor-pointer"
          >
            <Link
              to="home"
              smooth
              duration={600}
              offset={-70}
            >
              <h2 className="text-xl font-black tracking-[0.25em] text-white">

                ELSHEBBA

              </h2>

              <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-400">

                Software Engineer

              </p>
            </Link>
          </motion.div>

          {/* DESKTOP NAV */}

          <ul className="hidden items-center gap-10 lg:flex">

            {navLinks.map((item) => (

              <li key={item}>

                <Link
  to={item.toLowerCase()}
  smooth
  spy
  offset={-80}
  duration={600}
  activeClass="text-cyan-400"
  className="group relative cursor-pointer text-sm font-medium text-gray-300 transition-colors"
>
  {item}

  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full group-[.text-cyan-400]:w-full" />
</Link>

              </li>

            ))}

          </ul>

          {/* RIGHT SIDE */}

          <div className="flex items-center gap-4">

            <motion.a
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              href="/assets/Junior_software..pdf"
              download
              className="hidden items-center gap-3 rounded-full bg-cyan-500 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black lg:flex"
            >
              <FaDownload />

              Resume

            </motion.a>

            {/* MOBILE */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-white lg:hidden"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>

        </div>
                {/* ================= MOBILE MENU ================= */}

        <AnimatePresence>

          {menuOpen && (

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.25,
              }}
              className="border-t border-white/10 bg-black/80 backdrop-blur-2xl lg:hidden"
            >

              <div className="space-y-2 p-6">

                {navLinks.map((item) => (

                  <Link
                    key={item}
                    to={item.toLowerCase()}
                    smooth
                    spy
                    duration={600}
                    offset={-80}
                    onClick={closeMenu}
                    className="group flex cursor-pointer items-center justify-between rounded-2xl border border-transparent px-5 py-4 text-gray-300 transition-all duration-300 hover:border-cyan-500/20 hover:bg-cyan-500/10 hover:text-white"
                  >

                    <span className="font-medium">

                      {item}

                    </span>

                    <span className="text-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      →
                    </span>

                  </Link>

                ))}

                <motion.a
                  whileTap={{
                    scale: 0.97,
                  }}
                  href="/assets/Junior_software..pdf"
                  download
                  className="mt-6 flex items-center justify-center gap-3 rounded-2xl bg-cyan-500 px-6 py-4 font-bold uppercase tracking-[0.2em] text-black"
                >
                  <FaDownload />

                  Download Resume

                </motion.a>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </motion.nav>

    </motion.header>
  );
};

export default Navbar;