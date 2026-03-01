/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    // 排序
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    
    let childIndex = 0;
    let cookieIndex = 0;
    
    while (childIndex < g.length && cookieIndex < s.length) {
        if (s[cookieIndex] >= g[childIndex]) {
            childIndex++;
        }
        cookieIndex++;
    }
    
    return childIndex;
};

// 测试用例
console.log(findContentChildren([1, 2, 3], [1, 1])); // 输出: 1
console.log(findContentChildren([1, 2], [1, 2, 3])); // 输出: 2