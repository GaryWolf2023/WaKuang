<template>
  <Layout_imp :hid-tab-bar="true" :title="$t('register.pageTitle')">
    <div class="register-form">
      <van-cell-group inset>
        <van-field class="change-style" v-model="registerForm.account" :placeholder="$t('register.accountPrompt')"/>
      </van-cell-group>
      <van-cell-group inset>
        <van-field class="change-style" v-model="registerForm.mail" :placeholder="$t('register.emailPrompt')" />
      </van-cell-group>
      <van-cell-group inset>
        <van-field class="change-style" v-model="registerForm.code" :placeholder="$t('register.verificationCode')">
          <template #button>
            <van-button size="mini" plain hairline :class="['code-btn', isActive?'active-btn':'no-active-btns']" @click="startCountDown">
              {{ !isActive ? $t('register.getVerificationCode'):$t('register.resend') }}{{ !isActive ? "" : "(" + showSecond + ")" }}
            </van-button>
          </template>
        </van-field>
      </van-cell-group>
      <van-cell-group inset>
        <van-field class="change-style" v-model="registerForm.password" type="password" :placeholder="$t('register.password')" />
      </van-cell-group>
      <van-cell-group inset>
        <van-field class="change-style" v-model="registerForm.confirmPassword" type="password" :placeholder="$t('register.confirmPassword')" />
      </van-cell-group>
      <van-cell-group inset :style="{marginTop:'40px'}">
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
let isActive = ref(false)
let registerForm = reactive({
  account: '',
  mail:'',
  code:'',
  password:"",
  confirmPassword:''
})
let startTime = ref(0)  // 开始时间
let nowTime = ref(0)    // 循环记录当前时间
let endTime = ref(0)    //倒计时结束时间
let countDown = ref(59) //倒计时总数
let showSecond = ref(1) //表显
let precision = ref(30) //精度
const startCountDown = () => {
  if (isActive.value) {
    return
  }
  isActive.value = true
  startTime.value = new Date().getTime()
  endTime.value = startTime.value + countDown*1000
  showSecond.value = countDown.value
  let timer = setInterval(() => {
    nowTime.value = new Date().getTime()
    console.log( showSecond.value, "             ", (nowTime.value - startTime.value)%1000)
    if ((nowTime.value - startTime.value)%1000 > (1000 - precision.value) || (nowTime.value - startTime.value)%1000 < precision.value) {
      showSecond.value = countDown.value - Math.round((nowTime.value - startTime.value)/1000)
    }
    if (showSecond.value<=1) {
      isActive.value = false
      clearInterval(timer)
    }
  }, 20)
}
</script>

<style lang="scss" scoped>
.register-form {
  margin-top: 82px;
  font-size: 16px;
  :deep(.van-cell-group) {
    background-color: #1c1c1c;
    border: none;
    margin: 0 21px 14px;
  }
  :deep(.van-cell) {
    position: relative;
    font-size: 16px;
    color: rgb(209, 208, 207);
    padding: 0 0 0 20px;
    height: 46px;
    line-height: 46px;
    background-color: #1c1c1c;
    .van-field__control {
      color: rgb(209, 208, 207);
    }
    .van-field__control::placeholder {
      color: #616161;
    }
    .code-btn {
      position: absolute;
      top: 8px;
      right: 18px;
      height: 30px;
      background-color: rgba( 256, 256, 256, 0);
      font-size: 14px;
      line-height: 30px;
      padding: 5px 18px;
      color: #616161;
    }
    .no-active-btn {
      border: 1px solid #616161;
    }
    .active-btn {
      border: 1px solid	rgb(102, 224, 255);
      color: rgb(102, 224, 255);
    }
  }
  :deep(.van-button) {
    height: 46px;
    font-size: 16px;
    color: rgb(18, 17, 15);
    border: none;
  }
}
</style>