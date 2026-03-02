/**
 * 课程表 II
 * 难度：中等
 * 
 * 题目：现在你总共有 numCourses 门课需要选，记为 0 到 numCourses - 1。给你一个数组 prerequisites ，其中 prerequisites[i] = [ai, bi] ，表示在选修课程 ai 前 必须 先选修 bi 。
 * 返回你为了学完所有课程所安排的学习顺序。可能会有多个正确的顺序，你只要返回 任意一种 就可以了。如果不可能完成所有课程，返回 一个空数组 。
 * 
 * 示例：
 * 输入：numCourses = 2, prerequisites = [[1, 0]]
 * 输出：[0, 1]
 * 解释：总共有 2 门课程。要学习课程 1，你需要先完成课程 0。因此，正确的课程顺序是 [0, 1] 。
 * 
 * 输入：numCourses = 4, prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]]
 * 输出：[0, 1, 2, 3] 或 [0, 2, 1, 3]
 * 
 * 输入：numCourses = 1, prerequisites = []
 * 输出：[0]
 * 
 * 解题思路：
 * 1. 使用拓扑排序的方法
 * 2. 首先构建邻接表和入度表
 * 3. 将所有入度为0的节点加入队列
 * 4. 当队列不为空时，取出队首节点，将其加入结果
 * 5. 遍历该节点的所有邻接节点，将它们的入度减1
 * 6. 如果邻接节点的入度变为0，将其加入队列
 * 7. 最后，如果结果长度等于课程数，返回结果，否则返回空数组
 * 
 * 时间复杂度：O(n + m)，其中 n 是课程数，m 是先决条件的数量。
 * 空间复杂度：O(n + m)，邻接表和入度表的空间复杂度。
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    // 构建邻接表和入度数组
    const adjacency = new Array(numCourses).fill(0).map(() => []);
    const inDegree = new Array(numCourses).fill(0);
    
    for (const [course, prerequisite] of prerequisites) {
        adjacency[prerequisite].push(course);
        inDegree[course]++;
    }
    
    // 初始化队列，将入度为0的课程加入队列
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }
    
    const result = [];
    
    while (queue.length > 0) {
        const course = queue.shift();
        result.push(course);
        
        for (const neighbor of adjacency[course]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    
    // 检查是否所有课程都被访问
    return result.length === numCourses ? result : [];
};

// 测试用例
console.log(findOrder(2, [[1, 0]])); // 输出: [0, 1]
console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]])); // 输出: [0, 1, 2, 3] 或其他有效拓扑排序
console.log(findOrder(2, [[1, 0], [0, 1]])); // 输出: []