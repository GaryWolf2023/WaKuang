<template>
  <div class="header-bar">
    <slot name="front">
      <div class="back" v-if="!hidBack">
      </div>
    </slot>
    <slot name="middle">
      <div class="title" v-if="title">
        {{ props.title }}
      </div>
    </slot>
    <slot name="behind">
      <div class="other">
      </div>
    </slot>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  hidBack: Boolean
})
</script>


<style lang="scss" >

.header-bar {
  padding: 8px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>

