/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    // 统计每个任务的出现次数
    const count = new Array(26).fill(0);
    for (const task of tasks) {
        count[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }
    
    // 找到出现次数最多的任务
    count.sort((a, b) => b - a);
    const maxCount = count[0];
    
    // 计算最大出现次数的任务数量
    let maxCountTasks = 0;
    for (const c of count) {
        if (c === maxCount) {
            maxCountTasks++;
        } else {
            break;
        }
    }
    
    // 计算所需的最小时间
    const time = (maxCount - 1) * (n + 1) + maxCountTasks;
    
    // 如果计算的时间小于任务总数，返回任务总数
    return Math.max(time, tasks.length);
};

// 测试用例
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2)); // 输出: 8
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 0)); // 输出: 6
console.log(leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2)); // 输出: 16