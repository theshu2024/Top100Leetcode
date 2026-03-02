/**
 * 二叉树的前序遍历
 * 难度：简单
 * 
 * 题目：给你二叉树的根节点 root ，返回它的 前序 遍历。
 * 
 * 示例：
 * 输入：root = [1, null, 2, 3]
 * 输出：[1, 2, 3]
 * 
 * 解题思路：
 * 1. 使用深度优先搜索（DFS）进行前序遍历
 * 2. 前序遍历的顺序是：根节点 → 左子树 → 右子树
 * 3. 递归实现：先将根节点的值加入结果数组，然后递归遍历左子树，最后递归遍历右子树
 * 
 * 时间复杂度：O(n)，其中 n 是二叉树的节点数。每个节点会被访问一次。
 * 空间复杂度：O(n)，其中 n 是二叉树的节点数。递归栈的深度最多为 n。
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const result = [];
    
    function dfs(node) {
        if (!node) return;
        result.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    
    dfs(root);
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
const root = createBinaryTree([1, null, 2, 3]);
console.log(preorderTraversal(root)); // 输出: [1, 2, 3]