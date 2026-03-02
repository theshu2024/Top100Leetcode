/**
 * 路径总和
 * 难度：简单
 * 
 * 题目：给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。
 * 判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
 * 如果存在，返回 true ；否则，返回 false 。
 * 叶子节点 是指没有子节点的节点。
 * 
 * 示例：
 * 输入：root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], targetSum = 22
 * 输出：true
 * 解释：等于目标和的根节点到叶节点路径如上图所示。
 * 
 * 输入：root = [1, 2, 3], targetSum = 5
 * 输出：false
 * 解释：树中存在两条根节点到叶子节点的路径：
 * (1 → 2): 和为 3
 * (1 → 3): 和为 4
 * 没有总和为 5 的路径。
 * 
 * 解题思路：
 * 1. 使用深度优先搜索（DFS）遍历二叉树
 * 2. 对于每个节点，减去当前节点的值，然后递归检查左右子树
 * 3. 如果到达叶子节点，检查剩余的目标和是否等于当前节点的值
 * 4. 如果存在这样的路径，返回 true，否则返回 false
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    
    // 如果是叶子节点，检查是否等于目标和
    if (!root.left && !root.right) {
        return root.val === targetSum;
    }
    
    // 递归检查左右子树
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
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
const root1 = createBinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);
console.log(hasPathSum(root1, 22)); // 输出: true

const root2 = createBinaryTree([1, 2, 3]);
console.log(hasPathSum(root2, 5)); // 输出: false

const root3 = createBinaryTree([]);
console.log(hasPathSum(root3, 0)); // 输出: false