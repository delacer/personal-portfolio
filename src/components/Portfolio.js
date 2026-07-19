import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

const projects = [
  {
    title: "Ngcinga Zam",
    type: "Construction Company",
    description:
      "Modern business website featuring premium UI, responsive layouts, Cloudinary media management, and a professional digital presence.",
    tags: ["React", "Vanilla CSS", "Cloudinary", "UX Strategy"],
    image: "/assets/ngcingazam.png",
    live: "https://ngcingazam.co.za",
    repo: "https://github.com/delacer/ngcinga-zam",
    featured: true,
  },

  {
    title: "YourKeyProvider Locksmiths",
    type: "Security Platform",
    description:
      "Business website and service portal built for locksmith and security operations with scalable architecture.",
    tags: ["React", "Vanilla CSS", "Cloudinary"],
    image: "/assets/yourkeyprovider.png",
    live: "https://yourkeyprovider.netlify.app/",
    repo: "https://github.com/delacer/yourkeyprovider",
    featured: false,
  },

  {
    title: "Nashie Locksmiths",
    type: "Business Website",
    description:
      "Emergency locksmith website with responsive layouts, service forms, and optimized customer experience.",
    tags: ["React", "Vanilla CSS" , "Netlify"],
    image: "/assets/nashie-locksmiths.png",
    live: "https://nashie-locksmiths.netlify.app",
    repo: "https://github.com/delacer/nashie-locksmiths",
    featured: false,
  },

  {
  title: "Sensational Goodies",
  type: "Bakery & Events Company",
  description:
    "Professional business website designed for a bakery and events décor company, showcasing custom cakes, catering services, event decorations, and an elegant brand experience with a fully responsive interface.",
  tags: ["React", "Vanilla CSS", "UI/UE strategy"],
  image: "/assets/sensational-goodie.png",
  live: "https://sensationalgoodie.netlify.app",
  repo: "https://github.com/delacer/sensational-goodies", 
  featured: false,
},
{
    title: "YourKeyProvider Dashboard",
    type: "Admin Dashboard",
    description:
      "Management dashboard for handling customers, keys, services, and business operations.",
    tags: ["TypeScript", "TailwindCSS", "Supabase", "NextJS"],
    image: "/assets/yourkeyproviderdashboard.png",
    live: "https://yourkeyprovider-dashboard.vercel.app/",
    repo: "https://github.com/delacer/yourkeyprovider-dashboard",
    featured: false,
  },
];

const filters = [
  "All",
  "React",
  "TypeScript",
  "TailwindCSS",
];

const stats = [
  {
    number: "10+",
    label: "Projects",
  },
  {
    number: "3",
    label: "Clients",
  },
  {
    number: "10+",
    label: "Technologies",
  },
  {
    number: "100%",
    label: "Responsive",
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const featuredProject = projects.find((p) => p.featured);

  const filteredProjects =
    activeFilter === "All"
      ? projects.filter((p) => !p.featured)
      : projects.filter(
          (p) =>
            !p.featured &&
            p.tags.includes(activeFilter)
        );

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#050505] py-28 text-white"
    >
      {/* Background Grid */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Cyan Glow */}

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute -left-32 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]"
      />

      {/* Blue Glow */}

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
        }}
        className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[180px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity:0,y:40 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          className="text-center"
        >

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-cyan-400">

            Selected Work

          </span>

          <h2 className="mt-8 text-5xl font-black md:text-7xl">

            Projects that solve
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              real business problems
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

            A selection of professional websites,
            business platforms,
            dashboards,
            and full-stack applications built with
            performance,
            scalability,
            and user experience in mind.

          </p>

        </motion.div>

        {/* Statistics */}

        <div className="mt-20 grid gap-6 md:grid-cols-4">

          {stats.map((item)=>(

            <motion.div

              key={item.label}

              whileHover={{
                y:-8
              }}

              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl"

            >

              <h3 className="text-5xl font-black text-cyan-400">

                {item.number}

              </h3>

              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-gray-400">

                {item.label}

              </p>

            </motion.div>

          ))}

        </div>
                {/* ================= FEATURED PROJECT ================= */}

        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-32"
          >
            <div className="mb-10 flex items-center gap-6">
              <h3 className="text-xs uppercase tracking-[0.3em] text-cyan-400">
                Featured Project
              </h3>

              <div className="h-px flex-1 bg-white/10" />
            </div>

            <motion.div
              whileHover={{
                y: -8,
              }}
              className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
            >
              <div className="grid lg:grid-cols-2">

                {/* Screenshot */}

                <div className="relative group overflow-hidden">

                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

                  <div className="absolute left-8 top-8 flex items-center gap-3 rounded-full bg-cyan-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-black">
                    <FaStar />
                    Featured
                  </div>

                </div>

                {/* Content */}

                <div className="flex flex-col justify-center p-10 lg:p-14">

                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                    {featuredProject.type}
                  </p>

                  <h2 className="mt-4 text-4xl font-black">
                    {featuredProject.title}
                  </h2>

                  <p className="mt-8 leading-8 text-gray-400">
                    {featuredProject.description}
                  </p>

                  {/* Project Highlights */}

                  <div className="mt-10 grid gap-6 md:grid-cols-2">

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                        Project Type
                      </p>

                      <h4 className="mt-3 font-semibold">
                        Business Website
                      </h4>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                        Status
                      </p>

                      <h4 className="mt-3 font-semibold text-green-400">
                        Live
                      </h4>
                    </div>

                  </div>

                  {/* Tech */}

                  <div className="mt-10 flex flex-wrap gap-3">

                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-widest text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                  {/* Buttons */}

                  <div className="mt-12 flex flex-wrap gap-5">

                    <motion.a
                      whileHover={{
                        scale: 1.03,
                        boxShadow:
                          "0 0 30px rgba(6,182,212,.35)",
                      }}
                      whileTap={{
                        scale: .98,
                      }}
                      href={featuredProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 font-bold uppercase tracking-[0.2em] text-black"
                    >
                      Live Demo

                      <FaExternalLinkAlt />
                    </motion.a>

                    <motion.a
                      whileHover={{
                        scale: 1.03,
                      }}
                      whileTap={{
                        scale: .98,
                      }}
                      href={featuredProject.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-8 py-4 font-bold uppercase tracking-[0.2em]"
                    >
                      Source Code

                      <FaGithub />
                    </motion.a>

                  </div>

                </div>

              </div>
            </motion.div>
          </motion.div>
        )}

        {/* ================= FILTERS ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="mb-10 flex flex-wrap justify-center gap-4">

            {filters.map((filter) => (

              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-cyan-500 text-black shadow-[0_0_30px_rgba(6,182,212,.35)]"
                    : "border border-white/10 bg-white/[0.03] text-gray-400 hover:border-cyan-500/30 hover:text-white"
                }`}
              >
                {filter}
              </button>

            ))}

          </div>
        </motion.div>
                {/* ================= PROJECT GRID ================= */}

        <motion.div
          layout
          className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">

            {filteredProjects.length > 0 ? (

              filteredProjects.map((project, index) => (

                <motion.article
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/40 hover:shadow-[0_20px_50px_rgba(6,182,212,.12)]"
                >

                  {/* IMAGE */}

                  <div className="relative overflow-hidden">

                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    {/* Gradient */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

                    {/* Hover Overlay */}

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center gap-5 bg-black/50 backdrop-blur-sm opacity-0 transition duration-500 group-hover:opacity-100"
                    >

                      <motion.a
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl bg-cyan-500 p-4 text-black"
                      >
                        <FaExternalLinkAlt />
                      </motion.a>

                      <motion.a
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-white/20 bg-white/10 p-4"
                      >
                        <FaGithub />
                      </motion.a>

                    </motion.div>

                    {/* Project Type */}

                    <div className="absolute left-6 top-6 rounded-full bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.25em] backdrop-blur-md">

                      {project.type}

                    </div>

                  </div>

                  {/* CONTENT */}

                  <div className="p-8">

                    <h3 className="text-2xl font-bold transition duration-300 group-hover:text-cyan-400">

                      {project.title}

                    </h3>

                    <p className="mt-5 leading-7 text-gray-400">

                      {project.description}

                    </p>

                    {/* TECH */}

                    <div className="mt-8 flex flex-wrap gap-3">

                      {project.tags.map((tag) => (

                        <span
                          key={tag}
                          className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-widest text-cyan-300"
                        >

                          {tag}

                        </span>

                      ))}

                    </div>

                    {/* Divider */}

                    <div className="my-8 h-px bg-white/10" />

                    {/* Footer */}

                    <div className="flex items-center justify-between">

                      <div>

                        <p className="text-xs uppercase tracking-[0.25em] text-gray-500">

                          Status

                        </p>

                        <span className="mt-2 inline-flex items-center gap-2 text-green-400">

                          <span className="h-2 w-2 rounded-full bg-green-400" />

                          Live

                        </span>

                      </div>

                      <motion.a
                        whileHover={{ x: 5 }}
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 font-semibold text-cyan-400"
                      >

                        View Project

                        <FaArrowRight />

                      </motion.a>

                    </div>

                  </div>

                </motion.article>

              ))

            ) : (

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full rounded-3xl border border-white/10 bg-white/[0.03] p-20 text-center"
              >

                <h3 className="text-3xl font-bold">

                  No projects found

                </h3>

                <p className="mt-4 text-gray-400">

                  Try selecting another technology.

                </p>

              </motion.div>

            )}

          </AnimatePresence>
        </motion.div>
                {/* ================= CALL TO ACTION ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-36"
        >
          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-white/[0.03] to-blue-500/10 p-10 md:p-16 backdrop-blur-xl">

            <div className="mx-auto max-w-4xl text-center">

              <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-cyan-400">
                Let's Build Something Great
              </span>

              <h2 className="mt-8 text-4xl font-black leading-tight md:text-6xl">
                Have a project in mind?
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Let's make it happen.
                </span>
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
                I'm passionate about building modern websites, scalable web
                applications, and secure digital solutions that help businesses
                grow. If you're looking for a developer who values quality,
                performance, and thoughtful design, I'd love to hear from you.
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-5">

                <motion.a
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 35px rgba(6,182,212,.35)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className="rounded-xl bg-cyan-500 px-10 py-5 font-bold uppercase tracking-[0.2em] text-black"
                >
                  Start a Project
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href="/assets/Junior_software..pdf"
                  download
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-10 py-5 font-bold uppercase tracking-[0.2em] transition hover:border-cyan-500/40"
                >
                  Download CV
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

export default Portfolio;