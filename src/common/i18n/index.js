import { createI18n } from 'vue-i18n'
import en from './language/en-US.json'
import cn from './language/zh-CN.json'
import hk from './language/zh-HK.json'

const message = {
  cn,
  en,
  hk
}

const i18n = createI18n({
  locale: 'cn', // 设置语言类型
  legacy: false, // 如果要支持compositionAPI，此项必须设置为false;
  globalInjection: true, // 全局注册$t方法
  messages: message,
})

export const languageList = [
  { label: '简体中文', value: 'cn' },
  { label: 'English', value: 'en' },
  { label: '繁體中文', value: 'hk' },
]

export default i18n