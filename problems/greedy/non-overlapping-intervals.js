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