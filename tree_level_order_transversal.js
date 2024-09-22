// Node is defined as
// self.left (the left child of the node)
// self.right (the right child of the node)
// self.info (the value of the node)

function levelOrder(root){
    // Write your code here
    let arr = []
    if (queue){
        let queue = [root]
        while (queue.length != 0){
            let node = queue.shift()
            arr.push(node.info)
            if (node.left){
                queue.push(node.left)
            }
            if (node.right){
                queue.push(node.right)
            }
        } 
    }
    console.log(arr.join(' '))
}