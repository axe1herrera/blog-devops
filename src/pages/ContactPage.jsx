import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const contactLinks = [
  {
    icon: <Github size={24} />,
    name: 'GitHub',
    url: 'https://github.com/axe1herrera',
    handle: 'Axel Herrera'
  },
  {
    icon: <Linkedin size={24} />,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/axel-noe-herrera-castillo-852440258/',
    handle: 'Axel Herrera'
  },
  {
    icon: <Mail size={24} />,
    name: 'Correo',
    url: 'mailto:axeleno233@gmail.com',
    handle: 'axeleno233@gmail.com'
  }
];

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-comic tracking-wider font-extrabold mb-8 text-marvel-red dark:text-marvel-yellow"
          style={{ textShadow: '3px 3px 0px #000' }}>Contacto</h1>
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
            transition={{ duration: 0.3, delay: index * 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ y: -5, boxShadow: "5px 5px 0px #FEE001" }} // Efecto de "Pop" con sombra amarilla
            className="block p-6 bg-white dark:bg-gray-800 border-4 border-black dark:border-marvel-yellow rounded-lg text-center"
            style={{ boxShadow: '3px 3px 0px #E62429' }} // Sombra estática roja
          >
            <div className="inline-block text-marvel-red dark:text-marvel-yellow mb-4">{link.icon}</div>
            <h3 className="text-xl font-comic font-semibold mb-2">{link.name}</h3>
            <p className="text-gray-500 dark:text-gray-400">{link.handle}</p>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactPage;
