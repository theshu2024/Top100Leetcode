/**
 * K 个一组翻转链表
 * 难度：困难
 * 
 * 题目：给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。
 * k 是一个正整数，它的值小于或等于链表的长度。
 * 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 
 * 示例：
 * 输入：head = [1, 2, 3, 4, 5], k = 2
 * 输出：[2, 1, 4, 3, 5]
 * 
 * 输入：head = [1, 2, 3, 4, 5], k = 3
 * 输出：[3, 2, 1, 4, 5]
 * 
 * 解题思路：
 * 1. 计算链表长度，确定需要翻转的组数
 * 2. 创建虚拟头节点，方便处理头节点的翻转
 * 3. 遍历链表，每k个节点为一组进行翻转
 * 4. 保存当前组的第一个节点和前一组的最后一个节点
 * 5. 翻转当前组的k个节点
 * 6. 连接当前组和下一组，连接前一组和当前组
 * 7. 更新prevGroup为当前组的最后一个节点
 * 8. 处理剩余不足k个的节点
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