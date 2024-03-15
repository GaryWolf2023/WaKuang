<template>
  <layout_imp :hidHeadBar="true">
    <div class="user-wallet">
      <div class="wallet-balance">
        <img src="../../assets/pages/wallet_banner.png" alt="wallet" style="font-size: 8px"/>
        <div class="balance-info">
          <p style="font-size: 15px">{{ $t('my.wallet') }}</p>
          <p style="margin-top: 6px; font-size: 40px; font-weight: 700">20000.00</p>
        </div>
      </div>
      <div class="wallet-coin">
      </div>
    </div>
    <div class="nav-bar">
      <div class="nav-item" v-for="(item, index) in menuList" :key="index">
        <router-link :to="item.path" v-if="item.path">
          <img :src="`./../assets/pages/profile/menu-item_${index + 1}.png`" alt="icon" style="font-size: 8px"/>
          <p style="margin-top:9px">{{ item.title }}</p>
        </router-link>
        <div v-if="item.action" @lick="handleClick(item.action)">
          <img :src="`./../assets/pages/profile/menu-item_${index + 1}.png`" alt="icon" style="font-size: 8px"/>
          <p style="margin-top:9px">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </layout_imp>
</template>

<script setup>
import {useI18n} from "vue-i18n";

const { t } = useI18n()
const menuList = [
  {title: t("my.myMiner"), path: "/user/miner"},
  {title: t("my.myEarning"), path: "/user/income"},
  {title: t("my.myTeam"), path: "/user/team"},
  {title: t("my.changePassword"), path: "/retrievePassword"},
  {title: t("my.fundCode"), path: "/retrievePassword"},
  {title: t("my.systemLanguage"), path: "change-lang"},
  {title: t("my.feedback"), path: "/feedBack"},
  {title: t("my.quitSafe"), action: "quit-safe"},
]
</script>

<script>
import {defineComponent} from "vue";
import Layout_imp from "@/common/layouts/common/layout_imp.vue";

export default defineComponent({
  components: {Layout_imp},
  methods: {
    handClick(actionType){
      switch (actionType) {
        case "change-lang":
        case "quit-safe":
      }
    }
  }
})
</script>

<style lang="scss" scoped>
@import "@/style/var";
.user-wallet {
  margin-top: 28px;

  .wallet-balance {
    position: relative;

    img {
      width: 100%;
    }

    .balance-info {
      position: absolute;
      top: 18px;
      left: 24px;
      color: #FFFFFF;
    }
  }
}

.nav-bar {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: $input-text;
}
</style>