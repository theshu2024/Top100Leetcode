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