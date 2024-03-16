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
      <div class="wallet-coin" v-if="coinList.length">
        <div class="coin-item" v-for="(coin, index) in coinList" :key="index">
          <div class="item">
            <div class="item-header">
              <p>{{ coin.name }}</p>
              <p style="font-size: 16px;font-weight: 700">{{ coin.balance }}</p>
            </div>
            <div class="item-footer">
              <button @click="handleAction(coin.type, coin)">{{ $t('my.rollIn') }}</button>
              <button @click="handleAction(coin.type, coin)">{{ $t('my.rollOut') }}</button>
            </div>
          </div>
          <div v-show="index !== coinList.length - 1" class="divider"
               style="background-color: #282828; height: 1px; margin: 15px 0;"></div>
        </div>
      </div>
    </div>
    <div class="nav-bar">
      <div class="nav-item" v-for="(item, index) in menuList" :key="index">
        <router-link :to="item.path" v-if="item.path">
          <img :src="item.icon" alt="icon" style="font-size: 8px;width: 44px"/>
          <p style="margin-top:9px">{{ item.title }}</p>
        </router-link>
        <div v-if="item.action" @click="handleClick(item.action)">
          <img :src="item.icon" alt="icon" style="font-size: 8px;width: 44px"/>
          <p style="margin-top:9px">{{ item.title }}</p>
        </div>
      </div>
    </div>


    <!--  Dialog  -->

    <Dialog :show-dialog="showDialog"
            :show-header="true"
            :title="title"
            :info="coinInfo"
            @close="handleCloseDialog">
      <div></div>
    </Dialog>

    <!--  LangBar  -->

    <LangBar :show-drawer="showLang" @close="handleCloseLang"/>

  </layout_imp>
</template>

<script setup>
import Layout_imp from "@/common/layouts/common/layout_imp.vue";
import {useI18n} from "vue-i18n";

import icon1 from "@/assets/pages/profile/menu-item_1.png"
import icon2 from "@/assets/pages/profile/menu-item_2.png"
import icon3 from "@/assets/pages/profile/menu-item_3.png"
import icon4 from "@/assets/pages/profile/menu-item_4.png"
import icon5 from "@/assets/pages/profile/menu-item_5.png"
import icon6 from "@/assets/pages/profile/menu-item_6.png"
import icon7 from "@/assets/pages/profile/menu-item_7.png"
import icon8 from "@/assets/pages/profile/menu-item_8.png"
import {ref} from "vue";
import Dialog from "@/common/components/base/Dialog.vue";
import LangBar from "@/common/components/base/LangBar.vue";

const {t} = useI18n()
const menuList = [
  {title: t("my.myMiner"), path: "/user/machine", icon: icon1},
  {title: t("my.myEarning"), path: "/user/income", icon: icon2},
  {title: t("my.myTeam"), path: "/user/team", icon: icon3},
  {title: t("my.changePassword"), path: "/retrievePassword", icon: icon4},
  {title: t("my.fundCode"), path: "/retrievePassword", icon: icon5},
  {title: t("my.systemLanguage"), action: "change-lang", icon: icon6},
  {title: t("my.feedback"), path: "/feedBack", icon: icon7},
  {title: t("my.quitSafe"), action: "quit-safe", icon: icon8},
]
const coinList = [
  {name: "USDT", balance: "1000.00 "},
  {name: "HMT", balance: "1800.00"},
  {name: "JUP", balance: "5600.00"}
]
const showDialog = ref(false)
const showLang = ref(false)
const title = ref("轉入")
const type = ref("")
const coinInfo = ref(null)

const handleClick = (actionType) => {
  switch (actionType) {
    case "change-lang":
      showLang.value = true
      break;
    case "quit-safe":
  }
}

const handleAction = (actionType, coin) => {
  type.value = actionType ? actionType : "roll-in"
  coinInfo.value = coin
  showDialog.value = true
  switch (actionType) {
    case "roll_in":
      title.value = "轉入";
      break;
    case "roll_out":
      title.value = "轉出";
      break;
    case "buy":
      title.value = "買入";
      break;
    case "sell":
      title.value = "賣出";
      break;
  }
}

const handleCloseDialog = (show) => {
  showDialog.value = show
}

const handleCloseLang = (show) => {
  showLang.value = show
}

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

  .wallet-coin {
    padding: 18px 16px;
    background-color: $input-bg;
    border-radius: 10px;
    margin-top: 10px;

    .coin-item {
      .item {
        .item-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 14px;
          font-weight: 500;
        }

        .item-footer {
          margin-top: 12px;
          text-align: right;
        }
      }
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