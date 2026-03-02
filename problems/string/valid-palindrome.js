/**
 * 验证回文串
 * 难度：简单
 * 
 * 题目：给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 
 * 示例：
 * 输入："A man, a plan, a canal: Panama"
 * 输出：true
 * 解释："amanaplanacanalpanama" 是回文串。
 * 
 * 输入："race a car"
 * 输出：false
 * 解释："raceacar" 不是回文串。
 * 
 * 输入：" "
 * 输出：true
 * 
 * 解题思路：
 * 1. 首先清理字符串，只保留字母和数字，并转换为小写
 * 2. 使用双指针法，一个从字符串开头，一个从字符串结尾，向中间移动
 * 3. 如果两个指针指向的字符不相等，返回 false
 * 4. 如果两个指针相遇，说明字符串是回文串，返回 true
 * 
 * 时间复杂度：O(n)，其中 n 是字符串的长度。每个字符会被处理一次。
 * 空间复杂度：O(n)，需要存储清理后的字符串。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // 清理字符串，只保留字母和数字，并转换为小写
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // 使用双指针判断是否为回文
    let left = 0;
    let right = cleaned.length - 1;
    
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
};

// 测试用例
console.log(isPalindrome("A man, a plan, a canal: Panama")); // 输出: true
console.log(isPalindrome("race a car")); // 输出: false
console.log(isPalindrome(" ")); // 输出: true