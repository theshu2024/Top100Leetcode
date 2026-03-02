/**
 * 最小覆盖子串
 * 难度：困难
 * 
 * 题目：给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。
 * 如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 * 注意：
 * - 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 * - 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 * 
 * 示例：
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 * 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
 * 
 * 输入：s = "a", t = "a"
 * 输出："a"
 * 解释：整个字符串 s 是最小覆盖子串。
 * 
 * 输入：s = "a", t = "aa"
 * 输出：""
 * 解释：没有符合条件的子串，返回空字符串。
 * 
 * 解题思路：
 * 1. 使用滑动窗口（双指针）来维护一个覆盖t所有字符的子串
 * 2. 首先统计t中各字符的出现次数
 * 3. 右指针不断向右移动，直到窗口包含t所有字符
 * 4. 当窗口包含t所有字符时，尝试移动左指针缩小窗口
 * 5. 记录最小窗口的长度和起始位置
 * 6. 使用哈希表（Map）来记录字符的出现次数
 * 
 * 时间复杂度：O(n)，其中 n 是字符串 s 的长度。每个字符会被访问两次（左指针和右指针各一次）。
 * 空间复杂度：O(m)，其中 m 是字符串 t 的长度。哈希表最多存储 m 个字符。
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (!s || !t || s.length < t.length) return "";
    
    const targetMap = new Map();
    for (const char of t) {
        targetMap.set(char, (targetMap.get(char) || 0) + 1);
    }
    
    let left = 0;
    let right = 0;
    let count = targetMap.size;
    let minLen = Infinity;
    let minStart = 0;
    
    while (right < s.length) {
        const char = s[right];
        if (targetMap.has(char)) {
            targetMap.set(char, targetMap.get(char) - 1);
            if (targetMap.get(char) === 0) {
                count--;
            }
        }
        
        while (count === 0) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }
            
            const leftChar = s[left];
            if (targetMap.has(leftChar)) {
                targetMap.set(leftChar, targetMap.get(leftChar) + 1);
                if (targetMap.get(leftChar) > 0) {
                    count++;
                }
            }
            left++;
        }
        
        right++;
    }
    
    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
};

// 测试用例
console.log(minWindow("ADOBECODEBANC", "ABC")); // 输出: "BANC"
console.log(minWindow("a", "a")); // 输出: "a"
console.log(minWindow("a", "aa")); // 输出: ""