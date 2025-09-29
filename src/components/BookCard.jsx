// src/components/BookCard.jsx
import { motion } from 'framer-motion';

const BookCard = ({ title, author, imageUrl }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center text-center w-40 flex-shrink-0"
    >
      <div className="relative rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <img 
          src={imageUrl} 
          alt={`Portada del libro ${title}`} 
          className="w-full h-56 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
      </div>
      <h4 className="mt-3 font-bold text-sm text-gray-800 dark:text-gray-200">{title}</h4>
      <p className="text-xs text-gray-500 dark:text-gray-400">{author}</p>
    </motion.div>
  );
};

export default BookCard;