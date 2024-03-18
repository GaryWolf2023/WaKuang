<template>
  <Layout_imp :title="$t('user.machine.title')">
    <div class="user-machine">
      <van-list
          v-model:loading="loading"
          :finished="finished"
          :finished-text="$t('common.data.noMore')"
          @load="onLoad"
          class="order-list"
      >
        <div class="order-item" v-for="(item, index) in list" :key="index">
          <div class="item-header">
            <p> {{ $t('user.machine.orderId') }}: 20210101120504</p>
<!--            <span :style="item.orderStatus === 1 ? 'color:#66E0FF' : 'color:#616161'" >{{ item.orderStatus === 1 ? $t('user.machine.orderStatus_1') : $t('user.machine.orderStatus_2') }}</span>-->
            <span style="color:#66E0FF" >{{$t('user.machine.orderStatus_1')}}</span>
          </div>
          <div class="item-divider" />
          <div class="item-footer">
            <p style="margin-bottom: 10px">礦機11</p>
            <div class="item-desc">
              <p style="margin-bottom: 10px">
                <span> {{ $t('mining.HMT') }} </span>
                <span> 1000.00 </span>
              </p>
              <p>
                <span>{{ $t('user.machine.buyTime') }}</span>
                <span>2024.01.01 12:05:04</span>
              </p>
            </div>
          </div>
        </div>
      </van-list>
    </div>
  </Layout_imp>
</template>

<script setup>

import Layout_imp from "@/common/layouts/common/layout_imp.vue";

import {ref} from "vue";

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

.order-list {
  display: grid;
  grid-gap: 10px;
  font-size: 16px;
  .order-item {
    border-radius: 10px;
    padding: 14px;
    background-color: $input-bg;
    .item-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
    }
    .item-divider {
      height: 1px;
      background-color: #282828;
      margin: 12px 0px;
    }
    .item-footer {
      .item-desc {
        p {
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #727272;
        }
      }
    }
  }
}

</style>