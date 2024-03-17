<template>
  <div class="machine-swiper">
    <swiper
        :modules="modules"
        :loop="true"
        :direction="'vertical'"
        :slides-per-view="5"
        :space-between="11"
        :autoplay="{
          delay: 1000,
          disableOnInteraction: false
        }"
        class="swiperBox"
    >
      <swiper-slide v-for="(item, index) in props.list" :key="index">
        <div class="item">
          <span class="machine-name">{{ item.name }}</span>
          <span class="expired-time">{{ item.expiredTime }}</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Autoplay } from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/css'

const props = defineProps({
  list: Array
})

const modules = [Autoplay]
// const option = ref({
//   slidesPerView: 5,
//   direction: 'vertical',
//   speed: 5000,//匀速时间，根据实际情况调节
//   autoplay: {
//     delay: 0,
//     stopOnLastSlide: false,
//     disableOnInteraction: false
//   },
//   autoHeight: true,
//   observer: true,
//   observeParents: true,
//   loop: true,
// })
</script>

<style lang="scss" scoped>
@import "@/style/var";

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  color: #FFFFFF;

  .expired-time {
    color: $input-placeholder;
  }
}

.machine-swiper {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 16px 21px;
  margin: auto;
  height: 166px;
  border-radius: 10px;
  border: 1px solid $border-color;

  .swiper {
    width: 100%;
    height: 100%;

    .swiper-slide {
      opacity: 1;
      width: 100%;
    }
  }
}
</style>