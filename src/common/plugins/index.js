import {CopyToClipboardDirective} from './directive/clipboard'

export const myPlugins = {
    install(app, options) {
        // 配置此应用
        console.log(app);
        console.log(options);
        app.directive('clipboard', CopyToClipboardDirective)
    }
}