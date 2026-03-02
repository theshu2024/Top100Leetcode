/**
 * 电话号码的字母组合
 * 难度：中等
 * 
 * 题目：给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 
 * 示例：
 * 输入：digits = "23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
 * 
 * 输入：digits = ""
 * 输出：[]
 * 
 * 输入：digits = "2"
 * 输出：["a", "b", "c"]
 * 
 * 解题思路：
 * 1. 使用回溯算法
 * 2. 首先创建数字到字母的映射
 * 3. 定义一个递归函数，参数包括当前处理的索引和当前组合
 * 4. 如果当前索引等于 digits 的长度，将当前组合加入结果
 * 5. 否则，获取当前数字对应的字母列表，遍历每个字母，递归调用函数
 * 6. 递归结束后，返回结果
 * 
 * 时间复杂度：O(4^n)，其中 n 是 digits 的长度。每个数字最多对应4个字母。
 * 空间复杂度：O(n)，递归栈的深度最多为 n。
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    
    const phoneMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    
    const result = [];
    
    function backtrack(index, current) {
        if (index === digits.length) {
            result.push(current);
            return;
        }
        
        const letters = phoneMap[digits[index]];
        for (const letter of letters) {
            backtrack(index + 1, current + letter);
        }
    }
    
    backtrack(0, '');
    return result;
};

// 测试用例
console.log(letterCombinations("23")); // 输出: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
console.log(letterCombinations("")); // 输出: []
console.log(letterCombinations("2")); // 输出: ["a", "b", "c"]