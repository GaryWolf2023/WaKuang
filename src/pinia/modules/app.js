import { defineStore } from 'pinia'
export const useAppStore = defineStore('app', {
    state: () => ({
        showSetting: false,
        showSidebar: true,
        fullScreen: false,
        language: 'cn',
        languageList: [{ 'cn': "简体中文" }],
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