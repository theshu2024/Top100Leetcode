/**
 * 每日温度
 * 难度：中等
 * 
 * 题目：给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。
 * 
 * 示例：
 * 输入：temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
 * 输出：[1, 1, 4, 2, 1, 1, 0, 0]
 * 
 * 输入：temperatures = [30, 40, 50, 60]
 * 输出：[1, 1, 1, 0]
 * 
 * 输入：temperatures = [30, 60, 90]
 * 输出：[1, 1, 0]
 * 
 * 解题思路：
 * 1. 使用单调栈来解决
 * 2. 栈中存储的是温度的下标，这些温度还没有找到下一个更高的温度
 * 3. 遍历温度数组：
 *    a. 当栈不为空且当前温度大于栈顶元素对应的温度时：
 *       i. 弹出栈顶元素
 *       ii. 计算当前下标与栈顶元素的差，作为栈顶元素的答案
 *    b. 将当前下标压入栈
 * 4. 遍历结束后，栈中剩余的元素的答案都是 0
 * 
 * 时间复杂度：O(n)，其中 n 是温度数组的长度。每个元素会被压入栈一次，弹出栈一次。
 * 空间复杂度：O(n)，其中 n 是温度数组的长度。栈最多存储 n 个元素。
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = [];
    
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }
    
    return result;
};

// 测试用例
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // 输出: [1, 1, 4, 2, 1, 1, 0, 0]
console.log(dailyTemperatures([30, 40, 50, 60])); // 输出: [1, 1, 1, 0]