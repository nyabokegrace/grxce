module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F4F1EA',
        'paper-light': '#FCFBF7',
        'paper-dark': '#EDE7D9',
        charcoal: '#1C1C1C',
        cyan: '#D4F1F9',
        coral: '#FF6B6B',
        pencil: '#52525B',
        highlighter: '#FEF08A',
        margin: '#E05D5D'
      },
      fontFamily: {
        headline: ['"Architects Daughter"', 'cursive'],
        body: ['"Patrick Hand"', 'cursive', 'sans-serif'],
        scribble: ['"Caveat"', 'cursive'],
        mono: ['"Space Mono"', 'monospace']
      }
    }
  },
  plugins: []
}
