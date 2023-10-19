import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import { createI18n } from 'vue-i18n'
import { en } from '@/language/en'
import { zhCn } from '@/language/zhCn'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/themes/red/css-vars.css'

const pinia = createPinia();

const i18n = createI18n({
    legacy: false,
    messages: {
        en: {
            ...en
        },
        zhCn: {
            ...zhCn
        }
    }
});

createApp(App).use(pinia).use(i18n).use(ElementPlus).use(router).mount('#app')
