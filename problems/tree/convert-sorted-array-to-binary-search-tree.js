/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    function buildBST(left, right) {
        if (left > right) return null;
        
        const mid = Math.floor((left + right) / 2);
        const root = new TreeNode(nums[mid]);
        
        root.left = buildBST(left, mid - 1);
        root.right = buildBST(mid + 1, right);
        
        return root;
    }
    
    return buildBST(0, nums.length - 1);
};

// 测试用例
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
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
const nums = [-10, -3, 0, 5, 9];
const root = sortedArrayToBST(nums);
console.log(levelOrderTraversal(root)); // 输出: [[0], [-3, 9], [-10, 5]]