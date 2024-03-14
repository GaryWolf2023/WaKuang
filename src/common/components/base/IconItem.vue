<template>
  <router-link class="icon-item" active-class="icon-item_active" :to="props.path">
    <div class="icon">
      <img :src="iconSrc" alt="icon" />
    </div>
    <div class="title">
      <p>{{ props.title }}</p>
    </div>
  </router-link>
</template>

<script setup>

import {ref, watch} from "vue";
import {useRoute} from "vue-router";

const props = defineProps({
  path: String,
  icon: String,
  activeIcon: String,
  title: String
})

const iconSrc = ref("")
const route = useRoute()

iconSrc.value = props.icon

watch(() => route.path, (path) => {
  if(props.path === path) {
    iconSrc.value = props.activeIcon
  }
}, { immediate: true })

</script>

<style lang="scss" scoped>
.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #616161;

  &.icon-item_active {
    color: #66E0FF
  }

  .title {
    display: inline;
    font-size: 10px;
    line-height: 14px;
    margin-top: 4px;
  }
  .icon {
    display: inline;
    height: 24px;
  }
}
</style>