import { createI18n } from "vue-i18n"
import en from "./en"
import pl from "./pl"

const messages = {
  en,
  pl
}

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "pl",
  messages
})

export default i18n
