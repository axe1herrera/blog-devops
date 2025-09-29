// src/components/PostCard.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const PostCard = ({ post }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }} // Efecto de levantar la tarjeta
      className="relative group p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-transparent 
                 dark:hover:border-transparent transition-all duration-300 bg-white dark:bg-gray-900
                 before:content-[''] before:absolute before:inset-0 before:rounded-lg 
                 before:p-px before:bg-gradient-to-r before:from-sky-500 before:to-purple-500
                 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300"
    >
      <article className="relative z-10">
        {/* Usamos font-serif para el título */}
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
          <Link to={`/post/${post.slug}`} className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
            {post.title}
          </Link>
        </h2>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Calendar size={14} />
          <span>{new Date(post.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{post.summary}</p>
        <Link to={`/post/${post.slug}`} className="inline-flex items-center gap-1 font-semibold text-sky-600 dark:text-sky-400 group-hover:underline">
          Leer más <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </article>
    </motion.div>
  );
};

export default PostCard;

