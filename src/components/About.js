import { motion } from 'framer-motion';

const values = [
  { title: 'Stewardship', description: 'Every system I build is a reflection of care, clarity, and accountability.' },
  { title: 'Security', description: 'I proactively remediate leaks, rotate secrets, and protect system integrity.' },
  { title: 'Legacy', description: 'I design platforms that endure — technically and philosophically.' },
  { title: 'Empowerment', description: 'My interfaces guide users with clarity, dignity, and trust.' },
];

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 px-6 md:px-16 bg-gray-800 text-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I’m Elshebba H. Ruzvidzo — a full-stack developer, movement architect, and digital strategist. I build platforms that encode values like dignity, trust, and legacy. My work blends technical precision with human-centered design, ensuring every system I touch empowers users and stands the test of time.
        </p>
      </div>

      {/* Values */}
      <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {values.map(({ title, description }) => (
          <motion.div
            key={title}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-900 p-6 rounded shadow"
          >
            <h4 className="text-xl font-semibold text-cyan-300 mb-2">{title}</h4>
            <p className="text-gray-400">{description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default About;
