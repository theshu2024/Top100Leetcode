/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const set = new Set(wordDict);
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true; // 空字符串可以被拆分
    
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && set.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    
    return dp[s.length];
};

// 测试用例
console.log(wordBreak("leetcode", ["leet", "code"])); // 输出: true
console.log(wordBreak("applepenapple", ["apple", "pen"])); // 输出: true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // 输出: false