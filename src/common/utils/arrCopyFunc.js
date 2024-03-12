export function deepCopyArray(arr) {  
    // 判断是否为数组  
    if (!Array.isArray(arr)) {  
        throw new Error('Input must be an array');  
    }  
      
    // 使用map方法遍历数组，对每个元素进行深拷贝  
    return arr.map(item => {  
        // 判断当前元素是否为对象或数组  
        if (typeof item === 'object' && item !== null) {  
            // 如果是数组，则递归调用deepCopyArray  
            if (Array.isArray(item)) {  
                return deepCopyArray(item);  
            }  
            // 如果是对象，则使用Object.assign和递归拷贝属性  
            return Object.assign({}, ...Object.entries(item).map(([key, val]) => ({  
                        [key]: deepCopyObj(val)  
                    })
                )
            )  
        }  
        // 如果不是对象或数组，直接返回该值（基本类型直接赋值）  
        return item;  
    });  
}  
  
// 辅助函数，用于递归拷贝对象属性  
function deepCopyObj(obj) {  
    if (typeof obj !== 'object' || obj === null) {  
        return obj;  
    }  
      
    if (Array.isArray(obj)) {  
        return deepCopyArray(obj);  
    }  
      
    const copy = {};  
    for (const key in obj) {  
        if (obj.hasOwnProperty(key)) {  
            copy[key] = deepCopy(obj[key]);  
        }  
    }  
    return copy;  
}