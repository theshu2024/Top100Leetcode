/**
 * 最长有效括号
 * 难度：困难
 * 
 * 题目：给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。
 * 
 * 示例：
 * 输入：s = "(()"
 * 输出：2
 * 解释：最长有效括号子串是 "()"
 * 
 * 输入：s = ")()())"
 * 输出：4
 * 解释：最长有效括号子串是 "()()"
 * 
 * 输入：s = ""
 * 输出：0
 * 
 * 解题思路：
 * 1. 使用栈来跟踪左括号的位置
 * 2. 栈底元素为最后一个未匹配的右括号的下标
 * 3. 遍历字符串：
 *    a. 如果遇到左括号，将其下标压入栈
 *    b. 如果遇到右括号：
 *       i. 弹出栈顶元素
 *       ii. 如果栈为空，说明当前右括号没有匹配的左括号，将其下标压入栈
 *       iii. 如果栈不为空，计算当前有效括号的长度（当前下标减去栈顶元素的下标）
 * 4. 返回最大长度
 * 
 * 时间复杂度：O(n)，其中 n 是字符串的长度。每个字符会被访问一次。
 * 空间复杂度：O(n)，其中 n 是字符串的长度。栈最多存储 n 个元素。
 */

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