/**
 * 删除链表的倒数第 N 个结点
 * 难度：中等
 * 
 * 题目：给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 
 * 示例：
 * 输入：head = [1, 2, 3, 4, 5], n = 2
 * 输出：[1, 2, 3, 5]
 * 
 * 输入：head = [1], n = 1
 * 输出：[]
 * 
 * 输入：head = [1, 2], n = 1
 * 输出：[1]
 * 
 * 解题思路：
 * 1. 使用快慢指针的方法
 * 2. 创建虚拟头节点，方便处理头节点的删除
 * 3. 快指针先移动n+1步
 * 4. 快慢指针同时移动，直到快指针到达末尾
 * 5. 此时慢指针指向的是倒数第n+1个节点，删除其下一个节点（倒数第n个节点）
 * 6. 返回虚拟头节点的下一个节点
 * 
 * 时间复杂度：O(n)，其中 n 是链表的长度。每个节点会被访问一次。
 * 空间复杂度：O(1)，只使用了常数级别的额外空间。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // 创建虚拟头节点，处理删除头节点的情况
    const dummy = new ListNode(0, head);
    let fast = dummy;
    let slow = dummy;
    
    // 快指针先移动n+1步
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }
    
    // 快慢指针同时移动，直到快指针到达链表末尾
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    
    // 删除慢指针的下一个节点
    slow.next = slow.next.next;
    
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
const head1 = createLinkedList([1, 2, 3, 4, 5]);
const result1 = removeNthFromEnd(head1, 2);
printLinkedList(result1); // 输出: [1, 2, 3, 5]

const head2 = createLinkedList([1]);
const result2 = removeNthFromEnd(head2, 1);
printLinkedList(result2); // 输出: []

const head3 = createLinkedList([1, 2]);
const result3 = removeNthFromEnd(head3, 1);
printLinkedList(result3); // 输出: [1]