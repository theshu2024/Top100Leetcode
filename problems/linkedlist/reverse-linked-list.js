/**
 * 反转链表
 * 难度：简单
 * 
 * 题目：给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 * 
 * 示例：
 * 输入：head = [1,2,3,4,5]
 * 输出：[5,4,3,2,1]
 * 
 * 解题思路：
 * 1. 使用三个指针：prev（前一个节点）、curr（当前节点）、next（下一个节点）
 * 2. 遍历链表，对于每个节点，先保存下一个节点，然后将当前节点的 next 指向 prev
 * 3. 移动 prev 和 curr 指针，直到 curr 为 null
 * 4. 最后返回 prev，即反转后的链表头节点
 * 
 * 时间复杂度：O(n)，其中 n 是链表的长度。我们只需要遍历链表一次。
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null; // 前一个节点
    let curr = head; // 当前节点
    
    while (curr !== null) {
        // 保存下一个节点
        const next = curr.next;
        // 将当前节点的 next 指向 prev
        curr.next = prev;
        // 移动 prev 指针
        prev = curr;
        // 移动 curr 指针
        curr = next;
    }
    
    // 返回反转后的链表头节点
    return prev;
};

// 测试用例
// 辅助函数：创建链表
function createList(arr) {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let curr = head;
    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }
    return head;
}

// 辅助函数：将链表转换为数组
function listToArray(head) {
    const arr = [];
    let curr = head;
    while (curr !== null) {
        arr.push(curr.val);
        curr = curr.next;
    }
    return arr;
}

// 测试
console.log(listToArray(reverseList(createList([1,2,3,4,5])))); // 输出：[5,4,3,2,1]
console.log(listToArray(reverseList(createList([1,2])))); // 输出：[2,1]
console.log(listToArray(reverseList(createList([])))); // 输出：[]