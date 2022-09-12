export default {
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "template-nuxt",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport", content: "width=device-width, initial-scale=1"
      },
      { hid: "description",
        name: "description",
        content: ""
      },
      {
        name: "format-detection",
        content: "telephone=no"
      },
    ],
    link: [{
      rel: "apple-touch-icon",
      sizes: "76x76",
      href: "/assets/img/apple-icon.png"
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/assets/img/favicon.png"
    },
    {
      rel: "stylesheet",
      href: "/assets/css/nucleo-icons.css"
    },
    {
      rel: "stylesheet" ,
      href: "/assets/css/nucleo-svg.css"
    },
    {
      rel: "stylesheet",
      href: "/assets/css/nucleo-svg.css"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
    },
    {
      rel: "stylesheet",
      id: "pagestyle",
      href: "/assets/css/argon-dashboard.min.css"
    },
    {
      rel: "stylesheet",

      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
    }
  ],
    script: [
      {
        type: "text/javascript",
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js",
        body: true,
      },
      {
        type: "text/javascript",
        src: "https://buttons.github.io/buttons.js",
        body: true,
      },
      {
        type: "text/javascript",
        src: "/assets/js/core/popper.min.js",
        body: true,
      },
      {
        type: "text/javascript",
        src: "/assets/js/core/bootstrap.min.js",
        body: true,
      },
      { type: "text/javascript",
        src: "/assets/js/plugins/perfect-scrollbar.min.js",
        body: true,
      },
      {
        type: "text/javascript",
        src: "/assets/js/plugins/smooth-scrollbar.min.js",
        body: true,
      },
      {
        type: "text/javascript",
        src: "/assets/js/plugins/choices.min.js",
        body: true,
      },
      {
        type: "text/javascript",
        src: "/assets/js/plugins/dragula/dragula.min.js",
        body: true,
      },
      {
        type: "text/javascript",
        src: "/assets/js/plugins/jkanban/jkanban.js",
        body: true,
      },
      {
        type: "text/javascript",
        src: "/assets/js/plugins/countup.min.js",
        body: true,
      },
      {
        type: "text/javascript",
        src: "/assets/js/plugins/chartjs.min.js",
        body: true,
      },
      {
        type: "text/javascript",
        src: "/assets/js/plugins/round-slider.min.js",
        body: true,
      },
      {
        type: "text/javascript",
        src: "/assets/js/argon-dashboard.min.js",
        body: true,
      },
      {
        type: "text/javascript",
        src :"https://kit.fontawesome.com/42d5adcbca.js",
        crossorigin: "anonymous",
        body: true,
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
