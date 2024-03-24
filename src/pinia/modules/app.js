import { defineStore } from 'pinia'
import {getStorageItem, setStorageItem} from "@/common/utils/storage.js";
import {i18n} from "@/common/utils/i18n.js";


export const useAppStore = defineStore('app', {
    state: () => ({
        showSetting: false,
        showSidebar: true,
        fullScreen: false, //全屏
        timezone: "", //时区
        timezoneList: [], //时区列表
        language: getStorageItem("cur_lang") || 'zh_HK',
        languageList: [
            { mark: 'zh_CN', name: "中文简体", short: "中文(简)", visible: true, desc: "simplified Chinese(简体中文)" },
            { mark: 'zh_HK', name: "中文繁體", short: "中文(繁)", visible: true, desc: "Chinese Traditional(繁体中文)" },
            { mark: 'en_GB', name: "English", short: "EN", visible: true, desc: "English" },
            { mark: 'jp_JA', name: "日本語", short: "日本語", visible: false, desc: "Japanese"}
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
            console.log(getStorageItem("cur_lang"))
            this.language = language
            setStorageItem("cur_lang", language)
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