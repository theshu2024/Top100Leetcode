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