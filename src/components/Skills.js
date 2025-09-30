import { motion } from 'framer-motion';
import { FaBolt } from 'react-icons/fa';

const skills = [
  {name: 'HTML5', level: 90},
  {name: 'CSS3', level: 85},
  {name: 'JavaScript', level: 85},
  { name: 'React', level: 85 },
  {name: 'Node js', level: 85},
  { name: 'Express', level: 85 },
  { name: 'MongoDB', level: 80 },
  {name: 'MongoDB Atlas', level: 75},
  {name: 'Netlify', level: 75},
  {name: 'Python', level: 85},
  {name: 'DSA', level: 75},
  {name: 'UI/UX', level: 90}
  
];



const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 px-6 md:px-16 bg-gray-900 text-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">Skills & Journey</h2>
        <p className="text-gray-300 mb-10">
          My stack isn’t just technical — it’s philosophical. Every tool I use reflects a commitment to clarity, security, and user empowerment.
        </p>
      </div>

      {/* Mastery Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-10"
      >
        <h3 className="text-xl font-semibold text-cyan-300 mb-6 text-center flex items-center justify-center gap-2">
          <FaBolt className="text-yellow-400" />
          Mastery Highlights
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map(({ name, level }) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 p-4 rounded shadow hover:shadow-cyan-400 transition"
            >
              <div className="flex justify-between mb-1">
                <span className="text-white font-medium">{name}</span>
                <span className="text-gray-400 text-sm">{level}%</span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded">
                <div
                  className="bg-cyan-500 h-full rounded"
                  style={{ width: `${level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
