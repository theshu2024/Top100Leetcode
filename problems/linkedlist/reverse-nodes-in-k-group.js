/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    // 计算链表长度
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }
    
    // 创建虚拟头节点
    const dummy = new ListNode(0, head);
    let prevGroup = dummy;
    
    while (length >= k) {
        const start = prevGroup.next;
        let prev = null;
        current = start;
        
        // 反转k个节点
        for (let i = 0; i < k; i++) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        
        // 连接反转后的部分
        start.next = current;
        prevGroup.next = prev;
        prevGroup = start;
        length -= k;
    }
    
    return dummy.next;
};

// 测试用例
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
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

// 辅助函数：打印链表
function printLinkedList(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result);
}

// 测试
const head = createLinkedList([1, 2, 3, 4, 5]);
const result = reverseKGroup(head, 2);
printLinkedList(result); // 输出: [2, 1, 4, 3, 5]