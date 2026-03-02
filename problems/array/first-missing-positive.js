/**
 * 缺失的第一个正数
 * 难度：困难
 * 
 * 题目：给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
 * 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
 * 
 * 示例：
 * 输入：nums = [1, 2, 0]
 * 输出：3
 * 
 * 输入：nums = [3, 4, -1, 1]
 * 输出：2
 * 
 * 输入：nums = [7, 8, 9, 11, 12]
 * 输出：1
 * 
 * 解题思路：
 * 1. 由于要找的是最小的正整数，我们可以将注意力集中在 1 到 n 的范围内（n 是数组长度）
 * 2. 首先将所有非正数标记为 n+1，这样它们就不会干扰我们的判断
 * 3. 然后遍历数组，对于每个在 1 到 n 范围内的数，将其对应的索引位置标记为负数
 * 4. 最后遍历数组，找到第一个正数的位置，该位置加 1 就是缺失的最小正整数
 * 5. 如果所有位置都是负数，说明 1 到 n 都存在，返回 n+1
 * 
 * 时间复杂度：O(n)，其中 n 是数组的长度。每个元素会被访问两次。
 * 空间复杂度：O(1)，只使用了常数级别的额外空间。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const n = nums.length;
    
    // 标记非正数为 n+1
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0) {
            nums[i] = n + 1;
        }
    }
    
    // 标记存在的正数
    for (let i = 0; i < n; i++) {
        const num = Math.abs(nums[i]);
        if (num <= n) {
            nums[num - 1] = -Math.abs(nums[num - 1]);
        }
    }
    
    // 找到第一个未标记的位置
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }
    
    // 所有位置都被标记，返回 n+1
    return n + 1;
};

// 测试用例
console.log(firstMissingPositive([1, 2, 0])); // 输出: 3
console.log(firstMissingPositive([3, 4, -1, 1])); // 输出: 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // 输出: 1