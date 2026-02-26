/**
 * 跳跃游戏
 * 题目：给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个下标。
 * 
 * 示例：
 * 输入：nums = [2,3,1,1,4]
 * 输出：true
 * 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
 * 
 * 输入：nums = [3,2,1,0,4]
 * 输出：false
 * 解释：无论怎样，总会到达下标为 3 的位置。但该位置的最大跳跃长度是 0 ，所以永远不可能到达最后一个下标。
 * 
 * 解题思路：
 * 1. 使用贪心算法，维护一个最远可达位置
 * 2. 遍历数组，对于每个位置，更新最远可达位置
 * 3. 如果最远可达位置大于等于数组的最后一个下标，返回true
 * 4. 如果当前位置超过了最远可达位置，返回false
 * 
 * 时间复杂度：O(n)，其中 n 是数组的长度。我们只需要遍历数组一次。
 * 空间复杂度：O(1)，只使用了常数级别的额外空间。
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // 最远可达位置
    let maxReach = 0;
    
    // 遍历数组
    for (let i = 0; i < nums.length; i++) {
        // 如果当前位置超过了最远可达位置，返回false
        if (i > maxReach) {
            return false;
        }
        
        // 更新最远可达位置
        maxReach = Math.max(maxReach, i + nums[i]);
        
        // 如果最远可达位置大于等于数组的最后一个下标，返回true
        if (maxReach >= nums.length - 1) {
            return true;
        }
    }
    
    // 遍历结束后，检查最远可达位置是否大于等于数组的最后一个下标
    return maxReach >= nums.length - 1;
};

// 测试用例
console.log(canJump([2,3,1,1,4])); // 输出：true
console.log(canJump([3,2,1,0,4])); // 输出：false
console.log(canJump([0])); // 输出：true
console.log(canJump([2,0,0])); // 输出：true