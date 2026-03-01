/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
    // 情况1：不偷第一个房子
    function robRange(start, end) {
        let prev1 = 0;
        let prev2 = 0;
        
        for (let i = start; i <= end; i++) {
            const current = Math.max(prev1, prev2 + nums[i]);
            prev2 = prev1;
            prev1 = current;
        }
        
        return prev1;
    }
    
    // 情况1：不偷第一个房子，情况2：不偷最后一个房子
    return Math.max(robRange(1, nums.length - 1), robRange(0, nums.length - 2));
};

// 测试用例
console.log(rob([2, 3, 2])); // 输出: 3
console.log(rob([1, 2, 3, 1])); // 输出: 4
console.log(rob([0])); // 输出: 0