<template>
  <div class="tab-bar">
    <IconItem v-for="(item, index) in tabs"
              :title="item.title"
              :path="item.path"
              :icon="item.icon"
    >
    </IconItem>
  </div>
</template>

<script setup>

import IconItem from "../../components/base/IconItem.vue";
import {useI18n} from "vue-i18n";
import icon from "@/assets/vue.svg"

const { t } = useI18n();
console.log(t("common.tabs.title1"))

const tabs= [
  { title: t("common.tabs.title1"), path: "/mining", icon: icon, activeIcon: icon }
]

</script>