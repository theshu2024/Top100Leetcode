/**
 * 滑动窗口最大值
 * 题目：给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
 * 返回滑动窗口中的最大值。
 * 
 * 示例：
 * 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
 * 输出：[3,3,5,5,6,7]
 * 解释：
 * 滑动窗口的位置                最大值
 * ---------------               ------
 * [1  3  -1] -3  5  3  6  7       3
 *  1 [3  -1  -3] 5  3  6  7       3
 *  1  3 [-1  -3  5] 3  6  7       5
 *  1  3  -1 [-3  5  3] 6  7       5
 *  1  3  -1  -3 [5  3  6] 7       6
 *  1  3  -1  -3  5 [3  6  7]      7
 * 
 * 解题思路：
 * 1. 使用双端队列来存储滑动窗口中的元素索引
 * 2. 队列中的元素按照值从大到小的顺序排列
 * 3. 当窗口向右移动时，新元素入队前，将队列中所有小于新元素的元素出队
 * 4. 当队列头部的元素索引不在当前窗口范围内时，出队
 * 5. 队列头部的元素即为当前窗口的最大值
 * 
 * 时间复杂度：O(n)，其中 n 是数组的长度。每个元素最多入队和出队各一次。
 * 空间复杂度：O(k)，队列的大小最多为 k。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const result = [];
    // 双端队列，存储元素索引
    const deque = [];
    
    for (let i = 0; i < nums.length; i++) {
        // 将队列中所有小于当前元素的元素出队
        while (deque.length > 0 && nums[i] >= nums[deque[deque.length - 1]]) {
            deque.pop();
        }
        
        // 将当前元素的索引入队
        deque.push(i);
        
        // 当队列头部的元素索引不在当前窗口范围内时，出队
        if (deque[0] <= i - k) {
            deque.shift();
        }
        
        // 当窗口大小达到 k 时，记录当前窗口的最大值
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    
    return result;
};

// 测试用例
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); // 输出：[3,3,5,5,6,7]
console.log(maxSlidingWindow([1], 1)); // 输出：[1]
console.log(maxSlidingWindow([1,-1], 1)); // 输出：[1,-1]
console.log(maxSlidingWindow([9,11], 2)); // 输出：[11]
console.log(maxSlidingWindow([4,-2], 2)); // 输出：[4]