/**
 * 排序链表
 * 难度：中等
 * 
 * 题目：给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 * 
 * 示例：
 * 输入：head = [4, 2, 1, 3]
 * 输出：[1, 2, 3, 4]
 * 
 * 输入：head = [-1, 5, 3, 4, 0]
 * 输出：[-1, 0, 3, 4, 5]
 * 
 * 解题思路：
 * 1. 使用归并排序的方法来排序链表
 * 2. 首先找到链表的中间节点，将链表分割为两个部分
 * 3. 递归地对左右两个部分进行排序
 * 4. 然后将两个有序链表合并为一个有序链表
 * 
 * 时间复杂度：O(n log n)，其中 n 是链表的长度。归并排序的时间复杂度是 O(n log n)。
 * 空间复杂度：O(log n)，其中 n 是链表的长度。递归栈的深度最多为 log n。
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
 * @return {ListNode}
 */
var sortList = function(head) {
    // 归并排序
    function mergeSort(head) {
        if (!head || !head.next) return head;
        
        // 找到链表的中间节点
        let slow = head;
        let fast = head.next;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        const mid = slow.next;
        slow.next = null;
        
        // 递归排序左右两部分
        const left = mergeSort(head);
        const right = mergeSort(mid);
        
        // 合并两个有序链表
        return merge(left, right);
    }
    
    function merge(l1, l2) {
        const dummy = new ListNode(0);
        let current = dummy;
        
        while (l1 && l2) {
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }
        
        current.next = l1 || l2;
        return dummy.next;
    }
    
    return mergeSort(head);
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
const head = createLinkedList([4, 2, 1, 3]);
const result = sortList(head);
printLinkedList(result); // 输出: [1, 2, 3, 4]