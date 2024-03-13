/**
 * 
 * @param {最大值} max 
 * @param {最小值} min 
 * @param {精度number} num  
 * @returns 
 */
export function generateRandom(max, min, num) {
    if (max <= min) {
        Error("最大值不能小于最小值")
        return 0
    }
    if (typeof num !== 'number' && !Number.isInteger(num) && num < 0) {
        Error("精度应为自然数")
        return 0
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    console.log(Math.random());
    return ((Math.random() * (max - min)) + min).toFixed(num);
}