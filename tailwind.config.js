import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        sans: ['Alan Sans', 'sans-serif'], 
        serif: ['Lora', 'serif'],
        // Nuevo estilo de fuente para títulos de cómics
        comic: ['Bangers', 'cursive'], 
      },
      // Paleta de colores inspirada en Marvel (rojo, amarillo, azul)
      colors: {
        'marvel-red': '#E62429', // Rojo primario de Marvel
        'marvel-yellow': '#FEE001', // Amarillo de impacto
        'marvel-blue': '#005893', // Azul oscuro
        'sky-500': '#0ea5e9', // Mantener el sky-500 original
      },

    },
  },
  plugins: [
    typography,
  ],
}

// import typography from '@tailwindcss/typography';

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode: 'class', 
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['Alan Sans', 'sans-serif'], 
//         serif: ['Lora', 'serif'],
//       },
//     },
//   },
//   plugins: [
//     typography,
//   ],
// }