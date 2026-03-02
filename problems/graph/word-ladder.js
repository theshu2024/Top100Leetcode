/**
 * 单词接龙
 * 难度：困难
 * 
 * 题目：字典 wordList 中从单词 beginWord 和 endWord 的 转换序列 是一个按下述规格形成的序列 beginWord -> s1 -> s2 -> ... -> sk：
 * 1. 每一对相邻的单词只差一个字母。
 * 2. 对于 1 <= i <= k 时，每个 si 都在 wordList 中。注意，beginWord 不需要在 wordList 中。
 * 3. sk == endWord
 * 给你两个单词 beginWord 和 endWord 和一个字典 wordList ，返回 从 beginWord 到 endWord 的 最短转换序列 中的 单词数目 。如果不存在这样的转换序列，返回 0 。
 * 
 * 示例：
 * 输入：beginWord = "hit", endWord = "cog", wordList = ["hot", "dot", "dog", "lot", "log", "cog"]
 * 输出：5
 * 解释：一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog", 返回它的长度 5。
 * 
 * 输入：beginWord = "hit", endWord = "cog", wordList = ["hot", "dot", "dog", "lot", "log"]
 * 输出：0
 * 解释：endWord "cog" 不在字典中，所以无法进行转换。
 * 
 * 解题思路：
 * 1. 使用广度优先搜索（BFS）来寻找最短路径
 * 2. 首先将 wordList 转换为集合，方便快速查找
 * 3. 检查 endWord 是否在 wordList 中，如果不在，直接返回 0
 * 4. 使用队列来存储当前处理的单词
 * 5. 使用集合来记录已经访问过的单词，避免重复处理
 * 6. 对于每个单词，生成所有可能的相邻单词（只改变一个字母）
 * 7. 如果生成的单词是 endWord，返回当前的层级加 1
 * 8. 如果生成的单词在 wordList 中且未被访问过，将其加入队列和访问集合
 * 9. 遍历结束后，如果没有找到 endWord，返回 0
 * 
 * 时间复杂度：O(M*N)，其中 M 是单词的长度，N 是 wordList 的长度。每个单词会被访问一次，每个单词会生成 M*26 个可能的相邻单词。
 * 空间复杂度：O(N)，其中 N 是 wordList 的长度。队列和访问集合最多存储 N 个单词。
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    
    const queue = [beginWord];
    const visited = new Set([beginWord]);
    let level = 1;
    
    while (queue.length > 0) {
        const size = queue.length;
        
        for (let i = 0; i < size; i++) {
            const currentWord = queue.shift();
            
            // 生成所有可能的相邻单词
            for (let j = 0; j < currentWord.length; j++) {
                for (let k = 97; k <= 122; k++) {
                    const newWord = currentWord.substring(0, j) + String.fromCharCode(k) + currentWord.substring(j + 1);
                    
                    if (newWord === endWord) {
                        return level + 1;
                    }
                    
                    if (wordSet.has(newWord) && !visited.has(newWord)) {
                        visited.add(newWord);
                        queue.push(newWord);
                    }
                }
            }
        }
        
        level++;
    }
    
    return 0;
};

// 测试用例
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // 输出: 5
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // 输出: 0