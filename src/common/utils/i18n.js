import {createI18n} from 'vue-i18n'

function loadLocaleMessages() {
    const locales = import.meta.glob("/public/local/*.json")
    const messages = {}
    Object.keys(locales).forEach(key => {
        const res = key.match(/[A-Za-z0-9-_,\s]+(?=\.json$)/i)
        locales[key]().then(data => {
            messages[res[0]] = data.default
        })
    })
    return messages
}

export const i18n = createI18n({
    legacy: false,
    locale: "zh_CN",
    fallbackLocale: "",
    messages: loadLocaleMessages(),
    silentTranslationWarn: true,
})