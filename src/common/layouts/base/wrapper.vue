<template>
  <main class="main base-wrapper">
    <header>
      <slot name="header"></slot>
    </header>
    <div class="content">
      <slot></slot>
    </div>
    <footer ref="footer" class="footer" :class="footerFix ? 'footer_fixed' : 'footer_normal' ">
      <slot name="footer">
        <TabBar />
      </slot>
    </footer>
  </main>
</template>

<script setup>
import TabBar from "./tab-bar.vue";
import { onMounted, ref } from "vue";
const props = defineProps({
  footerFix: {
    type: Boolean,
    default: true
  }
})

const footer = ref(null)
const footerHeight = ref("")

onMounted(() => {
    footerHeight.value = `${footer.value.clientHeight}px`;
})

</script>

<style lang="scss">
.main {
  box-sizing: border-box;
  padding-bottom: v-bind(footerHeight);
  .footer {
    &_fixed {
      width: 100%;
      position: fixed;
      bottom: 0;
      padding: 4px 0;
    }
  }
}
</style>

