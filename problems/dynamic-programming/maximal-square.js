/**
 * 最大正方形
 * 题目：在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。
 * 
 * 示例：
 * 输入：matrix = [
 *   ["1","0","1","0","0"],
 *   ["1","0","1","1","1"],
 *   ["1","1","1","1","1"],
 *   ["1","0","0","1","0"]
 * ]
 * 输出：4
 * 解释：最大的正方形是边长为 2 的正方形，面积为 4。
 * 
 * 解题思路：
 * 1. 使用动态规划，定义 dp[i][j] 为以 (i, j) 为右下角的最大正方形的边长
 * 2. 状态转移方程：如果 matrix[i][j] 为 '1'，则 dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
 * 3. 初始条件：如果 matrix[i][j] 为 '1'，则 dp[i][j] 至少为 1
 * 4. 遍历矩阵，更新 dp 数组，并记录最大边长
 * 5. 最后返回最大边长的平方
 * 
 * 时间复杂度：O(m * n)，其中 m 是矩阵的行数，n 是矩阵的列数。
 * 空间复杂度：O(m * n)，需要一个二维 dp 数组。
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }
    
    const rows = matrix.length;
    const cols = matrix[0].length;
    const dp = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
    let maxSide = 0;
    
    // 遍历矩阵
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // 如果当前位置是 '1'
            if (matrix[i][j] === '1') {
                // 边界情况：如果是第一行或第一列，最大正方形的边长为 1
                if (i === 0 || j === 0) {
                    dp[i][j] = 1;
                } else {
                    // 状态转移方程：取左上角、上方、左方三个位置的最小值加 1
                    dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
                }
                // 更新最大边长
                maxSide = Math.max(maxSide, dp[i][j]);
            }
        }
    }
    
    // 返回最大正方形的面积
    return maxSide * maxSide;
};

// 测试用例
console.log(maximalSquare([
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
])); // 输出：4

console.log(maximalSquare([["0","1"],["1","0"]])); // 输出：1
console.log(maximalSquare([["0"]])); // 输出：0