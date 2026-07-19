import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaCode,
} from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/delacer",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/elshebba-ruzvidzo-b83931244/",
  },
  {
    name: "Email",
    icon: <FaEnvelope />,
    link: "mailto:delacer351@gmail.com",
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#050505] pt-28">

      {/* GRID */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* CYAN GLOW */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[170px]"
      />

      {/* BLUE GLOW */}

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
        }}
        className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[180px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Glass Card */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
        >

          <div className="grid gap-12 p-10 md:p-16 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-cyan-400">

                Thank You

              </span>

              <h2 className="mt-8 text-5xl font-black leading-tight">

                Let's build

                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

                  something exceptional.

                </span>

              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">

                I enjoy creating secure, scalable, and thoughtfully designed
                digital experiences that solve real-world problems.
                Whether it's a business website or a full-stack platform,
                I'm always excited to build something meaningful.

              </p>
                            {/* SOCIAL LINKS */}

              <div className="mt-12 flex flex-wrap gap-4">

                {socials.map((social) => (

                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -6,
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-gray-300 transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-300"
                  >

                    <span className="text-lg">

                      {social.icon}

                    </span>

                    <span className="text-sm font-semibold tracking-wide">

                      {social.name}

                    </span>

                  </motion.a>

                ))}

              </div>

            </div>

            {/* RIGHT */}

            <div className="flex flex-col justify-between">

              <div className="rounded-3xl border border-white/10 bg-black/20 p-8">

                <div className="mb-6 flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl text-cyan-400">

                    <FaCode />

                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">

                      Personal Philosophy

                    </p>

                    <h3 className="mt-2 text-2xl font-bold">

                      Build with Purpose

                    </h3>

                  </div>

                </div>

                <blockquote className="border-l-2 border-cyan-500 pl-6 text-lg italic leading-8 text-gray-300">

                  “Every line of code is an opportunity to create
                  something meaningful, reliable, and impactful.”

                </blockquote>

              </div>

              {/* BACK TO TOP */}

              <div className="mt-10 flex justify-start lg:justify-end">

                <motion.a
                  href="#home"
                  whileHover={{
                    y: -5,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-300 transition-all duration-300 hover:border-cyan-500/40 hover:text-cyan-300"
                >

                  Back to Top

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

                </motion.a>

              </div>

            </div>

          </div>

        </motion.div>
                {/* ================= BOTTOM BAR ================= */}

        <div className="mt-10 border-t border-white/10">

          <div className="flex flex-col items-center justify-between gap-6 py-8 text-center md:flex-row">

            {/* LEFT */}

            <div>

              <h4 className="text-lg font-bold text-white">
                Elshebba H. Ruzvidzo
              </h4>

              <p className="mt-2 text-sm text-gray-400">
                Software Engineer • Full-Stack Developer
              </p>

            </div>

            {/* CENTER */}

            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500">

              <span>Built with</span>

              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-cyan-400">
                React
              </span>

              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-cyan-400">
                Framer Motion
              </span>

              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-cyan-400">
                Tailwind CSS
              </span>

            </div>

            {/* RIGHT */}

            <div className="text-sm text-gray-500">

              © {new Date().getFullYear()} Elshebba H. Ruzvidzo

            </div>

          </div>

        </div>

      </div>

      {/* ================= BOTTOM FADE ================= */}

      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-b from-transparent to-black" />

    </footer>
  );
};

export default Footer;