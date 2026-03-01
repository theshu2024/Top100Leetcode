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