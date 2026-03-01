/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const n = nums.length;
    
    // 将负数和大于n的数标记为n+1
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0 || nums[i] > n) {
            nums[i] = n + 1;
        }
    }
    
    // 将出现过的数对应的位置标记为负数
    for (let i = 0; i < n; i++) {
        const num = Math.abs(nums[i]);
        if (num <= n) {
            nums[num - 1] = -Math.abs(nums[num - 1]);
        }
    }
    
    // 找到第一个正数的位置
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }
    
    return n + 1;
};

// 测试用例
console.log(firstMissingPositive([1, 2, 0])); // 输出: 3
console.log(firstMissingPositive([3, 4, -1, 1])); // 输出: 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // 输出: 1