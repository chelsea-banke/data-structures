// Node is defined as
// self.left (the left child of the node)
// self.right (the right child of the node)
// self.data (the value of the node)

function topView(root){
    // Write your code here
    let obj = {}
    let arr = []

    function recc(node, h, r){
        if (r in obj){
            obj[r].push({data: node.data, h: h, r: r})
        }
        else{
            obj[r] = [{data: node.data, h: h, r: r}]
        }
        recc(node.left, h+1, r-1)
        recc(node.right, h+1, r+1)
    }

    recc(root, 0, 0)
    obj = Object.keys(obj).sort((a, b) => a-b).map(key => obj[key])

    for(let nodes of obj){
        let data = nodes[0].data
        let min = nodes[0].h
        for(let node of nodes){
            if(node.h < min){
                data = node.data
                min = node.h
            }
        }
        arr.push(data)
    }
    console.log(arr.join(' '))
}