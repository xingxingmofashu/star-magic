import { defineStore } from "pinia";
import type { DefineComponent } from 'vue';
import { HomeFilled, Grid } from '@element-plus/icons-vue';
import { Panda, Anime, Like, Home } from '@/components/icons'
import { RabbitActionTeam } from '@/components/vector-icons'

interface State {
    theme: string;
    language: string;
    menu: {
        group?: Array<Menu>;
        item?: Array<MenuItem>;
    }
}

interface Menu {
    index: string;
    title: {
        icon?: DefineComponent<any, any, any>;
        text?: string;
    };
    group: {
        icon?: DefineComponent<any, any, any>;
        title?: string;
        item: Array<MenuItem>;
    };
}

interface MenuItem {
    icon?: DefineComponent<any, any, any>;
    index: string;
    text?: string;
}
export const useIndexStore = defineStore('index', {
    state: (): State => ({
        theme: 'dark',
        language: 'zhCn',
        menu: {
            group: [{
                index: 'icons',
                title: {
                    icon: Grid,
                    text: 'menu.IconLibrary'
                },
                group: {
                    item: [
                        {
                            icon: Panda,
                            index: '/animal',
                            text: 'menu.Animal',
                        }, {
                            icon: Anime,
                            index: '/anime',
                            text: 'menu.Anime'
                        }
                    ]
                }
            }, {
                index: 'vector-icons',
                title: {
                    icon: Grid,
                    text: 'menu.VectorIcons'
                },
                group: {
                    item: [
                        {
                            icon: RabbitActionTeam,
                            index: '/rabbit-action-team',
                            text: 'menu.RabbitActionTeam',
                        }
                    ]
                }
            }, {
                index: 'hitokoto',
                title: {
                    icon: Grid,
                    text: 'menu.Hitokoto'
                }, group: {
                    item: [
                        {
                            icon: Home,
                            index: 'hitokoto',
                            text: 'menu.Home'
                        },
                        {
                            icon: Like,
                            index: 'hitokoto-like',
                            text: 'menu.MyLike'
                        }
                    ]
                }
            }],
            item: [{
                icon: HomeFilled,
                index: '/',
                text: 'menu.Home',
            }]
        }
    })
})