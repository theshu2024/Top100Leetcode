/**
 * 最小栈
 * 难度：中等
 * 
 * 题目：设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 * 实现 MinStack 类:
 * MinStack() 初始化堆栈对象。
 * void push(int val) 将元素val推入堆栈。
 * void pop() 删除堆栈顶部的元素。
 * int top() 获取堆栈顶部的元素。
 * int getMin() 获取堆栈中的最小元素。
 * 
 * 示例：
 * 输入：
 * ["MinStack","push","push","push","getMin","pop","top","getMin"]
 * [[],[-2],[0],[-3],[],[],[],[]]
 * 输出：
 * [null,null,null,null,-3,null,0,-2]
 * 解释：
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> 返回 -3.
 * minStack.pop();
 * minStack.top();      --> 返回 0.
 * minStack.getMin();   --> 返回 -2.
 * 
 * 解题思路：
 * 1. 使用两个栈：一个普通栈用于存储所有元素，一个辅助栈用于存储当前的最小元素
 * 2. 当push一个元素时，普通栈正常push，辅助栈push当前元素与辅助栈栈顶元素的较小值
 * 3. 当pop一个元素时，两个栈同时pop
 * 4. top操作返回普通栈的栈顶元素
 * 5. getMin操作返回辅助栈的栈顶元素
 * 
 * 时间复杂度：O(1)，所有操作都是常数时间复杂度。
 * 空间复杂度：O(n)，需要额外的辅助栈来存储最小元素。
 */

/**
 * 初始化堆栈对象
 */
var MinStack = function() {
    // 普通栈，用于存储所有元素
    this.stack = [];
    // 辅助栈，用于存储当前的最小元素
    this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    // 普通栈正常push
    this.stack.push(val);
    // 辅助栈push当前元素与辅助栈栈顶元素的较小值
    if (this.minStack.length === 0) {
        this.minStack.push(val);
    } else {
        this.minStack.push(Math.min(val, this.minStack[this.minStack.length - 1]));
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // 两个栈同时pop
    this.stack.pop();
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // 返回普通栈的栈顶元素
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // 返回辅助栈的栈顶元素
    return this.minStack[this.minStack.length - 1];
};

// 测试用例
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // 输出：-3
minStack.pop();
console.log(minStack.top()); // 输出：0
console.log(minStack.getMin()); // 输出：-2