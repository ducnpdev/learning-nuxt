import { DEFAULT_LOCALE, LOCALES } from '~~/config'

export default function ({ app, store, route, error, redirect, hotReload }) {
  if (hotReload) return
  let locale = DEFAULT_LOCALE
  LOCALES.forEach(l => {
    const regexp = new RegExp(`^/${l.code}/`)
    if (route.path.match(regexp)) {
      locale = l.code
    }
  })
  if (LOCALES.findIndex(l => l.code === locale) === -1) {
    return error({ message: 'Page not found.', statusCode: 404 })
  }
  if (locale === store.state.i18n.currentLocale) return
  // Set locale
  store.dispatch('i18n/setLocale', { locale })
  app.i18n.locale = locale
  // If route is /<DEFAULT_LOCALE>/... -> redirect to /...
  if (locale === DEFAULT_LOCALE && route.fullPath.indexOf(`/${DEFAULT_LOCALE}`) === 0) {
    const regexp = new RegExp(`^/${DEFAULT_LOCALE}/`)
    return redirect(route.fullPath.replace(regexp, '/'))
  }
}
