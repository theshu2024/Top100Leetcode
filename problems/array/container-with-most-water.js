/**
 * 盛最多水的容器
 * 题目：给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 说明：你不能倾斜容器。
 * 
 * 示例：
 * 输入：[1,8,6,2,5,4,8,3,7]
 * 输出：49
 * 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 * 
 * 解题思路：
 * 1. 使用双指针法，左指针指向数组的起始位置，右指针指向数组的结束位置
 * 2. 计算当前左右指针所构成的容器的面积，面积 = 两个指针之间的距离 * 两个指针所指向的高度的较小值
 * 3. 比较当前面积与最大面积，如果当前面积大于最大面积，更新最大面积
 * 4. 移动指针：如果左指针的高度小于右指针的高度，左指针右移；否则，右指针左移
 * 5. 重复步骤 2-4，直到左指针大于等于右指针
 * 
 * 时间复杂度：O(n)，其中 n 是数组的长度。我们只需要遍历数组一次。
 * 空间复杂度：O(1)，只使用了常数级别的额外空间。
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0; // 最大面积
    let left = 0; // 左指针
    let right = height.length - 1; // 右指针
    
    while (left < right) {
        // 计算当前容器的面积
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);
        const area = width * minHeight;
        
        // 更新最大面积
        if (area > max) {
            max = area;
        }
        
        // 移动指针
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return max;
};

// 测试用例
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 输出：49
console.log(maxArea([1,1])); // 输出：1
console.log(maxArea([4,3,2,1,4])); // 输出：16
console.log(maxArea([1,2,1])); // 输出：2