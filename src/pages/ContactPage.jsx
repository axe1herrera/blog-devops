import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const contactLinks = [
  {
    icon: <Github size={24} />,
    name: 'GitHub',
    url: 'https://github.com/tu-usuario',
    handle: 'tu-usuario'
  },
  {
    icon: <Linkedin size={24} />,
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/tu-usuario',
    handle: 'tu-usuario'
  },
  {
    icon: <Mail size={24} />,
    name: 'Correo',
    url: 'mailto:tu-correo@example.com',
    handle: 'tu-correo@example.com'
  }
];

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-extrabold mb-8 tracking-tight">Contacto</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
        Siempre estoy abierto a conectar con otros apasionados por la tecnología. Si quieres charlar sobre DevOps, la nube, o cualquier otro tema, no dudes en contactarme a través de estos canales.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            className="block p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-center"
          >
            <div className="inline-block text-sky-500 mb-4">{link.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{link.name}</h3>
            <p className="text-gray-500 dark:text-gray-400">{link.handle}</p>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactPage;