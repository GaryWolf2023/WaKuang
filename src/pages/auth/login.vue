<template>
    <Layout_imp :hid-tab-bar="false">
      <div class="login-top">
        <img src="/public/logo/logo.png" alt="" class="login-logo">
        <div class="language-change">{{$t('login.changeLanguage1')}}</div>
      </div>
        <van-form class="login-form">
            <van-cell-group inset>
                <van-field name="用户名" label="" :placeholder="$t('login.PromptOfUser')"
                    :rules="[{ required: true, message: $t('login.PromptOfUser') }]" />
                <div class="zhan-wei"></div>
                <van-field type="password" name="密码" label="" :placeholder="$t('login.PromptOfPassWord')"
                    :rules="[{ required: true, message: $t('login.PromptOfPassWord') }]" />
            </van-cell-group>

        </van-form>
        <div class="login-button">
          <p class="forget-pass">{{$t('login.forgetPassword')}}</p>
          <van-button success block native-type="submit" >
            {{ $t('login.login') }}
          </van-button>
          <p class="register">{{$t('login.registerAccount')}}</p>
        </div>
    </Layout_imp>
</template>

<script setup>
import Layout_imp from "@/common/layouts/common/layout_imp.vue";

</script>

<style lang="scss" scoped>
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
  .language-change {
    position: absolute;
    top: 5px;
    right: 16px;
    font-size: 16px;
    color: #D1D0CF;
  }
  :deep(.van-form) {
    .van-cell-group {
      .van-cell {
        padding: 0;
      }
      .zhan-wei {
        height: 14px;
        width: 100%;
      }
    }
  }
  .login-button {
    margin: 0 16px;
    .forget-pass {
      height: 20px;
      width: 100%;
      margin: 0;
      padding: 0;
      font-size: 14px;
      text-align: right;
    }
    .register {
      text-align: center;
    }
  }
}
</style>