// Function to find the node with the lowest cost among unprocessed nodes
function findLowestCostNode(costs) {
    let lowestCost = Infinity; // Initialize the lowest cost as positive infinity
    let lowestCostNode = null; // Initialize the lowest cost node as null
    for (let node in costs) { // Loop through each node in the costs object
        if (costs.hasOwnProperty(node)) { // Check if the node is a property of the costs object
            let cost = costs[node]; // Get the cost associated with the current node
            // Check if the cost is lower than the current lowest cost and the node is not processed yet
            if (cost < lowestCost && !processed.includes(node)) {
                lowestCost = cost; // Update the lowest cost
                lowestCostNode = node; // Update the lowest cost node
            }
        }
    }
    return lowestCostNode; // Return the node with the lowest cost
}

let node = findLowestCostNode(costs); // Find the initial node with the lowest cost
while (node !== null) { // Continue until there are no more nodes with lower costs
    let cost = costs[node]; // Get the cost of the current node
    let neighbors = graph[node]; // Get the neighbors of the current node
    for (let n in neighbors) { // Loop through each neighbor of the current node
        if (neighbors.hasOwnProperty(n)) { // Check if the neighbor is a property of the neighbors object
            let newCost = cost + neighbors[n]; // Calculate the new cost to reach the neighbor
            if (costs[n] > newCost) { // If the new cost is lower than the existing cost to reach the neighbor
                costs[n] = newCost; // Update the cost to reach the neighbor
                parents[n] = node; // Update the parent node of the neighbor
            }
        }
    }
    processed.push(node); // Mark the current node as processed
    node = findLowestCostNode(costs); // Find the next node with the lowest cost
}