import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing:{
        'lm': '38rem',
        'sp': '35rem',
        '50rem': '50rem'
      },
      fontFamily:{
        'monts': ['Montserrat', 'sans-serif'],
        'nunito':['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [],
}
export default config
