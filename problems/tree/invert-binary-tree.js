/**
 * 翻转二叉树
 * 难度：简单
 * 
 * 题目：给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
 * 
 * 示例：
 * 输入：root = [4, 2, 7, 1, 3, 6, 9]
 * 输出：[4, 7, 2, 9, 6, 3, 1]
 * 
 * 解题思路：
 * 1. 递归实现：对于每个节点，交换其左右子树，然后递归翻转左右子树
 * 2. 终止条件：当节点为null时，直接返回null
 * 3. 交换操作：使用临时变量交换左右子树
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // 递归终止条件
    if (root === null) {
        return null;
    }
    
    // 交换左右子树
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    // 递归处理左右子树
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
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

// 辅助函数：层序遍历打印二叉树
function levelOrderTraversal(root) {
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
}

// 测试
const root1 = createBinaryTree([4, 2, 7, 1, 3, 6, 9]);
console.log("原始树:", levelOrderTraversal(root1));
const invertedRoot1 = invertTree(root1);
console.log("翻转后:", levelOrderTraversal(invertedRoot1));

const root2 = createBinaryTree([2, 1, 3]);
console.log("原始树:", levelOrderTraversal(root2));
const invertedRoot2 = invertTree(root2);
console.log("翻转后:", levelOrderTraversal(invertedRoot2));

const root3 = createBinaryTree([]);
console.log("原始树:", levelOrderTraversal(root3));
const invertedRoot3 = invertTree(root3);
console.log("翻转后:", levelOrderTraversal(invertedRoot3));