/**
 * 有效的括号
 * 题目：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 * 1. 左括号必须用相同类型的右括号闭合。
 * 2. 左括号必须以正确的顺序闭合。
 * 
 * 示例：
 * 输入：s = "()"
 * 输出：true
 * 
 * 输入：s = "()[]{}"
 * 输出：true
 * 
 * 输入：s = "(]"
 * 输出：false
 * 
 * 解题思路：
 * 1. 使用栈来存储左括号
 * 2. 遍历字符串，对于每个字符：
 *    - 如果是左括号，入栈
 *    - 如果是右括号，检查栈是否为空，或者栈顶的左括号是否与当前右括号匹配
 *    - 如果匹配，栈顶元素出栈；否则，返回false
 * 3. 遍历结束后，检查栈是否为空。如果为空，返回true；否则，返回false
 * 
 * 时间复杂度：O(n)，其中 n 是字符串的长度。我们需要遍历字符串一次。
 * 空间复杂度：O(n)，最坏情况下，字符串中全部是左括号，栈的大小为 n。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 创建一个栈来存储左括号
    const stack = [];
    // 创建一个映射，用于匹配右括号和左括号
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    // 遍历字符串
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        // 如果是右括号
        if (char in map) {
            // 检查栈是否为空，或者栈顶的左括号是否与当前右括号匹配
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        } else {
            // 如果是左括号，入栈
            stack.push(char);
        }
    }
    
    // 遍历结束后，检查栈是否为空
    return stack.length === 0;
};

// 测试用例
console.log(isValid("()")); // 输出：true
console.log(isValid("()[]{}")); // 输出：true
console.log(isValid("(]")); // 输出：false
console.log(isValid("([)]")); // 输出：false
console.log(isValid("{[]}")); // 输出：true