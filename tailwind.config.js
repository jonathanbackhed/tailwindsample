module.exports = {
  purge: {
    enabled: true,
    content: ['./*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#3fbaeb", // font-brand-light
          DEFAULT: "#0fa9e6", // font-brand
          dark: "#0c87b8"
        },
      },
    },
    fontFamily: {
      headline: "Poppins, sans-serif" // font-headline
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
}