<template>
  <Wrapper :title="props.title" :hid-tab-bar="true">
    <template v-for="(index, name) in $slots" v-slot:[name] :key="index">
      <slot :name="name" />
    </template>
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