/**
 * 腐烂的橘子
 * 难度：中等
 * 
 * 题目：在给定的 m x n 网格 grid 中，每个单元格可以有以下三个值之一：
 * - 值 0 代表空单元格；
 * - 值 1 代表新鲜橘子；
 * - 值 2 代表腐烂的橘子。
 * 每分钟，腐烂的橘子周围 4 个方向上相邻 的新鲜橘子都会腐烂。
 * 返回 直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1 。
 * 
 * 示例：
 * 输入：grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]]
 * 输出：4
 * 
 * 输入：grid = [[2, 1, 1], [0, 1, 1], [1, 0, 1]]
 * 输出：-1
 * 解释：左下角的橘子（第 2 行， 第 0 列）永远不会腐烂，因为腐烂只会发生在 4 个方向上。
 * 
 * 输入：grid = [[0, 2]]
 * 输出：0
 * 解释：因为 0 分钟时已经没有新鲜橘子了，所以答案就是 0 。
 * 
 * 解题思路：
 * 1. 使用广度优先搜索（BFS）来模拟橘子腐烂的过程
 * 2. 首先将所有腐烂的橘子加入队列，并统计新鲜橘子的数量
 * 3. 然后进行BFS，每轮处理当前队列中的所有腐烂橘子
 * 4. 对于每个腐烂橘子，检查其四个方向的邻居，如果是新鲜橘子，则将其标记为腐烂并加入队列
 * 5. 每轮BFS结束后，时间加1
 * 6. 当队列为空或没有新鲜橘子时，结束BFS
 * 7. 如果还有新鲜橘子，返回-1，否则返回时间
 * 
 * 时间复杂度：O(m*n)，其中 m 和 n 是网格的行数和列数。每个单元格会被访问一次。
 * 空间复杂度：O(m*n)，其中 m 和 n 是网格的行数和列数。队列最多存储 m*n 个单元格。
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const queue = [];
    let freshOranges = 0;
    let minutes = 0;
    
    // 初始状态：将所有腐烂的橘子加入队列，并统计新鲜橘子的数量
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            } else if (grid[i][j] === 1) {
                freshOranges++;
            }
        }
    }
    
    // 四个方向：上、右、下、左
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    
    while (queue.length > 0 && freshOranges > 0) {
        const size = queue.length;
        
        for (let i = 0; i < size; i++) {
            const [x, y] = queue.shift();
            
            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;
                
                if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === 1) {
                    grid[nx][ny] = 2;
                    freshOranges--;
                    queue.push([nx, ny]);
                }
            }
        }
        
        if (queue.length > 0) {
            minutes++;
        }
    }
    
    return freshOranges === 0 ? minutes : -1;
};

// 测试用例
console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]])); // 输出: 4
console.log(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]])); // 输出: -1
console.log(orangesRotting([[0, 2]])); // 输出: 0