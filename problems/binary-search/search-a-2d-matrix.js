/**
 * 搜索二维矩阵
 * 难度：中等
 * 
 * 题目：编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
 * 1. 每行中的整数从左到右按升序排列。
 * 2. 每行的第一个整数大于前一行的最后一个整数。
 * 
 * 示例：
 * 输入：matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3
 * 输出：true
 * 
 * 输入：matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 13
 * 输出：false
 * 
 * 解题思路：
 * 1. 使用二分查找的方法
 * 2. 将二维矩阵视为一维数组，计算总元素数
 * 3. 计算中间元素的行和列索引
 * 4. 比较中间元素与目标值的大小
 * 5. 根据比较结果调整左右指针
 * 6. 如果找到目标值，返回 true，否则返回 false
 * 
 * 时间复杂度：O(log(m*n))，其中 m 和 n 是矩阵的行数和列数。二分查找的时间复杂度是 O(log(m*n))。
 * 空间复杂度：O(1)，只使用了常数级别的额外空间。
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let left = 0;
    let right = m * n - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const row = Math.floor(mid / n);
        const col = mid % n;
        
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return false;
};

// 测试用例
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3)); // 输出: true
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13)); // 输出: false