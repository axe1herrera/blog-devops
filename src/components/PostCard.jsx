// src/components/PostCard.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const PostCard = ({ post }) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }} // Animación inicial más dramática
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 100 }} // Transición más "punchy"
      whileHover={{ scale: 1.02, rotate: 1, boxShadow: "10px 10px 0px #E62429" }} // Efecto de levantar la tarjeta con sombra de color
      className="relative group p-6 rounded-lg border-4 border-black dark:border-marvel-yellow shadow-xl 
                 hover:shadow-none transition-all duration-100 bg-white dark:bg-gray-800
                 before:content-[''] before:absolute before:inset-0 before:rounded-lg 
                 before:p-px before:bg-gradient-to-br before:from-marvel-red before:to-marvel-yellow
                 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300"
      style={{ boxShadow: '5px 5px 0px #000' }} // Sombra estática para el efecto de panel
    >
      <article className="relative z-10">
        {/* Título en la nueva fuente cómic */}
        <h2 className="text-2xl font-comic tracking-wider font-bold mb-2 text-gray-900 dark:text-gray-200">
          <Link to={`/post/${post.slug}`} className="hover:text-marvel-red dark:hover:text-marvel-yellow transition-colors">
            {post.title}
          </Link>
        </h2>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Calendar size={14} />
          <span>{new Date(post.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{post.summary}</p>
        <Link to={`/post/${post.slug}`} className="inline-flex items-center gap-1 font-semibold text-marvel-red dark:text-marvel-yellow group-hover:underline">
          Leer más <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </article>
    </motion.div>
  );
};

export default PostCard;
