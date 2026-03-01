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