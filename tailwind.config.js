module.exports = {
  //content: [],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['"Noto Sans KR"'],
        display: ['"Noto Sans KR"'],
        body: ['"Noto Sans KR"'],
      }
    },

    // fontWeight: {
    //   black2: 1100
    // }

    // screens: {
    //   sm: '480px',
    //   //md: '768px',
    //   md: '757px',
    //   lg: '976px',
    //   lg2: '1010px',
    //   lg3: '1250px',
    //   xl: '1440px',
    //   xl2: '1666px'
    // },
    // container: {
    //   padding: {
    //     DEFAULT: '1rem',
    //     xsm:'1rem',
    //     sm: '2rem',
    //     lg: '4rem',
    //     xl: '5rem',
    //     '2xl': '6rem',
    //   }
    // }
  },
  plugins: [
  ],
}