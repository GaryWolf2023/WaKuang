<script setup>
import { ref } from 'vue'
defineProps({
  msg: String,
})

</script>

<template>
  <h1 class="111 hello" v-skeleton >{{ $t("HelloWorld") }}</h1>
</template>

<style scoped>
</style>
