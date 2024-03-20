// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head:{
      charset: "utf-16",
      title:"Marias blog",
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
        }
      ],
      viewport: "width=device-width, initial-scale=1",
    },
  },
  modules:["@nuxtjs/tailwindcss"],
  

  runtimeConfig:{
    public:{
      wpUri: process.env.WP_URI,
    },
  },
});
