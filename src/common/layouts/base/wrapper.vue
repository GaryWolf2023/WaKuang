<template>
  <main class="main base-wrapper">
    <header class="header">
      <slot name="header">
        <HeadBar v-if="!props.hidHeadBar" :hidBack="props.hidBack" :title="props.title" />
      </slot>
    </header>
    <div class="content">
      <slot></slot>
    </div>
    <footer ref="footer" class="footer" :class="footerFix ? 'footer_fixed' : 'footer_normal' ">
      <slot name="footer">
        <TabBar v-if="!props.hidTabBar" />
      </slot>
    </footer>
  </main>
</template>

<script setup>
import TabBar from "./tab-bar.vue";
import { onMounted, ref } from "vue";
import HeadBar from "@/common/layouts/base/head-bar.vue";
const props = defineProps({
  footerFix: {
    type: Boolean,
    default: true
  },
  // tab-bar
  hidTabBar: Boolean,

  // header-bar
  title: String,
  hidBack: Boolean,
  hidHeadBar: Boolean
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

