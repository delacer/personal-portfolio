import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaServer,
  FaShieldAlt,
  FaLaptopCode,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

import profileImg from "../assets/prof.jpg";

const stats = [
  {
    number: "10+",
    title: "Projects",
  },
  {
    number: "10+",
    title: "Technologies",
  },
  {
    number: "3",
    title: "Clients",
  },
  {
    number: "4+",
    title: "Years Learning",
  },
];

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "TypeScript",
  "React Native",
  "Tailwind CSS",
  "SASS",
  "Python",
  "Data Structures & Algorithms",
  "MySQL",
  "Flask",
  "Django",
  "Git",
  "REST APIs",
  "Java",
  "PHP",
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] py-28 text-white"
    >
      {/* Background Grid */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Cyan Orb */}

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute left-0 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]"
      />

      {/* Blue Orb */}

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
        }}
        className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[180px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mb-24"
        >

          <span className="mb-5 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-2 text-xs uppercase tracking-[0.3em] text-cyan-400">

            About Me

          </span>

          <h2 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">

            Building software that is
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              secure,
            </span>

            scalable,

            and designed for people.

          </h2>

          <p className="mt-10 max-w-3xl text-lg leading-8 text-gray-400">

            I'm <span className="font-semibold text-white">Elshebba H. Ruzvidzo</span>,
            a Full Stack Developer passionate about creating modern web
            applications that combine clean engineering, intuitive user
            experiences, and scalable architecture. My goal is to build digital
            products that solve real-world problems while remaining reliable,
            maintainable, and secure.

          </p>

        </motion.div>

        {/* Picture + Stats */}

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity:0,x:-40 }}
            whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }}
            className="relative"
          >

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl">

              <img
                src={profileImg}
                alt="Elshebba"
                className="rounded-2xl grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
              />

            </div>

            {/* Floating Card */}

            <motion.div
              animate={{
                y:[0,-8,0]
              }}
              transition={{
                repeat:Infinity,
                duration:4
              }}
              className="absolute -bottom-8 -right-6 rounded-2xl border border-cyan-500/20 bg-white/5 p-5 backdrop-blur-xl"
            >

              <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">

                Available

              </p>

              <h3 className="mt-2 text-xl font-bold">

                Open to Opportunities

              </h3>

            </motion.div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity:0,x:40 }}
            whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }}
          >

            <h3 className="mb-12 text-3xl font-bold">

              Quick Snapshot

            </h3>

            <div className="grid grid-cols-2 gap-6">

              {stats.map((item)=>(
                <motion.div
                  whileHover={{
                    y:-8
                  }}
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
                >

                  <h4 className="text-5xl font-black text-cyan-400">

                    {item.number}

                  </h4>

                  <p className="mt-3 uppercase tracking-[0.25em] text-xs text-gray-400">

                    {item.title}

                  </p>

                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>
                {/* ================= WHO I AM ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 grid gap-20 lg:grid-cols-2"
        >
          {/* Left */}

          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-cyan-400">
              Who I Am
            </span>

            <h3 className="mt-4 text-4xl font-black">
              Turning ideas into modern digital products.
            </h3>

            <p className="mt-8 leading-8 text-gray-400">
              I enjoy solving complex problems through thoughtful software
              engineering. Whether I'm developing a responsive frontend,
              designing REST APIs, or building secure backend services, I focus
              on writing maintainable, scalable code that delivers real value.
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              My approach combines technical excellence with user-centered
              thinking. Every application I build is designed to be fast,
              accessible, secure, and easy to maintain.
            </p>

            <motion.a
              whileHover={{ x: 5 }}
              href="#portfolio"
              className="mt-10 inline-flex items-center gap-3 font-semibold text-cyan-400"
            >
              View My Projects

              <FaArrowRight />
            </motion.a>
          </div>

          {/* Right */}

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
            <pre className="overflow-x-auto text-sm leading-7 text-gray-300">
{`const developer = {

  name: "Elshebba Ruzvidzo",

  role: "Full Stack Developer",

  location: "South Africa",

  stack: [
    "React",
    "Vanilla CSS",
    "Python",
    "Flask"
  ],

  philosophy:
  "Build software that matters."

};`}
            </pre>
          </div>
        </motion.div>

        {/* ================= WHAT I DO ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="mb-14 flex items-center gap-6">
            <h3 className="text-xs uppercase tracking-[0.3em] text-cyan-400">
              What I Do
            </h3>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {/* Frontend */}

            <motion.div
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition"
            >
              <FaLaptopCode className="mb-8 text-4xl text-cyan-400" />

              <h4 className="mb-4 text-xl font-bold">
                Frontend Development
              </h4>

              <p className="leading-7 text-gray-400">
                Building responsive, accessible, and engaging user interfaces
                using React, Tailwind CSS, and Framer Motion.
              </p>
            </motion.div>

            {/* Backend */}

            <motion.div
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition"
            >
              <FaServer className="mb-8 text-4xl text-cyan-400" />

              <h4 className="mb-4 text-xl font-bold">
                Backend Engineering
              </h4>

              <p className="leading-7 text-gray-400">
                Designing scalable APIs, authentication systems, and business
                logic using Python, Flask, SQLite and REST.
              </p>
            </motion.div>

            {/* Database */}

            <motion.div
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition"
            >
              <FaDatabase className="mb-8 text-4xl text-cyan-400" />

              <h4 className="mb-4 text-xl font-bold">
                Database Design
              </h4>

              <p className="leading-7 text-gray-400">
                Creating efficient relational databases with PostgreSQL and SQL
                while ensuring reliability and performance.
              </p>
            </motion.div>

            {/* Security */}

            <motion.div
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition"
            >
              <FaShieldAlt className="mb-8 text-4xl text-cyan-400" />

              <h4 className="mb-4 text-xl font-bold">
                Secure Development
              </h4>

              <p className="leading-7 text-gray-400">
                Following secure coding practices, protecting sensitive data,
                and building applications that users can trust.
              </p>
            </motion.div>

          </div>
        </motion.div>

        {/* ================= TECH STACK ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="mb-12 flex items-center gap-6">
            <h3 className="text-xs uppercase tracking-[0.3em] text-cyan-400">
              Tech Stack
            </h3>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="flex flex-wrap gap-4">

            {skills.map((skill) => (
              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.05,
                }}
                key={skill}
                className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-6 py-3 text-sm font-medium text-cyan-300 backdrop-blur-md"
              >
                {skill}
              </motion.div>
            ))}

          </div>
        </motion.div>
                {/* ================= EXPERIENCE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <div className="mb-14 flex items-center gap-6">
            <h3 className="text-xs uppercase tracking-[0.3em] text-cyan-400">
              Experience
            </h3>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid gap-8 lg:grid-cols-3">

            {/* Card 1 */}

            <motion.div
              whileHover={{
                y: -8,
                borderColor: "rgba(6,182,212,.4)",
              }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-widest text-cyan-400">
                  Client Project
                </span>

                <FaRocket className="text-cyan-400" />
              </div>

              <h4 className="text-2xl font-bold">
                Ngcinga Zam Construction Company
              </h4>

              <p className="mt-5 leading-7 text-gray-400">
                Designed and developed a modern business website with a focus on
                responsive design, usability, and performance.
              </p>
            </motion.div>

            {/* Card 2 */}

            <motion.div
              whileHover={{
                y: -8,
                borderColor: "rgba(6,182,212,.4)",
              }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-widest text-cyan-400">
                  Client Project
                </span>

                <FaRocket className="text-cyan-400" />
              </div>

              <h4 className="text-2xl font-bold">
                Nashie Locksmiths
              </h4>

              <p className="mt-5 leading-7 text-gray-400">
                Developed a responsive business website that strengthened the
                company's online presence and improved customer engagement.
              </p>
            </motion.div>

            {/* Card 3 */}

            <motion.div
              whileHover={{
                y: -8,
                borderColor: "rgba(6,182,212,.4)",
              }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-widest text-cyan-400">
                  Personal Projects
                </span>

                <FaCode className="text-cyan-400" />
              </div>

              <h4 className="text-2xl font-bold">
                Portfolio & Web Apps
              </h4>

              <p className="mt-5 leading-7 text-gray-400">
                Built full-stack applications using React, Vanilla CSS, Python,
                SQLite, Flask, and modern frontend technologies.
              </p>
            </motion.div>

          </div>
        </motion.div>

        {/* ================= DEVELOPMENT PROCESS ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-36"
        >
          <div className="mb-14 flex items-center gap-6">
            <h3 className="text-xs uppercase tracking-[0.3em] text-cyan-400">
              Development Process
            </h3>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="relative">

            {/* Timeline Line */}

            <div className="absolute left-4 top-0 h-full w-[2px] bg-white/10 md:left-1/2 md:-translate-x-1/2" />

            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "Understanding business goals, user needs, and technical requirements before writing code.",
              },
              {
                number: "02",
                title: "Planning",
                description:
                  "Designing architecture, choosing technologies, and defining milestones.",
              },
              {
                number: "03",
                title: "Development",
                description:
                  "Building scalable frontend and backend systems with clean, maintainable code.",
              },
              {
                number: "04",
                title: "Testing & Deployment",
                description:
                  "Ensuring quality, performance, responsiveness, and reliable deployment.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative mb-16 flex ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                <div className="ml-12 max-w-md rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:ml-0">

                  <span className="text-5xl font-black text-cyan-500">
                    {step.number}
                  </span>

                  <h4 className="mt-4 text-2xl font-bold">
                    {step.title}
                  </h4>

                  <p className="mt-4 leading-7 text-gray-400">
                    {step.description}
                  </p>

                </div>

                {/* Timeline Dot */}

                <div className="absolute left-4 top-10 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,.5)] md:left-1/2 md:-translate-x-1/2" />

              </motion.div>
            ))}

          </div>
        </motion.div>
                {/* ================= CORE VALUES ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-36"
        >
          <div className="mb-14 flex items-center gap-6">
            <h3 className="text-xs uppercase tracking-[0.3em] text-cyan-400">
              Core Values
            </h3>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                title: "Security",
                text: "I build applications with secure authentication, protected APIs, and best coding practices from the start.",
                icon: <FaShieldAlt />,
              },
              {
                title: "Performance",
                text: "Fast loading experiences, efficient backend logic, and optimized user interfaces are always a priority.",
                icon: <FaRocket />,
              },
              {
                title: "Clean Code",
                text: "Readable, maintainable code makes projects easier to scale and collaborate on over time.",
                icon: <FaCode />,
              },
              {
                title: "Continuous Learning",
                text: "Technology evolves quickly, and I'm committed to improving my skills through constant learning.",
                icon: <FaLaptopCode />,
              },
            ].map((value) => (
              <motion.div
                key={value.title}
                whileHover={{
                  y: -10,
                  borderColor: "rgba(6,182,212,.4)",
                }}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl text-cyan-400 transition group-hover:bg-cyan-500 group-hover:text-black">
                  {value.icon}
                </div>

                <h4 className="text-2xl font-bold">
                  {value.title}
                </h4>

                <p className="mt-5 leading-7 text-gray-400">
                  {value.text}
                </p>
              </motion.div>
            ))}

          </div>
        </motion.div>

        {/* ================= CALL TO ACTION ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mt-40 overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-white/[0.03] to-blue-500/10 p-12 md:p-20 backdrop-blur-xl"
        >
          <div className="mx-auto max-w-4xl text-center">

            <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-cyan-400">

              Let's Build Together

            </span>

            <h2 className="mt-8 text-4xl font-black leading-tight md:text-6xl">

              Ready to bring your next
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
                idea to life?
              </span>

            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">

              Whether you need a responsive website,
              a full-stack application,
              REST APIs,
              or a modern digital solution,
              I'd love to help turn your vision into reality.

            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-6">

              <motion.a
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    "0 0 40px rgba(6,182,212,.35)",
                }}
                whileTap={{ scale: .98 }}
                href="#contact"
                className="rounded-xl bg-cyan-500 px-10 py-5 font-bold uppercase tracking-[0.2em] text-black"
              >
                Start a Project
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: .98 }}
                href="#portfolio"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-10 py-5 font-bold uppercase tracking-[0.2em]"
              >
                View Portfolio
              </motion.a>

            </div>

          </div>
        </motion.div>

      </div>

      {/* Bottom Fade */}

      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-b from-transparent to-[#050505]" />

    </section>
  );
};

export default About;