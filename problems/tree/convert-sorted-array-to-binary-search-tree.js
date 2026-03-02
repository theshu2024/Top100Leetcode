/**
 * 将有序数组转换为二叉搜索树
 * 难度：简单
 * 
 * 题目：给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。
 * 高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。
 * 
 * 示例：
 * 输入：nums = [-10, -3, 0, 5, 9]
 * 输出：[0, -3, 9, -10, null, 5]
 * 解释：[0, -10, 5, null, -3, null, 9] 也将被视为正确答案。
 * 
 * 解题思路：
 * 1. 使用递归的方法
 * 2. 每次选择数组的中间元素作为根节点
 * 3. 递归地构建左子树和右子树
 * 4. 左子树由数组左半部分构建
 * 5. 右子树由数组右半部分构建
 * 6. 这样可以保证构建的二叉搜索树是高度平衡的
 * 
 * 时间复杂度：O(n)，其中 n 是数组的长度。每个元素会被访问一次。
 * 空间复杂度：O(log n)，其中 n 是数组的长度。递归栈的深度最多为 log n。
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