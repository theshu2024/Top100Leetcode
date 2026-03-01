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