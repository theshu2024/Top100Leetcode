/**
 * 移除元素
 * 难度：简单
 * 
 * 题目：给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 * 
 * 示例：
 * 输入：nums = [3, 2, 2, 3], val = 3
 * 输出：2, nums = [2, 2]
 * 解释：函数应该返回新的长度 2，并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2, 2, 3, 3] 或 nums = [2, 2, 0, 0]，也会被视作正确答案。
 * 
 * 输入：nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2
 * 输出：5, nums = [0, 1, 3, 0, 4]
 * 解释：函数应该返回新的长度 5，并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
 * 
 * 解题思路：
 * 1. 使用双指针的方法
 * 2. 左指针 k 表示当前已经处理好的元素的位置
 * 3. 右指针 i 遍历整个数组
 * 4. 当 nums[i] 不等于 val 时，将 nums[i] 赋值给 nums[k]，并将 k 右移
 * 5. 当 nums[i] 等于 val 时，跳过该元素
 * 6. 遍历结束后，k 就是新数组的长度
 * 
 * 时间复杂度：O(n)，其中 n 是数组的长度。每个元素会被访问一次。
 * 空间复杂度：O(1)，只使用了常数级别的额外空间。
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

// 测试用例
const nums1 = [3, 2, 2, 3];
const val1 = 3;
const k1 = removeElement(nums1, val1);
console.log(k1, nums1.slice(0, k1)); // 输出: 2 [2, 2]

const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
const val2 = 2;
const k2 = removeElement(nums2, val2);
console.log(k2, nums2.slice(0, k2)); // 输出: 5 [0, 1, 3, 0, 4]