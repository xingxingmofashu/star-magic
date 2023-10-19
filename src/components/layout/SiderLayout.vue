<template>
    <el-scrollbar>
        <el-menu :style="{ overflow: 'hidden auto', height: '700px' }" :default-openeds="['1']" :router="true">
            <el-menu-item :index="i.index" v-for="i in menu.item" :key="i.index">
                <el-icon v-if="i.icon">
                    <component :is="i.icon"></component>
                </el-icon> {{ t(i.text as string) }}
            </el-menu-item>
            <el-sub-menu :index="i.index" v-for="i in  menu.group" :key="i.index">
                <template v-if="i.title.text" #title>
                    <el-icon v-if="i.title.icon">
                        <component :is="i.title.icon"></component>
                    </el-icon>{{ t(i.title.text as string) }}
                </template>
                <el-menu-item-group :class="!i.group.title ? 'group-title' : ''">
                    <template v-if="i.group.title" #title>
                        <el-icon v-if="i.group.icon">
                            <component :is="i.group.icon"></component>
                        </el-icon>{{ t(i.group.title as string) }}
                    </template>
                    <el-menu-item :key="e.index" :index="e.index" v-for="e in i.group.item">
                        <el-icon v-if="e.icon">
                            <component :is="e.icon"></component>
                        </el-icon> {{ t(e.text as string) }}
                    </el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
        </el-menu>
    </el-scrollbar>
</template>
<script lang="ts" setup>

import { storeToRefs } from 'pinia';
import { useIndexStore } from '@/store/index';
import { useI18n } from 'vue-i18n'

const { t } = useI18n();
const indexStore = useIndexStore();
const { menu } = storeToRefs(indexStore);

</script>
<style scoped>
.group-title /deep/.el-menu-item-group__title {
    display: none;
}
</style>