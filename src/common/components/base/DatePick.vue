<template>
  <div class="date-pick">
    <div @click="openDrawer">
      {{ value }}
      <svg width="8.000000" height="4.000000" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <desc>
          Created with Pixso.
        </desc>
        <defs/>
        <path id="三角形" d="M4 4L8 0L0 0L4 4Z" fill="#616161" fill-opacity="1.000000" fill-rule="evenodd"/>
      </svg>
    </div>
    <van-action-sheet v-model:show="show" >
      <van-date-picker
          v-model="currentDate"
          :min-date="minDate"
          :max-date="maxDate"
          :confirm-button-text="$t('common.action.confirm')"
          :cancel-button-text="$t('common.action.cancel')"
          @confirm="handleConfirm"
          @cancel="handleCancel"
      />
    </van-action-sheet>
  </div>
</template>

<script setup>
import {ref, watch} from "vue";

const props = defineProps({
  title: String
})

const minDate = new Date(2020, 0, 1)
const maxDate = new Date(2025, 5, 1)
const currentDate = ref();
const show = ref(false)
const value = ref()

watch(() => props.title, (val) => {
  value.value = val
},{immediate: true})

const openDrawer = () => {
  show.value = true
}

const handleConfirm = () => {
  show.value = false
  value.value = currentDate
}

const handleCancel = () => {
  show.value = false
}


</script>

<style lang="scss" scoped>
@import "@/style/var";
.date-pick {
  :deep(.van-picker) {
    background-color: $input-bg;
    .van-picker-column__item {
      color: #FFFFFF;
    }
    .van-picker__mask {
      background-image: none;
    }
  }
}
</style>