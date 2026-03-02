/**
 * 三数之和
 * 难度：中等
 * 
 * 题目：给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 示例：
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 
 * 解题思路：
 * 1. 首先对数组进行排序，这样可以方便后续的双指针操作和去重
 * 2. 遍历数组，固定第一个元素，然后使用双指针寻找另外两个元素
 * 3. 对于每个固定的元素，左指针指向当前元素的下一个位置，右指针指向数组的最后一个位置
 * 4. 计算三个元素的和，如果和为0，将这三个元素加入结果集，并移动指针去重
 * 5. 如果和小于0，左指针右移；如果和大于0，右指针左移
 * 6. 注意去重：对于固定的元素，如果与前一个元素相同，跳过
 * 
 * 时间复杂度：O(n^2)，其中 n 是数组的长度。排序的时间复杂度是 O(n log n)，双重循环的时间复杂度是 O(n^2)，总体时间复杂度是 O(n^2)。
 * 空间复杂度：O(1) 或 O(n)，取决于排序算法的实现。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    // 对数组进行排序
    nums.sort((a, b) => a - b);
    
    // 遍历数组，固定第一个元素
    for (let i = 0; i < nums.length - 2; i++) {
        // 去重：如果当前元素与前一个元素相同，跳过
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        
        // 左指针指向当前元素的下一个位置
        let left = i + 1;
        // 右指针指向数组的最后一个位置
        let right = nums.length - 1;
        
        // 双指针寻找另外两个元素
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                // 如果和为0，将这三个元素加入结果集
                result.push([nums[i], nums[left], nums[right]]);
                
                // 去重：移动左指针，直到找到不同的元素
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                // 去重：移动右指针，直到找到不同的元素
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
                
                // 移动指针
                left++;
                right--;
            } else if (sum < 0) {
                // 如果和小于0，左指针右移
                left++;
            } else {
                // 如果和大于0，右指针左移
                right--;
            }
        }
    }
    
    return result;
};

// 测试用例
console.log(threeSum([-1,0,1,2,-1,-4])); // 输出：[[-1,-1,2],[-1,0,1]]
console.log(threeSum([])); // 输出：[]
console.log(threeSum([0])); // 输出：[]