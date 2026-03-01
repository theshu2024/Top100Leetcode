/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
};

// 测试用例
const s1 = ["h", "e", "l", "l", "o"];
reverseString(s1);
console.log(s1); // 输出: ["o", "l", "l", "e", "h"]

const s2 = ["H", "a", "n", "n", "a", "h"];
reverseString(s2);
console.log(s2); // 输出: ["h", "a", "n", "n", "a", "H"]