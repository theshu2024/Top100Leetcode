/**
 * 找到字符串中所有字母异位词
 * 难度：中等
 * 
 * 题目：给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。
 * 不考虑答案输出的顺序。
 * 字母异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。
 * 
 * 示例：
 * 输入：s = "cbaebabacd", p = "abc"
 * 输出：[0, 6]
 * 解释：
 * 起始索引等于 0 的子串是 "cba"，它是 "abc" 的异位词。
 * 起始索引等于 6 的子串是 "bac"，它是 "abc" 的异位词。
 * 
 * 输入：s = "abab", p = "ab"
 * 输出：[0, 1, 2]
 * 解释：
 * 起始索引等于 0 的子串是 "ab"，它是 "ab" 的异位词。
 * 起始索引等于 1 的子串是 "ba"，它是 "ab" 的异位词。
 * 起始索引等于 2 的子串是 "ab"，它是 "ab" 的异位词。
 * 
 * 解题思路：
 * 1. 使用滑动窗口（双指针）来维护一个长度为p.length的窗口
 * 2. 统计p中各字符的出现次数
 * 3. 统计s中窗口内各字符的出现次数
 * 4. 比较两个统计数组是否相等，如果相等，将窗口起始索引加入结果
 * 5. 滑动窗口，更新统计数组
 * 6. 使用数组来统计字符出现次数，提高效率
 * 
 * 时间复杂度：O(n)，其中 n 是字符串 s 的长度。每个字符会被访问一次。
 * 空间复杂度：O(1)，因为统计数组的大小是固定的（26个字母）。
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if (s.length < p.length) return [];
    
    const result = [];
    const pCount = new Array(26).fill(0);
    const sCount = new Array(26).fill(0);
    
    // 初始化p的字符计数
    for (const char of p) {
        pCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    // 初始化窗口
    for (let i = 0; i < p.length; i++) {
        sCount[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    // 检查初始窗口
    if (arraysEqual(pCount, sCount)) {
        result.push(0);
    }
    
    // 滑动窗口
    for (let i = p.length; i < s.length; i++) {
        // 移除左边界的字符
        sCount[s[i - p.length].charCodeAt(0) - 'a'.charCodeAt(0)]--;
        // 添加右边界的字符
        sCount[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        
        // 检查当前窗口
        if (arraysEqual(pCount, sCount)) {
            result.push(i - p.length + 1);
        }
    }
    
    return result;
};

function arraysEqual(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

// 测试用例
console.log(findAnagrams("cbaebabacd", "abc")); // 输出: [0, 6]
console.log(findAnagrams("abab", "ab")); // 输出: [0, 1, 2]