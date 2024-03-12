<template>
  <div class="icon-item">

  </div>
</template>

<script setup>

import {useRoute} from "vue-router";

const props = defineProps({
  path: String,
  icon: String,
  title: String
})

const route = useRoute()


</script>