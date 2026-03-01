/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) return 0;
    
    let left = 1;
    let right = x;
    let result = 0;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
};

// 测试用例
console.log(mySqrt(4)); // 输出: 2
console.log(mySqrt(8)); // 输出: 2