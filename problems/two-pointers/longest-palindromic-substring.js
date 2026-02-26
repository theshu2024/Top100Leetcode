/**
 * 最长回文子串
 * 题目：给你一个字符串 s，找到 s 中最长的回文子串。
 * 
 * 示例：
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * 
 * 输入：s = "cbbd"
 * 输出："bb"
 * 
 * 解题思路：
 * 1. 中心扩展法：遍历字符串的每个字符，以该字符为中心向两边扩展，寻找最长的回文子串
 * 2. 考虑两种情况：
 *    - 回文子串的长度为奇数，中心是一个字符
 *    - 回文子串的长度为偶数，中心是两个字符
 * 3. 记录最长回文子串的起始位置和长度
 * 4. 遍历结束后，返回最长回文子串
 * 
 * 时间复杂度：O(n^2)，其中 n 是字符串的长度。对于每个字符，我们最多需要扩展 O(n) 次。
 * 空间复杂度：O(1)，只使用了常数级别的额外空间。
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // 边界情况：如果字符串为空或长度为1，返回原字符串
    if (s.length <= 1) {
        return s;
    }
    
    let start = 0; // 最长回文子串的起始位置
    let maxLength = 1; // 最长回文子串的长度
    
    // 中心扩展函数
    function expandAroundCenter(left, right) {
        // 向两边扩展，直到不满足回文条件
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // 计算回文子串的长度
        const length = right - left - 1;
        // 如果当前回文子串的长度大于最大长度，更新最大长度和起始位置
        if (length > maxLength) {
            maxLength = length;
            start = left + 1;
        }
    }
    
    // 遍历字符串的每个字符
    for (let i = 0; i < s.length; i++) {
        // 情况1：回文子串的长度为奇数，中心是一个字符
        expandAroundCenter(i, i);
        // 情况2：回文子串的长度为偶数，中心是两个字符
        expandAroundCenter(i, i + 1);
    }
    
    // 返回最长回文子串
    return s.substring(start, start + maxLength);
};

// 测试用例
console.log(longestPalindrome("babad")); // 输出："bab" 或 "aba"
console.log(longestPalindrome("cbbd")); // 输出："bb"
console.log(longestPalindrome("a")); // 输出："a"
console.log(longestPalindrome("ac")); // 输出："a" 或 "c"