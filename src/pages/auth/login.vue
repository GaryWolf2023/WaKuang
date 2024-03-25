<template>
    <Layout_imp :hid-tab-bar="true" :hidBack=true>
      <template v-slot:header>
        <div class="reset-header" @click="showDrawer=true">
          {{showLang}}
        </div>
      </template>
      <div class="login-top">
        <img src="/public/logo/logo.png" alt="" class="login-logo">
      </div>
       <re-input v-model:errorMsg="msg" type="password" v-model="testData"></re-input>
      <van-form @failed="onFailed">
      <van-cell-group inset :style="{margin:'0 21px 14px'}">
        <van-field
            v-model="loginForm.username"
            name="account"
            :placeholder="$t('login.PromptOfUser')"
            :rules="[{ accountErrorPromt, message: $t('login.accountError') }]"
        />
      </van-cell-group>
      <van-cell-group inset :style="{margin:'0 21px'}">
        <van-field
            v-model="loginForm.password"
            type="password"
            name="password"
            :placeholder="$t('login.PromptOfPassWord')"
            :rules="[{ required: true, message: $t('login.passwordError') }]"
        />
      </van-cell-group>
      </van-form>
      <p class="forget-pass">
        <span  @click="forgetPassword">{{$t('login.forgetPassword')}}</span>
      </p>
      <van-cell-group inset :style="{margin:'0 21px',padding:'0'}">
        <van-button block native-type="submit" class="login-btn" >
            {{ $t('login.login') }}
        </van-button>
      </van-cell-group>
      <p class="register">
        <span @click="goRegister">{{$t('login.registerAccount')}}</span>
      </p>
      <LangBar :show-drawer="showDrawer" @close="handleCloseLang"></LangBar>
    </Layout_imp>
</template>

<script setup>
import {useRouter} from 'vue-router'
import {ref, reactive, computed, watch} from 'vue'

import LangBar from "@/common/components/base/LangBar.vue";
import Layout_imp from "@/common/layouts/common/layout_imp.vue";
import ReInput from "@/common/components/base/ReInput.vue";
import {useAppStore} from "@/pinia/modules/app.js"

const appStore = useAppStore()
const router = useRouter()


let msg = ref('123176253')
let testData = ref('')
watch(testData, (val) => {
  console.log(val)
},{immediate:true})

let lang = computed(()=>{
  return appStore.language
})

let showLang = computed(() => {
  let list = appStore.languageList
  let str = ''
  list.forEach((it) => {
    if (it.mark === lang.value) {
      str = it.short
    }
  })
  return str
})

let showDrawer = ref(false)
const handleCloseLang = (val) => {
  showDrawer.value = val
}

let loginForm = reactive({
  username: "",
  password: ""
})
const onFailed = () => {}
// 错误提示
const accountErrorPromt = () => {}
const passwordErrorPrompt = () => {}
// const rulesAccount = (msg) => accountPromt
const forgetPassword = () => {
  router.push({
    path: '/retrievePassword'
  })
}
const goRegister = () => {
  router.push({
    path: '/register'
  })
}
</script>

<style lang="scss" scoped>
.reset-header {
  height: 44px;
  line-height: 44px;
  padding-right: 16px;
  font-size: 16px;
  color: rgb(209, 208, 207);
  text-align: right;
  z-index: 3;
}
.login-top {
  height: 217px;
  width: 100%;
  position: relative;
  .login-logo {
    height: 80px;
    width: 80px;
    position: absolute;
    top: 101px;
    left: calc(50% - 40px);
  }
}
:deep(.van-cell-group) {
  background-color: #1c1c1c;
  border-radius: 6px;
  padding: 0;
  border: none;
}
:deep(.van-cell) {
  height: 46px;
  line-height: 46px;
  padding: 0 0 0 20px;
  font-size: 16px;
  color: rgb(209, 208, 207);
  background-color: #1c1c1c;
  .van-field__control {
    color: rgb(209, 208, 207);
  }
  .van-field__control::placeholder {
    color: #616161;
  }
}
:deep(.login-btn) {
  background-color: rgb(102, 224, 255);
  height: 46px;
  font-size: 16px;
  color: rgb(18, 17, 15);
  border: none;
}
.forget-pass {
  height: 50px;
  line-height: 50px;
  width: calc(100% - 48px);
  margin: 0;
  padding: 0 24px;
  font-size: 14px;
  text-align: right;
  color: rgb(97, 97, 97);
}
.register {
  text-align: center;
  margin-top: 18px;
  font-size: 14px;
  color: rgb(97, 97, 97);
}
</style>