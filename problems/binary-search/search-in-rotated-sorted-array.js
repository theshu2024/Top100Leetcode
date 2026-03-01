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