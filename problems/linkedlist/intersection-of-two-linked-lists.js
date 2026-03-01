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