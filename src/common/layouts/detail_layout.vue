<template>
  <Wrapper>
    Detail
    <slot></slot>
  </Wrapper>
</template>

<script setup>

import Wrapper from "./base/wrapper.vue";

// import { generateRandom } from '../utils/generateRandom'
// import { formatTime, getTimeZone } from '../utils/timeFormate'

// let a = generateRandom(6, 5, 2)
// console.log('a----------', a);
// let b = formatTime('yyyy-MM-dd-HH-mm-ss', new Date())
// console.log('b----------------------------', b);
// let time = getTimeZone()
// console.log(time);
</script>

<style></style>