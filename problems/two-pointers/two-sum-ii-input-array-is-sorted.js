/**
 * 两数之和 II - 输入有序数组
 * 难度：中等
 * 
 * 题目：给你一个下标从 1 开始的整数数组 numbers ，该数组已按 非递减顺序排列 ，请你从数组中找出满足相加之和等于目标数 target 的两个数。如果设这两个数分别是 numbers[index1] 和 numbers[index2] ，则 1 <= index1 < index2 <= numbers.length 。
 * 以长度为 2 的整数数组 [index1, index2] 的形式返回这两个整数的下标。
 * 你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。
 * 你所设计的解决方案必须只使用常量级的额外空间。
 * 
 * 示例：
 * 输入：numbers = [2,7,11,15], target = 9
 * 输出：[1,2]
 * 解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
 * 
 * 解题思路：
 * 1. 使用双指针法，左指针指向数组的起始位置，右指针指向数组的结束位置
 * 2. 计算当前左右指针所指向的元素之和
 * 3. 如果和等于目标值，返回两个指针的索引（注意索引从1开始）
 * 4. 如果和小于目标值，左指针右移
 * 5. 如果和大于目标值，右指针左移
 * 6. 重复步骤 2-5，直到找到答案
 * 
 * 时间复杂度：O(n)，其中 n 是数组的长度。我们只需要遍历数组一次。
 * 空间复杂度：O(1)，只使用了常数级别的额外空间。
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0; // 左指针，指向数组的起始位置
    let right = numbers.length - 1; // 右指针，指向数组的结束位置
    
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        
        if (sum === target) {
            // 返回两个指针的索引（注意索引从1开始）
            return [left + 1, right + 1];
        } else if (sum < target) {
            // 如果和小于目标值，左指针右移
            left++;
        } else {
            // 如果和大于目标值，右指针左移
            right--;
        }
    }
    
    // 如果没有找到，返回空数组（根据题目描述，每个输入只对应唯一的答案，所以不会执行到这里）
    return [];
};

// 测试用例
console.log(twoSum([2,7,11,15], 9)); // 输出：[1, 2]
console.log(twoSum([2,3,4], 6)); // 输出：[1, 3]
console.log(twoSum([-1,0], -1)); // 输出：[1, 2]