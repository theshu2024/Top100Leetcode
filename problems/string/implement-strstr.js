/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;
    if (haystack.length < needle.length) return -1;
    
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j = 0;
        while (j < needle.length && haystack[i + j] === needle[j]) {
            j++;
        }
        if (j === needle.length) {
            return i;
        }
    }
    
    return -1;
};

// 测试用例
console.log(strStr("hello", "ll")); // 输出: 2
console.log(strStr("aaaaa", "bba")); // 输出: -1
console.log(strStr("", "")); // 输出: 0