/**
 * 回文链表
 * 难度：简单
 * 
 * 题目：给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
 * 
 * 示例：
 * 输入：head = [1, 2, 2, 1]
 * 输出：true
 * 
 * 输入：head = [1, 2]
 * 输出：false
 * 
 * 解题思路：
 * 1. 使用快慢指针找到链表的中点
 * 2. 反转后半部分链表
 * 3. 比较前半部分和后半部分链表的值
 * 4. 如果所有值都相等，返回true，否则返回false
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // 找到链表的中间节点
    function findMiddle(head) {
        let slow = head;
        let fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
    
    // 反转链表
    function reverseList(head) {
        let prev = null;
        let current = head;
        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev;
    }
    
    if (!head || !head.next) return true;
    
    const middle = findMiddle(head);
    let secondHalf = reverseList(middle);
    let firstHalf = head;
    
    while (secondHalf) {
        if (firstHalf.val !== secondHalf.val) {
            return false;
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }
    
    return true;
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

// 测试
const head1 = createLinkedList([1, 2, 2, 1]);
console.log(isPalindrome(head1)); // 输出: true

const head2 = createLinkedList([1, 2]);
console.log(isPalindrome(head2)); // 输出: false