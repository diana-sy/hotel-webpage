import type { Config } from 'tailwindcss';
const {fontFamily} = require('tailwindcss/defaultTheme');

const config: Config = {

  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary: '#169ed8',
        secondary:'#F2C641',
        tertiary:{
          dark:'#2c88af',
          light:'#F2C641'
        },
      },
      fontFamily: {
        poppins:['var(--font-poppins)',...fontFamily.sans],
    },
  },
},
  plugins: [],
};
export default config
