/**
 * 零钱兑换
 * 难度：中等
 * 
 * 题目：给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
 * 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
 * 你可以认为每种硬币的数量是无限的。
 * 
 * 示例：
 * 输入：coins = [1, 2, 5], amount = 11
 * 输出：3
 * 解释：11 = 5 + 5 + 1
 * 
 * 输入：coins = [2], amount = 3
 * 输出：-1
 * 
 * 输入：coins = [1], amount = 0
 * 输出：0
 * 
 * 解题思路：
 * 1. 使用动态规划，定义 dp[i] 为凑成金额 i 所需的最少硬币个数
 * 2. 状态转移方程：dp[i] = min(dp[i - coin] + 1)，其中 coin 是 coins 中的硬币面额
 * 3. 初始条件：dp[0] = 0，其余初始化为无穷大
 * 4. 遍历金额从 1 到 amount，更新 dp 数组
 * 5. 最后返回 dp[amount]，如果 dp[amount] 仍然是无穷大，返回 -1
 * 
 * 时间复杂度：O(amount * n)，其中 n 是硬币的种类数。
 * 空间复杂度：O(amount)，需要一个长度为 amount + 1 的 dp 数组。
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // 初始化 dp 数组，dp[i] 表示凑成金额 i 所需的最少硬币个数
    const dp = new Array(amount + 1).fill(Infinity);
    // 初始条件：凑成金额 0 所需的最少硬币个数为 0
    dp[0] = 0;
    
    // 遍历金额从 1 到 amount
    for (let i = 1; i <= amount; i++) {
        // 遍历每种硬币
        for (const coin of coins) {
            // 如果当前硬币面额小于等于金额 i
            if (coin <= i) {
                // 更新 dp[i] 为所有可能的 dp[i - coin] + 1 中的最小值
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    // 如果 dp[amount] 仍然是无穷大，返回 -1，否则返回 dp[amount]
    return dp[amount] === Infinity ? -1 : dp[amount];
};

// 测试用例
console.log(coinChange([1, 2, 5], 11)); // 输出：3
console.log(coinChange([2], 3)); // 输出：-1
console.log(coinChange([1], 0)); // 输出：0
console.log(coinChange([1, 2, 5], 100)); // 输出：20