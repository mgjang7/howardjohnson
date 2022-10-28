export default {
  head: {
    title: "howardjohnson",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/css/custom.css" },
    ],
  },

  css: [
    "ant-design-vue/dist/antd.css",
    //'~assets/css/main.css',
    '~/static/layout.scss'
    //{ src: '~assets/css/main.scss', lang: 'scss' } //scss
  ],

  //plugins: ["@/plugins/antd-ui"],
  plugins: [
    "@/plugins/antd-ui",
    //"@/plugins/v-google-translate",
  ],

  components: true,

  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/tailwindcss",

    "@nuxt/postcss8",
  ],

  modules: [
    "@nuxtjs/axios", 
    "bootstrap-vue/nuxt",
    'cookie-universal-nuxt',
  ],

  axios: {
    baseURL: "/",
  },

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
