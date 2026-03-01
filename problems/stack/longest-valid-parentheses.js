/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let maxLength = 0;
    const stack = [-1]; // 栈底元素为最后一个未匹配的右括号的下标
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                // 栈空，说明当前右括号没有匹配的左括号
                stack.push(i);
            } else {
                // 计算当前有效括号的长度
                maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
            }
        }
    }
    
    return maxLength;
};

// 测试用例
console.log(longestValidParentheses("(()")); // 输出: 2
console.log(longestValidParentheses(")()())")); // 输出: 4