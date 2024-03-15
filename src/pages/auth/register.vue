<template>
  <Layout_imp :hid-tab-bar="true" :title="$t('register.pageTitle')">
    <div class="register-form">
      <van-cell-group inset :style="{marginBottom:'14px'}">
        <van-field class="change-style" v-model="registerForm.account" :placeholder="$t('register.accountPrompt')"/>
      </van-cell-group>
      <van-cell-group inset :style="{marginBottom:'14px'}">
        <van-field class="change-style" v-model="registerForm.mail" :placeholder="$t('register.emailPrompt')" />
      </van-cell-group>
      <van-cell-group inset :style="{marginBottom:'14px'}">
        <van-field class="change-style" v-model="registerForm.code" :placeholder="$t('register.verificationCode')" />
      </van-cell-group>
      <van-cell-group inset :style="{marginBottom:'14px'}">
        <van-field class="change-style" v-model="registerForm.password" type="password" :placeholder="$t('register.password')" />
      </van-cell-group>
      <van-cell-group inset :style="{marginBottom:'40px'}">
        <van-field class="change-style" v-model="registerForm.confirmPassword" type="password" :placeholder="$t('register.confirmPassword')" />
      </van-cell-group>
      <van-cell-group inset :style="{}">
        <van-button  :style="{width:'100%', fontSize:'16px', backgroundColor:'rgb(102, 224, 255)'}">{{$t('register.createAccount')}}</van-button>
      </van-cell-group>
    </div>
  </Layout_imp>
</template>

<script setup>
import {ref, reactive} from 'vue'

import Layout_imp from "@/common/layouts/common/layout_imp.vue";

let onePassword = ref('password')
let twoPassword = ref('password')
let registerForm = reactive({
  account: '',
  mail:'',
  code:'',
  password:"",
  confirmPassword:''
})
</script>

<style lang="scss" scoped>
.register-form {
  margin-top: 82px;
  font-size: 16px;
  :deep(.van-cell) {
    font-size: 16px;
    padding: 0 0 0 20px;
    height: 46px;
    line-height: 46px;
    background-color: #1c1c1c;
  }
}
</style>