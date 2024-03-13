<template>
  <Wrapper>
    Auth
    <button v-clipboard="'你好，我是你爸爸'">点击复制</button>
    <slot></slot>
  </Wrapper>
</template>

<script setup>
import Wrapper from "./base/wrapper.vue";
</script>

<style></style>