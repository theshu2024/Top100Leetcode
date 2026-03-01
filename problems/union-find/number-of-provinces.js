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