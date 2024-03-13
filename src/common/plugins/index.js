import {CopyToClipboardDirective, Skeleton} from './directive/index.js'

export const myPlugins = {
    install(app, options) {
        // 自定义指令
        app.directive('clipboard', CopyToClipboardDirective)
        app.directive('skeleton', Skeleton)
    }
}