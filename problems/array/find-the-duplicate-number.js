/**
 * 寻找重复数
 * 难度：中等
 * 
 * 题目：给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。
 * 假设 nums 只有 一个重复的整数 ，找出 这个重复的数 。
 * 你必须设计并实现线性时间复杂度 O(n) 且仅使用常量额外空间 O(1) 的算法解决此问题。
 * 
 * 示例：
 * 输入：nums = [1, 3, 4, 2, 2]
 * 输出：2
 * 
 * 输入：nums = [3, 1, 3, 4, 2]
 * 输出：3
 * 
 * 输入：nums = [1, 1]
 * 输出：1
 * 
 * 解题思路：
 * 1. 使用二分查找的方法
 * 2. 对于每个中间值 mid，统计数组中小于等于 mid 的数的个数
 * 3. 如果个数大于 mid，说明重复数在 [left, mid] 范围内
 * 4. 否则，重复数在 [mid+1, right] 范围内
 * 5. 重复上述过程，直到 left == right，此时 left 就是重复的数
 * 
 * 时间复杂度：O(n log n)，其中 n 是数组的长度。每次二分查找需要遍历整个数组。
 * 空间复杂度：O(1)，只使用了常数级别的额外空间。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // 二分查找
    let left = 1;
    let right = nums.length - 1;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        let count = 0;
        
        // 统计小于等于mid的数的个数
        for (const num of nums) {
            if (num <= mid) {
                count++;
            }
        }
        
        if (count > mid) {
            // 重复数在[left, mid]范围内
            right = mid;
        } else {
            // 重复数在[mid+1, right]范围内
            left = mid + 1;
        }
    }
    
    return left;
};

// 测试用例
console.log(findDuplicate([1, 3, 4, 2, 2])); // 输出: 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // 输出: 3