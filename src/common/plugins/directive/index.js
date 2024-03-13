

const CopyToClipboardDirective = {
    beforeMount(el, binding) {
        el.addEventListener('click', () => {
            const textToCopy = binding.value;
            if (navigator.clipboard && window.isSecureContext) {
                // navigator clipboard 向剪贴板写文本
                return navigator.clipboard.writeText(textToCopy);
            } else {
                if (!document.execCommand('copy')) return Promise.reject()
                const textArea = document.createElement('textarea')
                textArea.style.position = 'fixed'
                textArea.style.top = textArea.style.left = '-100vh'
                textArea.style.opacity = '0'
                textArea.value = textToCopy
                document.body.appendChild(textArea)
                textArea.focus()
                textArea.select()
                console.log(textToCopy)
                return new Promise((resolve, reject) => {
                    document.execCommand('copy') ? resolve() : reject()
                    textArea.remove()
                })
            }
        })
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
