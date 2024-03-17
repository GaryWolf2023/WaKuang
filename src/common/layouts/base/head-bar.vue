<template>
  <div :class="['header-bar', setHeaderOpacity?'is-opacity':'']">
    <slot name="front">
      <div class="back" @click="$router.back()">
        <img src="../../../assets/common/svg/left-arrow.svg" alt="left-arrow" style="font-size: 8px" />
      </div>
    </slot>
    <slot name="middle">
      <div class="title" v-if="title">
        {{ props.title }}
      </div>
    </slot>
    <slot name="behind">
      <div class="other">
        <img src="../../../assets/common/svg/left-arrow.svg" alt="left-arrow" style="font-size: 8px" />
      </div>
    </slot>
  </div>
</template>

<script setup>
import {computed} from 'vue'
import {useRoute} from 'vue-router'
const props = defineProps({
  title: String,
  hidBack: Boolean
})

const route = useRoute()
const setHeaderOpacity = computed(() => route.meta.layout === "auth")

// style
const hidden = props.hidBack ? "hidden" : "visible"

</script>


<style lang="scss" >
@import "@/style/var";
.is-opacity {
  background-color: rgba(0,0,0,0) !important;
}
.header-bar {
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #FFFFFF;
  background-color: $head-bar-bg;
  .back {
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: v-bind(hidden);
  }
  .title {
    width: 100%;
    font-size: 17px;
    line-height: 28px;
    text-align: center;
  }
  .other {
    visibility: hidden;
  }
}

</style>

