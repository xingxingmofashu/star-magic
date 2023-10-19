<template>
    <list :modules="RabbitActionTeamIcons" :span="colSpan"></list>
</template> 
<script lang="ts" setup>
import { ref } from 'vue';
import * as RabbitActionTeamIcons from '@/components/vector-icons/rabbit-action-team'
import list from '@/components/layout/list.vue'

const colSpan = ref<number>(4);

</script>
<style scoped>
.col-body /deep/.el-card__body {
    text-align: center;
}
</style>