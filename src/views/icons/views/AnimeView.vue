<template>
        <list :modules="Animes" :span="colSpan"></list>
</template> 
<script lang="ts" setup>
import * as Animes from '@/components/icons/anime'
import { ref } from 'vue';
import list from '@/components/layout/list.vue'

const colSpan = ref<number>(3);

</script>