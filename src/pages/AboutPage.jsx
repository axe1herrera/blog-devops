import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="prose prose-lg dark:prose-invert max-w-none"
    >
      <h1>Sobre Mí</h1>
      <p>
        ¡Hola! Soy [Tu Nombre], un apasionado estudiante de <strong>Ingeniería en Sistemas Computacionales</strong> a punto de graduarme. Mi curiosidad por cómo las aplicaciones escalan y se mantienen de forma eficiente me ha llevado a adentrarme en el fascinante mundo de DevOps.
      </p>
      
      <h2>Mi Misión 🚀</h2>
      <p>
        Mi objetivo principal es convertirme en un <strong>Ingeniero DevOps</strong>. Me entusiasma la idea de diseñar y gestionar infraestructuras en la nube, automatizar procesos de despliegue (CI/CD), y garantizar que los sistemas sean seguros, resilientes y eficientes.
      </p>
      <p>
        Este blog es mi campo de pruebas y mi diario de aprendizaje. Aquí compartiré todo lo que aprenda sobre:
      </p>
      <ul>
        <li>☁️ Computación en la Nube (AWS, Azure, GCP)</li>
        <li>🐳 Contenerización (Docker, Kubernetes)</li>
        <li>⚙️ Infraestructura como Código (Terraform, Ansible)</li>
        <li>🔒 Ciberseguridad y buenas prácticas (DevSecOps)</li>
        <li>📊 Monitoreo y Observabilidad (Prometheus, Grafana)</li>
      </ul>
      <p>
        Gracias por acompañarme en este viaje. ¡Espero que encuentres algo útil o inspirador aquí!
      </p>
    </motion.div>
  );
};

export default AboutPage;