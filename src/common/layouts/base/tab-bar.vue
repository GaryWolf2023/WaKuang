<template>
  <div class="tab-bar">
    <IconItem v-for="(item, index) in tabs" :key="index"
              :title="item.title"
              :path="item.path"
              :icon="item.icon"
              :activeIcon="item.activeIcon"
    >
    </IconItem>
  </div>
</template>

<script setup>

import IconItem from "../../components/base/IconItem.vue";
import {useI18n} from "vue-i18n";

import icon1 from "@/assets/tabbar/icon_1.svg"
import icon2 from "@/assets/tabbar/icon_2.svg"
import icon3 from "@/assets/tabbar/icon_3.svg"
import iconActive1 from "@/assets/tabbar/icon_active_1.svg"
import iconActive2 from "@/assets/tabbar/icon_active_2.svg"
import iconActive3 from "@/assets/tabbar/icon_active_3.svg"
import {computed} from "vue";


const { t } = useI18n();

const tabs= computed(() => [
  { title: t("common.tabs.title1"), path: "/mining", icon: icon1, activeIcon: iconActive1 },
  { title: t("common.tabs.title2"), path: "/data", icon: icon2, activeIcon: iconActive2 },
  { title: t("common.tabs.title3"), path: "/profile", icon: icon3, activeIcon: iconActive3 },
])
</script>

<style lang="scss">
@import "@/style/var";
.tab-bar {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 12px 0;
  background-color: $tab-bar-bg;
}
</style>