/**
 * 二叉树的最大深度
 * 难度：简单
 * 
 * 题目：给定一个二叉树，找出其最大深度。
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例：
 * 输入：[3,9,20,null,null,15,7]
 * 输出：3
 * 
 * 解题思路：
 * 1. 使用递归的方法，计算左子树和右子树的最大深度
 * 2. 二叉树的最大深度等于左子树的最大深度和右子树的最大深度中的较大值加1（根节点）
 * 3. 边界情况：如果根节点为空，返回0
 * 
 * 时间复杂度：O(n)，其中 n 是二叉树的节点数。每个节点只需要访问一次。
 * 空间复杂度：O(h)，其中 h 是二叉树的高度。递归的深度取决于二叉树的高度，最坏情况下二叉树是一条链，此时空间复杂度为 O(n)。
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
 * @return {number}
 */
var maxDepth = function(root) {
    // 边界情况：如果根节点为空，返回0
    if (root === null) {
        return 0;
    }
    
    // 计算左子树的最大深度
    const leftDepth = maxDepth(root.left);
    // 计算右子树的最大深度
    const rightDepth = maxDepth(root.right);
    
    // 二叉树的最大深度等于左子树的最大深度和右子树的最大深度中的较大值加1（根节点）
    return Math.max(leftDepth, rightDepth) + 1;
};

// 测试用例
// 辅助函数：创建二叉树
function createTreeNode(arr, index = 0) {
    if (index >= arr.length || arr[index] === null) {
        return null;
    }
    
    const node = new TreeNode(arr[index]);
    node.left = createTreeNode(arr, 2 * index + 1);
    node.right = createTreeNode(arr, 2 * index + 2);
    
    return node;
}

// 测试
console.log(maxDepth(createTreeNode([3,9,20,null,null,15,7]))); // 输出：3
console.log(maxDepth(createTreeNode([1,null,2]))); // 输出：2
console.log(maxDepth(createTreeNode([]))); // 输出：0