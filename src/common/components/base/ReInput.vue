<template>
    <div class="input-out-box">
      <van-field
          v-model="data"
          :class="{'input-focused': isFocused, 'input-error': isError}"
          @blur="onBlur"
          @focus="isFocused=true"
          v-bind="$attrs"
      >
      </van-field>
      <p class="error-msg">{{props.errorMsg}}</p>
    </div>
</template>

<script setup>
// 还需新增校验，直接使用正则表达式校验
import {ref, watch, reactive} from 'vue'

let isFocused = ref(false)
let isError = ref(false)

const data = defineModel()

const props = defineProps({
  status: String,
  errorMsg: String,
  modelValue: String,
  regex: String
})
const emit = defineEmits(['update:errorMsg', 'update:modelValue'])

const status = reactive({
  danger: '',
  primary: ''
})
const onBlur = () => {
  isFocused.value = false
  if (!!props.regex) {
    let reg = new RegExp(props.regex, 'g');
    let isTrue = reg.test(props.modelValue)
    if (!isTrue) {
      emit('update:errorMsg', '格式错误')
    }
  }
}
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