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