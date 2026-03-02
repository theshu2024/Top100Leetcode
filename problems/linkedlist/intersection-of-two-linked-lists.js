/**
 * 相交链表
 * 难度：简单
 * 
 * 题目：给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。
 * 如果两个链表不存在相交节点，返回 null 。
 * 图示两个链表在节点 c1 开始相交：
 * A:          a1 → a2
 *                    ↘
 *                      c1 → c2 → c3
 *                    ↗
 * B:    b1 → b2 → b3
 * 题目数据 保证 整个链式结构中不存在环。
 * 注意，函数返回结果后，链表必须 保持其原始结构 。
 * 
 * 示例：
 * 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]
 * 输出：Intersected at '8'
 * 解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。
 * 从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,6,1,8,4,5]。
 * 在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
 * 
 * 解题思路：
 * 1. 使用双指针的方法
 * 2. 指针a从headA开始遍历，指针b从headB开始遍历
 * 3. 当a到达末尾时，切换到headB；当b到达末尾时，切换到headA
 * 4. 这样，当两个指针相遇时，就是相交的起始节点
 * 5. 如果两个链表不相交，两个指针最终都会到达null，此时返回null
 * 
 * 时间复杂度：O(m + n)，其中 m 和 n 是两个链表的长度。每个指针最多遍历两个链表一次。
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    
    let a = headA;
    let b = headB;
    
    // 当a和b不相等时继续遍历
    while (a !== b) {
        // 当a到达末尾时，转向headB
        a = a ? a.next : headB;
        // 当b到达末尾时，转向headA
        b = b ? b.next : headA;
    }
    
    return a;
};

// 测试用例
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 辅助函数：创建链表
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// 测试
const common = createLinkedList([8, 4, 5]);
const headA = createLinkedList([4, 1]);
const headB = createLinkedList([5, 6, 1]);

// 连接到公共部分
let currentA = headA;
while (currentA.next) {
    currentA = currentA.next;
}
currentA.next = common;

let currentB = headB;
while (currentB.next) {
    currentB = currentB.next;
}
currentB.next = common;

console.log(getIntersectionNode(headA, headB).val); // 输出: 8