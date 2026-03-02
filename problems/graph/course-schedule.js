/**
 * 课程表
 * 难度：中等
 * 
 * 题目：你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1。
 * 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程 bi 。
 * 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
 * 请你判断是否可能完成所有课程的学习？
 * 
 * 示例：
 * 输入：numCourses = 2, prerequisites = [[1,0]]
 * 输出：true
 * 解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
 * 
 * 输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
 * 输出：false
 * 解释：总共有 2 门课程。学习课程 1 之前，你需要先完成课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。
 * 
 * 解题思路：
 * 1. 使用拓扑排序来判断是否存在环
 * 2. 构建邻接表和入度数组
 * 3. 使用队列来存储入度为 0 的节点
 * 4. 当队列不为空时，取出节点，减少其邻接节点的入度
 * 5. 如果邻接节点的入度变为 0，加入队列
 * 6. 最后检查是否所有节点都被访问过
 * 
 * 时间复杂度：O(V + E)，其中 V 是课程数，E 是先修课程对数。
 * 空间复杂度：O(V + E)，需要存储邻接表和入度数组。
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // 构建邻接表
    const adjacency = new Array(numCourses).fill(0).map(() => []);
    // 构建入度数组
    const inDegree = new Array(numCourses).fill(0);
    
    // 填充邻接表和入度数组
    for (const [course, prerequisite] of prerequisites) {
        adjacency[prerequisite].push(course);
        inDegree[course]++;
    }
    
    // 使用队列来存储入度为 0 的节点
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }
    
    // 记录已访问的节点数
    let visited = 0;
    
    // 拓扑排序
    while (queue.length > 0) {
        const course = queue.shift();
        visited++;
        
        // 遍历邻接节点
        for (const neighbor of adjacency[course]) {
            // 减少邻接节点的入度
            inDegree[neighbor]--;
            // 如果邻接节点的入度变为 0，加入队列
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    
    // 检查是否所有节点都被访问过
    return visited === numCourses;
};

// 测试用例
console.log(canFinish(2, [[1,0]])); // 输出：true
console.log(canFinish(2, [[1,0],[0,1]])); // 输出：false
console.log(canFinish(3, [[1,0],[2,1]])); // 输出：true
console.log(canFinish(3, [[1,0],[0,1],[0,2]])); // 输出：false