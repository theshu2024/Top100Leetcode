/**
 * 有效的字母异位词
 * 难度：简单
 * 
 * 题目：给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
 * 
 * 示例：
 * 输入：s = "anagram", t = "nagaram"
 * 输出：true
 * 
 * 输入：s = "rat", t = "car"
 * 输出：false
 * 
 * 解题思路：
 * 1. 使用哈希表（对象）来记录每个字符出现的次数
 * 2. 遍历字符串 s，统计每个字符出现的次数
 * 3. 遍历字符串 t，减少哈希表中对应字符的次数
 * 4. 最后检查哈希表中所有字符的次数是否都为0
 * 
 * 时间复杂度：O(n)，其中 n 是字符串的长度。我们需要遍历两个字符串各一次。
 * 空间复杂度：O(1)，因为字符的种类是有限的（小写字母），所以哈希表的大小是固定的。
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // 边界情况：如果两个字符串的长度不同，直接返回false
    if (s.length !== t.length) {
        return false;
    }
    
    // 创建一个哈希表来记录每个字符出现的次数
    const count = {};
    
    // 遍历字符串 s，统计每个字符出现的次数
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        count[char] = (count[char] || 0) + 1;
    }
    
    // 遍历字符串 t，减少哈希表中对应字符的次数
    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        // 如果字符不存在于哈希表中，或者次数为0，返回false
        if (!count[char]) {
            return false;
        }
        count[char]--;
    }
    
    // 检查哈希表中所有字符的次数是否都为0
    for (const char in count) {
        if (count[char] !== 0) {
            return false;
        }
    }
    
    return true;
};

// 测试用例
console.log(isAnagram("anagram", "nagaram")); // 输出：true
console.log(isAnagram("rat", "car")); // 输出：false
console.log(isAnagram("", "")); // 输出：true
console.log(isAnagram("a", "b")); // 输出：false