/**
 * LRU 缓存
 * 难度：中等
 * 
 * 题目：请你设计并实现一个满足 LRU (最近最少使用) 缓存 约束的数据结构。
 * 实现 LRUCache 类：
 * LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
 * int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
 * void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
 * 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
 * 
 * 示例：
 * 输入：
 * ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
 * [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
 * 输出：
 * [null, null, null, 1, null, -1, null, -1, 3, 4]
 * 解释：
 * LRUCache lRUCache = new LRUCache(2);
 * lRUCache.put(1, 1); // 缓存是 {1=1}
 * lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
 * lRUCache.get(1);    // 返回 1
 * lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
 * lRUCache.get(2);    // 返回 -1 (未找到)
 * lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
 * lRUCache.get(1);    // 返回 -1 (未找到)
 * lRUCache.get(3);    // 返回 3
 * lRUCache.get(4);    // 返回 4
 * 
 * 解题思路：
 * 1. 使用 Map 数据结构来实现 LRU 缓存
 * 2. Map 中的键值对是按照插入顺序存储的，最近访问的键会被移到 Map 的末尾
 * 3. 实现 get 方法：如果键存在，将其移到 Map 的末尾（表示最近使用），然后返回值；否则返回 -1
 * 4. 实现 put 方法：如果键已存在，先删除它；如果缓存已满，删除 Map 的第一个键（最久未使用）；然后将新键值对添加到 Map 的末尾
 * 
 * 时间复杂度：O(1)，get 和 put 操作的时间复杂度都是 O(1)。
 * 空间复杂度：O(capacity)，缓存的空间复杂度为容量大小。
 */

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) {
        return -1;
    }
    
    // 将访问的键移到Map的末尾（表示最近使用）
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    
    return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // 如果键已存在，先删除它
    if (this.cache.has(key)) {
        this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
        // 如果缓存已满，删除最久未使用的键（Map的第一个键）
        const firstKey = this.cache.keys().next().value;
        this.cache.delete(firstKey);
    }
    
    // 将新键值对添加到Map的末尾
    this.cache.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// 测试用例
const lru = new LRUCache(2);
lru.put(1, 1); // 缓存是 {1=1}
lru.put(2, 2); // 缓存是 {1=1, 2=2}
console.log(lru.get(1)); // 返回 1
lru.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
console.log(lru.get(2)); // 返回 -1 (未找到)
lru.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
console.log(lru.get(1)); // 返回 -1 (未找到)
console.log(lru.get(3)); // 返回 3
console.log(lru.get(4)); // 返回 4