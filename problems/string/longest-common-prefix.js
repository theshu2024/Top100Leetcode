/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    
    let prefix = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === '') return '';
        }
    }
    
    return prefix;
};

// 测试用例
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // 输出: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // 输出: ""