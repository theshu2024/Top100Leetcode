/**
 * 实现 strStr()
 * 难度：简单
 * 
 * 题目：给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回 -1 。
 * 说明：当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。
 * 
 * 示例：
 * 输入：haystack = "hello", needle = "ll"
 * 输出：2
 * 
 * 输入：haystack = "aaaaa", needle = "bba"
 * 输出：-1
 * 
 * 输入：haystack = "", needle = ""
 * 输出：0
 * 
 * 解题思路：
 * 1. 首先处理边界情况：如果 needle 是空字符串，返回 0；如果 haystack 长度小于 needle 长度，返回 -1
 * 2. 遍历 haystack 字符串，从每个位置开始尝试匹配 needle
 * 3. 对于每个位置 i，检查 haystack 从 i 开始的子串是否与 needle 匹配
 * 4. 如果找到匹配，返回 i；否则，返回 -1
 * 
 * 时间复杂度：O(n*m)，其中 n 是 haystack 的长度，m 是 needle 的长度。在最坏情况下，需要遍历 haystack 的每个位置，每个位置需要比较 m 个字符。
 * 空间复杂度：O(1)，只使用了常数级别的额外空间。
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;
    if (haystack.length < needle.length) return -1;
    
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j = 0;
        while (j < needle.length && haystack[i + j] === needle[j]) {
            j++;
        }
        if (j === needle.length) {
            return i;
        }
    }
    
    return -1;
};

// 测试用例
console.log(strStr("hello", "ll")); // 输出: 2
console.log(strStr("aaaaa", "bba")); // 输出: -1
console.log(strStr("", "")); // 输出: 0