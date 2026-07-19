import { motion } from "framer-motion";

import {
  FaDatabase,
  FaTools,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

const stack = [
  {
    title: "Frontend Engineering",
    icon: <FaReact />,
    color: "text-cyan-400",
    technologies: [
      "React",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "TailwindCSS",
      "SASS",
      "React Native",
      "Framer Motion",
      "Responsive Design",
    ],
  },

  {
    title: "Backend Development",
    icon: <FaNodeJs />,
    color: "text-green-400",
    technologies: [
      "Node.js",
      "Express",
      "Python",
      "Flask",
      "PHP",
      "REST APIs",
      "Authentication",
      "API Integration",
    ],
  },

  {
    title: "Database & Infrastructure",
    icon: <FaDatabase />,
    color: "text-blue-400",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Drizzle ORM",
      "Cloudinary",
      "Netlify",
      "Git",
    ],
  },

  {
    title: "Engineering Practices",
    icon: <FaTools />,
    color: "text-orange-400",
    technologies: [
      "Performance",
      "Security",
      "Accessibility",
      "UI / UX",
      "Git Flow",
      "Problem Solving",
    ],
  },
];

const stats = [
  {
    value: "10+",
    label: "Technologies",
  },
  {
    value: "5+",
    label: "Projects",
  },
  {
    value: "100%",
    label: "Responsive",
  },
  {
    value: "∞",
    label: "Learning",
  },
];

const Skills = () => {
  return (
    <section
      id="stack"
      className="relative overflow-hidden bg-[#050505] py-28 text-white"
    >
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
          x: [0, 100, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
        }}
        className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[170px]"
      />

      {/* BLUE GLOW */}

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 70, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
        }}
        className="absolute right-0 bottom-0 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[180px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

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
          className="text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-cyan-400">

            Engineering Stack

          </span>

          <h2 className="mt-8 text-5xl font-black md:text-7xl">

            Building reliable software

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

              {" "}with modern technologies.

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

            Every technology in my toolkit is selected with purpose—to build
            secure, scalable, maintainable, and user-focused digital
            experiences that solve real business problems.

          </p>

        </motion.div>

        {/* Stats */}

        <div className="mt-20 grid gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl"
            >
              <h3 className="text-5xl font-black text-cyan-400">

                {stat.value}

              </h3>

              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-gray-400">

                {stat.label}

              </p>

            </motion.div>
          ))}
        </div>
                {/* ================= ENGINEERING STACK ================= */}

        <div className="mt-28 grid gap-8 lg:grid-cols-2">

          {stack.map((category, index) => (

            <motion.div
              key={category.title}
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
                duration: 0.5,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -10,
              }}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_25px_60px_rgba(6,182,212,.12)]"
            >

              {/* Card Header */}

              <div className="border-b border-white/10 p-8">

                <div className="flex items-center gap-5">

                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-3xl ${category.color}`}
                  >
                    {category.icon}
                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">

                      Expertise

                    </p>

                    <h3 className="mt-2 text-3xl font-black">

                      {category.title}

                    </h3>

                  </div>

                </div>

              </div>

              {/* Technologies */}

              <div className="p-8">

                <div className="grid grid-cols-2 gap-4">

                  {category.technologies.map((tech) => (

                    <motion.div
                      key={tech}
                      whileHover={{
                        x: 6,
                      }}
                      className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-4 transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/5"
                    >

                      <div className="h-2 w-2 rounded-full bg-cyan-400" />

                      <span className="text-sm text-gray-300">

                        {tech}

                      </span>

                    </motion.div>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>
                {/* ================= ENGINEERING PHILOSOPHY ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-white/[0.03] to-blue-500/10 backdrop-blur-xl">

            <div className="grid lg:grid-cols-2">

              {/* Left */}

              <div className="border-b border-white/10 p-10 lg:border-b-0 lg:border-r md:p-14">

                <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-400">

                  Philosophy

                </span>

                <h3 className="mt-8 text-4xl font-black leading-tight">

                  Technology should solve
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {" "}real business problems.
                  </span>

                </h3>

                <p className="mt-8 leading-8 text-gray-400">

                  I don't choose technologies because they're popular.
                  Every framework, library, and architecture decision is made
                  with performance, maintainability, security, accessibility,
                  and long-term value in mind.

                </p>

                <p className="mt-6 leading-8 text-gray-400">

                  My goal is to build software that is not only visually
                  engaging, but also reliable, scalable, and enjoyable to use
                  for both users and future developers.

                </p>

              </div>

              {/* Right */}

              <div className="p-10 md:p-14">

                <div className="space-y-8">

                  {[
                    {
                      title: "Performance First",
                      description:
                        "Fast loading interfaces and efficient rendering for a better user experience.",
                    },
                    {
                      title: "Security Focused",
                      description:
                        "Authentication, data protection, and secure coding practices built into every project.",
                    },
                    {
                      title: "Scalable Architecture",
                      description:
                        "Applications designed to grow alongside business requirements.",
                    },
                    {
                      title: "Clean Maintainable Code",
                      description:
                        "Readable, reusable code that supports long-term collaboration.",
                    },
                  ].map((item, index) => (

                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1,
                      }}
                      className="flex gap-5"
                    >

                      <div className="mt-2 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,.6)]" />

                      <div>

                        <h4 className="text-xl font-bold">

                          {item.title}

                        </h4>

                        <p className="mt-2 leading-7 text-gray-400">

                          {item.description}

                        </p>

                      </div>

                    </motion.div>

                  ))}

                </div>

              </div>

            </div>

          </div>
        </motion.div>

        {/* ================= CORE PRINCIPLES ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-28 grid gap-6 md:grid-cols-4"
        >

          {[
            {
              number: "01",
              title: "Think",
              text: "Understand the business problem before writing code.",
            },
            {
              number: "02",
              title: "Design",
              text: "Create intuitive, accessible, and maintainable solutions.",
            },
            {
              number: "03",
              title: "Build",
              text: "Develop scalable software using modern best practices.",
            },
            {
              number: "04",
              title: "Improve",
              text: "Continuously refine performance, security, and usability.",
            },
          ].map((step) => (

            <motion.div
              key={step.number}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all hover:border-cyan-500/30"
            >

              <div className="text-5xl font-black text-cyan-500/20">

                {step.number}

              </div>

              <h3 className="mt-6 text-2xl font-bold">

                {step.title}

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                {step.text}

              </p>

            </motion.div>

          ))}

        </motion.div>
                {/* ================= CLOSING CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-36"
        >
          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-white/[0.03] to-blue-500/10 backdrop-blur-xl">

            <div className="mx-auto max-w-5xl px-10 py-16 text-center md:px-20">

              <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-cyan-400">
                Beyond the Stack
              </span>

              <h2 className="mt-8 text-4xl font-black leading-tight md:text-6xl">
                Technology is only valuable
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  when it creates real impact.
                </span>
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
                My focus isn't simply learning frameworks—it's using the right
                technologies to solve meaningful problems, improve user
                experiences, and help businesses grow with secure, scalable,
                and maintainable software.
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-5">

                <motion.a
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 35px rgba(6,182,212,.35)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  href="#portfolio"
                  className="rounded-2xl bg-cyan-500 px-10 py-5 font-bold uppercase tracking-[0.2em] text-black"
                >
                  View My Projects
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-10 py-5 font-bold uppercase tracking-[0.2em] transition hover:border-cyan-500/40"
                >
                  Let's Work Together
                </motion.a>

              </div>

            </div>

          </div>
        </motion.div>

      </div>

      {/* ================= BOTTOM FADE ================= */}

      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-b from-transparent to-[#050505]" />

    </section>
  );
};

export default Skills;