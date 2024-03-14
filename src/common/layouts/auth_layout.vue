<template>
  <Wrapper :title="props.title" :hid-tab-bar="props.hidTabBar" :hid-head-bar="props.hidHeadBar">
    <slot></slot>
  </Wrapper>
</template>

<script setup>
import Wrapper from "./base/wrapper.vue";

const props = defineProps({
  title: String,
  hidTabBar: Boolean,
  hidHeadBar: Boolean
})

</script>

<style></style>