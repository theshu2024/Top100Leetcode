/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (!s || !t || s.length < t.length) return "";
    
    const targetMap = new Map();
    for (const char of t) {
        targetMap.set(char, (targetMap.get(char) || 0) + 1);
    }
    
    let left = 0;
    let right = 0;
    let count = targetMap.size;
    let minLen = Infinity;
    let minStart = 0;
    
    while (right < s.length) {
        const char = s[right];
        if (targetMap.has(char)) {
            targetMap.set(char, targetMap.get(char) - 1);
            if (targetMap.get(char) === 0) {
                count--;
            }
        }
        
        while (count === 0) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }
            
            const leftChar = s[left];
            if (targetMap.has(leftChar)) {
                targetMap.set(leftChar, targetMap.get(leftChar) + 1);
                if (targetMap.get(leftChar) > 0) {
                    count++;
                }
            }
            left++;
        }
        
        right++;
    }
    
    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
};

// 测试用例
console.log(minWindow("ADOBECODEBANC", "ABC")); // 输出: "BANC"
console.log(minWindow("a", "a")); // 输出: "a"
console.log(minWindow("a", "aa")); // 输出: ""