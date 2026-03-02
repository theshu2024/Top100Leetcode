/**
 * 不同路径 II
 * 难度：中等
 * 
 * 题目：一个机器人位于一个 m x n 网格的左上角（起始点在下图中标记为 “Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 * 网格中的障碍物和空位置分别用 1 和 0 来表示。
 * 
 * 示例：
 * 输入：obstacleGrid = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
 * 输出：2
 * 解释：
 * 3x3 网格的正中间有一个障碍物。
 * 从左上角到右下角一共有 2 条不同的路径：
 * 1. 向右 -> 向右 -> 向下 -> 向下
 * 2. 向下 -> 向下 -> 向右 -> 向右
 * 
 * 输入：obstacleGrid = [[0, 1], [0, 0]]
 * 输出：1
 * 
 * 解题思路：
 * 1. 使用动态规划的方法
 * 2. 创建一个二维dp数组，dp[i][j]表示到达(i,j)的路径数
 * 3. 初始化起点：如果起点没有障碍物，dp[0][0] = 1，否则为0
 * 4. 初始化第一行：如果当前位置没有障碍物，dp[0][j] = dp[0][j-1]，否则为0
 * 5. 初始化第一列：如果当前位置没有障碍物，dp[i][0] = dp[i-1][0]，否则为0
 * 6. 填充dp数组：对于每个位置(i,j)，如果没有障碍物，dp[i][j] = dp[i-1][j] + dp[i][j-1]，否则为0
 * 7. 返回dp[m-1][n-1]，即到达右下角的路径数
 * 
 * 时间复杂度：O(m*n)，其中 m 和 n 是网格的行数和列数。每个位置会被访问一次。
 * 空间复杂度：O(m*n)，其中 m 和 n 是网格的行数和列数。需要额外的二维数组来存储dp值。
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    
    // 创建dp数组，dp[i][j]表示到达(i,j)的路径数
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    
    // 初始化起点
    dp[0][0] = obstacleGrid[0][0] === 0 ? 1 : 0;
    
    // 初始化第一行
    for (let j = 1; j < n; j++) {
        if (obstacleGrid[0][j] === 0) {
            dp[0][j] = dp[0][j - 1];
        }
    }
    
    // 初始化第一列
    for (let i = 1; i < m; i++) {
        if (obstacleGrid[i][0] === 0) {
            dp[i][0] = dp[i - 1][0];
        }
    }
    
    // 填充dp数组
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 0) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    
    return dp[m - 1][n - 1];
};

// 测试用例
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]])); // 输出: 2
console.log(uniquePathsWithObstacles([[0, 1], [0, 0]])); // 输出: 1