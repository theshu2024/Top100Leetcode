/**
 * 对称二叉树
 * 题目：给你一个二叉树的根节点 root ， 检查它是否轴对称。
 * 
 * 示例：
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 * 
 * 解题思路：
 * 1. 使用递归的方法，判断两个子树是否对称
 * 2. 两个子树对称的条件是：
 *    - 它们的根节点的值相同
 *    - 左子树的左子树与右子树的右子树对称
 *    - 左子树的右子树与右子树的左子树对称
 * 3. 边界情况：如果两个子树都为空，返回true；如果其中一个为空，返回false
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // 辅助函数：判断两个子树是否对称
    function isMirror(left, right) {
        // 边界情况：如果两个子树都为空，返回true
        if (left === null && right === null) {
            return true;
        }
        // 边界情况：如果其中一个子树为空，返回false
        if (left === null || right === null) {
            return false;
        }
        // 两个子树对称的条件：
        // 1. 它们的根节点的值相同
        // 2. 左子树的左子树与右子树的右子树对称
        // 3. 左子树的右子树与右子树的左子树对称
        return left.val === right.val && isMirror(left.left, right.right) && isMirror(left.right, right.left);
    }
    
    // 如果根节点为空，返回true
    if (root === null) {
        return true;
    }
    
    // 判断左子树和右子树是否对称
    return isMirror(root.left, root.right);
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
console.log(isSymmetric(createTreeNode([1,2,2,3,4,4,3]))); // 输出：true
console.log(isSymmetric(createTreeNode([1,2,2,null,3,null,3]))); // 输出：false
console.log(isSymmetric(createTreeNode([]))); // 输出：true