import { defineStore } from 'pinia'
export const useUserStore = defineStore('user',{
   state: () => ({
      userinfo: {},
      token: '',

   }),
   actions: {
      async login(form) {
        //  let res = await getToken(form)
        //  console.log(res)
      },
   },
   getters: {
      userinfo(state) {
         return state.userinfo
      }
   }
})