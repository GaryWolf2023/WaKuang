<template>
  <Layout_imp :title="$t('my.myTeam')">
    <div class="team-tab">
      <Tab :list="tabs" @change="handleChange"/>
    </div>
    <div class="list team-list" v-if="tabIndex !== 3">
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
    </div>
    <div class="list look-list" v-else>
      <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
      >
        <div class="look-item">
          <p>1********9@qq.com</p>
          <p>2024.01.01 12:05:04</p>
        </div>
      </van-list>
    </div>
  </Layout_imp>
</template>

<script setup>

import Layout_imp from "@/common/layouts/common/layout_imp.vue";
import Tab from "@/common/components/base/Tab.vue";
import {computed, ref} from "vue";
import {useI18n} from "vue-i18n";

const {t} = useI18n()

const tabs = computed(() => {
  return [
    t('user.team.tabs.title1'),
    t('user.team.tabs.title2'),
    t('user.team.tabs.title3'),
    t('user.team.tabs.title4')]
})
const tabIndex = ref(0);
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

const handleChange = (index) => {
  tabIndex.value = index
}

</script>

<style lang="scss" scoped>
@import "@/style/var";

.team-tab {
  margin-bottom: 10px;
  position: fixed;
  width: 100%;
  top: 50px;
  left: 0;
  box-sizing: border-box;
}

.list {
  margin-top: 60px;
}

.team-list {
  display: grid;
  grid-gap: 10px;
  .team-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    background-color: $input-bg;
    padding: 16px 14px;
  }
}

.look-list {
  display: grid;
  grid-gap: 10px;
  .look-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    background-color: $input-bg;
    padding: 16px 14px;
  }
}
</style>