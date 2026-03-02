/**
 * 分发饼干
 * 难度：简单
 * 
 * 题目：假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
 * 对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。
 * 
 * 示例：
 * 输入：g = [1, 2, 3], s = [1, 1]
 * 输出：1
 * 解释：你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1, 2, 3。虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。所以你应该输出1。
 * 
 * 输入：g = [1, 2], s = [1, 2, 3]
 * 输出：2
 * 解释：你有两个孩子和三块小饼干，2个孩子的胃口值分别是1, 2。你拥有的饼干数量和尺寸都足以让所有孩子满足。所以你应该输出2。
 * 
 * 解题思路：
 * 1. 使用贪心算法
 * 2. 对孩子的胃口值和饼干的尺寸进行排序
 * 3. 使用双指针，一个指向孩子，一个指向饼干
 * 4. 遍历饼干和孩子：
 *    a. 如果当前饼干的尺寸大于等于当前孩子的胃口值，孩子指针右移，表示该孩子被满足
 *    b. 无论是否满足，饼干指针都会右移
 * 5. 最后返回孩子指针的值，即满足的孩子数量
 * 
 * 时间复杂度：O(n log n + m log m)，其中 n 是孩子的数量，m 是饼干的数量。排序的时间复杂度是 O(n log n + m log m)，遍历的时间复杂度是 O(n + m)。
 * 空间复杂度：O(1)，只使用了常数级别的额外空间。
 */

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