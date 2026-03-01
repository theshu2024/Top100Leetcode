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