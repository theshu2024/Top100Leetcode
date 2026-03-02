/**
 * 单词拆分
 * 难度：中等
 * 
 * 题目：给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。
 * 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。
 * 
 * 示例：
 * 输入：s = "leetcode", wordDict = ["leet", "code"]
 * 输出：true
 * 解释：返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
 * 
 * 输入：s = "applepenapple", wordDict = ["apple", "pen"]
 * 输出：true
 * 解释："applepenapple" 可以由 "apple" "pen" "apple" 拼接成。注意，你可以重复使用字典中的单词。
 * 
 * 输入：s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
 * 输出：false
 * 
 * 解题思路：
 * 1. 使用动态规划的方法
 * 2. 创建一个dp数组，其中 dp[i] 表示字符串 s 的前 i 个字符是否可以被拆分为字典中的单词
 * 3. 初始化 dp[0] 为 true，因为空字符串可以被拆分
 * 4. 遍历字符串 s 的每个位置 i：
 *    a. 对于每个位置 j 从 0 到 i-1：
 *       i. 如果 dp[j] 为 true，并且 s.substring(j, i) 在字典中，则 dp[i] 为 true
 * 5. 最后返回 dp[s.length]
 * 
 * 时间复杂度：O(n²)，其中 n 是字符串 s 的长度。双重循环的时间复杂度是 O(n²)。
 * 空间复杂度：O(n)，其中 n 是字符串 s 的长度。需要额外的数组来存储 dp 值。
 */

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