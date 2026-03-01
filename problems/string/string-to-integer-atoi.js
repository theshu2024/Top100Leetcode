/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;
    
    let i = 0;
    let sign = 1;
    let result = 0;
    
    // 跳过空格
    while (i < s.length && s[i] === ' ') {
        i++;
    }
    
    // 处理符号
    if (i < s.length && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '+' ? 1 : -1;
        i++;
    }
    
    // 处理数字
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        const digit = parseInt(s[i]);
        
        // 检查是否溢出
        if (result > Math.floor((INT_MAX - digit) / 10)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }
        
        result = result * 10 + digit;
        i++;
    }
    
    return result * sign;
};

// 测试用例
console.log(myAtoi("42")); // 输出: 42
console.log(myAtoi("   -42")); // 输出: -42
console.log(myAtoi("4193 with words")); // 输出: 4193
console.log(myAtoi("words and 987")); // 输出: 0
console.log(myAtoi("-91283472332")); // 输出: -2147483648