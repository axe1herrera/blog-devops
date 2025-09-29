import { Link, NavLink } from 'react-router-dom';
import { Code2 } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ theme, handleThemeSwitch }) => {
  const linkClass = ({ isActive }) => 
    `hover:text-marvel-red dark:hover:text-marvel-yellow transition-colors ${isActive ? 'text-marvel-red dark:text-marvel-yellow font-bold' : ''}`;

  return (
    <header className="sticky top-0 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm border-b-4 border-marvel-blue dark:border-marvel-yellow z-10">
      <nav className="container mx-auto px-4 py-4 max-w-4xl flex justify-between items-center">
        {/* Titulo estilo comic con sombra de texto para efecto pop */}
        <Link to="/" className="flex items-center gap-2 text-3xl font-comic tracking-wider text-marvel-red dark:text-marvel-yellow" style={{ textShadow: '2px 2px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000' }}>
          <Code2 className="text-marvel-red dark:text-marvel-yellow" size={28} />
          <span>Becomming a DevOps Engineer</span>
        </Link>
        <div className="flex items-center gap-4">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/sobre-mi" className={linkClass}>About me</NavLink>
          <NavLink to="/contacto" className={linkClass}>Contact</NavLink>
          <ThemeToggle theme={theme} handleThemeSwitch={handleThemeSwitch} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;