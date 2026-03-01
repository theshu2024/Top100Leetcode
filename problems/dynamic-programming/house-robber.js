/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
    // dp[i] 表示前i个房子能偷到的最大金额
    const dp = new Array(nums.length);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    
    for (let i = 2; i < nums.length; i++) {
        // 对于第i个房子，有两种选择：偷或不偷
        // 偷的话，就不能偷第i-1个房子，所以金额是dp[i-2] + nums[i]
        // 不偷的话，金额就是dp[i-1]
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);
    }
    
    return dp[nums.length - 1];
};

// 测试用例
console.log(rob([1, 2, 3, 1])); // 输出: 4
console.log(rob([2, 7, 9, 3, 1])); // 输出: 12
console.log(rob([0])); // 输出: 0