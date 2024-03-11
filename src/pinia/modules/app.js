import { defineStore } from 'pinia'
export const useAppStore = defineStore('app', {
    state: () => ({
        showSetting: false,
        showSidebar: true,
        fullScreen: false, //全屏
        timezone: "", //时区
        timezone: [], //时区列表
        language: 'zh_CN',
        languageList: [
            { 'zh_CN': "simplified Chinese(简体中文)" },
            { 'zh_HK': "Chinese Traditional(繁体中文)" },
            { 'en_GB': "English" },
            { 'jp_JA': "Japanese"}
        ],
    }),
    actions: {
        openSetting() {
            this.showSetting = true
        },
        changeSidebar() {
            this.showSidebar = !this.showSidebar
        },
        changeFullScreen() {
            this.fullScreen = !this.fullScreen
        },
        changeLaguage(language) {
            this.language = language
        },
        changeFormSize(formSize) {
            this.formSize = formSize
        }
    },
    getters: {}
})