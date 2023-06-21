/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg-color': 'hsl(230, 17%, 14%)',
        'dark-top-bg-color': 'hsl(232, 19%, 15%)',
        'dark-card-color': 'hsl(228, 28%, 20%)',
        'dark-text-color': 'hsl(228, 34%, 66%)',
        'dark-white-text-color': 'hsl(0, 0%, 100%)',

        'light-bg-color': 'hsl(0, 0%, 100%)',
        'light-top-bg-color': 'hsl(225, 100%, 98%)',
        'light-card-color': 'hsl(227, 47%, 96%)',
        'light-text-color': 'hsl(228, 12%, 44%)',
        'light-white-text-color': 'hsl(230, 17%, 14%)',
      },
    },
    container: {
      center : true,
      padding : {
        DEFAULT : "20px",
        md : "50px",
      }
    }
  },
  plugins: [],
}
