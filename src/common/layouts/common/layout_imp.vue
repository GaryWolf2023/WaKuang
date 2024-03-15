<template>
  <component :is="getLayout()">
    <template v-for="(index, name) in $slots" v-slot:[name]>
      <slot :name="name" />
    </template>
  </component>
</template>

<script setup>
import { defineAsyncComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()
const layout = ref("")
const metaData = ref(route.meta);


onMounted(() => {
  metaData.value = route.meta
  layout.value = metaData.value.layout
})

const getLayout = () => {
  let type = ""
  layout.value === "" || !layout ? type = "main" : type = layout.value
  return defineAsyncComponent(() => {
    return import(`../${type}_layout.vue`)
  },)
}
</script>