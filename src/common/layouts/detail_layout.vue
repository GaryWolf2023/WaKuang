<template>
  <Wrapper>
    <slot></slot>
  </Wrapper>
</template>


<script>


import {defineComponent} from "vue";
import Wrapper from "./base/wrapper.vue";

export default defineComponent({
  components: {Wrapper}
})
</script>