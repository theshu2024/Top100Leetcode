/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const n = gas.length;
    let totalGas = 0;
    let totalCost = 0;
    let currentGas = 0;
    let startStation = 0;
    
    for (let i = 0; i < n; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        currentGas += gas[i] - cost[i];
        
        // 如果当前油量为负，说明从startStation到i的路径不可行
        // 从i+1重新开始计算
        if (currentGas < 0) {
            startStation = i + 1;
            currentGas = 0;
        }
    }
    
    // 如果总油量大于等于总消耗，说明存在解
    return totalGas >= totalCost ? startStation : -1;
};

// 测试用例
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])); // 输出: 3
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3])); // 输出: -1