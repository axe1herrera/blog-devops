const Footer = () => {
  return (
    <footer className="border-t-4 border-marvel-red dark:border-marvel-yellow mt-12">
      <div className="container mx-auto px-4 py-6 max-w-4xl text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Mi Blog DevOps. Construido con React y amor por el código.</p>
      </div>
    </footer>
  );
};

export default Footer;