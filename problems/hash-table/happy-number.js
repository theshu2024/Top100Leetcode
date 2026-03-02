/**
 * 快乐数
 * 难度：简单
 * 
 * 题目：编写一个算法来判断一个数 n 是不是快乐数。
 * 「快乐数」定义为：
 * 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
 * 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
 * 如果 可以变为  1，那么这个数就是快乐数。
 * 如果 n 是快乐数就返回 true ；不是，则返回 false 。
 * 
 * 示例：
 * 输入：19
 * 输出：true
 * 解释：
 * 1² + 9² = 82
 * 8² + 2² = 68
 * 6² + 8² = 100
 * 1² + 0² + 0² = 1
 * 
 * 输入：2
 * 输出：false
 * 
 * 解题思路：
 * 1. 使用集合（Set）来检测循环
 * 2. 对于每个数，计算其每个位置上的数字的平方和
 * 3. 如果平方和等于 1，返回 true
 * 4. 如果平方和已经在集合中，说明进入了循环，返回 false
 * 5. 否则，将平方和添加到集合中，继续循环
 * 
 * 时间复杂度：O(log n)，其中 n 是输入的正整数。每次迭代都会将数的位数减少。
 * 空间复杂度：O(log n)，其中 n 是输入的正整数。集合最多存储 log n 个元素。
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const seen = new Set();
    
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getNext(n);
    }
    
    return n === 1;
};

function getNext(n) {
    let sum = 0;
    while (n > 0) {
        const digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }
    return sum;
}

// 测试用例
console.log(isHappy(19)); // 输出: true
console.log(isHappy(2)); // 输出: false