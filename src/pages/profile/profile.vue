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
          <img :src="item.icon" alt="icon" style="font-size: 8px;width: 44px"/>
          <p style="margin-top:9px">{{ item.title }}</p>
        </router-link>
        <div v-if="item.action" @lick="handleClick(item.action)">
          <img :src="item.icon" alt="icon" style="font-size: 8px;width: 44px"/>
          <p style="margin-top:9px">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </layout_imp>
</template>

<script setup>
import {useI18n} from "vue-i18n";

import icon1 from "@/assets/pages/profile/menu-item_1.png"
import icon2 from "@/assets/pages/profile/menu-item_2.png"
import icon3 from "@/assets/pages/profile/menu-item_3.png"
import icon4 from "@/assets/pages/profile/menu-item_4.png"
import icon5 from "@/assets/pages/profile/menu-item_5.png"
import icon6 from "@/assets/pages/profile/menu-item_6.png"
import icon7 from "@/assets/pages/profile/menu-item_7.png"
import icon8 from "@/assets/pages/profile/menu-item_8.png"


const { t } = useI18n()
const menuList = [
  {title: t("my.myMiner"), path: "/user/miner", icon: icon1},
  {title: t("my.myEarning"), path: "/user/income", icon: icon2},
  {title: t("my.myTeam"), path: "/user/team", icon: icon3},
  {title: t("my.changePassword"), path: "/retrievePassword", icon: icon4},
  {title: t("my.fundCode"), path: "/retrievePassword", icon: icon5},
  {title: t("my.systemLanguage"), action: "change-lang", icon: icon6},
  {title: t("my.feedback"), path: "/feedBack", icon: icon7},
  {title: t("my.quitSafe"), action: "quit-safe", icon: icon8},
]
</script>

<script>
import {defineComponent} from "vue";
import Layout_imp from "@/common/layouts/common/layout_imp.vue";
import icon1 from "@/assets/pages/profile/menu-item_1.png";

export default defineComponent({
  components: {Layout_imp},
  methods: {
    handleClick(actionType){
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
  text-align: center;
  border-radius: 10px;
  margin-top: 10px;
  background-color: $input-bg;
  padding: 24px;
  grid-gap: 20px;
  font-size: 13px;
  a {
    color: $input-text;
  }
}
</style>