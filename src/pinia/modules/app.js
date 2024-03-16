import { defineStore } from 'pinia'
import {setStorageItem} from "@/common/utils/storage.js";
import {i18n} from "@/common/utils/i18n.js";
export const useAppStore = defineStore('app', {
    state: () => ({
        showSetting: false,
        showSidebar: true,
        fullScreen: false, //全屏
        timezone: "", //时区
        timezoneList: [], //时区列表
        language: 'zh_CN',
        languageList: [
            { mark: 'zh_CN', name: "中文简体", visible: true, desc: "simplified Chinese(简体中文)" },
            { mark: 'zh_HK', name: "中文繁體", visible: true, desc: "Chinese Traditional(繁体中文)" },
            { mark: 'en_GB', name: "English", visible: true, desc: "English" },
            { mark: 'jp_JA', name: "日本語", visible: false, desc: "Japanese"}
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
        changeLanguage(language) {
            this.language = language
            setStorageItem("cur-lang", language)
        },
        changeFormSize(formSize) {
            this.formSize = formSize
        }
    },
    getters: {
        curLang(state) {
            return state.language
        },
        langList(state) {
            return state.languageList
        }
    }
})