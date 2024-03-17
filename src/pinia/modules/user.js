import { defineStore } from 'pinia'
export const useUserStore = defineStore('user',{
   state: () => ({
      userinfo: {},
      token: '123123123123123123123',
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