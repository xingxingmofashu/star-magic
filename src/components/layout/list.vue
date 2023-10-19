<template>
    <el-row ref="row">
        <el-col v-for="(k, i) in modules" @click="() => { visible = true; c = k }" :key="i" :span="span"
            :style="{ height: `${colHeight}px` }">
            <el-card shadow="hover" :style="{ height: `${colHeight}px`, padding: `${colHeight / 10}px` }">
                <el-icon :style="{ fontSize: `${colHeight / 2}px` }">
                    <component :is="k"></component>
                </el-icon>
            </el-card>
        </el-col>
    </el-row>
    <preview :v="visible" @close="()=>visible=false" :c="c"></preview>
</template>
<script lang="ts" setup>
import { ref, defineProps, DefineComponent } from 'vue'
import { useResizeObserver } from '@/views'
import preview from './preview.vue'

const c = ref<DefineComponent<any, any, any>>();
const visible = ref<boolean>(false);
const props = defineProps<{
    modules: any,
    span: number,
}>();
const row = ref();
const { colHeight } = useResizeObserver(row, props.span);

</script>