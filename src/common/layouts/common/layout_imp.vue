<template>
  <component :is="getLayout(layout)">
    <router-view />
  </component>
</template>

<script setup>
import {defineAsyncComponent, ref} from "vue";
import {useRoute} from "vue-router";

const layout = ref("")
layout.value =  useRoute().query.layout

const getLayout = (layout) => {
  return defineAsyncComponent((layout) =>
      let type = ""
      layout === "" ? type = "main" : type = layout
      import(`./components/${'main' && type === ''}_layout.vue`)
  )
}
</script>