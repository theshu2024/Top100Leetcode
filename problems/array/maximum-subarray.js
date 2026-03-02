/**
 * 最大子数组和
 * 难度：简单
 * 
 * 题目：给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 子数组 是数组中的一个连续部分。
 * 
 * 示例：
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 * 
 * 输入：nums = [1]
 * 输出：1
 * 
 * 输入：nums = [5,4,-1,7,8]
 * 输出：23
 * 
 * 解题思路：
 * 1. 使用动态规划，定义 dp[i] 为以 nums[i] 结尾的最大子数组和
 * 2. 状态转移方程：dp[i] = max(nums[i], dp[i-1] + nums[i])
 * 3. 初始条件：dp[0] = nums[0]
 * 4. 遍历数组，更新 dp 数组，并记录最大子数组和
 * 5. 最后返回最大子数组和
 * 
 * 时间复杂度：O(n)，其中 n 是数组的长度。我们只需要遍历数组一次。
 * 空间复杂度：O(1)，可以使用变量来代替 dp 数组，节省空间。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // 边界情况：如果数组为空，返回 0
    if (nums.length === 0) {
        return 0;
    }
    
    // 初始化当前最大子数组和和全局最大子数组和
    let currentMax = nums[0];
    let globalMax = nums[0];
    
    // 遍历数组，从第二个元素开始
    for (let i = 1; i < nums.length; i++) {
        // 更新当前最大子数组和
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        // 更新全局最大子数组和
        globalMax = Math.max(globalMax, currentMax);
    }
    
    return globalMax;
};

// 测试用例
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 输出：6
console.log(maxSubArray([1])); // 输出：1
console.log(maxSubArray([5,4,-1,7,8])); // 输出：23