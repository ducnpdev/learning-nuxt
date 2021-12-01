const { has } = require('lodash')

const { ROUTES_ALIASES, DEFAULT_LOCALE, LOCALES } = require('../config')

function generateRoutes (baseRoutes, locales = []) {
  console.log('baseRoutes:',baseRoutes)
  const newRoutes = []
  locales = locales.length ? locales : LOCALES
  baseRoutes.forEach((baseRoute) => {
    locales.forEach((locale) => {
      const { component } = baseRoute
      let { path, name, children } = baseRoute
      if (children) {
        children = generateRoutes(children, [locale])
      }
      const { code } = locale
      if (has(ROUTES_ALIASES, `${name}.${code}`)) {
        path = ROUTES_ALIASES[name][code]
      }
      if (code !== DEFAULT_LOCALE) {
        if (path.match(/^\//) === null) {
          path = `/${path}`
        }
        path = `/${code}${path}`
      }
      const route = { path, component }
      if (name) {
        name += `-${code}`
        route.name = name
      }
      if (children) {
        route.children = children
      }
      newRoutes.push(route)
    })
  })
  return newRoutes
};

function cloneRoute (route) {
  const clonedRoute = Object.assign({}, route)
  if (route.meta) {
    clonedRoute.meta = Object.assign({}, route.meta)
  }
  if (route.params) {
    clonedRoute.params = Object.assign({}, route.params)
  }
  if (route.query) {
    clonedRoute.query = Object.assign({}, route.query)
  }
  return clonedRoute
};

module.exports = {
  generateRoutes,
  cloneRoute
}
