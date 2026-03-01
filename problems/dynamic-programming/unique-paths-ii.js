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