import { MD5 } from "crypto-js";

/**
 * @description
 * 字符处理函数-------密码加密
 */
export const StringToMD5 = (str) => {
    return MD5(str).toString()
}

/**
 * @description
 * 邮箱名字中除了首字母和尾字母使用*号代替
 */
export const ProcessMail = (mailString) => {
    // 分割电子邮件地址为用户名和域名部分  
    const [username, domain] = mailString.split('@');  
  
    // 检查要替换的字符数是否超过用户名长度  
    if (replaceCount >= username.length) {  
        replaceCount = username.length - 2; // 保留首字符和尾字符
    }  
    // 创建替换后的用户名部分  
    const maskedUsername = username.slice(0) + '*'.repeat(replaceCount) + username.slice(-1); // 保留最后一个字符  
  
    // 返回替换后的电子邮件地址  
    return maskedUsername + '@' + domain;
}