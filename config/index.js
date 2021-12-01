const en = require("../locales/en");
const vi = require("../locales/vi");

const LOCALES = [
  {
    code: "en",
    iso: "en-US",
    name: "English",
  },
  {
    code: "vi",
    iso: "vi-VI",
    name: "Vietnamese",
  },
];
const DEFAULT_LOCALE = "en";
const I18N = {
  en,
  vi,
};
const ROUTES_ALIASES = {
  // about: {
  //   vi: "/a-propos",
  //   en: "/about-us",
  // },
  // category: {
  //   vi: "/categorie",
  // },
  // "category-slug": {
  //   vi: "/categorie/:slug",
  // },
};

module.exports = {
  LOCALES,
  DEFAULT_LOCALE,
  I18N,
  ROUTES_ALIASES,
};
