module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "motive": "url('/src/images/background/Frame 60136.png')",
        "frame": "url('/src/images/background/Rectangle 18922.png')",
        "ground": "url('/src/images/background/ground.png')",
        "prime": "url('/src/images/background/prime.png')",
        "wallet": "url('/src/images/background/wallet.png')",
      },
      keyframes: {
        moveUp: {
          'from': { right: '-50rem' },
          'to': { right: '0' },
        }
      },
      animation: {
        mover: 'moveUp .5s ease-in-out',
      }
    },
  },
  plugins: [],
}
