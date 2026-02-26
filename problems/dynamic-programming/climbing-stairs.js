/**
 * 爬楼梯
 * 题目：假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 示例：
 * 输入：n = 2
 * 输出：2
 * 解释：有两种方法可以爬到楼顶。
 * 1. 1 阶 + 1 阶
 * 2. 2 阶
 * 
 * 输入：n = 3
 * 输出：3
 * 解释：有三种方法可以爬到楼顶。
 * 1. 1 阶 + 1 阶 + 1 阶
 * 2. 1 阶 + 2 阶
 * 3. 2 阶 + 1 阶
 * 
 * 解题思路：
 * 1. 动态规划的思想：爬到第 n 阶的方法数等于爬到第 n-1 阶的方法数加上爬到第 n-2 阶的方法数
 * 2. 状态转移方程：dp[n] = dp[n-1] + dp[n-2]
 * 3. 初始条件：dp[1] = 1, dp[2] = 2
 * 4. 可以使用滚动数组的思想来优化空间复杂度，只需要保存前两个状态
 * 
 * 时间复杂度：O(n)，其中 n 是台阶数。我们只需要遍历一次。
 * 空间复杂度：O(1)，只使用了常数级别的额外空间。
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // 边界情况
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    
    // 初始化前两个状态
    let first = 1; // 爬到第 1 阶的方法数
    let second = 2; // 爬到第 2 阶的方法数
    let result = 0;
    
    // 计算爬到第 3 阶到第 n 阶的方法数
    for (let i = 3; i <= n; i++) {
        // 爬到第 i 阶的方法数等于爬到第 i-1 阶的方法数加上爬到第 i-2 阶的方法数
        result = first + second;
        // 更新前两个状态
        first = second;
        second = result;
    }
    
    return result;
};

// 测试用例
console.log(climbStairs(2)); // 输出：2
console.log(climbStairs(3)); // 输出：3
console.log(climbStairs(4)); // 输出：5
console.log(climbStairs(5)); // 输出：8