/**
 * 验证二叉搜索树
 * 难度：中等
 * 
 * 题目：给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
 * 有效 二叉搜索树定义如下：
 * 1. 节点的左子树只包含 小于 当前节点的数。
 * 2. 节点的右子树只包含 大于 当前节点的数。
 * 3. 所有左子树和右子树自身必须也是二叉搜索树。
 * 
 * 示例：
 * 输入：root = [2, 1, 3]
 * 输出：true
 * 
 * 输入：root = [5, 1, 4, null, null, 3, 6]
 * 输出：false
 * 解释：根节点的值是 5 ，但是右子节点的值是 4 。
 * 
 * 解题思路：
 * 1. 使用递归的方法，为每个节点设置一个有效范围（最小值和最大值）
 * 2. 对于根节点，范围是 (null, null)，表示无限制
 * 3. 对于左子节点，范围是 (min, 当前节点值)
 * 4. 对于右子节点，范围是 (当前节点值, max)
 * 5. 如果节点值不在有效范围内，则返回 false
 * 6. 递归检查左右子树
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    function validate(node, min, max) {
        if (!node) return true;
        
        if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
            return false;
        }
        
        return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    }
    
    return validate(root, null, null);
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
const root1 = createBinaryTree([2, 1, 3]);
console.log(isValidBST(root1)); // 输出: true

const root2 = createBinaryTree([5, 1, 4, null, null, 3, 6]);
console.log(isValidBST(root2)); // 输出: false