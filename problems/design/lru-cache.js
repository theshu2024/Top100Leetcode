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