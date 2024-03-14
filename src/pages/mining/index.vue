<template>
    <Layout_imp :title="title">
        <p class="platform-name">{{ $t('platformName') }}</p>
      <div class="hash-rate">
        <div>
          <div>
            <span>{{ 490.48 }}</span>
            <p>{{$t('hashRate')}}</p>
          </div>
        </div>
      </div>
    </Layout_imp>
</template>

<script setup>
import { ref } from 'vue'
import Layout_imp from "@/common/layouts/common/layout_imp.vue";
import {useI18n} from "vue-i18n";
const { t } =  useI18n()

const title = t("mining.platformName")
let hashRate = ref(0)


</script>

<style lang="scss" scoped>
.platform-name {
  height: 44px;
  width: 100%;
}
</style>