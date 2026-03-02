/**
 * 在排序数组中查找元素的第一个和最后一个位置
 * 难度：中等
 * 
 * 题目：给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 * 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
 * 
 * 示例：
 * 输入：nums = [5,7,7,8,8,10], target = 8
 * 输出：[3,4]
 * 
 * 输入：nums = [5,7,7,8,8,10], target = 6
 * 输出：[-1,-1]
 * 
 * 输入：nums = [], target = 0
 * 输出：[-1,-1]
 * 
 * 解题思路：
 * 1. 使用二分查找的方法分别查找目标值的左边界和右边界
 * 2. 查找左边界时，当找到目标值时，继续向左搜索，直到找到第一个出现的位置
 * 3. 查找右边界时，当找到目标值时，继续向右搜索，直到找到最后一个出现的位置
 * 4. 返回左边界和右边界
 * 
 * 时间复杂度：O(log n)，其中 n 是数组的长度。两次二分查找的时间复杂度都是 O(log n)。
 * 空间复杂度：O(1)，只使用了常数级别的额外空间。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // 查找左边界
    function findLeft(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let leftmost = -1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                leftmost = mid;
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return leftmost;
    }
    
    // 查找右边界
    function findRight(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let rightmost = -1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                rightmost = mid;
                left = mid + 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return rightmost;
    }
    
    const left = findLeft(nums, target);
    const right = findRight(nums, target);
    
    return [left, right];
};

// 测试用例
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // 输出: [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // 输出: [-1, -1]
console.log(searchRange([], 0)); // 输出: [-1, -1]