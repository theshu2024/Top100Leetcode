/**
 * 无重复字符的最长子串
 * 难度：中等
 * 
 * 题目：给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 示例：
 * 输入：s = "abcabcbb"
 * 输出：3
 * 解释：因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 输入：s = "bbbbb"
 * 输出：1
 * 解释：因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 输入：s = "pwwkew"
 * 输出：3
 * 解释：因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * 解题思路：
 * 1. 使用滑动窗口（双指针）来维护一个无重复字符的子串
 * 2. 右指针不断向右移动，将当前字符加入窗口
 * 3. 如果当前字符已经在窗口中，左指针移动到重复字符的下一个位置
 * 4. 每次移动右指针后，更新最大窗口长度
 * 5. 使用集合（Set）来记录窗口中的字符
 * 
 * 时间复杂度：O(n)，其中 n 是字符串的长度。每个字符会被访问一次。
 * 空间复杂度：O(min(m, n))，其中 m 是字符集的大小。集合最多存储 m 个字符。
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let left = 0;
    const charSet = new Set();
    
    for (let right = 0; right < s.length; right++) {
        // 如果当前字符已经在集合中，移动左指针直到移除重复字符
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        
        // 将当前字符加入集合
        charSet.add(s[right]);
        
        // 更新最大长度
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};

// 测试用例
console.log(lengthOfLongestSubstring("abcabcbb")); // 输出: 3
console.log(lengthOfLongestSubstring("bbbbb")); // 输出: 1
console.log(lengthOfLongestSubstring("pwwkew")); // 输出: 3