/**
 * @author lby
 * @description
 * 时间格式转换函数,传入指定的格式字符串和时间获取转化后的相应格式时间,格式模板YYYY-MM-DD-hh-mm-ss
 */
export const formatTime = (format, time) => {
    if (!!time) {
        const date = new Date(time);
    } else {
        const date = new Date();
    }
    const map = {  
        'yyyy': date.getFullYear(),  
        'MM': padZero(date.getMonth() + 1),
        'dd': padZero(date.getDate()),
        'HH': padZero(date.getHours()),
        'mm': padZero(date.getMinutes()),
        'ss': padZero(date.getSeconds())
    };  
    return format.replace(/(yyyy|MM|dd|HH|mm|ss)/g, (match) => map[match]); 
}
function padZero(num) {  
    return num < 10 ? '0' + num : num;  
} 

// 示例用法
const date1 = new Date(); // 当前时间
const formattedTime = formatTime('yyyy-MM-dd HH:mm:ss', date1);  
console.log(formattedTime); // 输出: "2023-06-20 12:34:56"

/**
 * @author lby
 * @description
 * 时区转化函数(暂时确定为可选函数)
 */
export const TimeZoneConversion = (timeZone, date) => {
    // 如果date是字符串，先转换成Date对象  
    if (typeof date === 'string') {  
        date = new Date(date);  
    }  
    // 使用Intl.DateTimeFormat来格式化时间  
    const options = {  
        year: 'numeric',  
        month: '2-digit',  
        day: '2-digit',  
        hour: '2-digit',  
        minute: '2-digit',  
        second: '2-digit',  
        hour12: false, // 使用24小时制  
        timeZone: timeZone // 设置时区  
    };  
    const formatter = new Intl.DateTimeFormat('en-US', options);  
    const formattedTime = formatter.format(date);  
    
    return formattedTime;
}

// 示例用法  
const date = new Date(); // 当前时间  
const timeInUTC = formatTimeForTimeZone('UTC', date);  
const timeInAsiaShanghai = formatTimeForTimeZone('Asia/Shanghai', date);