<template>
    <list :modules="Animals" :span="colSpan"></list>
</template>
<script lang="ts" setup>

import * as Animals from '@/components/icons/animal'
import { ref } from 'vue';
import list from '@/components/layout/list.vue'

const colSpan = ref<number>(3);

</script>