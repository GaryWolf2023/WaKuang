import { defineStore } from 'pinia'
import {getStorageItem} from "@/common/utils/storage.js";
export const useUserStore = defineStore('user',{
   state: () => ({
      userInfo: {},
      token: 'Hello',
   }),
   actions: {
      async login(form) {
        //  let res = await getToken(form)
        //  console.log(res)
      },
      async getUserInfo() {
      },
      setToken(state) {
      }
   },
   getters: {
      authUserInfo(state) {
         return state.userInfo
      },
      authToken(state) {
         return state.token
      }
   }
})