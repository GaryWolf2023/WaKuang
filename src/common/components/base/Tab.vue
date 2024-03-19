<template>
  <div class="tab">
    <ul class="tab-list">
      <li class="tab-item"
          :ref="el=>{items[index]=el}"
          :class="activeIndex === index ? 'tab-item_active' : 'tab-item_inactive'"
          v-for="(item, index) in props.list"
          :key="index"
          @click="handleClick(index)">
        <span>{{ item }}</span>
      </li>
    </ul>
    <span class="bar">
      </span>
  </div>
</template>

<script setup>
import {defineEmits, onMounted, ref} from "vue";

const props = defineProps({
  list: Array,
  tabType: String,
  isLink: Boolean
})
const emit = defineEmits(['change'])
const items = ref([])
const activeIndex = ref(0)
const activeWidth = ref("")
const activeDistance= ref("")

const getBarInfo = (index) => {
  activeWidth.value = `${items.value[index].offsetWidth}px`
  activeDistance.value = `${items.value[index].offsetLeft}px`
}

const change = (index) => {
  emit("change", index)
}

onMounted(() => {
  getBarInfo(activeIndex.value)
})

const handleClick = (index) => {
  activeIndex.value = index
  getBarInfo(activeIndex.value)
  change(index)
}

</script>

<style lang="scss" scoped>
@import "@/style/var";

.tab {
  padding: 12px 18px;
  font-size: 14px;
  position: relative;
  .tab-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .tab-item {
      &_active {
        color: $primary-color;
      }
      &_inactive {
      }
    }
  }
  .bar {
    width: v-bind(activeWidth);
    position: absolute;
    background: $primary-color;
    bottom: 0;
    height: 2px;
    border-radius: 2px;
    left: v-bind(activeDistance);
    transition: left ease-in-out 0.3s;
  }
}
</style>