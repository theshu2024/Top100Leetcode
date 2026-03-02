/**
 * 全排列
 * 难度：中等
 * 
 * 题目：给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * 
 * 示例：
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * 解题思路：
 * 1. 使用回溯法，遍历所有可能的排列
 * 2. 维护一个路径数组，记录当前已经选择的元素
 * 3. 维护一个布尔数组，记录哪些元素已经被选择
 * 4. 当路径数组的长度等于原数组的长度时，将路径数组加入结果集
 * 5. 遍历原数组，对于每个未被选择的元素，将其加入路径数组，标记为已选择，然后递归调用，最后回溯，将元素从路径数组中移除，标记为未选择
 * 
 * 时间复杂度：O(n!)，其中 n 是数组的长度。n 个元素的全排列有 n! 种可能。
 * 空间复杂度：O(n)，递归的深度最多为 n，需要额外的空间来存储路径和标记数组。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    // 路径数组，记录当前已经选择的元素
    const path = [];
    // 标记数组，记录哪些元素已经被选择
    const used = new Array(nums.length).fill(false);
    
    // 回溯函数
    function backtrack() {
        // 当路径数组的长度等于原数组的长度时，将路径数组加入结果集
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }
        
        // 遍历原数组
        for (let i = 0; i < nums.length; i++) {
            // 如果元素已经被选择，跳过
            if (used[i]) {
                continue;
            }
            
            // 将元素加入路径数组，标记为已选择
            path.push(nums[i]);
            used[i] = true;
            
            // 递归调用
            backtrack();
            
            // 回溯，将元素从路径数组中移除，标记为未选择
            path.pop();
            used[i] = false;
        }
    }
    
    // 调用回溯函数
    backtrack();
    
    return result;
};

// 测试用例
console.log(permute([1,2,3])); // 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([0,1])); // 输出：[[0,1],[1,0]]
console.log(permute([1])); // 输出：[[1]]