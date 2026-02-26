/**
 * 字母异位词分组
 * 题目：给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
 * 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
 * 
 * 示例：
 * 输入：strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出：[["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * 解题思路：
 * 1. 使用哈希表，键为字符串的排序后的结果，值为该排序结果对应的所有字母异位词
 * 2. 遍历字符串数组，对每个字符串进行排序，将排序后的结果作为键，将原字符串添加到对应的值列表中
 * 3. 最后将哈希表的值转换为数组返回
 * 
 * 时间复杂度：O(n * k log k)，其中 n 是字符串的个数，k 是字符串的最大长度。排序每个字符串的时间复杂度是 O(k log k)。
 * 空间复杂度：O(n * k)，需要存储所有字符串。
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 创建哈希表，键为排序后的字符串，值为对应的字母异位词列表
    const map = new Map();
    
    // 遍历字符串数组
    for (const str of strs) {
        // 对字符串进行排序，作为哈希表的键
        const sortedStr = str.split('').sort().join('');
        
        // 如果哈希表中不存在该键，创建一个新的列表
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        
        // 将原字符串添加到对应的列表中
        map.get(sortedStr).push(str);
    }
    
    // 将哈希表的值转换为数组返回
    return Array.from(map.values());
};

// 测试用例
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // 输出：[["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // 输出：[[""]]
console.log(groupAnagrams(["a"])); // 输出：[["a"]]