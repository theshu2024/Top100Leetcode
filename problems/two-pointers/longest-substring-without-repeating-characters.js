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
 * 
 * 解题思路：
 * 1. 使用滑动窗口法，维护一个窗口 [left, right]，其中窗口内的字符不重复
 * 2. 使用哈希表来记录窗口内每个字符的最后出现位置
 * 3. 当遇到重复字符时，将左指针移动到重复字符的下一个位置
 * 4. 每次移动右指针时，更新窗口的最大长度
 * 
 * 时间复杂度：O(n)，其中 n 是字符串的长度。每个字符最多被访问一次。
 * 空间复杂度：O(min(n, m))，其中 m 是字符集的大小。哈希表的大小取决于字符串的长度和字符集的大小。
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 哈希表，记录每个字符的最后出现位置
    const map = new Map();
    let maxLength = 0;
    let left = 0;
    
    // 遍历字符串，移动右指针
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        
        // 如果字符已经在哈希表中，并且其最后出现位置大于等于左指针
        if (map.has(char) && map.get(char) >= left) {
            // 将左指针移动到重复字符的下一个位置
            left = map.get(char) + 1;
        }
        
        // 更新字符的最后出现位置
        map.set(char, right);
        // 更新窗口的最大长度
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};

// 测试用例
console.log(lengthOfLongestSubstring("abcabcbb")); // 输出：3
console.log(lengthOfLongestSubstring("bbbbb")); // 输出：1
console.log(lengthOfLongestSubstring("pwwkew")); // 输出：3
console.log(lengthOfLongestSubstring("")); // 输出：0