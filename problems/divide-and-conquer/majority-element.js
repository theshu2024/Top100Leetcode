/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // 分治解法
    function divideAndConquer(left, right) {
        // 基本情况：单个元素
        if (left === right) {
            return nums[left];
        }
        
        // 分解
        const mid = Math.floor((left + right) / 2);
        const leftMajority = divideAndConquer(left, mid);
        const rightMajority = divideAndConquer(mid + 1, right);
        
        // 合并：如果左右两边的众数相同，直接返回
        if (leftMajority === rightMajority) {
            return leftMajority;
        }
        
        // 否则，统计两边众数在整个区间中的出现次数
        let leftCount = 0;
        let rightCount = 0;
        for (let i = left; i <= right; i++) {
            if (nums[i] === leftMajority) {
                leftCount++;
            } else if (nums[i] === rightMajority) {
                rightCount++;
            }
        }
        
        return leftCount > rightCount ? leftMajority : rightMajority;
    }
    
    return divideAndConquer(0, nums.length - 1);
};

// 测试用例
console.log(majorityElement([3, 2, 3])); // 输出: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 输出: 2