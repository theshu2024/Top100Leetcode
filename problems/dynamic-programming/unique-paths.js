/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // 创建dp数组，dp[i][j]表示到达(i,j)的路径数
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    
    // 初始化第一行和第一列
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }
    
    // 填充dp数组
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    
    return dp[m-1][n-1];
};

// 测试用例
console.log(uniquePaths(3, 7)); // 输出: 28
console.log(uniquePaths(3, 2)); // 输出: 3