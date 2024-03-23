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
import {ref, watch} from 'vue'
let isFocused = ref(false)
let isError = ref(false)
const props = defineProps({
  status: String,
  errorMsg: String
})
watch(isFocused, (val) => {
  if (val) {
    isError.value = false
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
.input-out-box {
  height: 60px;
  :deep(van-cell) {
    margin: 20px 0;
    padding: 0;
    border: 0;
  }
  :deep(.input-focused) {
    border-bottom: 1px solid #66E0FF;
    border-radius: 6px;
    box-shadow: 0 0 0 2px #66E0FF;
  }
  :deep(.input-error) {
    border: 1px solid #F84747;
    box-shadow: 0 0 1px 2px #F84747;
    border-radius: 6px;
  }
  .error-msg {
    height: 14px;
    font-size: 12px;
    color: #F84747;
  }
}
</style>