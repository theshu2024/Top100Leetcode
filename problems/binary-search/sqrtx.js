/**
 * x 的平方根
 * 难度：简单
 * 
 * 题目：给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
 * 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
 * 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
 * 
 * 示例：
 * 输入：x = 4
 * 输出：2
 * 
 * 输入：x = 8
 * 输出：2
 * 解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
 * 
 * 解题思路：
 * 1. 使用二分查找的方法
 * 2. 初始化左右指针，左指针为1，右指针为x
 * 3. 计算中间值mid，比较mid的平方与x的大小
 * 4. 如果mid的平方等于x，直接返回mid
 * 5. 如果mid的平方小于x，记录当前mid为可能的结果，然后左指针右移
 * 6. 如果mid的平方大于x，右指针左移
 * 7. 当左指针大于右指针时，返回最后记录的结果
 * 
 * 时间复杂度：O(log x)，其中 x 是输入的非负整数。二分查找的时间复杂度是 O(log x)。
 * 空间复杂度：O(1)，只使用了常数级别的额外空间。
 */

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