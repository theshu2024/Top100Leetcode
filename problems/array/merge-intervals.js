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