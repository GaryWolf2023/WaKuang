<template>
  <Layout_imp :title="$t('my.myTeam')">
    <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        class="team-list"
    >
      <div class="team-item" v-for="(item, index) in list" :key="index">
        <p>1********9@qq.com</p>
        <p>2024.01.01 12:05:04</p>
      </div>
    </van-list>
  </Layout_imp>
</template>

<script setup>

import Layout_imp from "@/common/layouts/common/layout_imp.vue";
import {ref} from "vue";
import {useI18n} from "vue-i18n";

const { t } = useI18n()

const tabs = [t(''), t(''), t(''), t('')]
const active = ref(0);
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

.team-list {
  display: grid;
  grid-gap: 10px;
  .team-item {
    border-radius: 10px;
    background-color: $input-bg;
    padding: 16px 14px;
  }
}
</style>