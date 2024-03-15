<template>
    <Layout_imp :title="title" :hidBack="true">
      <div class="user-machine-info">
        <div class="hash-rate">
          <p style="font-size: 26px;color: #66E0FF; font-weight: 700">490.8</p>
          <p style="font-size: 13px;margin-top: 6px">{{ $t('mining.hashRate') }}</p>
        </div>
        <div class="sub-title">
          <svg width="51.000000" height="4.000000" viewBox="0 0 51 4" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
              <linearGradient id="paint_linear_1_318_0" x1="0.000000" y1="0.500000" x2="44.000000" y2="0.500000" gradientUnits="userSpaceOnUse">
                <stop stop-color="#66E0FF"/>
                <stop offset="1.000000" stop-color="#66E0FF" stop-opacity="0.000000"/>
              </linearGradient>
            </defs>
            <circle id="椭圆形备份 3" cx="49.000000" cy="2.000000" r="2.000000" fill="#66E0FF" fill-opacity="1.000000"/>
            <rect id="矩形备份" width="44.000000" height="1.000000" transform="matrix(-1 0 0 1 44 1.53305)" fill="url(#paint_linear_1_318_0)" fill-opacity="1.000000"/>
          </svg>
          <p style="font-size: 18px;color: #66E0FF;margin: 0 24px;">{{ $t('mining.miningData') }}</p>
          <svg width="51.000000" height="4.000000" viewBox="0 0 51 4" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
              <linearGradient id="paint_linear_1_317_0" x1="7.000000" y1="2.033051" x2="51.000000" y2="2.033051" gradientUnits="userSpaceOnUse">
                <stop stop-color="#66E0FF"/>
                <stop offset="1.000000" stop-color="#66E0FF" stop-opacity="0.000000"/>
              </linearGradient>
            </defs>
            <circle id="椭圆形" cx="2.000000" cy="2.000000" r="2.000000" fill="#66E0FF" fill-opacity="1.000000"/>
            <rect id="矩形" x="7.000000" y="1.533051" width="44.000000" height="1.000000" fill="url(#paint_linear_1_317_0)" fill-opacity="1.000000"/>
          </svg>
        </div>
        <div class="machine-list">
          <div class="machine-item" v-for="(item, index) in machineList" :key="index">
            <span class="machine-name">{{item.name}}</span>
            <span class="expired-time">{{item.expiredTime}}</span>
          </div>
        </div>
      </div>
      <div class="buy-machine">
        <img src="../../assets/pages/mining_banner.png" alt="buy machine" style="font-size: 8px" />
        <div class="buy-entrance">
          <p>{{ $t('mining.buyMining') }}</p>
          <button class="buy-button" @click="$router.push('/mining/buy')">{{ $t('mining.buyNow') }}
          </button>
        </div>
      </div>
    </Layout_imp>
</template>

<script setup>
import { ref } from 'vue'
import Layout_imp from "@/common/layouts/common/layout_imp.vue";
import {useI18n} from "vue-i18n";
const { t } =  useI18n()
const title = t("mining.platformName")

const machineList = ref([])

machineList.value = [
  {name: "Bitmain", expiredTime: "6 Day 4 Hour"},
  {name: "CanaanCanaan", expiredTime: "6 Day 4 Hour"},
  {name: "Innosilicon", expiredTime: "6 Day 4 Hour"},
  {name: "Ebang", expiredTime: "6 Day 4 Hour"},
]

</script>

<style lang="scss" scoped>
@import "@/style/var.scss";

.user-machine-info {
  border-radius: 10px;
  background-color: $input-bg;
  padding: 21px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .hash-rate {
    margin-top: 20px;
    border-radius: 200px;
    width: 136px;
    height: 136px;
    border: 3px solid $primary-color;
    box-shadow: 0 0 12px 4px rgba(102, 224, 255, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .sub-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 32px;
    margin-bottom: 13px;
  }

  .machine-list {
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid $border-color;
    padding: 16px 21px;
    display: grid;
    grid-gap: 11px;

    .machine-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 13px;
      .expired-time {
        color: $input-placeholder;
      }
    }
  }
}

.buy-machine {
  margin-top: 12px;
  position: relative;
  img {
    width: 100%;
  }
  .buy-entrance {
    position: absolute;
    top: 18px;
    left: 28.5px;
    p{
      color: #FFFFFF;
      font-size: 22px;
      font-weight: 500;
      line-height: 100%;
    }
    .buy-button {
      margin-top: 13px;
      color: #FFFFFF;
      padding: 3px 11px;
      font-size: 11px;
      line-height: 16px;
      border: none;
      border-radius: 13px;
      background: linear-gradient(180.00deg, rgb(178, 34, 215),rgb(64, 18, 139) 100%);
    }
  }
}
</style>