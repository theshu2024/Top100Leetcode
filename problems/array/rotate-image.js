/**
 * 旋转图像
 * 难度：中等
 * 
 * 题目：给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
 * 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
 * 
 * 示例：
 * 输入：matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 * 输出：[[7, 4, 1], [8, 5, 2], [9, 6, 3]]
 * 
 * 输入：matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]
 * 输出：[[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]
 * 
 * 解题思路：
 * 1. 首先将矩阵转置（行变列，列变行）
 * 2. 然后反转每一行
 * 3. 这样就可以得到顺时针旋转90度后的矩阵
 * 
 * 时间复杂度：O(n²)，其中 n 是矩阵的边长。每个元素会被访问两次。
 * 空间复杂度：O(1)，只使用了常数级别的额外空间。
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;
    
    // 转置矩阵
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    
    // 反转每一行
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
};

// 测试用例
const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
rotate(matrix1);
console.log(matrix1); // 输出: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

const matrix2 = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
rotate(matrix2);
console.log(matrix2); // 输出: [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]