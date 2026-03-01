/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
            return true;
        }
        map.set(nums[i], i);
    }
    
    return false;
};

// 测试用例
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // 输出: true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // 输出: true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // 输出: false