<template>
  <Layout_imp :title="$t('common.app.platformName')" :hidBack="true">
    <div class="data-item coin-data">
      <div class="item-header">
        <svg width="4.000000" height="14.000000" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <desc>
            Created with Pixso.
          </desc>
          <defs/>
          <rect id="矩形" rx="2.000000" width="4.000000" height="14.000000" fill="#66E0FF" fill-opacity="1.000000"/>
        </svg>
        <p style="margin-left: 4px">{{ $t("mining.tokenData") }}</p>
      </div>
      <div class="item-content">
        <div class="content">
          <span>{{ $t("mining.HMTPrice") }}</span>
          <p>{{ coinInfo.hmtPrice }}</p>
        </div>
        <div class="content">
          <span>{{ $t("mining.pledgeTheWholeNetwork") }}</span>
          <p>{{ coinInfo.pledgeTheWholeNetwork }}</p>
        </div>
        <div class="content">
          <span>{{ $t("mining.destructionQuantity") }}</span>
          <p>{{ coinInfo.destructionQuantity }}</p>
        </div>
      </div>
    </div>
    <div class="data-item machine-data" v-if="poolInfo">
      <div class="item-header">
        <svg width="4.000000" height="14.000000" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <desc>
            Created with Pixso.
          </desc>
          <defs/>
          <rect id="矩形" rx="2.000000" width="4.000000" height="14.000000" fill="#66E0FF" fill-opacity="1.000000"/>
        </svg>
        <p  style="margin-left: 4px">{{ $t("mining.poolData") }}</p>
      </div>
      <div class="item-content">
        <div class="content">
          <span>{{ $t("mining.networkComputingPower") }}</span>
          <p>{{ poolInfo.networkComputingPower }}</p>
        </div>
        <div class="content">
          <span>{{ $t("mining.currentPool") }}</span>
          <p>{{ poolInfo.currentPool }}</p>
        </div>
        <div class="content">
          <span>{{ $t("mining.cumulativeRelease") }}</span>
          <p>{{ poolInfo.cumulativeRelease }}</p>
        </div>
      </div>
    </div>
     <div class="data-item income-data" v-if="incomeInfo">
      <div class="item-header">
        <svg width="4.000000" height="14.000000" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <desc>
            Created with Pixso.
          </desc>
          <defs/>
          <rect id="矩形" rx="2.000000" width="4.000000" height="14.000000" fill="#66E0FF" fill-opacity="1.000000"/>
        </svg>
        <p style="margin-left: 4px">{{ $t("mining.myEarnings") }}</p>
      </div>
       <div class="item-content">
         <div class="content">
           <span>{{ $t("mining.yesterday") }}</span>
           <p>{{ incomeInfo.yesterday }}</p>
         </div>
         <div class="content">
           <span>{{ $t("mining.today") }}</span>
           <p>{{ incomeInfo.today }}</p>
         </div>
         <div class="content">
           <span>{{ $t("mining.accumulativeTotal") }}</span>
           <p>{{ incomeInfo.accumulativeTotal }}</p>
         </div>
       </div>
    </div>
  </Layout_imp>
</template>

<script setup>
import Layout_imp from "@/common/layouts/common/layout_imp.vue";
import {ref} from "vue";

const coinInfo = ref({
  hmtPrice: 0,
  pledgeTheWholeNetwork: 0,
  destructionQuantity: 0
})
const poolInfo = ref({
  networkComputingPower: 0,
  currentPool: 0,
  cumulativeRelease: 0
})
const incomeInfo = ref({
  yesterday: 0,
  today: 0,
  accumulativeTotal: 0
})
</script>

<style lang="scss" scoped>
@import "@/style/var";

.data-item {
  border-radius: 10px;
  padding: 14px 18px;
  background: $input-bg;
  .item-header {
    display: flex;
    align-items: center;
    color: $primary-color;
    font-size: 16px;
  }
  .item-content {
    margin-top: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
    text-align: center;
    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      span {
        font-size: 13px;
        color: #616161;
      }
      p {
        margin-top: 10px;
        font-size: 15px;
        color: $input-text;
      }
    }
  }
}

.machine-data {
  margin-top: 10px;
}

.income-data {
  margin-top: 10px;
}

</style>