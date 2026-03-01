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