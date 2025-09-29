// src/components/BookCard.jsx
import { motion } from 'framer-motion';

const BookCard = ({ title, author, imageUrl }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 2, zIndex: 10 }} // Efecto más dramático
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center text-center w-40 flex-shrink-0 cursor-pointer"
    >
      <div className="relative rounded-lg border-4 border-black shadow-lg transition-shadow duration-300 overflow-hidden" 
           style={{ boxShadow: '5px 5px 0px #E62429' }}> {/* Borde y sombra al estilo comic */}
        <img 
          src={imageUrl} 
          alt={`Portada del libro ${title}`} 
          className="w-full h-56 object-cover rounded-sm" // Reduje el redondeo para el estilo comic
        />
        {/* Un toque de color de comic en la esquina */}
        <div className="absolute top-0 right-0 bg-marvel-red w-6 h-6 transform rotate-45 translate-x-3 -translate-y-3 border-b-4 border-l-4 border-black"></div>
      </div>
      <h4 className="mt-3 font-comic font-bold text-lg text-gray-800 dark:text-gray-200">{title}</h4>
      <p className="text-xs text-gray-500 dark:text-gray-400">{author}</p>
    </motion.div>
  );
};

export default BookCard;
