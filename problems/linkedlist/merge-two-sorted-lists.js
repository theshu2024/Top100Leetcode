/**
 * 合并两个有序链表
 * 难度：简单
 * 
 * 题目：将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * 
 * 示例：
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 * 
 * 解题思路：
 * 1. 创建一个虚拟头节点，方便处理边界情况
 * 2. 同时遍历两个链表，比较当前节点的值
 * 3. 将较小的节点添加到新链表中
 * 4. 当其中一个链表遍历完后，将另一个链表的剩余部分添加到新链表中
 * 5. 返回虚拟头节点的下一个节点，即合并后的链表头节点
 * 
 * 时间复杂度：O(n+m)，其中 n 和 m 分别是两个链表的长度。我们只需要遍历两个链表一次。
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // 创建一个虚拟头节点
    const dummy = new ListNode(0);
    let curr = dummy;
    
    // 同时遍历两个链表
    while (list1 !== null && list2 !== null) {
        // 比较当前节点的值
        if (list1.val < list2.val) {
            // 将较小的节点添加到新链表中
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        // 移动 curr 指针
        curr = curr.next;
    }
    
    // 当其中一个链表遍历完后，将另一个链表的剩余部分添加到新链表中
    if (list1 !== null) {
        curr.next = list1;
    } else {
        curr.next = list2;
    }
    
    // 返回虚拟头节点的下一个节点，即合并后的链表头节点
    return dummy.next;
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
console.log(listToArray(mergeTwoLists(createList([1,2,4]), createList([1,3,4])))); // 输出：[1,1,2,3,4,4]
console.log(listToArray(mergeTwoLists(createList([]), createList([])))); // 输出：[]
console.log(listToArray(mergeTwoLists(createList([]), createList([0])))); // 输出：[0]