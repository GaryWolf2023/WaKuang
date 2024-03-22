<template>
  <Layout_imp :hid-tab-bar="true" :title="$t('forgetPassword.retrievePassword')">
    <div class="register-form">
      <van-form>
        <van-cell-group inset>
          <van-field class="change-style" v-model="registerForm.account" :placeholder="$t('forgetPassword.accountPrompt')" @blur="getUserInfo"/>
        </van-cell-group>
        <van-cell-group inset>
          <van-field class="change-style" v-model="handelMail" :placeholder="$t('forgetPassword.emailPrompt')" />
        </van-cell-group>
        <van-cell-group inset>
          <van-field class="change-style" v-model="registerForm.code" :placeholder="$t('forgetPassword.verificationCode')">
            <template #button>
              <CountDown ref="countDown">
                <template #showValue="{ value, active }">
                  <van-button size="mini" plain hairline :class="['code-btn', active?'active-btn':'no-active-btn']" @click="startCountDown">
                    {{ !active ? $t('register.getVerificationCode'):$t('register.resend') }}{{ !active ? "" : "(" + value + ")" }}
                  </van-button>
                </template>
              </CountDown>
            </template>
          </van-field>
        </van-cell-group>
        <van-cell-group inset>
          <van-field
              class="change-style"
              v-model="registerForm.password"
              :type="!showOnePass ? 'password' : 'text'"
              :placeholder="$t('forgetPassword.resetPassword')"
              :right-icon="showOnePass?'eye-o':'closed-eye'"
              @click-right-icon="showOnePass=!showOnePass"
              autocomplete="off"
          >
          </van-field>
        </van-cell-group>
        <van-cell-group inset>
          <van-field
              class="change-style"
              v-model="registerForm.confirmPassword"
              :placeholder="$t('forgetPassword.confirmPassword')"
              :type="!showTwoPass ? 'password' : 'text'"
              :right-icon="showTwoPass?'eye-o':'closed-eye'"
              @click-right-icon="showTwoPass=!showTwoPass"
              autocomplete="off"
          >
          </van-field>
        </van-cell-group>
      </van-form>
      <van-cell-group ref="count" inset :style="{marginTop:'40px'}">
        <van-button  :style="{width:'100%', fontSize:'16px', backgroundColor:'rgb(102, 224, 255)'}">{{$t('forgetPassword.retrievePassword')}}</van-button>
      </van-cell-group>
      <Dialog :showDialog="showDialog" :showHeader="false">
        <div class="dialog-lby">
          <img class="img-show-suc img-show" v-if="dialogStatus" src="../../assets/common/operate_suc.png" alt="">
          <img class="img-show-fai img-show" v-else src="../../assets/common/operate_fai.png" alt="">
          <div class="info">{{ dialogStatus?$t('common.status.success'): $t('common.status.fail') }}</div>
          <!--        <van-button  :style="{width:'100%', fontSize:'16px', backgroundColor:'rgb(102, 224, 255)'}">{{$t('common.action.confirm')}}</van-button>-->
        </div>
      </Dialog>
    </div>
  </Layout_imp>
</template>

<script setup>
import {ref, reactive, watch, computed} from 'vue'

import Layout_imp from "@/common/layouts/common/layout_imp.vue";
import CountDown from "@/common/components/base/CountDown.vue";

import Dialog from "@/common/components/base/Dialog.vue";
import {ProcessMail} from "@/common/utils/stringHandling.js";

let showDialog = ref(false)
let dialogStatus = ref(true)

watch(showDialog, (v) => {
  if (v) {
    const timer = setTimeout(() => {
      showDialog.value = false
      clearTimeout(timer)
    },2000)
  }
})

let isActive = ref(false)
let registerForm = reactive({
  account: '',
  mail:'',
  code:'',
  password:"",
  confirmPassword:''
})
let showOnePass = ref(false)
let showTwoPass = ref(false)
let countDown = ref(null)

const getUserInfo = () => {
}

let handelMail = computed(() => {
  if(!!registerForm.mail) {
    return ProcessMail(registerForm.mail)
  }else{
    return ''
  }
})

// 倒计时
const startCountDown = () => {
  countDown.value.startCountDown()
}

</script>


<style lang="scss" scoped>
.register-form {
  margin-top: 124px;
  font-size: 16px;
  :deep(.van-cell-group) {
    background-color: #1c1c1c;
    border: none;
    margin: 0 21px 14px;
  }
  :deep(.van-cell) {
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
      //margin: 0 18px 8px 0;
      padding: 5px 18px;
    }
    .no-active-btn {
      border: 1px solid #616161;
      color: rgb(97, 97, 97);
    }
    .active-btn {
      border: 1px solid	rgb(102, 224, 255);
      color: rgb(102, 224, 255);
    }
    .van-field__right-icon {
      height: 46px;
      //width: 18px;
      margin: 0 17px 0 0;
      line-height: 46px;
      font-size: 18px !important;
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