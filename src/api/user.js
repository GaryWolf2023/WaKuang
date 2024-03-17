// import request from './config/http.js'

const login = (data) => {
    return new Promise((resolve,reject) => {
        const timer = setTimeout(() => {
            clearTimeout(timer)
            resolve({
                code: 0,
                msg: "获取成功",
                data: {
                    token: '18273167253761267356'
                }
            })
        }, 50)
    })
}
export {login}