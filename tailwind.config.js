export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'card-image': "url('./src/assets/images/main/card.jpg')",
      },
  },
  plugins: [],
}
};
