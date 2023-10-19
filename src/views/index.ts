import { ref, onMounted } from 'vue'
import { debounce } from 'lodash'

export const useResizeObserver = (el: any, colSpan: number) => {
    const colHeight = ref<number>(0);
    const debounceRender = debounce((width) => {
        colHeight.value = width / (24 / colSpan);
    }, 1000)
    onMounted(() => {
        new ResizeObserver(([entry] = []) => {
            const [size] = entry.borderBoxSize;
            debounceRender(size.inlineSize);
        }).observe(el.value.$el)
    })
    return { colHeight };
}