<template>
  <div class="lang-bar">
    <van-action-sheet
        v-model:show="show"
        :actions="actions"
        :cancel-text="$t('common.action.cancel')"
        close-on-click-action
        @select="chooseLang"
        @cancel="onCancel"
    />
  </div>
</template>

<script setup>
import { defineEmits, ref, watch } from "vue";
import { useAppStore } from "@/pinia/modules/app.js";
import {useI18n} from "vue-i18n";

const store = useAppStore()
const props = defineProps({
  showDrawer: Boolean,
})
const emit = defineEmits(['close'])
let { locale } = useI18n()

// Handle Data
const handleActions = (curLang) => {
  return store.langList.map((lang) => {
    const langObj = {
      mark: lang.mark,
      name: lang.name,
      visible: lang.visible
    }
    if(lang.mark === curLang) {
      langObj.className = "cur-lang"
    }
    return langObj
  }).filter(item => item.visible)
}
const show = ref(props.showDrawer)
const actions = ref(handleActions(store.curLang))



watch( () => props.showDrawer, (value) => {
  show.value = value
}, {immediate: true})

watch(() => store.curLang, (value) => {
  actions.value = handleActions(value)
}, {immediate: true})




// Event
const chooseLang = (action) => {
  close(false)
  store.changeLanguage(action.mark)
  locale.value = action.mark
}
const close = () =>{
  emit('close', false)
}
const onCancel = () => {
  close(false)
}

</script>

<style lang="scss" scoped>
@import "@/style/var";
:deep(.van-action-sheet) {
  background: rgba(0, 0, 0, 0);
  padding: 10px;
  border-radius: 0;
  .van-action-sheet__content {
    border-radius: 10px;
    .van-action-sheet__item {
      color: $input-text;
      background-color: $divider-color;
    }
    .cur-lang {
      color: $primary-color;
    }
    :not(:last-child) {
      border-bottom: 1px solid #494949;
    }
  }
  .van-action-sheet__gap {
    opacity: 0;
  }
  .van-action-sheet__cancel {
    border-radius: 10px;
    background: $divider-color;
    color: $input-text
  }
}
</style>