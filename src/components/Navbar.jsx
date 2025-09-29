import { Link, NavLink } from 'react-router-dom';
import { Code2 } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ theme, handleThemeSwitch }) => {
  const linkClass = ({ isActive }) => 
    `hover:text-sky-500 dark:hover:text-sky-400 transition-colors ${isActive ? 'text-sky-500 dark:text-sky-400 font-bold' : ''}`;

  return (
    <header className="sticky top-0 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-10">
      <nav className="container mx-auto px-4 py-4 max-w-4xl flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <Code2 className="text-sky-500" />
          <span>Becoming a DevOps Engineer</span>
        </Link>
        <div className="flex items-center gap-4">
          <NavLink to="/" className={linkClass}>Inicio</NavLink>
          <NavLink to="/sobre-mi" className={linkClass}>Sobre mí</NavLink>
          <NavLink to="/contacto" className={linkClass}>Contacto</NavLink>
          <ThemeToggle theme={theme} handleThemeSwitch={handleThemeSwitch} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;