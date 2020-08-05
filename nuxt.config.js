export default {
  mode: "universal",
  target: "static",
  head: {
    title: "Colourama",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Use your phone as a coloured light source.",
      },
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Recursive:wght@500;800&display=swap",
      },
    ],
  },
  css: [],
  plugins: ["~plugins/composition.ts"],
  components: true,
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/stylelint-module"],
  modules: [],
  build: {},
};
