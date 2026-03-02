/**
 * 字符串相加
 * 难度：简单
 * 
 * 题目：给定两个字符串形式的非负整数 num1 和 num2，计算它们的和并同样以字符串形式返回。
 * 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
 * 
 * 示例：
 * 输入：num1 = "11", num2 = "123"
 * 输出："134"
 * 
 * 输入：num1 = "456", num2 = "77"
 * 输出："533"
 * 
 * 输入：num1 = "0", num2 = "0"
 * 输出："0"
 * 
 * 解题思路：
 * 1. 使用双指针的方法，从字符串末尾开始相加
 * 2. 记录进位，初始为0
 * 3. 遍历两个字符串，直到所有数字都处理完且进位为0
 * 4. 对于每个位置，计算两个数字的和加上进位
 * 5. 更新进位，将当前位的数字添加到结果中
 * 6. 反转结果字符串并返回
 * 
 * 时间复杂度：O(max(m, n))，其中 m 和 n 是两个字符串的长度。每个字符会被访问一次。
 * 空间复杂度：O(1)，除了存储结果的字符串外，只使用了常数级别的额外空间。
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let result = '';
    
    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
        const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
        const sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
        i--;
        j--;
    }
    
    return result;
};

// 测试用例
console.log(addStrings("11", "123")); // 输出: "134"
console.log(addStrings("456", "77")); // 输出: "533"
console.log(addStrings("0", "0")); // 输出: "0"