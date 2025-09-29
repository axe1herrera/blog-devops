import { motion } from 'framer-motion';

// Variantes de animación para la lista con un efecto de "pop"
const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Cada elemento de la lista aparecerá con un pequeño retraso
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
    }
  }
};


const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-comic prose-h1:text-marvel-red dark:prose-h1:text-marvel-yellow"
    >
      <h1 style={{ textShadow: '2px 2px 0px #000' }}>Sobre Mí</h1>
      <p>
        ¡Hola! Soy [Tu Nombre], un apasionado estudiante de <strong>Ingeniería en Sistemas Computacionales</strong> a punto de graduarme. Mi curiosidad por cómo las aplicaciones escalan y se mantienen de forma eficiente me ha llevado a adentrarme en el fascinante mundo de DevOps.
      </p>
      
      <h2 className='text-marvel-red dark:text-marvel-yellow border-b-4 border-marvel-blue dark:border-marvel-yellow pb-1'>Mi Misión 🚀</h2>
      <p>
        Mi objetivo principal es convertirme en un <strong>Ingeniero DevOps</strong>. Me entusiasma la idea de diseñar y gestionar infraestructuras en la nube, automatizar procesos de despliegue (CI/CD), y garantizar que los sistemas sean seguros, resilientes y eficientes.
      </p>
      <p>
        Este blog es mi campo de pruebas y mi diario de aprendizaje. Aquí compartiré todo lo que aprenda sobre:
      </p>
      
      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate="show"
      >
        <motion.li variants={itemVariants}>☁️ Computación en la Nube (AWS, Azure, GCP)</motion.li>
        <motion.li variants={itemVariants}>🐳 Contenerización (Docker, Kubernetes)</motion.li>
        <motion.li variants={itemVariants}>⚙️ Infraestructura como Código (Terraform, Ansible)</motion.li>
        <motion.li variants={itemVariants}>🔒 Ciberseguridad y buenas prácticas (DevSecOps)</motion.li>
        <motion.li variants={itemVariants}>📊 Monitoreo y Observabilidad (Prometheus, Grafana)</motion.li>
      </motion.ul>
      
      <p>
        Gracias por acompañarme en este viaje. ¡Espero que encuentres algo útil o inspirador aquí!
      </p>
    </motion.div>
  );
};

export default AboutPage;
