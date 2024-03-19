<template>
  <Dialog :show-dialog="open">
    <div>
      <img src="../../../assets/common/operate_suc.png" alt="">
      <span>{{ props.msg }}</span>
    </div>
  </Dialog>
</template>

<script setup>
import {ref, computed} from "vue"
import Dialog from "./Dialog.vue"

const props = defineProps({
  open: Boolean,
  msg: String
})
let open = computed(() => {
  return props.open
})

</script>

<style lang="scss" scoped>

</style>