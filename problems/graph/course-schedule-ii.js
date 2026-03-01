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