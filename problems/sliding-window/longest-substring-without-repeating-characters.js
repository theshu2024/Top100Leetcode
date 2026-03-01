/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let left = 0;
    const charSet = new Set();
    
    for (let right = 0; right < s.length; right++) {
        // 如果当前字符已经在集合中，移动左指针直到移除重复字符
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        
        // 将当前字符加入集合
        charSet.add(s[right]);
        
        // 更新最大长度
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};

// 测试用例
console.log(lengthOfLongestSubstring("abcabcbb")); // 输出: 3
console.log(lengthOfLongestSubstring("bbbbb")); // 输出: 1
console.log(lengthOfLongestSubstring("pwwkew")); // 输出: 3