// import { beforeMount, unmounted } from 'vue';
import { showNotify } from 'vant';

export const CopyToClipboardDirective = {
    beforeMount(el, binding) {
        el.addEventListener('click', () => {
        // 传入需要复制的值
            const textToCopy = binding.value;
            navigator.clipboard.writeText(textToCopy).then(() => {
                console.log('复制成功！');
                // 可以触发一个自定义事件，通知父组件复制成功
                showNotify({ type: 'success', message: '复制成功！' });
            }).catch((err) => {
                console.error('无法复制文本: ', err);
                showNotify({ type: 'warning', message: '复制失败！' });
            })
        });  
    },  
    unmounted() {  
      // 清理事件监听器（如果需要的话）  
    }  
};
  
