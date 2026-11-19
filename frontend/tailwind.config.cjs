/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        paper: '#FAF7F2',
        'paper-rose': '#FAF4F2',
        'paper-light': '#FCFAF7',
        'paper-dark': '#EFE8DE',
        'paper-pink': '#FCE7EB',
        'scrunch-pink': '#FFB5C5',
        'scrunch-pink-dark': '#F092A5',
        charcoal: '#191817',
        'charcoal-muted': '#3A3633',
        pencil: '#57534E',
        'pencil-light': '#8C857D',
        coral: '#E05D5D',
        terracotta: '#C8553D',
        cyan: '#D7EEF4',
        'cyan-dark': '#0284C7',
        amber: '#F6C453',
        gold: '#DDA15E',
        highlighter: '#FEF08A',
        margin: '#E05D5D'
      },
      fontFamily: {
        headline: ['"Caveat"', '"Architects Daughter"', 'cursive'],
        display: ['"Caveat"', '"Architects Daughter"', 'cursive'],
        hand: ['"Caveat"', '"Architects Daughter"', 'cursive'],
        kalam: ['"Kalam"', 'cursive'],
        script: ['"Patrick Hand"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace']
      },
      boxShadow: {
        editorial: '0 20px 50px -10px rgba(25, 24, 23, 0.08), 0 10px 20px -5px rgba(25, 24, 23, 0.04)',
        'editorial-hover': '0 30px 60px -12px rgba(25, 24, 23, 0.14), 0 16px 24px -6px rgba(25, 24, 23, 0.06)',
        'tactile-solid': '4px 5px 0px #191817',
        'tactile-solid-lg': '6px 8px 0px #191817',
        'tactile-coral': '4px 5px 0px #E05D5D',
        'tactile-pink': '4px 5px 0px #F092A5',
        'device-frame': '0 25px 60px -15px rgba(25, 24, 23, 0.16), 0 0 0 1px rgba(25, 24, 23, 0.06)'
      }
    }
  },
  plugins: []
}
