/**
 * 反转字符串 II
 * 难度：简单
 * 
 * 题目：给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。
 * 如果剩余字符少于 k 个，则反转剩余字符。
 * 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
 * 
 * 示例：
 * 输入：s = "abcdefg", k = 2
 * 输出："bacdfeg"
 * 
 * 输入：s = "abcd", k = 2
 * 输出："bacd"
 * 
 * 解题思路：
 * 1. 将字符串转换为数组，方便进行反转操作
 * 2. 遍历数组，每次跳过 2k 个字符
 * 3. 对于每个 2k 区间，确定需要反转的起始和结束位置
 * 4. 反转前 k 个字符（如果剩余字符不足 k 个，则反转所有剩余字符）
 * 5. 将数组转换回字符串并返回
 * 
 * 时间复杂度：O(n)，其中 n 是字符串的长度。每个字符会被访问一次。
 * 空间复杂度：O(n)，其中 n 是字符串的长度。需要额外的数组空间来存储字符串。
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const arr = s.split('');
    const n = arr.length;
    
    for (let i = 0; i < n; i += 2 * k) {
        let left = i;
        let right = Math.min(i + k - 1, n - 1);
        
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    
    return arr.join('');
};

// 测试用例
console.log(reverseStr("abcdefg", 2)); // 输出: "bacdfeg"
console.log(reverseStr("abcd", 2)); // 输出: "bacd"