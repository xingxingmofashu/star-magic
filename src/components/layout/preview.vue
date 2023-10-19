<template>
    <el-dialog :model-value="v" class="dialog-body" @close="$emit('close')" :show-close="false" :width="'100%'"
        :append-to-body="true" :fullscreen="true">
        <el-icon style="font-size: 400px;">
            <component :is="c"></component>
        </el-icon>
    </el-dialog>
</template>
<script lang="ts" setup>
import { DefineComponent, defineProps } from 'vue';

defineProps<{
    v: boolean,
    c: DefineComponent<any, any, any> | undefined
}>();

</script>
<style>
.dialog-body {
    background-color: rgba(0, 0, 0, 0);
}

.dialog-body .el-dialog__header {
    display: none;
}

.dialog-body .el-dialog__body {
    text-align: center;
    margin-top: 100px;
}
</style>