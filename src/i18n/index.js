import { createI18n } from 'vue-i18n'

import ru from './ru.json'
import en from './en.json'

const messages = {
    ru,
    en
}
const LocaleStorageLang = localStorage.getItem('lang')
    // const LocaleStorageLang = 'ru'

const i18n = createI18n({
    locale: LocaleStorageLang,
    messages
})

function setLanguage(lang) {
    i18n.locale = lang
        // return lang
}

export default i18n