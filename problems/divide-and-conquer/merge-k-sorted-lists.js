/**
 * 合并K个升序链表
 * 难度：困难
 * 
 * 题目：给你一个链表数组，每个链表都已经按升序排列。
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 * 
 * 示例：
 * 输入：lists = [[1,4,5],[1,3,4],[2,6]]
 * 输出：[1,1,2,3,4,4,5,6]
 * 解释：链表数组如下：
 * [
 *   1->4->5,
 *   1->3->4,
 *   2->6
 * ]
 * 将它们合并到一个有序链表中得到。
 * 1->1->2->3->4->4->5->6
 * 
 * 输入：lists = []
 * 输出：[]
 * 
 * 输入：lists = [[]]
 * 输出：[]
 * 
 * 解题思路：
 * 1. 使用分治的方法
 * 2. 将问题分解为合并两个链表的子问题
 * 3. 递归地将链表数组分成两半，分别合并，然后将结果合并
 * 4. 合并两个链表的方法是使用虚拟头节点，比较两个链表的节点值，将较小的节点添加到结果链表中
 * 
 * 时间复杂度：O(n log k)，其中 n 是所有链表的节点总数，k 是链表的数量。分治的时间复杂度是 O(log k)，每次合并的时间复杂度是 O(n)。
 * 空间复杂度：O(log k)，其中 k 是链表的数量。递归栈的深度最多为 log k。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0];
    
    // 分治合并
    function mergeTwoLists(l1, l2) {
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
    
    function merge(lists, start, end) {
        if (start === end) return lists[start];
        const mid = Math.floor((start + end) / 2);
        const left = merge(lists, start, mid);
        const right = merge(lists, mid + 1, end);
        return mergeTwoLists(left, right);
    }
    
    return merge(lists, 0, lists.length - 1);
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
const lists = [
    createLinkedList([1, 4, 5]),
    createLinkedList([1, 3, 4]),
    createLinkedList([2, 6])
];
const result = mergeKLists(lists);
printLinkedList(result); // 输出: [1, 1, 2, 3, 4, 4, 5, 6]