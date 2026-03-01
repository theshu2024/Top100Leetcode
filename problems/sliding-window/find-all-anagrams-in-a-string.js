/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if (s.length < p.length) return [];
    
    const result = [];
    const pCount = new Array(26).fill(0);
    const sCount = new Array(26).fill(0);
    
    // 初始化p的字符计数
    for (const char of p) {
        pCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    // 初始化窗口
    for (let i = 0; i < p.length; i++) {
        sCount[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    // 检查初始窗口
    if (arraysEqual(pCount, sCount)) {
        result.push(0);
    }
    
    // 滑动窗口
    for (let i = p.length; i < s.length; i++) {
        // 移除左边界的字符
        sCount[s[i - p.length].charCodeAt(0) - 'a'.charCodeAt(0)]--;
        // 添加右边界的字符
        sCount[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        
        // 检查当前窗口
        if (arraysEqual(pCount, sCount)) {
            result.push(i - p.length + 1);
        }
    }
    
    return result;
};

function arraysEqual(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

// 测试用例
console.log(findAnagrams("cbaebabacd", "abc")); // 输出: [0, 6]
console.log(findAnagrams("abab", "ab")); // 输出: [0, 1, 2]