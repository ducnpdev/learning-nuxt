const { generateRoutes } = require('./routers/index');

export default {
  head: {
    title: 'Learning Nuxtjs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Localized routing with Nuxt.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/static/favicon.ico' }
    ]
  },

  router: {
    middleware: ['i18n'],
    extendRoutes (routes) {
      console.log('routes',routes)
      const newRoutes = generateRoutes(routes)
      console.log('newRoutes',newRoutes)
      routes.splice(0, routes.length)
      routes.unshift(...newRoutes)
    }
  },
  
  plugins: [
    { src: '~/plugins/global-mixin.js' },
    { src: '~/plugins/vue-i18n.js', injectAs: 'i18n' }
  ]
  // i18n: {
  //   locales: [
  //     'vi',
  //     {
  //       code: 'en',
  //       iso: 'en-US',
  //       file: 'en.json',
  //       name: 'English'
  //     },
  //   ],
  //   strategy: 'prefix_except_default',
  //   defaultLocale: "en",
  //   vueI18n: {
  //     fallbackLocale: 'en'
  //   },
  // },
  // parsePages: false,
  // pages: {
  //   about: {
  //     en: '/about-us', // -> accessible at /about-us (no prefix since it's the default locale)
  //     vi: '/sobre'     // -> accessible at /es/sobre
  //   }
  // }

  // plugins: [
  //   {
  //     src: '~/plugins/i18n.js'
  //   }
  // ]


};
