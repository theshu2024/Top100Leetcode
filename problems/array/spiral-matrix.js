/**
 * 螺旋矩阵
 * 难度：中等
 * 
 * 题目：给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 * 
 * 示例：
 * 输入：matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 * 输出：[1, 2, 3, 6, 9, 8, 7, 4, 5]
 * 
 * 输入：matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
 * 输出：[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
 * 
 * 解题思路：
 * 1. 使用四个指针来标记当前遍历的边界：top、bottom、left、right
 * 2. 按照顺时针顺序遍历：
 *    a. 从左到右遍历上边界
 *    b. 从上到下遍历右边界
 *    c. 从右到左遍历下边界（如果还有）
 *    d. 从下到上遍历左边界（如果还有）
 * 3. 每次遍历后更新对应的边界
 * 4. 重复上述过程，直到所有元素都被遍历
 * 
 * 时间复杂度：O(m*n)，其中 m 和 n 是矩阵的行数和列数。每个元素会被访问一次。
 * 空间复杂度：O(1)，除了存储结果的数组外，只使用了常数级别的额外空间。
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix.length || !matrix[0].length) return [];
    
    const result = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;
    
    while (top <= bottom && left <= right) {
        // 从左到右
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;
        
        // 从上到下
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;
        
        // 从右到左
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }
        
        // 从下到上
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }
    
    return result;
};

// 测试用例
console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // 输出: [1, 2, 3, 6, 9, 8, 7, 4, 5]
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])); // 输出: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]