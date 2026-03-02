/**
 * 整数转罗马数字
 * 难度：中等
 * 
 * 题目：给定一个整数，将其转换为罗马数字。输入确保在 1 到 3999 的范围内。
 * 
 * 示例：
 * 输入：3
 * 输出："III"
 * 
 * 输入：4
 * 输出："IV"
 * 
 * 输入：9
 * 输出："IX"
 * 
 * 输入：58
 * 输出："LVIII"
 * 解释：L = 50, V = 5, III = 3.
 * 
 * 输入：1994
 * 输出："MCMXCIV"
 * 解释：M = 1000, CM = 900, XC = 90, IV = 4.
 * 
 * 解题思路：
 * 1. 使用贪心算法，从大到小遍历罗马数字的符号和对应的值
 * 2. 每次尽可能多地使用当前最大的符号
 * 3. 当当前符号的值小于等于剩余的数字时，使用该符号，并减去对应的值
 * 4. 重复上述过程，直到数字为0
 * 
 * 时间复杂度：O(1)，因为输入范围是有限的（1-3999）。
 * 空间复杂度：O(1)，只使用了常数级别的额外空间。
 */

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    
    let result = '';
    
    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            result += symbols[i];
            num -= values[i];
        }
    }
    
    return result;
};

// 测试用例
console.log(intToRoman(3)); // 输出: "III"
console.log(intToRoman(4)); // 输出: "IV"
console.log(intToRoman(9)); // 输出: "IX"
console.log(intToRoman(58)); // 输出: "LVIII"
console.log(intToRoman(1994)); // 输出: "MCMXCIV"