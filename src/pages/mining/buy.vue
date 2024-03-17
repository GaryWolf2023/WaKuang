<template>
  <Layout_imp :title="$t('mining.buyMining')">
    <div class="machine-list">
      <div class="machine-item" v-for="(item, index) in machineList" :key="index">
        <div class="item-header">
          <img :src="item.logo || defaultCoin" alt="logo" style="font-size: 8px; height: 28px" />
          <p>{{ item.name }}</p>
          <p>{{item.speed}}</p>
          <div>
            <van-stepper :min="0" v-model="item.number" integer theme="round" button-size="22" />
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
        <button class="button" @click="handleBuy">
          {{ $t('mining.buy') }}
        </button>
      </div>
    </template>
    <Dialog :title="$t('mining.pay')" :show-header="showHeader" :show-dialog="showDialog" @close="handleClose">
      <div class="buy-content" v-if="contentType === 'buy'">
        <div class="info">
          <p><span>{{ $t('mining.buyPrompt') }}</span> {{ orderInfo.buyPrompt }}</p>
          <p><span>{{ $t('mining.HMT') }}</span> {{ orderInfo.hmt }}</p>
        </div>
        <div class="input">
        </div>
      </div>
      <div class="result-content" v-else>
        <div class="result-img" v-if="resultType">
          <img src="../../assets/common/operate_suc.png" alt="suc" style="font-size:8px;width: 60px" />
        </div>
        <div class="result-img" v-else>
          <img src="../../assets/common/operate_fai.png" alt="suc" style="font-size:8px; width: 50px" />
        </div>
        <div class="result-title">
          {{ resultType ? $t('mining.paySuccess') : $t('mining.errPassword') }}
        </div>
      </div>
      <div class="button" :class="contentType === 'buy' ? 'pay-button' : 'confirm-button'" @click="handleOrder(contentType)">
        <div v-if="buttonLoading"  style="height: 20px;">
          <img class="loading" src="../../assets/common/svg/loading_1.svg" alt="loading" style="font-size: 8px;" />
        </div>
        <span v-else>{{ buttonText }}</span>
      </div>
    </Dialog>
  </Layout_imp>
</template>

<script setup>
import Layout_imp from "@/common/layouts/common/layout_imp.vue";
import {computed, ref} from "vue";
import defaultCoin from "../../assets/common/svg/default-coin.svg"
import Dialog from "@/common/components/base/Dialog.vue";
import {useI18n} from "vue-i18n";


const { t } = useI18n()
const machineList = ref([])
const showDialog = ref(false)
const showHeader = ref(true)
const buttonLoading = ref(false)
const resultType = ref(false)
const contentType = ref("")
const orderInfo = ref({
  buyPrompt: 0,
  hmt: 0
})
contentType.value = "buy"

machineList.value = [
  { number: "", name: "Canaan", logo: "", speed: "1.3", description: "該型號具備最快的算力，並且功耗相對較小，是現時市場上最高的礦機之一。 該型號具備最快的算力，並且功耗相對較小，是現時市場上最高的礦機之一。"},
  { number: "", name: "Canaan", logo: "", speed: "1.3", description: "該型號具備最快的算力，並且功耗相對較小，是現時市場上最高的礦機之一。 該型號具備最快的算力，並且功耗相對較小，是現時市場上最高的礦機之一。"},
  { number: "", name: "Canaan", logo: "", speed: "1.3", description: "該型號具備最快的算力，並且功耗相對較小，是現時市場上最高的礦機之一。 該型號具備最快的算力，並且功耗相對較小，是現時市場上最高的礦機之一。"},
  { number: "", name: "Canaan", logo: "", speed: "1.3", description: "該型號具備最快的算力，並且功耗相對較小，是現時市場上最高的礦機之一。 該型號具備最快的算力，並且功耗相對較小，是現時市場上最高的礦機之一。"}
]

const buttonText = computed((type) => {
  return type === 'buy' ? t('mining.pay') : t('common.action.confirm')
})

const handleBuy = () => {
  showDialog.value = true
}

const handleOrder = (type) => {
  switch (type) {
    case "buy":
      buttonLoading.value = true
          setTimeout(() => {
            buttonLoading.value = false
            contentType.value = "confirm"
            showHeader.value = false
          }, 1500)
          break;
    case "confirm":
      showHeader.value = true
      showDialog.value = false
      contentType.value = "buy"
      break;
  }
}

const handleClose = () => {
  showDialog.value = false
}

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

    :deep(.van-stepper--round) {
      .van-stepper__plus {
        background: rgba(0, 0, 0, 0);
        border: 2px solid #FFFFFF;
        &:before {
          height: 2px;
        }
        &:after {
          width: 2px;
        }
      }
      .van-stepper__input {
        font-size: 15px;
        font-weight: 500;
        color: #616161;
      }
      .van-stepper__minus {
        background: rgba(0, 0, 0, 0);
        border: 2px solid #9D9797;
        color: #9D9797;
        &:before {
          height: 2px;
        }
      }
    }
  }
}

.button {
  position: relative;
  color: #1E1E1E;
  width: 100%;
  border: none;
  font-size: 16px;
  border-radius: 6px;
  padding: 12px 0;
  background-color: $primary-color;
  text-align: center;
  .loading {
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}

.buy-action {
  padding: 10px 21px;
  background-color: $tab-bar-bg;
}

.buy-content {
  .info {
    font-size: 14px;
    display: grid;
    grid-gap: 13px;
    margin-bottom: 20px;
    p {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}

.result-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  .result-img {
    margin-top: 20px;
  }

  .result-title {
    font-size: 16px;
    margin-top: 12px;
    margin-bottom: 23px;
  }
}

</style>