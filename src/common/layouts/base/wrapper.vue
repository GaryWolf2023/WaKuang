<template>
  <main class="main base-wrapper">
    <header ref="header" class="footer" :class="[footerFix ? 'header_fixed' : 'header_normal']">
      <slot name="header">
        <div class="header-content">
          <HeadBar v-if="!props.hidHeadBar" :hidBack="props.hidBack" :title="props.title" />
        </div>
      </slot>
    </header>
    <div class="content">
      <slot></slot>
    </div>
    <footer ref="footer" class="footer" :class="footerFix ? 'footer_fixed' : 'footer_normal' ">
      <slot name="footer">
        <div class="footer-content">
          <TabBar v-if="!props.hidTabBar" />
        </div>
      </slot>
    </footer>
  </main>
</template>

<script setup>
import TabBar from "./tab-bar.vue";
import { onMounted, ref, computed } from "vue";
import {useRoute} from 'vue-router'
import HeadBar from "@/common/layouts/base/head-bar.vue";
const props = defineProps({
  footerFix: {
    type: Boolean,
    default: true
  },
  headerFix: {
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
const header = ref(null)
const footerHeight = ref("")
const headerHeight = ref("")


onMounted(() => {
    footerHeight.value = `${footer.value.clientHeight}px`;
    headerHeight.value = `${header.value.clientHeight}px`;
})

</script>

<style lang="scss">
.main {
  box-sizing: border-box;
  padding-top: v-bind(headerHeight);
  padding-bottom: v-bind(footerHeight);
  .header {
    &_fixed {
      width: 100%;
      position: fixed;
      top: 0;
      z-index: 2;
    }
  }
  .content {
    margin: 10px;
    position: relative;
  }
  .footer {
    &_fixed {
      width: 100%;
      position: fixed;
      bottom: 0;
    }
  }
}
</style>

