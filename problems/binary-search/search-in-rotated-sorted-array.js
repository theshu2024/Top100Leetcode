/**
 * 搜索旋转排序数组
 * 难度：中等
 * 
 * 题目：整数数组 nums 按升序排列，数组中的值 互不相同 。
 * 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
 * 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
 * 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。
 * 
 * 示例：
 * 输入：nums = [4, 5, 6, 7, 0, 1, 2], target = 0
 * 输出：4
 * 
 * 输入：nums = [4, 5, 6, 7, 0, 1, 2], target = 3
 * 输出：-1
 * 
 * 输入：nums = [1], target = 0
 * 输出：-1
 * 
 * 解题思路：
 * 1. 使用二分查找来解决这个问题
 * 2. 每次查找时，判断左半部分或右半部分是否有序
 * 3. 如果左半部分有序，判断目标值是否在左半部分的范围内
 * 4. 如果右半部分有序，判断目标值是否在右半部分的范围内
 * 5. 根据判断结果调整左右指针的位置
 * 6. 如果找到目标值，返回其下标；否则返回 -1
 * 
 * 时间复杂度：O(log n)，其中 n 是数组的长度。每次查找将搜索范围减半，所以时间复杂度为 O(log n)。
 * 空间复杂度：O(1)，只使用了常数级别的额外空间。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        }
        
        // 判断左半部分是否有序
        if (nums[left] <= nums[mid]) {
            // 如果目标值在左半部分
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // 右半部分有序
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    
    return -1;
};

// 测试用例
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 输出: 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // 输出: -1
console.log(search([1], 0)); // 输出: -1