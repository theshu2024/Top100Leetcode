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