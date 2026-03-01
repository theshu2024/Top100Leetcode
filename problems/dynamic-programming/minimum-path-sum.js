/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    // 创建dp数组，dp[i][j]表示到达(i,j)的最小路径和
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    
    // 初始化起点
    dp[0][0] = grid[0][0];
    
    // 初始化第一行
    for (let j = 1; j < n; j++) {
        dp[0][j] = dp[0][j-1] + grid[0][j];
    }
    
    // 初始化第一列
    for (let i = 1; i < m; i++) {
        dp[i][0] = dp[i-1][0] + grid[i][0];
    }
    
    // 填充dp数组
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
        }
    }
    
    return dp[m-1][n-1];
};

// 测试用例
console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]])); // 输出: 7
console.log(minPathSum([[1,2,3],[4,5,6]])); // 输出: 12