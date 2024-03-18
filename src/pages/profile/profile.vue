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
              <button class="button in" @click="handleAction(coin.type !== 'HMT' ? 'roll_in' : 'buy', coin)">
                {{ coin.type !== 'HMT' ? $t('my.rollIn') : $t('my.buy') }}
              </button>
              <button class="button out" @click="handleAction(coin.type !== 'HMT' ? 'roll_out' : 'sell', coin)">
                {{ coin.type !== 'HMT' ? t('my.rollOut') : $t('my.sell') }}
              </button>
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
      <div class="exchange-content">
        <div v-if="type === 'roll_in'" class="item item-hmt">
          <div class="info">
            <p>
              <span>{{ $t('profile.exchange.exchange.coin') }}</span>
              <span>USDT</span>
            </p>
            <p>
              <span>{{ $t('profile.exchange.hmt.net') }}</span>
              <span>BNB Chain (BEP20)</span>
            </p>
            <p>
              <span>{{ $t('profile.exchange.hmt.walletAddress') }}</span>
              <span>fanyi.baidu.com</span>
            </p>
          </div>
          <div class="tip">
            此地址僅支持BNB (BSC)鏈轉帳，請勿通過其他網絡轉入，否則將導致資產遺失！
          </div>
        </div>
        <div v-if="type === 'roll_out'" class="item item-hmt">
          <div class="tip">
            此地址僅支持BNB (BSC)鏈轉帳，請勿通過其他網絡轉入，否則將導致資產遺失！
          </div>
          <div class="info">
            <p>
              <span>{{ $t('profile.exchange.exchange.coin') }}</span>
              <span>USDT</span>
            </p>
            <p>
              <span>{{ $t('profile.exchange.hmt.net') }}</span>
              <span>BNB Chain (BEP20)</span>
            </p>
            <p>
              <span>{{ $t('profile.exchange.hmt.walletAddress') }}</span>
              <span>手續費0.1%</span>
            </p>
            <p>
              <span>{{ $t('profile.exchange.hmt.realArrival') }}</span>
              <span>1110.00</span>
            </p>
          </div>
        </div>
        <div v-if="type === 'buy'" class="item item-exchange">
          <div class="info">
            <p>
              <span>{{ $t('profile.exchange.exchange.coin') }}</span>
              <span>HMT</span>
            </p>
            <p>
              <span>{{ $t('profile.exchange.exchange.referencePrice') }}</span>
              <span>$1110.11</span>
            </p>
          </div>
          <div class="input"></div>
        </div>
        <div v-if="type === 'sell'" class="item item-exchange">
          <div class="info">
            <p>
              <span>{{ $t('profile.exchange.exchange.coin') }}</span>
              <span>HMT</span>
            </p>
            <p>
              <span>{{ $t('profile.exchange.exchange.referencePrice') }}</span>
              <span>$1110.11</span>
            </p>
          </div>
          <div class="input"></div>
        </div>
      </div>
      <template v-slot:action>
        <div class="action-button" @click="handleExchange(type)">
          <div v-if="buttonLoading" style="height: 20px;">
            <img class="loading" src="../../assets/common/svg/loading_1.svg" alt="loading" style="font-size: 8px;"/>
          </div>
          <span v-else>{{ $t('common.action.confirm') }}</span>
        </div>
      </template>
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
import {computed, ref, watch} from "vue";
import Dialog from "@/common/components/base/Dialog.vue";
import LangBar from "@/common/components/base/LangBar.vue";

const {t} = useI18n()
const menuList = computed(() => [
  {title: t("my.myMiner"), path: "/user/machine", icon: icon1},
  {title: t("my.myEarning"), path: "/user/income", icon: icon2},
  {title: t("my.myTeam"), path: "/user/team", icon: icon3},
  {title: t("my.changePassword"), path: "/retrievePassword", icon: icon4},
  {title: t("my.fundCode"), path: "/retrievePassword", icon: icon5},
  {title: t("my.systemLanguage"), action: "change-lang", icon: icon6},
  {title: t("my.feedback"), path: "/feedBack", icon: icon7},
  {title: t("my.quitSafe"), action: "quit-safe", icon: icon8},
])
const coinList = [
  {name: "USDT", balance: "1000.00 ", type: "COIN"},
  {name: "HMT", balance: "1800.00", type: "HMT"},
  {name: "JUP", balance: "5600.00", type: "COIN"}
]
const showDialog = ref(false)
const showLang = ref(false)
const type = ref("")
const coinInfo = ref(null)
const buttonLoading = ref(false)

const handleClick = (actionType) => {
  switch (actionType) {
    case "change-lang":
      showLang.value = true
      break;
    case "quit-safe":
  }
}

const title = computed(() => {
  switch (type.value) {
    case "roll_in":
      return t('my.rollIn');
    case "roll_out":
      return t('my.rollOut');
    case "buy":
      return t('my.buy');
    case "sell":
      return t('my.sell');
  }
})


// ele
const handleAction = (actionType, coin) => {
  type.value = actionType ? actionType : "roll_in"
  coinInfo.value = coin
  showDialog.value = true
}

const handleCloseDialog = (show) => {
  showDialog.value = show
}

const handleCloseLang = (show) => {
  showLang.value = show
}


// req
const handleExchange = (exchangeType) => {
  buttonLoading.value = true
  setTimeout(() => {
    buttonLoading.value = false
    showDialog.value = false
  }, 1500)
}

</script>

<script>

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
          display: flex;
          justify-content: right;
          gap: 12px;
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

.button {
  border: none;
  border-radius: 4px;
  padding: 3px 18px;
  font-size: 12px;
  color: #FFFFFF;

  &.in {
    background-color: #003568;
  }

  &.out {
    background-color: #F84747;
  }
}

.exchange-content {
  .item {
    .info {
      font-size: 14px;
      display: grid;
      grid-gap: 10px;

      p {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    .tip {
      font-size: 13px;
      color: #727272;
      margin: 8px 0px;
    }
  }

  .item-exchange {

  }
}

.action-button {
  position: relative;
  color: #1E1E1E;
  width: 100%;
  border: none;
  font-size: 16px;
  border-radius: 6px;
  padding: 12px 0;
  background-color: $primary-color;
  text-align: center;
  margin-top: 22px;

  .loading {
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}

</style>