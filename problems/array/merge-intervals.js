/**
 * 合并区间
 * 难度：中等
 * 
 * 题目：以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
 * 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 * 
 * 示例：
 * 输入：intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
 * 输出：[[1, 6], [8, 10], [15, 18]]
 * 解释：区间 [1, 3] 和 [2, 6] 重叠, 将它们合并为 [1, 6].
 * 
 * 输入：intervals = [[1, 4], [4, 5]]
 * 输出：[[1, 5]]
 * 解释：区间 [1, 4] 和 [4, 5] 可被视为重叠区间。
 * 
 * 解题思路：
 * 1. 首先按区间的起始位置排序
 * 2. 初始化结果数组，将第一个区间加入结果
 * 3. 遍历剩余的区间，对于每个区间：
 *    a. 如果当前区间与结果数组中的最后一个区间重叠，合并它们
 *    b. 否则，将当前区间加入结果数组
 * 4. 返回结果数组
 * 
 * 时间复杂度：O(n log n)，其中 n 是区间的数量。排序的时间复杂度是 O(n log n)，遍历的时间复杂度是 O(n)。
 * 空间复杂度：O(log n) 或 O(n)，取决于排序算法的实现。
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}]
 */
var merge = function(intervals) {
    if (intervals.length === 0) return [];
    
    // 按起始位置排序
    intervals.sort((a, b) => a[0] - b[0]);
    
    const result = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        const last = result[result.length - 1];
        const current = intervals[i];
        
        if (current[0] <= last[1]) {
            // 有重叠，合并区间
            last[1] = Math.max(last[1], current[1]);
        } else {
            // 无重叠，添加新区间
            result.push(current);
        }
    }
    
    return result;
};

// 测试用例
console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])); // 输出: [[1, 6], [8, 10], [15, 18]]
console.log(merge([[1, 4], [4, 5]])); // 输出: [[1, 5]]