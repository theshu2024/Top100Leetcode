/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let result = 0;
    
    for (let i = 0; i < 32; i++) {
        // 取出n的第i位
        const bit = (n >> i) & 1;
        // 将bit放到result的对应位置
        result |= (bit << (31 - i));
    }
    
    // 转换为无符号整数
    return result >>> 0;
};

// 测试用例
console.log(reverseBits(43261596)); // 输出: 964176192
console.log(reverseBits(4294967293)); // 输出: 3221225471