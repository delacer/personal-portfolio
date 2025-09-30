import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-10 px-6 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-white">Elshebba H. Ruzvidzo</h4>
          <p className="text-sm text-gray-400 mt-1">
            Building systems that encode dignity, trust, and legacy.
          </p>
        </div>

        <div className="flex gap-4 text-xl">
          <a href="https://github.com/delacer" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-cyan-400 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/elshebba-ruzvidzo-b83931244/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-cyan-400 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:elshebbaruzvidzo@gmail.com" aria-label="Email" className="text-gray-400 hover:text-cyan-400 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="text-center mt-6 text-sm text-gray-500">
        Built with <span className="text-cyan-400 font-medium">React</span> & <span className="text-cyan-400 font-medium">TailwindCSS</span>
      </div>

      <div className="text-center mt-2 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Elshebba H. Ruzvidzo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
