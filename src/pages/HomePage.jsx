// src/pages/HomePage.jsx
import { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import BookCard from '../components/BookCard'; // 1. Importa el nuevo componente
import { motion } from 'framer-motion';

// 2. Datos de ejemplo para los libros (puedes reemplazarlos con los tuyos)
const recommendedBooks = [
  {
    title: "Docker Deep Dive",
    author: "Nigel Poulton",
    imageUrl: "https://m.media-amazon.com/images/I/61q1wsN39HL._SL1233_.jpg"
  },
  {
    title: "Cloud Native DevOps with Kubernetes",
    author: "Justin Domingus & John Arundel",
    imageUrl: "https://m.media-amazon.com/images/I/81b66iRUWZL._SL1500_.jpg"
  },
   {
    title: "Clean Code",
    author: "Robert C. Martin",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1436202607l/3735293.jpg"
  },
];

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  // ... (tu useEffect para cargar posts se queda igual)
  useEffect(() => {
    const fetchPosts = async () => {
      const postModules = import.meta.glob('../_posts/*.md', { as: 'raw' });
      const postItems = await Promise.all(
        Object.entries(postModules).map(async ([path, resolver]) => {
          const content = await resolver();
          const frontmatterMatch = content.match(/---\s*([\s\S]*?)\s*---/);
          const frontmatter = {};
          if (frontmatterMatch) {
            frontmatterMatch[1].trim().split('\n').forEach(line => {
              const [key, ...value] = line.split(':');
              frontmatter[key.trim()] = value.join(':').trim().replace(/"/g, '');
            });
          }
          const slug = path.split('/').pop().replace('.md', '');
          return { ...frontmatter, slug, content };
        })
      );
      postItems.sort((a, b) => new Date(b.date) - new Date(a.date));
      setPosts(postItems);
    };
    fetchPosts();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Usamos font-comic para el título principal con sombra de texto */}
      <h1 className="text-4xl md:text-5xl font-comic tracking-wider font-extrabold mb-12 text-marvel-red dark:text-marvel-yellow"
          style={{ textShadow: '3px 3px 0px #000, -3px -3px 0px #000, 3px -3px 0px #000, -3px 3px 0px #000' }}>
        Blog about DevOps
      </h1>

      <div className="space-y-12">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {/* 3. Nueva sección de libros */}
      <section className="mt-20">
        <h2 className="text-3xl font-comic tracking-wider font-bold mb-8 text-gray-900 dark:text-gray-100">Libros Recomendados</h2>

        <div className="flex gap-8 overflow-x-auto pb-4 -mx-4 px-4">
          {recommendedBooks.map((book, index) => (
            <BookCard 
              key={index}
              title={book.title}
              author={book.author}
              imageUrl={book.imageUrl}
            />
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
