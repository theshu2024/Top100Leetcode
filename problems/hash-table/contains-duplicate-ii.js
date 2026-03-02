/**
 * 存在重复元素 II
 * 难度：简单
 * 
 * 题目：给定一个整数数组 nums 和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums[i] == nums[j]，并且 i 和 j 的差的绝对值不超过 k。
 * 
 * 示例：
 * 输入：nums = [1, 2, 3, 1], k = 3
 * 输出：true
 * 
 * 输入：nums = [1, 0, 1, 1], k = 1
 * 输出：true
 * 
 * 输入：nums = [1, 2, 3, 1, 2, 3], k = 2
 * 输出：false
 * 
 * 解题思路：
 * 1. 使用哈希表（Map）来存储每个元素的最近索引
 * 2. 遍历数组，对于每个元素：
 *    a. 如果哈希表中存在该元素，并且当前索引与哈希表中存储的索引的差的绝对值不超过 k，返回 true
 *    b. 否则，更新哈希表中该元素的索引为当前索引
 * 3. 遍历结束后，返回 false
 * 
 * 时间复杂度：O(n)，其中 n 是数组的长度。每个元素会被访问一次。
 * 空间复杂度：O(n)，其中 n 是数组的长度。哈希表最多存储 n 个元素。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
            return true;
        }
        map.set(nums[i], i);
    }
    
    return false;
};

// 测试用例
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // 输出: true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // 输出: true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // 输出: false