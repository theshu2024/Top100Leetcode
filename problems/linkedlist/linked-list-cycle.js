/**
 * 环形链表
 * 难度：简单
 * 
 * 题目：给你一个链表的头节点 head ，判断链表中是否有环。
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递。仅仅是为了标识链表的实际情况。
 * 如果链表中存在环，则返回 true 。 否则，返回 false 。
 * 
 * 示例：
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 * 
 * 解题思路：
 * 1. 使用快慢指针法，快指针每次移动两步，慢指针每次移动一步
 * 2. 如果链表中存在环，快指针最终会追上慢指针
 * 3. 如果快指针到达链表末尾（next 为 null），则链表中不存在环
 * 
 * 时间复杂度：O(n)，其中 n 是链表的长度。快指针最多需要遍历链表一次。
 * 空间复杂度：O(1)，只使用了常数级别的额外空间。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // 边界情况：如果链表为空或只有一个节点，不存在环
    if (head === null || head.next === null) {
        return false;
    }
    
    // 初始化快慢指针
    let slow = head; // 慢指针，每次移动一步
    let fast = head.next; // 快指针，每次移动两步
    
    // 遍历链表
    while (slow !== fast) {
        // 如果快指针到达链表末尾，不存在环
        if (fast === null || fast.next === null) {
            return false;
        }
        
        // 移动慢指针
        slow = slow.next;
        // 移动快指针
        fast = fast.next.next;
    }
    
    // 如果快指针追上慢指针，存在环
    return true;
};

// 测试用例
// 辅助函数：创建有环的链表
function createCyclicList(arr, pos) {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let curr = head;
    let cycleNode = null;
    
    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
        if (i === pos) {
            cycleNode = curr;
        }
    }
    
    // 创建环
    if (pos !== -1) {
        curr.next = cycleNode;
    }
    
    return head;
}

// 测试
console.log(hasCycle(createCyclicList([3,2,0,-4], 1))); // 输出：true
console.log(hasCycle(createCyclicList([1,2], 0))); // 输出：true
console.log(hasCycle(createCyclicList([1], -1))); // 输出：false