/**
 * 最长递增子序列
 * 难度：中等
 * 
 * 题目：给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * 子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
 * 
 * 示例：
 * 输入：nums = [10,9,2,5,3,7,101,18]
 * 输出：4
 * 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4。
 * 
 * 解题思路：
 * 1. 动态规划的思想：定义 dp[i] 为以 nums[i] 结尾的最长递增子序列的长度
 * 2. 状态转移方程：dp[i] = max(dp[j] + 1)，其中 j < i 且 nums[j] < nums[i]
 * 3. 初始条件：dp[i] = 1，因为每个元素自身可以构成一个长度为 1 的子序列
 * 4. 最终结果：max(dp)
 * 
 * 时间复杂度：O(n^2)，其中 n 是数组的长度。对于每个元素，我们需要遍历其前面的所有元素。
 * 空间复杂度：O(n)，需要一个长度为 n 的 dp 数组。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // 边界情况：如果数组为空，返回0
    if (nums.length === 0) {
        return 0;
    }
    
    // 初始化 dp 数组，dp[i] 表示以 nums[i] 结尾的最长递增子序列的长度
    const dp = new Array(nums.length).fill(1);
    let maxLength = 1;
    
    // 遍历数组
    for (let i = 1; i < nums.length; i++) {
        // 遍历 i 前面的所有元素
        for (let j = 0; j < i; j++) {
            // 如果 nums[j] < nums[i]，则可以将 nums[i] 接在 nums[j] 后面，形成一个更长的递增子序列
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        // 更新最大长度
        maxLength = Math.max(maxLength, dp[i]);
    }
    
    return maxLength;
};

// 测试用例
console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // 输出：4
console.log(lengthOfLIS([0,1,0,3,2,3])); // 输出：4
console.log(lengthOfLIS([7,7,7,7,7,7,7])); // 输出：1
console.log(lengthOfLIS([4,10,4,3,8,9])); // 输出：3