<template>
    <div class="input-out-box">
      <van-field
          :class="{'input-focused': isFocused, 'input-error': isError}"
          @blur="isFocused=false"
          @focus="isFocused=true"
          v-bind="$attrs"
      >
      </van-field>
      <p class="error-msg">{{props.errorMsg}}</p>
    </div>
</template>

<script setup>
import {ref, watch, reactive} from 'vue'

let isFocused = ref(false)
let isError = ref(false)

const props = defineProps({
  status: String,
  errorMsg: String
})
const emit = defineEmits(['update:errorMsg'])
const status = reactive({
  danger: '',
  primary: ''
})
watch(isFocused, (val) => {
  if (val) {
    isError.value = false
    emit('update:errorMsg', '')
  }
})
watch(
    () => props.errorMsg,
    (val) => {
  if (!!val) {
    isError.value = true
  }
},{immediate:true})

</script>

<style lang="scss" scoped>
@import '@/style/var';
.input-out-box {
  height: 60px;
  :deep(van-cell) {
    margin: 20px 0;
    padding: 0;
    border: 0;
  }
  :deep(.input-focused) {
    border-bottom: 1px solid $primary-color;
    border-radius: 6px;
    box-shadow: 0 0 0 2px $primary-color;
  }
  :deep(.input-error) {
    border: 1px solid $error-color;
    box-shadow: 0 0 1px 2px $error-color;
    border-radius: 6px;
  }
  .error-msg {
    height: 14px;
    font-size: 12px;
    color: $error-color;
  }
}
</style>