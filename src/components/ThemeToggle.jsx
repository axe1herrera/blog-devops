import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = ({ theme, handleThemeSwitch }) => {
  return (
    <button
      onClick={handleThemeSwitch}
      // Nuevos colores de fondo y borde para un estilo más audaz
      className="p-2 rounded-full bg-marvel-yellow dark:bg-marvel-blue border-2 border-black dark:border-marvel-yellow hover:bg-marvel-red dark:hover:bg-marvel-yellow hover:text-white dark:hover:text-black transition-colors"
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Usar colores de los íconos para contrastar con el nuevo botón */}
        {theme === 'dark' ? <Sun size={20} className='text-black dark:text-white' /> : <Moon size={20} className='text-black dark:text-white'/>}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;