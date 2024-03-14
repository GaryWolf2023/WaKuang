<template>
  <Wrapper :title="props.title" :hid-tab-bar="props.hidTabBar">
    <slot></slot>
  </Wrapper>
</template>

<script setup>
import Wrapper from "./base/wrapper.vue";
const props = defineProps({
  title: String,
  hidTabBar: Boolean
})

</script>

<style></style>