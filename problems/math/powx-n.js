/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // 处理特殊情况
    if (n === 0) return 1;
    if (n === 1) return x;
    if (n === -1) return 1 / x;
    
    // 递归计算
    const half = myPow(x, Math.floor(n / 2));
    
    if (n % 2 === 0) {
        return half * half;
    } else {
        return half * half * (n > 0 ? x : 1 / x);
    }
};

// 测试用例
console.log(myPow(2.00000, 10)); // 输出: 1024.00000
console.log(myPow(2.10000, 3)); // 输出: 9.26100
console.log(myPow(2.00000, -2)); // 输出: 0.25000