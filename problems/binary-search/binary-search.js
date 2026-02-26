/**
 * 二分查找
 * 题目：给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 * 
 * 示例：
 * 输入：nums = [-1,0,3,5,9,12], target = 9
 * 输出：4
 * 解释：9 出现在 nums 中并且下标为 4
 * 
 * 输入：nums = [-1,0,3,5,9,12], target = 2
 * 输出：-1
 * 解释：2 不存在 nums 中因此返回 -1
 * 
 * 解题思路：
 * 1. 使用二分查找算法，将数组分为左右两部分
 * 2. 初始化左指针为 0，右指针为数组长度减 1
 * 3. 当左指针小于等于右指针时，计算中间位置
 * 4. 如果中间位置的元素等于目标值，返回中间位置的索引
 * 5. 如果中间位置的元素小于目标值，将左指针移到中间位置的右侧
 * 6. 如果中间位置的元素大于目标值，将右指针移到中间位置的左侧
 * 7. 如果没有找到目标值，返回 -1
 * 
 * 时间复杂度：O(log n)，其中 n 是数组的长度。每次查找都会将搜索范围减半。
 * 空间复杂度：O(1)，只使用了常数级别的额外空间。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // 初始化左指针和右指针
    let left = 0;
    let right = nums.length - 1;
    
    // 当左指针小于等于右指针时，继续查找
    while (left <= right) {
        // 计算中间位置
        const mid = Math.floor((left + right) / 2);
        
        // 如果中间位置的元素等于目标值，返回中间位置的索引
        if (nums[mid] === target) {
            return mid;
        }
        // 如果中间位置的元素小于目标值，将左指针移到中间位置的右侧
        else if (nums[mid] < target) {
            left = mid + 1;
        }
        // 如果中间位置的元素大于目标值，将右指针移到中间位置的左侧
        else {
            right = mid - 1;
        }
    }
    
    // 如果没有找到目标值，返回 -1
    return -1;
};

// 测试用例
console.log(search([-1,0,3,5,9,12], 9)); // 输出：4
console.log(search([-1,0,3,5,9,12], 2)); // 输出：-1
console.log(search([5], 5)); // 输出：0
console.log(search([5], 6)); // 输出：-1