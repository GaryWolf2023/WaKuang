<template>
  <Layout_imp :title="$t('my.myEarning')">
    <div class="income-info">
      <img src="../../assets/pages/income_banner.png" alt="income" style="font-size: 8px" />
      <div class="info">
        <p style="font-size: 14px;">{{$t("user.income.headTitle")}}</p>
        <p style="font-size: 30px; font-weight: 700; margin-top: 6px">1800.00</p>
      </div>
    </div>
    <div class="income-list">
      <div class="search-header">
        <DatePick :title="$t('user.income.beginTime')" />
        <DatePick :title="$t('user.income.endTime')" />
      </div>
      <div class="list-content">
        <van-list
            v-model:loading="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            class="list"
        >
          <div class="income-item" v-for="(item, index) in list" :key="index">
            <div>
              <p>1********9@qq.com</p>
              <p>2024.01.01 12:05:04</p>
            </div>
            <div style="font-size:12px; color: #727272; margin-top: 6px">
              <p>一代 (1*********@**m)，獎勵1000.00</p>
              <p>2024.03.08</p>
            </div>
          </div>
        </van-list>
      </div>
    </div>
  </Layout_imp>
</template>

<script setup>

import Layout_imp from "@/common/layouts/common/layout_imp.vue";
import {ref} from "vue";
import DatePick from "@/common/components/base/DatePick.vue";
const list = ref([]);
const loading = ref(false);
const finished = ref(false);
const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 5; i++) {
      list.value.push(list.value.length + 1);
    }
    // 加载状态结束
    loading.value = false;

    // 数据全部加载完成
    if (list.value.length >= 20) {
      finished.value = true;
    }
  }, 1000);
};

</script>

<style lang="scss" scoped>
@import "@/style/var";
.income-info {
  position: relative;
  color: #FFFFFF;
  img {
    width: 100%;
  }
  .info {
    position: absolute;
    top: 24px;
    left: 38px;
  }
}
.income-list {
  margin-top: 10px;
  .search-header {
    margin: 13px 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .list-content {
    .list {
      display: grid;
      grid-gap: 10px;
      .income-item {
        border-radius: 10px;
        background-color: $input-bg;
        padding: 16px 14px;
        div {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>