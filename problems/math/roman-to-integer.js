/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        const current = romanMap[s[i]];
        const next = romanMap[s[i + 1]];
        
        if (next && current < next) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }
    
    return result;
};

// 测试用例
console.log(romanToInt("III")); // 输出: 3
console.log(romanToInt("IV")); // 输出: 4
console.log(romanToInt("IX")); // 输出: 9
console.log(romanToInt("LVIII")); // 输出: 58
console.log(romanToInt("MCMXCIV")); // 输出: 1994