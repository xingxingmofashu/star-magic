<template>
    <el-form :model="form" label-width="120px">
        <el-form-item label="Account：">
            <el-input :input-style="{ width: '50%' }" v-model="form.email" clearable placeholder="Please input email" />
        </el-form-item>
        <el-form-item label="Password：">
            <el-input :input-style="{ width: '50%' }" v-model="form.password" placeholder="Please input password"
                show-password />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="login">Submit</el-button>
            <el-button>Reset</el-button>
        </el-form-item>
    </el-form>
</template>
<script lang="ts" setup>

import { useIndexStore } from '@/store/hitokoto'
import { storeToRefs } from 'pinia';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const form = reactive({
    email: '',
    password: ''
})

const router = useRouter();
const indexStore = useIndexStore();
const { token } = storeToRefs(indexStore);

const login = async () => {
    const formData = new FormData();
    formData.append('email', form.email);
    formData.append('password', form.password);
    const { data } = await indexStore.login(formData);
    token.value = data[0].token;
    router.back();
}

</script>