import { motion } from "framer-motion";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import profileImg from "../assets/prof.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white flex items-center"
    >
      {/* ================= BACKGROUND ================= */}

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gradient Orb 1 */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]"
      />

      {/* Gradient Orb 2 */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 70, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[180px]"
      />

      {/* Radial Light */}
      <motion.div
        animate={{
          opacity: [0.25, 0.45, 0.25],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12),transparent_65%)]"
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-20 mx-auto grid w-full max-w-7xl items-center gap-16 px-6 md:grid-cols-2">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >

          {/* Status */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-2 backdrop-blur-md"
          >

            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

            <span className="text-xs uppercase tracking-[0.35em] text-cyan-300">
              Available For Work
            </span>

          </motion.div>

          {/* Name */}

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="text-6xl font-black leading-none tracking-tight md:text-8xl"
          >
            ELSHEBBA
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: .25 }}
            className="mt-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-6xl font-black text-transparent md:text-8xl"
          >
            RUZVIDZO
          </motion.h2>

          {/* Typewriter */}

          <div className="relative mt-12 max-w-xl pl-8">

            <div className="absolute left-0 top-1 bottom-1 w-[2px] bg-gradient-to-b from-cyan-500 to-transparent"/>

            <p className="text-lg leading-relaxed text-gray-400 md:text-xl">

              <Typewriter
                words={[
                  "Designing scalable software architectures.",
                  "Building secure full-stack applications.",
                  "Crafting premium user experiences.",
                  "Transforming ideas into reliable digital products.",
                  "Engineering performance with precision."
                ]}
                loop
                cursor
                cursorStyle="▋"
                typeSpeed={45}
                deleteSpeed={20}
                delaySpeed={2500}
              />

            </p>

          </div>

          {/* Description */}

          <motion.p
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:.4 }}
            className="mt-10 max-w-xl text-gray-500 leading-8"
          >
           I build modern software that combines thoughtful design, scalable architecture,
            and secure engineering to help businesses solve real problems and grow with confidence.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity:0,y:25 }}
            animate={{ opacity:1,y:0 }}
            transition={{ delay:.6 }}
            className="mt-12 flex flex-wrap gap-5"
          >

            <motion.a
              whileHover={{
                scale:1.03,
                boxShadow:"0 0 35px rgba(6,182,212,.35)"
              }}
              whileTap={{ scale:.98 }}
              href="/assets/Junior_software..pdf"
              download
              className="group relative overflow-hidden rounded-xl bg-cyan-500 px-8 py-4 font-bold uppercase tracking-widest text-black"
            >

              <span className="absolute inset-0 -translate-x-full skew-x-12 bg-white/30 transition duration-700 group-hover:translate-x-[250%]" />

              <span className="relative flex items-center gap-3">

                Download CV

                <FaDownload className="transition group-hover:-translate-y-1"/>

              </span>

            </motion.a>

            <motion.a
              whileHover={{
                scale:1.03
              }}
              whileTap={{
                scale:.98
              }}
              href="#portfolio"
              className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-bold uppercase tracking-widest backdrop-blur-md transition hover:bg-white/10"
            >

              <span className="flex items-center gap-3">

                Explore Projects

                <FaArrowRight/>

              </span>

            </motion.a>

          </motion.div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex justify-center"
        >
          {/* Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 80,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[-30px] rounded-full border border-cyan-500/10"
          />

          {/* Second Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 110,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[-60px] rounded-full border border-white/5"
          />

          {/* Glass Card */}
          <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.03] p-4 shadow-[0_20px_80px_rgba(0,0,0,.45)] backdrop-blur-xl">

            {/* Decorative Glow */}
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-2xl">

              <img
                src={profileImg}
                alt="Portrait of Elshebba Ruzvidzo"
                loading="eager"
                decoding="async"
                className="
                  h-full
                  w-full
                  object-cover
                  grayscale
                  contrast-125
                  transition-all
                  duration-700
                  hover:scale-105
                  hover:grayscale-0
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent opacity-0 transition duration-700 hover:opacity-100" />

              {/* Scan Lines */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(6,182,212,0.05)_50%)] bg-[length:100%_6px]" />

            </div>

            {/* Corner Decorations */}
            <div className="absolute left-2 top-2 h-8 w-8 border-l-2 border-t-2 border-cyan-400" />
            <div className="absolute right-2 top-2 h-8 w-8 border-r-2 border-t-2 border-cyan-400" />
            <div className="absolute bottom-2 left-2 h-8 w-8 border-b-2 border-l-2 border-cyan-400" />
            <div className="absolute bottom-2 right-2 h-8 w-8 border-b-2 border-r-2 border-cyan-400" />
          </div>

          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: [0, -8, 0],
            }}
            transition={{
              delay: 1,
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute -bottom-10 -left-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
              Current Stack
            </p>

            <h3 className="mt-2 font-semibold text-white">
              Full Stack Development
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              React • TypeScript • Python • Flask • SQLite
            </p>
          </motion.div>

          {/* Floating Experience Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: [0, 10, 0],
            }}
            transition={{
              delay: 1.4,
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute -right-6 top-10 rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-4 backdrop-blur-xl"
          >
            <h3 className="text-3xl font-black text-cyan-400">
              AVAILABLE
            </h3>

            <p className="text-xs uppercase tracking-widest text-gray-300">
             Freelance • Contract
            </p>
          </motion.div>

        </motion.div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-b from-transparent to-[#050505]" />

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-12 w-7 justify-center rounded-full border border-white/20">
          <div className="mt-2 h-3 w-1 rounded-full bg-cyan-400" />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;