const CopyToClipboardDirective = {
    beforeMount(el, binding) {
        el.addEventListener('click', () => {
        // 传入需要复制的值
            const textToCopy = binding.value;
            navigator.clipboard.writeText(textToCopy).then(() => {
                console.log('复制成功！');
            }).catch((err) => {
                console.error('无法复制文本: ', err);
            })
        });  
    },  
    unmounted() {  
      // 清理事件监听器（如果需要的话）  
    }  
};

const Skeleton = {
    mounted: (el) => {
        el.className = el.className + " " +"skeleton"
    }
}

export {
    CopyToClipboardDirective,
    Skeleton
}
