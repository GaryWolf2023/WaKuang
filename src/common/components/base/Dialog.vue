<template>
  <div class="dialog">
    <van-dialog v-model:show="show" :showConfirmButton="false">
      <template v-slot:title>
        <div class="dialog-header" v-if="showHeader">
          <span style="width: 14px"></span>
          <p v-if="props.title">{{title}}</p>
          <img @click="handleClose" src="../../../assets/common/svg/close.svg" alt="close" style="font-size: 8px;width: 14px;" />
        </div>
      </template>
      <div class="dialog-content">
        <slot></slot>
      </div>
    </van-dialog>
  </div>
</template>

<script setup>

import {ref, watch, defineEmits} from "vue";


const props = defineProps({
  showDialog: Boolean,
  showHeader: Boolean,
  title: String,
  info: Object
})
const emit = defineEmits(['close'])

const show = ref(props.showDialog)

watch( () => props.showDialog, () => {
  show.value = props.showDialog
})

const close = (show) =>{
  emit('close',show)
}

const handleClose = () => {
  show.value = false
  close(false)
}


</script>

<style lang="scss" scoped>
:deep(.van-dialog) {
  background-image: url("../../../assets/common/card-bg.png");
  .van-dialog__header {
    padding: 0;
  }
}

.dialog-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-bottom: 1px solid #4E4E4E;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 400;
}
.dialog-content {
  padding: 20px;
}
</style>