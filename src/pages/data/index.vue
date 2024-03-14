<template>
  <Layout_imp :title="title" :hidBack="true">

  </Layout_imp>
</template>

<script setup>
import Layout_imp from "@/common/layouts/common/layout_imp.vue";
import {useI18n} from "vue-i18n";
const { t } = useI18n()
const title = t('mining.platformName')
</script>

<style lang="scss" scoped></style>