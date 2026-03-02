/**
 * 反转字符串
 * 难度：简单
 * 
 * 题目：编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。
 * 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
 * 
 * 示例：
 * 输入：s = ["h", "e", "l", "l", "o"]
 * 输出：["o", "l", "l", "e", "h"]
 * 
 * 输入：s = ["H", "a", "n", "n", "a", "h"]
 * 输出：["h", "a", "n", "n", "a", "H"]
 * 
 * 解题思路：
 * 1. 使用双指针的方法
 * 2. 左指针从数组开头开始，右指针从数组末尾开始
 * 3. 交换左右指针指向的字符
 * 4. 左指针右移，右指针左移
 * 5. 当左指针大于等于右指针时，结束循环
 * 
 * 时间复杂度：O(n)，其中 n 是字符串的长度。每个字符会被访问一次。
 * 空间复杂度：O(1)，只使用了常数级别的额外空间。
 */

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