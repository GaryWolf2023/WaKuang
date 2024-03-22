<template>
  <div class="count-down">
    <slot name="showValue" :value="showSecond" :active="isActive" >
      <div>
        {{ !isActive ? $t('register.getVerificationCode'):$t('register.resend') }}{{ !isActive ? "" : "(" + showSecond + ")" }}
      </div>
    </slot>
  </div>
</template>

<script setup>
import {ref, defineExpose} from "vue";

const props = defineProps({
  number: {
    type: Number,
    default: 59
  }
})

let startTime = ref(0)  // 开始时间
let nowTime = ref(0)    // 循环记录当前时间
let endTime = ref(0)    //倒计时结束时间
let countDown = ref(59) //倒计时总数
let showSecond = ref(1) //表显
let precision = ref(30) //精度
let isActive = ref(false)

const startCountDown = () => {
  if (isActive.value) {
    return
  }
  isActive.value = true
  startTime.value = new Date().getTime()
  endTime.value = startTime.value + countDown*1000
  showSecond.value = countDown.value
  let timer = setInterval(() => {
    nowTime.value = new Date().getTime()
    if ((nowTime.value - startTime.value)%1000 > (1000 - precision.value) || (nowTime.value - startTime.value)%1000 < precision.value) {
      showSecond.value = countDown.value - Math.round((nowTime.value - startTime.value)/1000)
    }
    if (showSecond.value<=1) {
      isActive.value = false
      clearInterval(timer)
    }
  }, 20)
}

defineExpose({
  startCountDown
})

</script>

<style lang="scss" scoped>

</style>