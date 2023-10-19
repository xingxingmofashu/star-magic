import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia';
import { useIndexStore } from '@/store/hitokoto'
import { ElMessage } from 'element-plus';

export const useLoginFilter = () => {
    const router = useRouter();
    const indexStore = useIndexStore();
    const { token } = storeToRefs(indexStore);
    if (token.value === undefined) {
        ElMessage({
            message: 'Please Login Or Register！',
            type: 'warning',
            duration:2000,
            onClose: () => {
                router.push({
                    path: 'hitokoto-login'
                })
            }
        })
    }
}