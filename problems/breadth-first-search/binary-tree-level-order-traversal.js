/**
 * 二叉树的层序遍历
 * 难度：中等
 * 
 * 题目：给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
 * 
 * 示例：
 * 输入：root = [3, 9, 20, null, null, 15, 7]
 * 输出：[[3], [9, 20], [15, 7]]
 * 
 * 解题思路：
 * 1. 使用广度优先搜索（BFS）进行层序遍历
 * 2. 使用队列来存储每一层的节点
 * 3. 对于每一层，先记录当前队列的长度，然后遍历该层的所有节点
 * 4. 将每个节点的值加入当前层的结果数组
 * 5. 将当前节点的左右子节点加入队列
 * 6. 将当前层的结果数组加入最终结果
 * 
 * 时间复杂度：O(n)，其中 n 是二叉树的节点数。每个节点会被访问一次。
 * 空间复杂度：O(n)，其中 n 是二叉树的节点数。队列最多存储 n 个节点。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]} 
 */
var levelOrder = function(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const level = [];
        
        for (let i = 0; i < levelSize; i++) {
            const current = queue.shift();
            level.push(current.val);
            
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
        
        result.push(level);
    }
    
    return result;
};

// 测试用例
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// 辅助函数：创建二叉树
function createBinaryTree(arr) {
    if (arr.length === 0) return null;
    
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    
    while (queue.length > 0 && i < arr.length) {
        const current = queue.shift();
        
        if (arr[i] !== null) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        i++;
        
        if (i < arr.length && arr[i] !== null) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }
    
    return root;
}

// 测试
const root = createBinaryTree([3, 9, 20, null, null, 15, 7]);
console.log(levelOrder(root)); // 输出: [[3], [9, 20], [15, 7]]

const root2 = createBinaryTree([1]);
console.log(levelOrder(root2)); // 输出: [[1]]

const root3 = createBinaryTree([]);
console.log(levelOrder(root3)); // 输出: []