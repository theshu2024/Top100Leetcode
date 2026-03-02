/**
 * 无重叠区间
 * 难度：中等
 * 
 * 题目：给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。
 * 注意: 可以认为区间的终点总是大于它的起点。 区间 [1,2] 和 [2,3] 的边界相互“接触”，但没有相互重叠。
 * 
 * 示例：
 * 输入：[[1, 2], [2, 3], [3, 4], [1, 3]]
 * 输出：1
 * 解释：移除 [1,3] 后，剩下的区间没有重叠。
 * 
 * 输入：[[1, 2], [1, 2], [1, 2]]
 * 输出：2
 * 解释：你需要移除两个 [1,2] 来使剩下的区间没有重叠。
 * 
 * 输入：[[1, 2], [2, 3]]
 * 输出：0
 * 解释：你不需要移除任何区间，因为它们已经是无重叠的了。
 * 
 * 解题思路：
 * 1. 使用贪心算法
 * 2. 按区间的结束时间排序
 * 3. 初始化结束时间为第一个区间的结束时间
 * 4. 遍历剩余区间：
 *    a. 如果当前区间的起始时间小于结束时间，说明有重叠，需要删除，计数器加1
 *    b. 否则，更新结束时间为当前区间的结束时间
 * 5. 返回计数器的值
 * 
 * 时间复杂度：O(n log n)，其中 n 是区间的数量。排序的时间复杂度是 O(n log n)，遍历的时间复杂度是 O(n)。
 * 空间复杂度：O(1)，只使用了常数级别的额外空间。
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if (intervals.length === 0) return 0;
    
    // 按结束时间排序
    intervals.sort((a, b) => a[1] - b[1]);
    
    let count = 0;
    let end = intervals[0][1];
    
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < end) {
            // 重叠，需要删除
            count++;
        } else {
            // 不重叠，更新结束时间
            end = intervals[i][1];
        }
    }
    
    return count;
};

// 测试用例
console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]])); // 输出: 1
console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]])); // 输出: 2
console.log(eraseOverlapIntervals([[1, 2], [2, 3]])); // 输出: 0