/**
 * 组合总和
 * 难度：中等
 * 
 * 题目：给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。
 * candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。
 * 对于给定的输入，保证和为 target 的不同组合数少于 150 个。
 * 
 * 示例：
 * 输入：candidates = [2, 3, 6, 7], target = 7
 * 输出：[[2, 2, 3], [7]]
 * 解释：
 * 2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
 * 7 也是一个候选， 7 = 7 。
 * 仅有这两种组合。
 * 
 * 输入：candidates = [2, 3, 5], target = 8
 * 输出：[[2, 2, 2, 2], [2, 3, 3], [3, 5]]
 * 
 * 解题思路：
 * 1. 使用回溯算法
 * 2. 定义一个递归函数，参数包括当前开始的索引、当前组合和当前和
 * 3. 如果当前和等于目标值，将当前组合加入结果
 * 4. 如果当前和大于目标值，直接返回
 * 5. 从当前开始的索引遍历数组，选择当前数字，递归调用函数，然后回溯
 * 6. 为了避免重复组合，每次递归从当前索引开始，而不是从0开始
 * 
 * 时间复杂度：O(n^(target/min))，其中 n 是 candidates 的长度，min 是 candidates 中的最小值。
 * 空间复杂度：O(target/min)，递归栈的深度最多为 target/min。
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}]
 */
var combinationSum = function(candidates, target) {
    const result = [];
    
    function backtrack(start, current, sum) {
        if (sum === target) {
            result.push([...current]);
            return;
        }
        if (sum > target) {
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            current.push(candidates[i]);
            backtrack(i, current, sum + candidates[i]);
            current.pop();
        }
    }
    
    backtrack(0, [], 0);
    return result;
};

// 测试用例
console.log(combinationSum([2, 3, 6, 7], 7)); // 输出: [[2, 2, 3], [7]]
console.log(combinationSum([2, 3, 5], 8)); // 输出: [[2, 2, 2, 2], [2, 3, 3], [3, 5]]