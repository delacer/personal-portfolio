import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);

    try {
      const response = await fetch('https://formspree.io/f/meolvogr', {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Formspree error:', await response.json());
      }
    } catch (err) {
      console.error('Network error:', err);
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 px-6 md:px-16 bg-gray-900 text-white"
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">Let’s Connect</h2>
        <p className="text-gray-300 mb-10">
          Whether you’re building something meaningful or just want to say hello — I’d love to hear from you. I respond with intention, clarity, and care.
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-green-400 text-xl font-medium"
          >
            ✅ Message sent successfully! I’ll be in touch soon.
          </motion.div>
        ) : (
          <form ref={form} onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-400 mb-1">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Elshebba"
                className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-400 mb-1">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or idea..."
                className="w-full p-3 bg-gray-800 text-white rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded shadow transition duration-300"
            >
              <FaPaperPlane />
              Send Message
            </motion.button>
          </form>
        )}
      </div>
    </motion.section>
  );
};

export default Contact;
