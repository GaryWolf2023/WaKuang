import {createI18n} from 'vue-i18n'
import {getStorageItem} from "@/common/utils/storage.js";

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
    globalInjection: true,
    legacy: false,
    locale: getStorageItem("cur-lang") ? getStorageItem("cur-lang") : "en_GB",
    fallbackLocale: "",
    messages: loadLocaleMessages(),
    silentTranslationWarn: true,
})