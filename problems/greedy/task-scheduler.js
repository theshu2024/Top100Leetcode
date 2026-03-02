/**
 * 任务调度器
 * 难度：中等
 * 
 * 题目：给你一个用字符数组 tasks 表示的 CPU 需要执行的任务列表。其中每个字母表示一种不同种类的任务。
 * 任务可以以任意顺序执行，并且每个任务都可以在 1 个单位时间内执行完。
 * 在任何一个单位时间，CPU 可以完成一个任务，或者处于待命状态。
 * 然而，两个 相同种类 的任务之间必须有长度为整数 n 的冷却时间，因此至少有连续 n 个单位时间内 CPU 在执行不同的任务，或者在待命状态。
 * 你需要计算完成所有任务所需要的 最短时间 。
 * 
 * 示例：
 * 输入：tasks = ["A", "A", "A", "B", "B", "B"], n = 2
 * 输出：8
 * 解释：
 * A -> B -> (待命) -> A -> B -> (待命) -> A -> B
 * 在本示例中，两个相同类型任务之间必须间隔长度为 n = 2 的冷却时间，而执行一个任务只需要一个单位时间，所以中间出现了（待命）状态。 
 * 
 * 输入：tasks = ["A", "A", "A", "B", "B", "B"], n = 0
 * 输出：6
 * 解释：在这种情况下，任何大小为 6 的排列都可以满足要求，因为 n = 0。
 * ["A", "A", "A", "B", "B", "B"]
 * 
 * 输入：tasks = ["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], n = 2
 * 输出：16
 * 解释：
 * 一种可能的解决方案是：
 * A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> (待命) -> (待命) -> A -> (待命) -> (待命) -> A
 * 
 * 解题思路：
 * 1. 统计每个任务的出现次数
 * 2. 找到出现次数最多的任务
 * 3. 计算最大出现次数的任务数量
 * 4. 计算所需的最小时间：(最大出现次数 - 1) * (n + 1) + 最大出现次数的任务数量
 * 5. 如果计算的时间小于任务总数，返回任务总数
 * 
 * 时间复杂度：O(n)，其中 n 是任务的数量。统计每个任务的出现次数的时间复杂度是 O(n)，排序的时间复杂度是 O(26 log 26)，可以忽略。
 * 空间复杂度：O(1)，只使用了常数级别的额外空间。
 */

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