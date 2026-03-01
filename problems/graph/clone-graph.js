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