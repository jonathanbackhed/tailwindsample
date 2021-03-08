module.exports = {
  purge: {
    enabled: true,
    content: ["./*.html"]
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#3fbaeb", // font-brand-light
          DEFAULT: "#0fa9e6", // font-brand
          dark: "#0c87b8",
          darker: "#0a6b91",
        },
        dark: {
          DEFAULT: "#181818",
          light: "#202020",
          lighter: "#313131",
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