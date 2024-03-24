<template>
  <Layout_imp :hid-tab-bar="true" :title="$t('register.pageTitle')">
    <div class="register-form">
      <van-form>
        <van-cell-group inset>
          <van-field class="change-style" v-model="registerForm.account" :placeholder="$t('register.accountPrompt')"/>
        </van-cell-group>
        <van-cell-group inset>
          <van-field class="change-style" v-model="handelMail" :placeholder="$t('register.emailPrompt')" />
        </van-cell-group>
        <van-cell-group inset>
          <van-field class="change-style" v-model="registerForm.code" :placeholder="$t('register.verificationCode')">
            <template #button>
              <CoutDown ref="countDown">
                <template #showValue="{ value, active }">
                  <van-button size="mini" plain hairline :class="['code-btn', active?'active-btn':'no-active-btn']" @click="startCountDown">
                    {{ !active ? $t('register.getVerificationCode'):$t('register.resend') }}{{ !active ? "" : "(" + value + ")" }}
                  </van-button>
                </template>
              </CoutDown>
            </template>
          </van-field>
        </van-cell-group>
        <van-cell-group inset>
          <van-field
              class="change-style"
              v-model="registerForm.password"
              type="password"
              :placeholder="$t('register.password')"
              :right-icon="showOnePass?'eye-o':'closed-eye'"
              @click-right-icon="showOnePass=!showOnePass"
              autocomplete="off"
          />
        </van-cell-group>
        <van-cell-group inset>
          <van-field
              class="change-style"
              v-model="registerForm.confirmPassword"
              type="password"
              :placeholder="$t('register.confirmPassword')"
              :right-icon="showTwoPass?'eye-o':'closed-eye'"
              @click-right-icon="showTwoPass=!showTwoPass"
              autocomplete="off"
          />
        </van-cell-group>
      </van-form>
      <van-cell-group inset :style="{marginTop:'40px'}">
        <van-button  :style="{width:'100%', fontSize:'16px', backgroundColor:'rgb(102, 224, 255)'}" @click="createAccount">{{$t('register.createAccount')}}</van-button>
      </van-cell-group>
    </div>
    <Dialog :showDialog="showDialog" :showHeader="false">
      <div class="dialog-lby">
        <img class="img-show-suc img-show" v-if="dialogStatus" src="../../assets/common/operate_suc.png" alt="">
        <img class="img-show-fai img-show" v-else src="../../assets/common/operate_fai.png" alt="">
        <div class="info">{{ dialogStatus?$t('common.status.success'): $t('common.status.fail') }}</div>
      </div>
    </Dialog>
  </Layout_imp>
</template>

<script setup>
import {ref, reactive, watch, computed} from 'vue'
import {useRouter} from 'vue-router'

import Dialog from "@/common/components/base/Dialog.vue"
import Layout_imp from "@/common/layouts/common/layout_imp.vue";
import {ProcessMail} from "@/common/utils/stringHandling.js"
import CoutDown from "@/common/components/base/CountDown.vue";

const router = useRouter()

let showDialog = ref(false)
let dialogStatus = ref(false)
let registerForm = reactive({
  account: '',
  mail:'',
  code:'',
  password:"",
  confirmPassword:''
})
let handelMail = computed(() => {
  if(!!registerForm.mail) {
    return ProcessMail(registerForm.mail)
  }else{
    return ''
  }
})
let countDown = ref(null)

// 控制眼睛
let showOnePass = ref(false)
let showTwoPass = ref(false)

const startCountDown = () => {
  countDown.value.startCountDown()
}
const createAccount = () => {
  showDialog.value = true
  dialogStatus.value = true
  if(dialogStatus.value) {
    const timer = setTimeout(() => {
      showDialog.value = false
      router.push({
        path: '/login'
      })
      clearTimeout(timer)
    },2000)
  }
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
:deep(.van-dialog) {
  .dialog-content {
    padding: 0;
  }
  .dialog-lby {
    width: 100%;
    .img-show {
      display: inline-block;
    }
    .img-show-suc {
      height: 53px;
      width: 59px;
      margin-left: calc(50% - 30px);
      margin-top: 41.71px;
    }
    .img-show-fai {
      height: 50px;
      width: 50px;
      margin-left: calc(50% - 25px);
      margin-top: 45px;
    }
    .info {
      margin-top: 12.29px;
      margin-bottom: 24px;
      text-align: center;
    }
    .van-button {
      height: 46px;
      width: 236px !important;
      margin: 23px 22px 24px;
    }
  }
}
</style>