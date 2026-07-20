import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaUser,
  FaRegCommentDots,
  FaBriefcase,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(form.current);

  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  const text = `
*New Portfolio Inquiry*

👤 Name: ${name}
📧 Email: ${email}
📌 Subject: ${subject}

💬 Message:
${message}
`;

  const phone = "27710020953"; 

  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
    "_blank"
  );

  form.current.reset();
};
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] py-28 text-white"
    >
      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Cyan Orb */}

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
        }}
        className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]"
      />

      {/* Blue Orb */}

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
        }}
        className="absolute right-0 bottom-0 h-[550px] w-[550px] rounded-full bg-blue-600/10 blur-[180px]"
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

            Contact

          </span>

          <h2 className="mt-8 text-5xl font-black md:text-7xl">

            Let's build something

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

              {" "}exceptional.

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

            Whether you're launching a startup,
            growing your business,
            or looking for a full-stack developer,
            I'd love to hear about your project and explore how we can work together.

          </p>

        </motion.div>

        {/* Quick Stats */}

        <div className="mt-20 grid gap-6 md:grid-cols-3">

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl"
          >

            <h3 className="text-4xl font-black text-cyan-400">

              &lt;24h

            </h3>

            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-gray-400">

              Average Reply

            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl"
          >

            <h3 className="text-4xl font-black text-cyan-400">

              100%

            </h3>

            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-gray-400">

              Project Commitment

            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl"
          >

            <h3 className="text-4xl font-black text-cyan-400">

              🌍

            </h3>

            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-gray-400">

              Remote Worldwide

            </p>

          </motion.div>

        </div>
                {/* ================= CONTACT LAYOUT ================= */}

        <div className="mt-28 grid gap-16 lg:grid-cols-5">

          {/* ================= LEFT PANEL ================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 lg:col-span-2"
          >

            {/* Availability */}

            <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-8 backdrop-blur-xl">

              <div className="flex items-center gap-4">

                <div className="h-4 w-4 rounded-full bg-green-400 shadow-[0_0_15px_rgba(34,197,94,.8)] animate-pulse" />

                <div>

                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                    Availability
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    Open for Opportunities
                  </h3>

                </div>

              </div>

              <p className="mt-6 leading-7 text-gray-300">

                Currently available for freelance projects,
                remote opportunities,
                and full-stack development roles.

              </p>

            </div>

            {/* Email */}

            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
            >

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">

                <FaEnvelope size={22} />

              </div>

              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                Email
              </p>

              <h4 className="mt-3 text-lg font-semibold break-all">
                delacer351@gmail.com
              </h4>

            </motion.div>

            {/* Location */}

            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
            >

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">

                <FaMapMarkerAlt size={22} />

              </div>

              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                Location
              </p>

              <h4 className="mt-3 text-lg font-semibold">
                South Africa
              </h4>

              <p className="mt-2 text-gray-400">
                Available Worldwide
              </p>

            </motion.div>

            {/* Work Preferences */}

            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
            >

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">

                <FaBriefcase size={22} />

              </div>

              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                Interested In
              </p>

              <ul className="mt-5 space-y-3 text-gray-300">

                <li>• Full-Stack Development</li>

                <li>• Business Websites</li>

                <li>• SaaS Platforms</li>

                <li>• Remote Opportunities</li>

              </ul>

            </motion.div>

            {/* Social Links */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

              <p className="mb-6 text-xs uppercase tracking-[0.25em] text-gray-500">
                Connect
              </p>

              <div className="flex gap-5">

                <motion.a
                  whileHover={{ y: -5, scale: 1.05 }}
                  href="https://github.com/delacer"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-cyan-500 hover:text-cyan-400"
                >
                  <FaGithub size={22} />
                </motion.a>

                <motion.a
                  whileHover={{ y: -5, scale: 1.05 }}
                  href="https://www.linkedin.com/in/elshebba-ruzvidzo-b83931244/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-cyan-500 hover:text-cyan-400"
                >
                  <FaLinkedin size={22} />
                </motion.a>

                <motion.a
                  whileHover={{ y: -5, scale: 1.05 }}
                  href="mailto:delacer351@gmail.com"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-cyan-500 hover:text-cyan-400"
                >
                  <FaEnvelope size={22} />
                </motion.a>

              </div>

            </div>

          {/* RIGHT SIDE (FORM) STARTS IN PART 3 */}
          </motion.div>
                    {/* ================= FORM ================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 md:p-12 backdrop-blur-xl">

              <AnimatePresence mode="wait">
                  <motion.form
                    key="form"
                    ref={form}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-8"
                  >

                    {/* Name */}

                    <div>
                      <label className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                        <FaUser />
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-cyan-500"
                      />
                    </div>

                    {/* Email */}

                    <div>
                      <label className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                        <FaEnvelope />
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-cyan-500"
                      />
                    </div>

                    {/* Subject */}

                    <div>
                      <label className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                        <FaBriefcase />
                        Subject
                      </label>

                      <input
                        type="text"
                        name="subject"
                        required
                        placeholder="Website Development"
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-cyan-500"
                      />
                    </div>

                    {/* Message */}

                    <div>
                      <label className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                        <FaRegCommentDots />
                        Your Message
                      </label>

                      <textarea
                        name="message"
                        required
                        rows={7}
                        placeholder="Tell me about your project..."
                        className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-cyan-500"
                      />
                    </div>

                  </motion.form>
                  <button
  type="submit"
  className="flex w-full items-center justify-center gap-4 rounded-2xl bg-cyan-500 px-8 py-5 font-bold uppercase tracking-[0.25em] text-black"
>
  Send on WhatsApp
  <FaWhatsapp />
</button>

              </AnimatePresence>

            </div>
          </motion.div>

        </div>
                {/* ================= BOTTOM CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-white/[0.03] to-blue-500/10 p-10 md:p-16 backdrop-blur-xl">

            <div className="mx-auto max-w-4xl text-center">

              <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-cyan-400">
                Ready to Collaborate?
              </span>

              <h2 className="mt-8 text-4xl font-black leading-tight md:text-6xl">
                Let's create something
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  meaningful together.
                </span>
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
                Every successful project starts with a conversation. Whether
                you need a business website, a full-stack application, or a
                long-term development partner, I'm ready to help turn your
                ideas into reliable, modern digital experiences.
              </p>

              <motion.a
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 40px rgba(6,182,212,.35)",
                }}
                whileTap={{ scale: 0.98 }}
                href="mailto:delacer351@gmail.com"
                className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-cyan-500 px-10 py-5 font-bold uppercase tracking-[0.2em] text-black"
              >
                <FaEnvelope />
                Email Me Directly
              </motion.a>

            </div>

          </div>
        </motion.div>

      </div>

      {/* ================= BOTTOM FADE ================= */}

      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-b from-transparent to-[#050505]" />

    </section>
  );
};

export default Contact;