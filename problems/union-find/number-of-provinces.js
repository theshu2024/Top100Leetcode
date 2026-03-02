/**
 * 省份数量
 * 难度：中等
 * 
 * 题目：有 n 个城市，其中一些彼此相连，另一些没有相连。如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，那么城市 a 与城市 c 间接相连。
 * 省份 是一组直接或间接相连的城市，组内不含其他没有相连的城市。
 * 给你一个 n x n 的矩阵 isConnected ，其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，而 isConnected[i][j] = 0 表示二者不直接相连。
 * 返回矩阵中 省份 的数量。
 * 
 * 示例：
 * 输入：isConnected = [[1,1,0],[1,1,0],[0,0,1]]
 * 输出：2
 * 
 * 输入：isConnected = [[1,0,0],[0,1,0],[0,0,1]]
 * 输出：3
 * 
 * 解题思路：
 * 1. 使用并查集（Union-Find）数据结构来解决这个问题
 * 2. 初始化每个城市为一个独立的集合
 * 3. 遍历所有城市对，如果两个城市直接相连，则将它们合并到同一个集合中
 * 4. 最后统计不同的集合数量，即为省份的数量
 * 5. 使用路径压缩优化查找操作，提高效率
 * 
 * 时间复杂度：O(n^2 α(n))，其中 n 是城市数量，α 是阿克曼函数的反函数，时间复杂度接近 O(n^2)。
 * 空间复杂度：O(n)，并查集需要的空间。
 */

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    const parent = new Array(n);
    
    // 初始化并查集
    for (let i = 0; i < n; i++) {
        parent[i] = i;
    }
    
    // 查找根节点
    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]); // 路径压缩
        }
        return parent[x];
    }
    
    // 合并两个集合
    function union(x, y) {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX !== rootY) {
            parent[rootY] = rootX;
        }
    }
    
    // 遍历所有城市对，进行合并操作
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (isConnected[i][j] === 1) {
                union(i, j);
            }
        }
    }
    
    // 统计不同的根节点数量，即省份数量
    const provinces = new Set();
    for (let i = 0; i < n; i++) {
        provinces.add(find(i));
    }
    
    return provinces.size;
};

// 测试用例
console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]])); // 输出: 2
console.log(findCircleNum([[1,0,0],[0,1,0],[0,0,1]])); // 输出: 3