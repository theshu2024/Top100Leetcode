/**
 * 最长公共子序列
 * 难度：中等
 * 
 * 题目：给定两个字符串 text1 和 text2，返回这两个字符串的最长公共子序列的长度。
 * 一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
 * 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。两个字符串的「公共子序列」是这两个字符串所共同拥有的子序列。
 * 
 * 示例：
 * 输入：text1 = "abcde", text2 = "ace"
 * 输出：3
 * 解释：最长公共子序列是 "ace"，它的长度为 3。
 * 
 * 输入：text1 = "abc", text2 = "abc"
 * 输出：3
 * 解释：最长公共子序列是 "abc"，它的长度为 3。
 * 
 * 输入：text1 = "abc", text2 = "def"
 * 输出：0
 * 解释：两个字符串没有公共子序列，返回 0。
 * 
 * 解题思路：
 * 1. 使用动态规划的方法
 * 2. 创建一个二维dp数组，dp[i][j]表示text1前i个字符和text2前j个字符的最长公共子序列长度
 * 3. 初始化dp数组的第一行和第一列为0，因为空字符串与任何字符串的最长公共子序列长度都是0
 * 4. 遍历两个字符串，对于每个字符：
 *    a. 如果text1[i-1] === text2[j-1]，则dp[i][j] = dp[i-1][j-1] + 1
 *    b. 否则，dp[i][j] = max(dp[i-1][j], dp[i][j-1])
 * 5. 返回dp[m][n]，其中m和n分别是两个字符串的长度
 * 
 * 时间复杂度：O(m*n)，其中 m 和 n 是两个字符串的长度。每个位置会被访问一次。
 * 空间复杂度：O(m*n)，其中 m 和 n 是两个字符串的长度。需要额外的二维数组来存储dp值。
 */

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    
    // 创建dp数组，dp[i][j]表示text1前i个字符和text2前j个字符的最长公共子序列长度
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    return dp[m][n];
};

// 测试用例
console.log(longestCommonSubsequence("abcde", "ace")); // 输出: 3
console.log(longestCommonSubsequence("abc", "abc")); // 输出: 3
console.log(longestCommonSubsequence("abc", "def")); // 输出: 0