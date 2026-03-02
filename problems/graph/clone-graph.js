/**
 * 克隆图
 * 难度：中等
 * 
 * 题目：给你无向 连通 图中一个节点的引用，请你返回该图的 深拷贝（克隆）。
 * 图中的每个节点都包含它的值 val（int） 和其邻居的列表（list[Node]）。
 * 测试用例格式：
 * 简单起见，每个节点的值都和它的索引相同。例如，第一个节点值为 1（val = 1），第二个节点值为 2（val = 2），以此类推。该图在测试用例中使用邻接列表表示。
 * 邻接列表 是用于表示有限图的无序列表的集合。每个列表都描述了图中节点的邻居集。
 * 给定节点将始终是图中的第一个节点（值为 1）。你必须将 给定节点的拷贝 作为对克隆图的引用返回。
 * 
 * 示例：
 * 输入：adjList = [[2,4],[1,3],[2,4],[1,3]]
 * 输出：[[2,4],[1,3],[2,4],[1,3]]
 * 解释：
 * 图中有 4 个节点。
 * 节点 1 的值是 1，它有两个邻居：节点 2 和 4 。
 * 节点 2 的值是 2，它有两个邻居：节点 1 和 3 。
 * 节点 3 的值是 3，它有两个邻居：节点 2 和 4 。
 * 节点 4 的值是 4，它有两个邻居：节点 1 和 3 。
 * 
 * 解题思路：
 * 1. 使用深度优先搜索（DFS）来克隆图
 * 2. 使用一个 Map 来存储已克隆的节点，避免重复克隆
 * 3. 对于每个节点，先克隆当前节点，然后递归克隆其邻居节点
 * 4. 如果节点已经被克隆，直接返回克隆后的节点
 * 5. 最后返回克隆后的根节点
 * 
 * 时间复杂度：O(n)，其中 n 是图中的节点数。每个节点会被访问一次。
 * 空间复杂度：O(n)，其中 n 是图中的节点数。需要存储已克隆的节点和递归栈的空间。
 */

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;
    
    // 用于存储已克隆的节点
    const visited = new Map();
    
    function dfs(n) {
        // 如果节点已经被克隆，直接返回克隆后的节点
        if (visited.has(n)) {
            return visited.get(n);
        }
        
        // 克隆当前节点
        const cloneNode = new Node(n.val);
        visited.set(n, cloneNode);
        
        // 克隆邻居节点
        for (const neighbor of n.neighbors) {
            cloneNode.neighbors.push(dfs(neighbor));
        }
        
        return cloneNode;
    }
    
    return dfs(node);
};

// 测试用例
function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}

// 辅助函数：创建图
function createGraph() {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    
    node1.neighbors = [node2, node4];
    node2.neighbors = [node1, node3];
    node3.neighbors = [node2, node4];
    node4.neighbors = [node1, node3];
    
    return node1;
}

// 辅助函数：打印图（层序遍历）
function printGraph(node) {
    if (!node) return;
    
    const visited = new Set();
    const queue = [node];
    visited.add(node.val);
    
    while (queue.length > 0) {
        const current = queue.shift();
        const neighborVals = current.neighbors.map(n => n.val);
        console.log(`Node ${current.val}: neighbors = [${neighborVals.join(', ')}]`);
        
        for (const neighbor of current.neighbors) {
            if (!visited.has(neighbor.val)) {
                visited.add(neighbor.val);
                queue.push(neighbor);
            }
        }
    }
}

// 测试
const originalGraph = createGraph();
console.log("Original Graph:");
printGraph(originalGraph);

const clonedGraph = cloneGraph(originalGraph);
console.log("\nCloned Graph:");
printGraph(clonedGraph);

// 验证克隆是否成功（检查节点是否不同但结构相同）
console.log("\nAre original and cloned nodes different objects?", originalGraph !== clonedGraph);
console.log("Do they have the same structure?", 
    originalGraph.val === clonedGraph.val &&
    originalGraph.neighbors.length === clonedGraph.neighbors.length &&
    originalGraph.neighbors[0].val === clonedGraph.neighbors[0].val &&
    originalGraph.neighbors[1].val === clonedGraph.neighbors[1].val);