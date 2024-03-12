<template>
  <Wrapper>
    Detail
    <slot></slot>
  </Wrapper>
</template>

<script setup>

import Wrapper from "./base/wrapper.vue";

import { generateRandom } from '../utils/generateRandom'
console.log('object');
let a = generateRandom(6, 5, 2)
console.log('a----------', a);
</script>

<style></style>