import axios from "axios";

import {getItem, setItem} from "../../common/utils/storage.js";

const baseURL =  import.meta.env.VITE_BASE_URL
const timeout = import.meta.env.VITE_TIMEOUT
const token = "AUTH_TOKEN"
const language = "LOCAL_LANG"

const instance =  axios.create({
    baseURL,
    timeout,
})
const commonConfigSetting = {
    needToken: true,
    token: "testing",
    language: "zh_CN",
    contentType: "",
    responseType: ""
}
const handleConfig = (config, configSetting) => {
    config.headers = {
        "Access_Auth_Token": configSetting.needToken ? configSetting.token : "",
        "Accept_Lang": configSetting.language
    }
    return config
}

instance.interceptors.request.use((config) => {
    return config
}, (errReq) => {
    return Promise.reject(errReq)
})

instance.interceptors.response.use((resp) => {

    const { status, respData = data } = resp

    const { code, message, data } = respData

    if (status === 200) {
        if (code === undefined) return respData;
        if (code === 0) {
            return respData;
        } else if (code === 4000 || code === 3000) {
            return respData;
        } else {
            return respData;
        }
    }else {
        return Promise.reject(new Error(respData.message || 'Error'));
    }
},(errResp) => {
    return Promise.reject(errResp);
})

const baseRequest = (customConfig, setting) => {
    return instance(handleConfig(customConfig, setting))
}

const get = (url, getReqData, configSetting) => {
    return baseRequest({
        url,
        method: "get",
        params: getReqData.params,
        data: getReqData.data,
    }, configSetting)
}

const post = (url, postReqData, configSetting) => {
    return baseRequest({
        url,
        method: "post",
        params: postReqData.params,
        data: postReqData.data,
    }, "test")
}

const put = (url, postReqData, configSetting) => {
    return baseRequest({
        url,
        method: "put",
        params: postReqData.params,
        data: postReqData.data,
    },configSetting)
}

export {
    get,
    post,
    put
}