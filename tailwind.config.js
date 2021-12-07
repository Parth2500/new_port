module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      amaranth: '#e8505b',
      arsenic: {
        dark: '#263238',
        light: '#455a64',
      },
      pink: '#f6b9bd',
      whit: {
        antiFlash: '#e6e6e6',
      },
      turquoise: '#27debf',
      pine: '#179573',
    },
  },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
