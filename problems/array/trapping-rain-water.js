/**
 * 接雨水
 * 题目：给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 
 * 示例：
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
 * 
 * 解题思路：
 * 1. 使用双指针法，左指针指向数组的起始位置，右指针指向数组的结束位置
 * 2. 初始化左最大值和右最大值为0
 * 3. 比较左指针和右指针所指向的高度，较小的一方移动指针
 * 4. 对于每个位置，计算该位置能接的雨水量，即该位置左边或右边的最大值减去当前位置的高度
 * 5. 重复步骤 3-4，直到左指针大于等于右指针
 * 
 * 时间复杂度：O(n)，其中 n 是数组的长度。我们只需要遍历数组一次。
 * 空间复杂度：O(1)，只使用了常数级别的额外空间。
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0; // 左指针
    let right = height.length - 1; // 右指针
    let leftMax = 0; // 左最大值
    let rightMax = 0; // 右最大值
    let water = 0; // 接的雨水总量
    
    while (left < right) {
        // 比较左指针和右指针所指向的高度
        if (height[left] < height[right]) {
            // 如果左指针的高度小于右指针的高度，移动左指针
            if (height[left] >= leftMax) {
                // 如果当前左指针的高度大于等于左最大值，更新左最大值
                leftMax = height[left];
            } else {
                // 否则，计算该位置能接的雨水量
                water += leftMax - height[left];
            }
            left++;
        } else {
            // 如果右指针的高度小于等于左指针的高度，移动右指针
            if (height[right] >= rightMax) {
                // 如果当前右指针的高度大于等于右最大值，更新右最大值
                rightMax = height[right];
            } else {
                // 否则，计算该位置能接的雨水量
                water += rightMax - height[right];
            }
            right--;
        }
    }
    
    return water;
};

// 测试用例
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 输出：6
console.log(trap([4,2,0,3,2,5])); // 输出：9
console.log(trap([1,2,3,4,5])); // 输出：0
console.log(trap([5,4,3,2,1])); // 输出：0