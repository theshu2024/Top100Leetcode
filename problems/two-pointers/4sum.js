/**
 * 四数之和
 * 难度：中等
 * 
 * 题目：给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回所有满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：
 * 0 <= a, b, c, d < n
 * a、b、c 和 d 互不相同
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 * 你可以按 任意顺序 返回答案。
 * 
 * 示例：
 * 输入：nums = [1, 0, -1, 0, -2, 2], target = 0
 * 输出：[[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
 * 
 * 输入：nums = [2, 2, 2, 2, 2], target = 8
 * 输出：[[2, 2, 2, 2]]
 * 
 * 解题思路：
 * 1. 首先对数组进行排序
 * 2. 使用四层循环，其中前两层是固定两个数，后两层使用双指针
 * 3. 对于每一层循环，都要进行去重处理，避免重复的四元组
 * 4. 双指针的移动：
 *    a. 如果四数之和等于目标值，添加到结果中，并移动左右指针，同时去重
 *    b. 如果四数之和小于目标值，右移左指针
 *    c. 如果四数之和大于目标值，左移右指针
 * 
 * 时间复杂度：O(n³)，其中 n 是数组的长度。前两层循环的时间复杂度是 O(n²)，双指针的时间复杂度是 O(n)。
 * 空间复杂度：O(1)，除了存储结果的数组外，只使用了常数级别的额外空间。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}]
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    const result = [];
    const n = nums.length;
    
    for (let i = 0; i < n - 3; i++) {
        // 去重
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        for (let j = i + 1; j < n - 2; j++) {
            // 去重
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            
            let left = j + 1;
            let right = n - 1;
            
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    
                    // 去重
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    
    return result;
};

// 测试用例
console.log(fourSum([1, 0, -1, 0, -2, 2], 0)); // 输出: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
console.log(fourSum([2, 2, 2, 2, 2], 8)); // 输出: [[2, 2, 2, 2]]