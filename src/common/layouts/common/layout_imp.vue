<template>
  <component :is="getLayout()">
    <slot></slot>
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
  return defineAsyncComponent({
    loader: () => {
      return import(`../${type}_layout.vue`)
    },
    // loadingComponent: LoadingComponent,
    delay: 200,
    // errorComponent: ErrorComponent,
    timeout: 3000
  }
  )
}
</script>