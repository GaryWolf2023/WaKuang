<template>
  <div class="header-bar">
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
const props = defineProps({
  title: String,
  hidBack: Boolean
})

// style
const hidden = props.hidBack ? "hidden" : "visible"

</script>


<style lang="scss" >

.header-bar {
  padding: 8px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .back {
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: v-bind(hidden);
  }
  .title {
    width: 100%;
    text-align: center;
  }
  .other {
    visibility: hidden;
  }
}

</style>

