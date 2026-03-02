/**
 * 多数元素
 * 难度：简单
 * 
 * 题目：给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * 
 * 示例：
 * 输入：nums = [3, 2, 3]
 * 输出：3
 * 
 * 输入：nums = [2, 2, 1, 1, 1, 2, 2]
 * 输出：2
 * 
 * 解题思路：
 * 1. 使用分治法来解决这个问题
 * 2. 将数组分成左右两部分，分别找出左右两部分的众数
 * 3. 如果左右两部分的众数相同，直接返回该众数
 * 4. 否则，统计左右两部分的众数在整个数组中的出现次数，返回出现次数较多的那个
 * 5. 基本情况是当数组长度为1时，返回该元素
 * 
 * 时间复杂度：O(n log n)，其中 n 是数组的长度。每次递归将数组分成两半，所以时间复杂度为 O(n log n)。
 * 空间复杂度：O(log n)，递归栈的深度最多为 log n。
 */

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