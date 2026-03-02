/**
 * Pow(x, n)
 * 难度：中等
 * 
 * 题目：实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，x^n）。
 * 
 * 示例：
 * 输入：x = 2.00000, n = 10
 * 输出：1024.00000
 * 
 * 输入：x = 2.10000, n = 3
 * 输出：9.26100
 * 
 * 输入：x = 2.00000, n = -2
 * 输出：0.25000
 * 解释：2^-2 = 1/2^2 = 1/4 = 0.25
 * 
 * 解题思路：
 * 1. 使用分治法（递归）来计算幂
 * 2. 对于 n 为偶数的情况，x^n = (x^(n/2))^2
 * 3. 对于 n 为奇数的情况，x^n = x * (x^(n/2))^2
 * 4. 对于 n 为负数的情况，x^n = 1 / x^(-n)
 * 5. 处理特殊情况：n = 0 时返回 1，n = 1 时返回 x，n = -1 时返回 1/x
 * 
 * 时间复杂度：O(log n)，其中 n 是指数。每次递归将指数减半，所以时间复杂度为对数级。
 * 空间复杂度：O(log n)，递归栈的深度最多为 log n。
 */

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