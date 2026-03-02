/**
 * 存在重复元素
 * 难度：简单
 * 
 * 题目：给定一个整数数组 nums，判断是否存在重复元素。
 * 如果存在一值在数组中出现至少两次，返回 true ；如果数组中每个元素都不相同，则返回 false 。
 * 
 * 示例：
 * 输入：[1, 2, 3, 1]
 * 输出：true
 * 
 * 输入：[1, 2, 3, 4]
 * 输出：false
 * 
 * 输入：[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
 * 输出：true
 * 
 * 解题思路：
 * 1. 使用集合（Set）来存储已经遍历过的元素
 * 2. 遍历数组，对于每个元素：
 *    a. 如果集合中已经存在该元素，返回 true
 *    b. 否则，将该元素添加到集合中
 * 3. 遍历结束后，返回 false
 * 
 * 时间复杂度：O(n)，其中 n 是数组的长度。每个元素会被访问一次。
 * 空间复杂度：O(n)，其中 n 是数组的长度。集合最多存储 n 个元素。
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const seen = new Set();
    
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    
    return false;
};

// 测试用例
console.log(containsDuplicate([1, 2, 3, 1])); // 输出: true
console.log(containsDuplicate([1, 2, 3, 4])); // 输出: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // 输出: true