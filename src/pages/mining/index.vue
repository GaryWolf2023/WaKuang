<template>
    <Layout_imp :title="title" :hidBack="true">
      <div class="user-machine-info">
        <div></div>
        <div class="sub-title"></div>
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
  .machine-list {
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