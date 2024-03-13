<template>
    <Layout_imp>
        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field v-model="username" name="用户名" label="" placeholder="請輸入帳號"
                    :rules="[{ required: true, message: '請輸入帳號' }]" />
                <van-field v-model="password" type="password" name="密码" label="" placeholder="請輸入密碼"
                    :rules="[{ required: true, message: '請輸入密碼' }]" />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button block native-type="submit">
                  登録
                </van-button>
              <p>註冊帳號</p>
            </div>
        </van-form>
    </Layout_imp>
</template>

<script setup>
import Layout_imp from "@/common/layouts/common/layout_imp.vue";

</script>

<style lang="scss" scoped></style>