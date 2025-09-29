import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar } from 'lucide-react';

const PostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Importar dinámicamente el post basado en el slug
    import(`../_posts/${slug}.md?raw`)
      .then(module => {
        const content = module.default;
        const frontmatterMatch = content.match(/---\s*([\s\S]*?)\s*---/);
        const frontmatter = {};
        if (frontmatterMatch) {
            frontmatterMatch[1].trim().split('\n').forEach(line => {
                const [key, ...value] = line.split(':');
                frontmatter[key.trim()] = value.join(':').trim().replace(/"/g, '');
            });
        }
        const body = content.replace(/---[\s\S]*?---/, '').trim();
        setPost({ ...frontmatter, body });
      })
      .catch(err => console.error("Failed to load post:", err));
  }, [slug]);

  if (!post) return <div>Cargando post...</div>;

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="prose prose-lg dark:prose-invert max-w-none"
    >
        <Link to="/" className="flex items-center gap-2 mb-8 text-sky-600 dark:text-sky-400 hover:underline">
            <ArrowLeft size={18} />
            Volver a inicio
        </Link>
        <h1 className="text-4xl font-extrabold tracking-tight">{post.title}</h1>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
            <Calendar size={14} />
            <span>{new Date(post.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
    </motion.article>
  );
};

export default PostPage;