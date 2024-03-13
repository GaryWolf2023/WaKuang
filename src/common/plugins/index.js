import {CopyToClipboardDirective, Skeleton} from './directive/index.js'

export const myPlugins = {
    install(app, options) {
        // 配置此应用
        app.directive('clipboard', CopyToClipboardDirective)
        app.directive('skeleton', Skeleton)
    }
}