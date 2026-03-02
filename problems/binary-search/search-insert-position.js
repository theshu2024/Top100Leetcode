/**
 * 搜索插入位置
 * 难度：简单
 * 
 * 题目：给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 请必须使用时间复杂度为 O(log n) 的算法。
 * 
 * 示例：
 * 输入：nums = [1,3,5,6], target = 5
 * 输出：2
 * 
 * 输入：nums = [1,3,5,6], target = 2
 * 输出：1
 * 
 * 输入：nums = [1,3,5,6], target = 7
 * 输出：4
 * 
 * 解题思路：
 * 1. 使用二分查找的方法
 * 2. 初始化左右指针
 * 3. 当左指针小于等于右指针时，计算中间位置
 * 4. 如果中间位置的元素等于目标值，返回中间位置
 * 5. 如果中间位置的元素小于目标值，左指针右移
 * 6. 如果中间位置的元素大于目标值，右指针左移
 * 7. 循环结束后，返回左指针，此时左指针的位置就是目标值应该插入的位置
 * 
 * 时间复杂度：O(log n)，其中 n 是数组的长度。二分查找的时间复杂度是 O(log n)。
 * 空间复杂度：O(1)，只使用了常数级别的额外空间。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left;
};

// 测试用例
console.log(searchInsert([1, 3, 5, 6], 5)); // 输出: 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 输出: 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 输出: 4