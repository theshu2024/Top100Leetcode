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