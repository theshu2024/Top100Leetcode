/**
 * 汉明距离
 * 难度：简单
 * 
 * 题目：两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目。
 * 给你两个整数 x 和 y，计算并返回它们之间的汉明距离。
 * 
 * 示例：
 * 输入：x = 1, y = 4
 * 输出：2
 * 解释：
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 *        ↑   ↑
 * 上面的箭头指出了对应二进制位不同的位置。
 * 
 * 输入：x = 3, y = 1
 * 输出：1
 * 解释：
 * 3   (0 1 1)
 * 1   (0 0 1)
 *        ↑
 * 上面的箭头指出了对应二进制位不同的位置。
 * 
 * 解题思路：
 * 1. 首先计算 x 和 y 的异或结果，这样不同的位会被标记为 1
 * 2. 然后统计异或结果中 1 的个数
 * 3. 返回统计结果
 * 
 * 时间复杂度：O(log n)，其中 n 是两个数中较大的那个数。循环的次数取决于二进制位的长度。
 * 空间复杂度：O(1)，只使用了常数级别的额外空间。
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xor = x ^ y;
    let count = 0;
    
    while (xor > 0) {
        count += xor & 1;
        xor >>= 1;
    }
    
    return count;
};

// 测试用例
console.log(hammingDistance(1, 4)); // 输出: 2
console.log(hammingDistance(3, 1)); // 输出: 1