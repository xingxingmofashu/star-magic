<template>
    <div class="hitokoto-background">
       
    </div>
</template>
<script lang="ts" setup>

import { useLoginFilter } from '@/views/hitokoto'
useLoginFilter();

</script>
<style scoped>
.hitokoto-background {
    width: 100%;
    height: 100%;
}
</style>