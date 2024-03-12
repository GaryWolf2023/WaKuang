<template>
  <router-link class="icon-item"  active-class="icon-item_active" :to="props.path">
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

watch(route.path, (oldValue, newValue) => {
  if(props.path === newValue) {
    iconSrc.value = props.activeIcon
  }
})

</script>