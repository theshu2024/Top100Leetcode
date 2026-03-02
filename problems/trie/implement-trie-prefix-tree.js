/**
 * 实现 Trie (前缀树)
 * 难度：中等
 * 
 * 题目：Trie（发音类似 "try"）或者说 前缀树 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补完和拼写检查。
 * 请你实现 Trie 类：
 * Trie() 初始化前缀树对象。
 * void insert(String word) 向前缀树中插入字符串 word 。
 * boolean search(String word) 如果字符串 word 在前缀树中，返回 true（即，在检索之前已经插入）；否则，返回 false 。
 * boolean startsWith(String prefix) 如果之前已经插入的字符串 word 的前缀之一为 prefix ，返回 true ；否则，返回 false 。
 * 
 * 示例：
 * 输入
 * ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
 * [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
 * 输出
 * [null, null, true, false, true, null, true]
 * 解释
 * Trie trie = new Trie();
 * trie.insert("apple");
 * trie.search("apple");   // 返回 True
 * trie.search("app");     // 返回 False
 * trie.startsWith("app"); // 返回 True
 * trie.insert("app");
 * trie.search("app");     // 返回 True
 * 
 * 解题思路：
 * 1. 使用对象来实现 Trie 树的结构，每个节点是一个对象，键是字符，值是子节点
 * 2. 根节点为空对象，不存储任何字符
 * 3. insert 方法：遍历单词的每个字符，创建不存在的子节点，最后标记单词结束
 * 4. search 方法：遍历单词的每个字符，检查是否存在对应的子节点，最后检查是否标记为单词结束
 * 5. startsWith 方法：遍历前缀的每个字符，检查是否存在对应的子节点，不需要检查是否标记为单词结束
 * 
 * 时间复杂度：
 * - insert: O(n)，其中 n 是单词的长度
 * - search: O(n)，其中 n 是单词的长度
 * - startsWith: O(n)，其中 n 是前缀的长度
 * 空间复杂度：O(m)，其中 m 是所有插入单词的总字符数
 */

/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    
    for (const char of word) {
        if (!node[char]) {
            node[char] = {};
        }
        node = node[char];
    }
    
    node.isEnd = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;
    
    for (const char of word) {
        if (!node[char]) {
            return false;
        }
        node = node[char];
    }
    
    return node.isEnd === true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    
    for (const char of prefix) {
        if (!node[char]) {
            return false;
        }
        node = node[char];
    }
    
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// 测试用例
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // 输出: true
console.log(trie.search("app"));     // 输出: false
console.log(trie.startsWith("app")); // 输出: true
trie.insert("app");
console.log(trie.search("app"));     // 输出: true