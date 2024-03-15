<template>
  <Layout_imp :title="$t('mining.buyMining')">
    <div class="machine-list">
      <div class="machine-item" v-for="(item, index) in machineList" :key="index">
        <div class="item-header">
          <img :src="item.logo" alt="logo" style="font-size: 8px" />
          <p>{{ item.name }}</p>
          <p>{{item.speed}}</p>
          <div>
            number
          </div>
        </div>
        <div class="item-divider" style="background-color: #282828; height: 1px; margin: 13px 0"></div>
        <div class="item-footer">
          <p class="machine-description">
            {{item.description}}
          </p>
        </div>
      </div>
    </div>
    <template v-slot:footer>
      <div class="buy-action">
        <button class="buy-button">
          {{ $t('mining.buy') }}
        </button>
      </div>
    </template>
  </Layout_imp>
</template>

<script setup>
import Layout_imp from "@/common/layouts/common/layout_imp.vue";
import {ref} from "vue";

const machineList = ref([])

machineList.value = [
  {name: "Canaan", logo: "", speed: "1.3", description: "該型號具備最快的算力，並且功耗相對較小，是現時市場上最高的礦機之一。 該型號具備最快的算力，並且功耗相對較小，是現時市場上最高的礦機之一。"},
  {name: "Canaan", logo: "", speed: "1.3", description: "該型號具備最快的算力，並且功耗相對較小，是現時市場上最高的礦機之一。 該型號具備最快的算力，並且功耗相對較小，是現時市場上最高的礦機之一。"},
  {name: "Canaan", logo: "", speed: "1.3", description: "該型號具備最快的算力，並且功耗相對較小，是現時市場上最高的礦機之一。 該型號具備最快的算力，並且功耗相對較小，是現時市場上最高的礦機之一。"},
  {name: "Canaan", logo: "", speed: "1.3", description: "該型號具備最快的算力，並且功耗相對較小，是現時市場上最高的礦機之一。 該型號具備最快的算力，並且功耗相對較小，是現時市場上最高的礦機之一。"}
]

</script>

<style lang="scss" scoped>
@import "@/style/var";

.machine-list {
  display: grid;
  grid-gap: 10px;
  .machine-item {
    border-radius: 10px;
    padding: 16px 14px;
    background-color: $input-bg;
    .item-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .item-footer {
      font-size: 13px;
      line-height: 20px;
    }
  }
}

.buy-action {
  padding: 10px 21px;
  background-color: $tab-bar-bg;
  .buy-button {
    width: 100%;
    border: none;
    font-size: 16px;
    border-radius: 6px;
    padding: 12px 0;
    background-color: $primary-color;
  }
}
</style>