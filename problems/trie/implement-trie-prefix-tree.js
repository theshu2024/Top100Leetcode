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