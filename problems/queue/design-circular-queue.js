/**
 * 设计循环队列
 * 难度：中等
 * 
 * 题目：设计你的循环队列实现。 循环队列是一种线性数据结构，其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环。它也被称为“环形缓冲器”。
 * 循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值。
 * 你的实现应该支持如下操作：
 * MyCircularQueue(k): 构造器，设置队列长度为 k 。
 * Front: 从队首获取元素。如果队列为空，返回 -1 。
 * Rear: 获取队尾元素。如果队列为空，返回 -1 。
 * enQueue(value): 向循环队列插入一个元素。如果成功插入则返回 true 。
 * deQueue(): 从循环队列中删除一个元素。如果成功删除则返回 true 。
 * isEmpty(): 检查循环队列是否为空。
 * isFull(): 检查循环队列是否已满。
 * 
 * 示例：
 * 输入：
 * ["MyCircularQueue", "enQueue", "enQueue", "enQueue", "enQueue", "Rear", "isFull", "deQueue", "enQueue", "Rear"]
 * [[3], [1], [2], [3], [4], [], [], [], [4], []]
 * 输出：
 * [null, true, true, true, false, 3, true, true, true, 4]
 * 解释：
 * MyCircularQueue circularQueue = new MyCircularQueue(3); // 设置长度为 3
 * circularQueue.enQueue(1);  // 返回 true
 * circularQueue.enQueue(2);  // 返回 true
 * circularQueue.enQueue(3);  // 返回 true
 * circularQueue.enQueue(4);  // 返回 false，队列已满
 * circularQueue.Rear();  // 返回 3
 * circularQueue.isFull();  // 返回 true
 * circularQueue.deQueue();  // 返回 true
 * circularQueue.enQueue(4);  // 返回 true
 * circularQueue.Rear();  // 返回 4
 * 
 * 解题思路：
 * 1. 使用数组来实现循环队列
 * 2. 维护以下属性：
 *    a. capacity：队列的容量
 *    b. queue：存储元素的数组
 *    c. front：队首指针
 *    d. rear：队尾指针
 *    e. size：当前队列中的元素个数
 * 3. 入队操作：
 *    a. 检查队列是否已满
 *    b. 如果未满，将队尾指针后移（取模操作实现循环）
 *    c. 将元素放入队尾
 *    d. 增加size
 * 4. 出队操作：
 *    a. 检查队列是否为空
 *    b. 如果不为空，将队首指针后移（取模操作实现循环）
 *    c. 减少size
 * 5. 其他操作：
 *    a. Front：返回队首元素
 *    b. Rear：返回队尾元素
 *    c. isEmpty：检查size是否为0
 *    d. isFull：检查size是否等于capacity
 * 
 * 时间复杂度：O(1)，所有操作都是常数时间复杂度。
 * 空间复杂度：O(k)，其中 k 是队列的容量。需要额外的数组来存储队列元素。
 */

/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.capacity = k;
    this.queue = new Array(k);
    this.front = 0;
    this.rear = -1;
    this.size = 0;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) return false;
    
    this.rear = (this.rear + 1) % this.capacity;
    this.queue[this.rear] = value;
    this.size++;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) return false;
    
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) return -1;
    return this.queue[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) return -1;
    return this.queue[this.rear];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.size === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.size === this.capacity;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

// 测试用例
const myCircularQueue = new MyCircularQueue(3);
console.log(myCircularQueue.enQueue(1)); // 输出: true
console.log(myCircularQueue.enQueue(2)); // 输出: true
console.log(myCircularQueue.enQueue(3)); // 输出: true
console.log(myCircularQueue.enQueue(4)); // 输出: false
console.log(myCircularQueue.Rear()); // 输出: 3
console.log(myCircularQueue.isFull()); // 输出: true
console.log(myCircularQueue.deQueue()); // 输出: true
console.log(myCircularQueue.enQueue(4)); // 输出: true
console.log(myCircularQueue.Rear()); // 输出: 4