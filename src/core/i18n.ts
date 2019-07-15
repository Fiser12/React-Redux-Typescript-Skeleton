import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import PathToRegexp, {compile, parse} from "path-to-regexp";
import {enTranslations} from "../translations/en";
import {esTranslations} from "../translations/es";
import {defaultLocale} from "./const";

export const generateLanguage = (locale, location) => {
    const ROUTE = "/:locale/:path*";
    const definePath = compile(ROUTE);
    const routeComponents = PathToRegexp(ROUTE).exec(location.pathname);

    let subPaths = null;
    if (routeComponents && routeComponents[2]) {
        subPaths = routeComponents[2].split("/");
    }

    return definePath({
        locale,
        path: subPaths,
    });
};

i18n.use(LanguageDetector).init({
    debug: false,
    defaultNS: "header",
    fallbackLng: defaultLocale,
    // we init with resources
    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ",",
    },
    keySeparator: false, // we use content as keys
    // have a common namespace used around the full app
    ns: ["header"],
    react: {
        wait: true,
    },
    resources: {
        en: enTranslations,
        es: esTranslations,
    },
    whitelist: ["es", "en"],
});

export default i18n;
