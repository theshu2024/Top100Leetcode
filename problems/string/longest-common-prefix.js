/**
 * 最长公共前缀
 * 难度：简单
 * 
 * 题目：编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例：
 * 输入：strs = ["flower", "flow", "flight"]
 * 输出："fl"
 * 
 * 输入：strs = ["dog", "racecar", "car"]
 * 输出：""
 * 解释：输入不存在公共前缀。
 * 
 * 解题思路：
 * 1. 首先检查数组是否为空，如果为空，返回空字符串
 * 2. 以第一个字符串作为初始前缀
 * 3. 遍历数组中的其他字符串，对于每个字符串：
 *    a. 检查当前前缀是否是该字符串的前缀
 *    b. 如果不是，将前缀缩短一位
 *    c. 如果前缀为空，直接返回空字符串
 * 4. 遍历结束后，返回最终的前缀
 * 
 * 时间复杂度：O(n*m)，其中 n 是数组的长度，m 是字符串的平均长度。在最坏情况下，需要比较每个字符串的每个字符。
 * 空间复杂度：O(1)，只使用了常数级别的额外空间。
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    
    let prefix = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === '') return '';
        }
    }
    
    return prefix;
};

// 测试用例
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // 输出: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // 输出: ""