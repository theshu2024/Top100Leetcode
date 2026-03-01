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