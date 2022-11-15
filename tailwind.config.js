const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'neutral':{
        100: '#F6F6F6',
        300: '#E1E1E1',
        500: '#A2A2A2',
        700: '#535353',
        900: '#070707',
      },
      'slate': {
        100: '#F8FAFC',
        200: '#E5EBF0',
        300: '#CBD5E1',
        500: '#94A3B8',
        700: '#667085',
        800: '#46536D',
        900: '#101828',
      },
      'green':{
        100: '#D8E1D9',
        300: '#BDCBBF',
        500: '#7C9986',
        700: '#56675C',
        900: '#2B3E32'
      }
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      mono: ['Fira Code', 'monospace']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
